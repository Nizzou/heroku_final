const { MessageEmbed, Application, ClientApplication } = require('discord.js');
const owner = '<@597152121581731861>';

module.exports = {
    name: 'about-button',
    async runInteraction(client, interaction) {
        const embed = new MessageEmbed()
            .setColor('#8184e4')
            .addField(`Description`,`${client.user.username} est le bot Discord de la team ${interaction.guild.name}.\n Pour consulter la liste des commandes, tapez \`/help\`\n\nLe bot a été crée le <t:${Math.floor(client.user.createdAt / 1000 )}:f>\n\n**Owner ➜** ${owner}`)
            .setFooter({ text: `${client.user.username}`, iconURL: `https://cdn.discordapp.com/attachments/975900929717051412/983193188212830278/2ecc83eb382593387ca4a3f498bc246b.jpg` })
            .setTimestamp()

        interaction.reply({ embeds: [embed], ephemeral: true });
    }
};
