module.exports  = {
    name: 'support-button',
    async runInteraction(client, interaction) {
        if (!interaction.member.roles.cache.has('975902892890406952')) {
            await interaction.member.roles.add('975902892890406952');
            await interaction.reply({ content: `Tu as maintenant le rôle ${'<@&975902892890406952>'} !\nPour le retirer, reclique sur le bouton.`, ephemeral: true }); 
        } else {
            await interaction.member.roles.remove('975902892890406952');
            await interaction.reply({ content: `Le rôle ${'<@&975902892890406952>'} t'a bien été retiré !`, ephemeral: true })
        }   
    } 
};

