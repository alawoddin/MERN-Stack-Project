const fs = require('fs');

const userName = "ali";

fs.writeFile('user-file.txt' , "name : " +  userName , (err) =>  {

    if(err) {
        console.log(err)
        return
    }
    console.log("Read the file");

})

console.log(userName)