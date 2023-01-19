
const request = require ('request')
const fs = require('fs');

let inputWebsite = process.argv[2]
let pathOutput = process.argv[3]


request(inputWebsite, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if(body) {
  outputBody(body)
  }
});

// do something with body once request is completed.

const outputBody = (body) => {
  console.log(body)
  fs.writeFile(pathOutput, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to .index/html`)
  });
}












