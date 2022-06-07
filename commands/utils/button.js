const { MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('toplane-button')
            .setLabel('TOPLANE')
            .setStyle('SECONDARY')
            .setEmoji('<:toplane:983179406317068340>'),

        new MessageButton()
            .setCustomId('jungle-button')
            .setLabel('JUNGLE')
            .setStyle('SECONDARY')
            .setEmoji('<:jungle:983179404081512448>'),

        new MessageButton()
            .setCustomId('midlane-button')
            .setLabel('MIDLANE')
            .setStyle('SECONDARY')
            .setEmoji('<:midlane:983179405293649960>'),

        new MessageButton()
            .setCustomId('adc-button')
            .setLabel('ADC')
            .setStyle('SECONDARY')
            .setEmoji('<:adc:983179402772906025>'),

        new MessageButton()
            .setCustomId('support-button')
            .setLabel('SUPPORT')
            .setStyle('SECONDARY')
            .setEmoji('<:support:983179407994785832>'),

    )

module.exports  = {
    name: 'button',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'button',
    examples: ['button'],
    description: "button",
    async run(client, message, args) {
        await message.channel.send({ content: 'Clique sur les boutons pour obtenir les rôles !', components: [buttons] });
    },
   
    async runInteraction(client, interaction) {
        await interaction.reply({ content: 'Clique sur les boutons pour obtenir les rôles !', components: [buttons] });
    },
};
