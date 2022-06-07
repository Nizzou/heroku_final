const { MessageEmbed } = require('discord.js');

module.exports  = {
    name: 'ping',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'ping',
    examples: ['ping'],
    description: "Commange ping!",
    async run(client, message, args) {
        
        const embed =  new MessageEmbed()
            .setColor('#8184e4')
            .setTitle('🏓 Pong!')
            .setThumbnail(client.user.displayAvatarURL())
            .addField('Latence', `\`${client.ws.ping}ms\``, true)
                
            .setTimestamp()
            .setFooter({ 
                text: message.author.username, 
                iconURL: message.author.displayAvatarURL(),
            });
      
        message.channel.send({ embeds: [embed] });
    },
   
    async runInteraction(client, interaction) {
        const embed =  new MessageEmbed()
            .setColor('#8184e4')
            .setTitle('🏓 Pong!')
            .setThumbnail(client.user.displayAvatarURL())
            .addField('Latence', `\`${client.ws.ping}ms\``, true)
                
            .setTimestamp()
            .setFooter({ 
                text: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL(),
             });
        
        interaction.reply({ embeds: [embed] });
    }
};

    







