module.exports  = {
    name: 'adc-button',
    async runInteraction(client, interaction) {
        if (!interaction.member.roles.cache.has('975903062751318076')) {
            await interaction.member.roles.add('975903062751318076');
            await interaction.reply({ content: `Tu as maintenant le rôle ${'<@&975903062751318076>'} !\nPour le retirer, reclique sur le bouton.`, ephemeral: true }); 
        } else {
            await interaction.member.roles.remove('975903062751318076');
            await interaction.reply({ content: `Le rôle ${'<@&975903062751318076>'} t'a bien été retiré !`, ephemeral: true })
        }   
    } 
};
