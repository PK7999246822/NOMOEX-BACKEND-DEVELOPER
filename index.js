const express = require("express")
const axios = require("axios")
const app = express()
const io = require('socket.io')


    async function cypto (){
        let arr = ["BTCUSDT","ETHUSDT","ENJUSDT","GRTUSDT"]
        for (let i=0;i<arr.length;i++){
            // console.log(arr[i])
        const data = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbols=["${arr[i]}"]`)
    console.log(data.data[0])
    
    }
    }


setInterval(cypto, 5000);

app.listen(process.env.PORT || 3000,function(){
    console.log("express is on " +(process.env.PORT || 3000))
} )