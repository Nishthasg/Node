import https from 'https';
import chalk from 'chalk';
import readline from 'readline';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const apiKey = '6bb8f3409872d4633ebd96ba';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;


const convertedCurrency = (amount, rate) =>{
 return (amount*rate).toFixed(2);
}

https.get(url, (response)=>{
    let data = "";
    response.on('data', (chunk)=>{
        data += chunk;
    });
    response.on('end', ()=>{
        const rates = JSON.parse(data).conversion_rates;
        rl.question('Enter the amount in USD:', (amount) =>{
            rl.question('Enter the target currency (eg., INR, EUR, NPR): ',(currency)=>{
            const  rate = rates[currency.toUpperCase()];
            if(rate){
                console.log(`${amount} USD is approximately ${convertedCurrency(amount,rate)}${currency}`);
            }
            else{
                console.log(`Invalid Currency Code`);
            }
            })
        })

    })
})