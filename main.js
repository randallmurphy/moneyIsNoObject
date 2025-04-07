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

const getPlayListLength = (playlist) =>{
    
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