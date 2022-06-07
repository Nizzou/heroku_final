const Logger = require('../../utils/Logger');

module.exports  = {
    name: 'ready',
    once: true,
    async execute(client) {

        Logger.client("- Connecté");
        
        client.user.setPresence({ activities: [{ name: '!help', type: 'WATCHING'}], status: 'dnd'});


        // const devGuild = await client.guilds.cache.get('971132553530601543');
        // devGuild.commands.set(client.commands.map(cmd => cmd));
        client.application.commands.set(client.commands.map(cmd => cmd));
    },
};
