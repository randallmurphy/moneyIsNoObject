// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
const isAdmin = (user) =>{
    for(let i in user){
        if(i === 'userRole' && user[i] === 'ADMIN'){
            return true;
        }
    }
    return false;
}

const getEmail = (user) =>{
    let firstInitial = user.firstName[0].toLowerCase();
    let firstName = '';
    let lastName = '';
    let email = `${firstInitial}${user.lastName.toLowerCase()}.prsvr@gmail.com`;
    for(let i in user){
        if(i === 'firstName'){
            firstName = user[i];
        }
        if(i === 'lastName'){
            lastName = user[i]
        }
        
    }
    return email;
}

const getPlaylistLength = (playlist) =>{
    let songNum = 0;
    for(let song in playlist){
        //console.log(song);
        if(song === "songs"){
            songNum = playlist[song].length;
        }
    }
    return songNum;
}

const getHardestHomework = (homework) =>{
    if (homework.length === 0) return '';

    let hardest = homework[0].name;
    let lowest = homework[0].averageScore;

    for (let i in homework) {
        if (homework[i].averageScore < lowest) {
            lowest = homework[i].averageScore;
            hardest = homework[i].name;
        }
    }

    return hardest;
}

const createPhonebook = (names, numbers) =>{
    let phoneBook = {};
    for (let i in names) {
        phoneBook[names[i]] = numbers[i];
    }
    return phoneBook;
}




// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};