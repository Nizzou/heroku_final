const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'planning',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'planning',
    examples: ['planning'],
    description: "Envoie le planning de training",  
    async run(client, message, args) {
        const embed = new MessageEmbed()
            .setColor('#3251fa')
            .setTitle('📆 Planning')
            .addField('Les horaires d\'entrainement', `➜ Lundi à 21h\n➜ Mercredi à 21h\n➜ Jeudi à 21h`)

        message.channel.send({ embeds: [embed] });
    },
    
    async runInteraction(client, interaction) {
        const embed =  new MessageEmbed()
            .setColor('#3251fa')
            .setTitle('📆 Planning')
            .addField('Les horaires d\'entrainement', `➜ Lundi à 21h\n➜ Mercredi à 21h\n➜ Jeudi à 21h`, false)    

        interaction.reply({ embeds: [embed] });
    }
};