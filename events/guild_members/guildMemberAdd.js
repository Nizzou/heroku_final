const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(client, member) {

        const embed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL() })
            .setColor('#57f288')
            .setDescription(`± Nom d'utilisateur: ${member}
            ● Crée le: <t:${parseInt(member.user.createdTimestamp / 1000)}:f>
            ● Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:f>
            `)
            .setTimestamp()
            .setFooter({ text: 'L\'utilisateur a rejoint !'});

        const logChannel = client.channels.cache.get('975896532521996359');
        logChannel.send({ embeds: [embed] });
    },
};
