const express = require('express');
// const tenmodeluser = require('./users.model')
const Users = require('./users.model');

const seach = data => {
    return Users.find(data).then(users => {
        return users
    })
}

const connectDB = data => {
    const taikhoanmoi = new Users(data);
    return taikhoanmoi.save();
}

const updateDAO = (username, userUpdate) => {
    return Users.findOneAndUpdate(username, userUpdate).then(userUpdate => {
        return userUpdate;
    })
}

const logInDAO = data => {
    return Users.findOne(data).then(currentUser => {
        return currentUser;
    })
}

const current = data => {
    return Users.findOne(data).then(userCurrent => {
        return userCurrent;
    })
}

module.exports = {
    seach,
    connectDB,
    updateDAO,
    current,
    logInDAO
};
