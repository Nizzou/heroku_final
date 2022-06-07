module.exports  = {
    name: 'midlane-button',
    async runInteraction(client, interaction) {
        if (!interaction.member.roles.cache.has('971349165500162109')) {
            await interaction.member.roles.add('971349165500162109');
            await interaction.reply({ content: `Tu as maintenant le rôle ${'<@&971349165500162109>'} !\nPour le retirer, reclique sur le bouton.`, ephemeral: true }); 
        } else {
            await interaction.member.roles.remove('971349165500162109');
            await interaction.reply({ content: `Le rôle ${'<@&971349165500162109>'} t'a bien été retiré !`, ephemeral: true })
        }   
    } 
};

