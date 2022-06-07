const { MessageEmbed } = require('discord.js');
const member = '<@&975898570165190717>';

module.exports = {
    name: 'accept-button',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('975898570165190717');
        const embed = new MessageEmbed()
            .setColor('#8184e4')
            .addField(`Bienvenue sur le serveur !`, `${interaction.user.username}, tu as bien recu le rôle ${member}`, false)
            .setFooter({ text: `${client.user.username}`, iconURL: `https://cdn.discordapp.com/attachments/975900929717051412/983193188212830278/2ecc83eb382593387ca4a3f498bc246b.jpg` })
            .setTimestamp()

        interaction.reply({ embeds: [embed], ephemeral: true });
    }
};
