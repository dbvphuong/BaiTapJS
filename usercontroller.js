const express = require('express');
const jwt = require('jsonwebtoken');
// const autorefresh = require('jwt-autorefresh');
var Ajv = require('ajv');
const DAOusers = require('./users.dao');

// dang ki
const signUp = (req, res) => {
    const { email, username, password } = req.body.user;
    const token = jwt.sign({
        username, email, password
    }, 'phuong_key');
    const data = {
        email: email,
        username: username,
        bio: 'Nothing',
        password: password,
        image: null,
        following: []
    }
    const userSeach = { username: username };
    const emailSeach = { email: email };
    DAOusers.seach(userSeach).then(users => {
        DAOusers.seach(emailSeach).then(emails => {
            if (users.length == 0 && emails.length == 0) {
                DAOusers.connectDB(data);
                res.status(200).json({
                    user: {
                        email: email,
                        username: username,
                        token,
                        bio: 'Nothing',
                        image: null
                    }
                })
            }
            else {
                res.status(422).json(validationError());
            }
        })
    })
}

// dang nhap
const login = (req, res) => {
    const userLogin = {
        email: req.body.user.email,
        password: req.body.user.password
    }
    var ajv = new Ajv();
    var schema = {
        email: {
            type: String,
            format: 'email',
            maxLength: 100
        },
        password: {
            type: String,
            minLength: 2
        }
    };
    var validate = ajv.compile(schema);
    var valid = validate();
    if (!valid) console.log(validate.errors);
    DAOusers.logInDAO(userLogin).then(currentUser => {
        console.log('dang nhap bang tk:',currentUser)
        const username = currentUser.username;
        const email = currentUser.email;
        const password = currentUser.password;
        const token = jwt.sign({
            username, email, password
        }, 'phuong_key') ;
        res.status(200).json({
            user: {
                email: req.body.user.email,
                token,
                username,
                bio: currentUser.bio,
                image: currentUser.image
            }
        })
    })
}
// function lamGonObject(obj) {
//     return {
//         "username": obj.username
//     };
// }

// lay thong tin nguoi dung hien tai
const getCurrentUser = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];// lay ma jwt
    const decoded = jwt.verify(token, 'phuong_key');
    console.log('decoded', decoded);
    delete decoded.iat;
    delete decoded.exp;
    // decoded = lamGonObject(decoded);
    DAOusers.current(decoded).then(userCurrent => {
        res.status(200).json({
            user: {
                email: userCurrent.email,
                token,
                username: decoded.username,
                bio: userCurrent.bio,
                image: userCurrent.image
            }
        })
    }).catch(err => {
        console.log('loi roi', err);
    })
}

// sua thong tin ng dung
const updateProfile = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];// lay ma token
    const decoded = jwt.verify(token, 'phuong_key');// giai ma token ra username
    delete decoded.iat;
    const userUpdate = {    // object constructing
        image: req.body.user.image,
        bio: req.body.user.bio,
        email: req.body.user.email,
        password: req.body.user.password
    };

    if (req.body.user.password != undefined) {
        DAOusers.updateDAO(decoded, userUpdate);
    }
    else {
        delete userUpdate.password;
        DAOusers.updateDAO(decoded, userUpdate)
    }

    res.status(200).json({
        user: {
            email: userUpdate.email,
            token,
            username: userUpdate.username,
            bio: userUpdate.bio,
            image: userUpdate.image,
        }
    })
}

module.exports = {
    login,
    signUp,
    getCurrentUser,
    updateProfile
};
