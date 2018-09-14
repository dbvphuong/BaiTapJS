const editDistance = (str, str1) => {
    let i = 0;
    let j = 0;
    if (str.length == 0){
        return str1.length;
    }
    if (str1.length == 0){
        return str.length;
    }

    if (str[i] == str1[j]){
        return editDistance(str.slice(i+1), str1.slice(j+1));
    }
    else {
        return Math.min(editDistance(str.slice(i+1), str1.slice(j)) + 1, 
        editDistance(str.slice(i), str1.slice(j+1)) + 1, 
        editDistance(str.slice(i+1), str1.slice(j+1)) + 1);
    }
}
console.log(editDistance('Anshuman','Antihuman'));

module.exports = editDistance;
