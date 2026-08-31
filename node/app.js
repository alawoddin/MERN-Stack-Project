const express  = require("express");

const app = express();

app.use((req , res , next) => {
  // console.log("what is show ");
  // next();
  let body  = '';
  req.on('end' , () => {
    const username = body.split('=')[1];
    if(username) {
      req.body = {name: username};
    }
    next();
  });
  req.on('data' , chunk => {
    body += chunk;
  });
});



app.use((req , res , next) => {
  if(req.body) {
    return res.send('<h1>User : ' + req.body.name +  '</h1>');
  }
  res.send(`<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></input></form>`)
});


app.listen(5000)


// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('INCOMING REQUEST');
//   console.log(req.method, req.url);

//   if (req.method === 'POST') {
//     let body = '';
//     req.on('end', () => {
//       const userName = body.split('=')[1];
//       res.end('<h1>' + userName + '</h1>');
//     });

//     req.on('data', (chunk) => {
//       body += chunk;
//     });
//   } else {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`
//         <form method="POST">
//             <input type="text" name="username">
//             <button type="submit">Create User</button>
//         </form>
//     `);
//   }
// });

// server.listen(5000);


// const http = require('http');

// const server = http.createServer((req , res) => {
//     console.log("Income data");
//     console.log(req.method , req.url);

//     // res.end("Sucessfully ! ")
//     res.end("<h1>hello world</h1>")
// });

// server.listen(5000);

// const fs = require('fs');

// const userName = "ali";

// fs.writeFile('user-file.txt' , "name :" +  userName , (err) =>  {

//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log("Read the file");

// })

// console.log(userName)

// const fs = require("fs");

// const userName = {
//     name: "ali",
//     age: 25,
//     email: "ali@gmail.com"
// };

// fs.writeFile(
//     "user-file.txt",
//     JSON.stringify(userName, null, 2),
//     (err) => {

//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log("User stored successfully");
//     }
// );

// console.log(userName);