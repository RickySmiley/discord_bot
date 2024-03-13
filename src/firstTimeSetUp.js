const { REST, Routes } = require('discord.js');

const commands = [
	{
		name: 'ping',
		description: 'Replies with Pong!'
	},
];

const rest = new REST({ version: '10'}).setToken(process.env.CLIENT_TOKEN);

async function setUpCommands() {
	try {
		await rest.put(Routes.applicationCommands(), { body: commands });

	} catch (error) {
		console.error(error);
	}
}

export default setUpCommands;