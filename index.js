const codapi = require('call-of-duty-api')();
const fs = require('fs');
const tmi = require('tmi.js'),
    { channel, username, password, kd, matchKD, kills, teamKills} = require('./settings.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};
// try {
//    
// }
// catch{
//    console.log("error");
// }
const  client = new tmi.Client(options);
client.connect().catch(console.error);

//  data =  codapi.MWwz("cloakzy#1567", "battle");


//     codapi.MWwz("Mynos#11659", "battle")
//       .then((data) => {
//           console.log(data);
//         let datas = JSON.stringify(data,null,2);
//         // console.log(data);
//         fs.writeFileSync('datas.json',datas); 
//         // see output
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

client.on('connected', () => {
    client.say(channel, ``);
});


 client.on('message', (channel, user, message, self) => {
    if(self) return;
  
    if(message == `kd`) {
        rawdata = fs.readFileSync('datas.json');
        obj = JSON.parse(rawdata);
        kdd = obj.lifetime.mode.br.properties.kdRatio
        client.say(channel, `${kdd.toFixed(2)}`);
    }
    if(message == `LastMatch`) {
        client.say(channel, `Overall Match KD: ${matchKD}, Cloaks Kills ${kills}, Team Kils: ${teamKills}`);
    }
    message = message.split(" ")[0];

   
  

    
    
});