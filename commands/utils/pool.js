const { MessageEmbed } = require('discord.js');
const adc = '<@&975903062751318076>'
const top = '<@&975903176874135573>'
const jgl = '<@&971349302104444968>'
const mid = '<@&971349165500162109>'
const supp = '<@&975902892890406952>'

module.exports = {
    name: 'pool',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'pool',
    examples: ['pool'],
    description: "Envoie l'embed des champion pool pour tout les joueurs",  
    async run(client, message, args) {
        const TopEmbed = new MessageEmbed()
            .setTitle('Les champions pool pour toute l\'équipe')
            .setColor('#3251fa')
            .addField(`Crotil`, `➜ ${top}`, false)
            .setImage('https://cdn.discordapp.com/attachments/979463238611779625/983381979649175692/unknown.png')  

        const JglEmbed = new MessageEmbed()
            .setColor('#3251fa')
            .addField(`Nizzou`, `➜ ${jgl}`, false)
            .setImage('https://i.imgur.com/K2sYe1x.jpg')  
        
        const MidEmbed = new MessageEmbed()
            .setColor('#3251fa')
            .addField(`Sey`, `➜ ${mid}`, false )
            .setImage('https://i.imgur.com/NLHh7v4.jpg')  

        const AdcEmbed = new MessageEmbed()
            .setColor('#3251fa')
            .addField(`Holangi`, `➜ ${adc}`, false)
            .setImage('https://i.imgur.com/DeYFaf6.jpg')  
        
        const SuppEmbed = new MessageEmbed()
            .setColor('#3251fa')
            .addField(`A compléter`, `➜ ${supp}`, false)  
            .setFooter({ text: `${client.user.username}`, iconURL: `https://cdn.discordapp.com/attachments/975900929717051412/983193188212830278/2ecc83eb382593387ca4a3f498bc246b.jpg` })
            .setTimestamp()

        message.channel.send({ embeds: [TopEmbed, JglEmbed, MidEmbed, AdcEmbed, SuppEmbed] });
    },
    
    async runInteraction(client, interaction) {      
        const TopEmbed = new MessageEmbed()
            .setTitle('Les champions pool pour toute l\'équipe')
            .setColor('#3251fa')
            .addField(`Crotil`, `➜ ${top}`, false)
            .setImage('https://cdn.discordapp.com/attachments/979463238611779625/983381979649175692/unknown.png')  

        const JglEmbed = new MessageEmbed()
            .setColor('#3251fa')
            .addField(`Nizzou`, `➜ ${jgl}`, false)
            .setImage('https://i.imgur.com/K2sYe1x.jpg')  
        
        const MidEmbed = new MessageEmbed()
            .setColor('#3251fa')
            .addField(`Sey`, `➜ ${mid}`, false )
            .setImage('https://i.imgur.com/NLHh7v4.jpg')  

        const AdcEmbed = new MessageEmbed()
            .setColor('#3251fa')
            .addField(`Holangi`, `➜ ${adc}`, false)
            .setImage('https://i.imgur.com/DeYFaf6.jpg')  
        
        const SuppEmbed = new MessageEmbed()
            .setColor('#3251fa')
            .addField(`A compléter`, `➜ ${supp}`, false)  
            .setFooter({ text: `${client.user.username}`, iconURL: `https://cdn.discordapp.com/attachments/975900929717051412/983193188212830278/2ecc83eb382593387ca4a3f498bc246b.jpg` })
            .setTimestamp()

        interaction.reply({ embeds: [TopEmbed, JglEmbed, MidEmbed, AdcEmbed, SuppEmbed] });
    }
};