const https = require('https');
// import chalk from 'chalk';


const getJoke = () =>{
  const url = 'https://official-joke-api.appspot.com/random_joke';

  https.get(url, (response)=>{
    let data = "";
    response.on('data', (chunk)=>{
      data += chunk
    });
    response.on('end', () =>{
        const joke = JSON.parse(data);
        console.log(joke);
        console.log(joke.setup);
        console.log(joke.punchline);
    })
  })
}

getJoke();

//response is an object 