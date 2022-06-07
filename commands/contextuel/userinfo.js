const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'userinfo',
    category: 'contextuel',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'Utiliser le menu contextuel de Discord',
    examples: ['Utiliser le menu contextuel de Discord'],
    type: 'USER',
    async runInteraction(client, interaction) {
        const member = await interaction.guild.members.fetch(interaction.targetId);
       
        const embed = new MessageEmbed()
            .setColor('#8185e4')
            .setImage(member.user.displayAvatarURL())
            .addFields(
                { name: 'Nom', value: `${member.displayName}`, inline: false },
                { name: 'Rôles', value: `${member.roles.cache.map(role => role).join(', ').replace(', @everyone',' ')}`},
                { name: 'Modérateur', value: `${member.kickable ? '❌' : '✅'}`, inline: true },
                { name: 'Bot', value: `${member.user.bot ? '✅' : '❌'}`, inline: true },
                { name: 'A crée  son compte le', value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f>`},
                { name: 'A rejoint le serveur le', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f>`},
          )

        interaction.reply({ embeds: [embed], ephemeral: false });
    }
};
