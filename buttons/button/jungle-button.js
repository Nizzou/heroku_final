module.exports  = {
    name: 'jungle-button',
    async runInteraction(client, interaction) {
        if (!interaction.member.roles.cache.has('971349302104444968')) {
            await interaction.member.roles.add('971349302104444968');
            await interaction.reply({ content: `Tu as maintenant le rôle ${'<@&971349302104444968>'} !\nPour le retirer, reclique sur le bouton.`, ephemeral: true }); 
        } else {
            await interaction.member.roles.remove('971349302104444968');
            await interaction.reply({ content: `Le rôle ${'<@&971349302104444968>'} t'a bien été retiré !`, ephemeral: true })
        }   
    } 
};
