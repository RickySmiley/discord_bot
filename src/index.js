require('dotenv').config();
const Discord = require( 'discord.js');
const setUpCommands = require('/firstTimeSetUp');


async function run (){

	try {
		await setUpCommands();
	} catch (e) {
		console.error(e, "Caught an error setting up commands");
	}

}

run().then(() => {
	console.log("Finished setting up commands");
}).catch(error => {
	console.error(error);
})

console.log("set up commands");


console.log("imported Discord and Intents", Discord);

// const client = new Discord.Client({ intents: [ Discord.Guil
// 	]});
//
// const intents = [ Intents.Guild, Intents.GuildChannel
// ];

const client = new Discord.Client({ intents: [
	Discord.IntentsBitField.Guilds
	]})
client.on('ready', () => {

	console.log(`Logged in as ${client.user.tag}!`);
});



client.login(process.env.CLIENT_TOKEN).then(r => console.log(r)).catch(onerror => {
	console.error(onerror, "--");
});
