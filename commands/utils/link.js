const { MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setURL('https://discord.com/api/oauth2/authorize?client_id=975909880772837417&permissions=8&scope=bot')
            .setLabel('Add to Server')
            .setStyle('PRIMARY')    
    )

module.exports  = {
    name: 'invite-button',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'invite-button',
    examples: ['invite-button'],
    description: "invite-button",
    async run(client, message, args) {
        await client.user.setPresence({components: [buttons] });
    },
   
    async runInteraction(client, interaction) {
        await client.user.setPresence({components: [buttons] });
    },
};
