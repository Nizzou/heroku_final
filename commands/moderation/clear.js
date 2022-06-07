module.exports = {
    name: "clear",
    category: 'moderation',
    permissions: ['MANAGE_MESSAGES'],
    ownerOnly: false,
    usage: 'clear [amount] <@target>',
    examples: ['clear 10', 'clear 10 @Nizzou'],
    description: "Supprimer un nombre de message spécifié",
    async run(client, message, args) {
        const amountToDelete = args[0];
        if (isNaN(amountToDelete)) return message.reply('Merci de préciser un nombre !')
        if (!args[0] || amountToDelete > 100 || amountToDelete < 2) return message.reply('Le nombre doit être compris entre \`2\` et \`100\` !');
        const target = message.mentions.users.find(u => u.id);
        await message.delete();

        const messagesToDelete = await message.channel.messages.fetch();

        if (target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messagesToDelete).filter(msg => {
                if (msg.author.id == target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });

            await message.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
                message.channel.send(`J'ai supprimé ${messages.size} messages de l'utilisateur ${target} !`);
            });
        } else {
            await message.channel.bulkDelete(amountToDelete, true).then(messages => {
                message.channel.send(`J'ai supprimé ${messages.size} messages sur ce salon !`);
            });
        }
    },
    options: [
        {
            name: "message",
            description: "Nombre de messages à supprimer",
            type: "NUMBER",
            required: true
        },
        {
            name: "target",
            description: "Sélectionner l'utilisateur pour la suppression des messages",
            type: "USER",
            required: false
        }
    ],

    async runInteraction(client, interaction) {
        const amountToDelete = interaction.options.getNumber('message');
        if (amountToDelete > 100 || amountToDelete < 2) return interaction.reply('Le nombre doit être compris entre \`2\` et \`100\` !');
        const target = interaction.options.getMember('target');

        const messagesToDelete = await interaction.channel.messages.fetch();

        if (target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messagesToDelete).filter(msg => {
                if (msg.author.id == target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });

            await interaction.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
                interaction.reply(`J'ai supprimé ${messages.size} messages de l'utilisateur ${target} !`);
            });
        } else {
            await interaction.channel.bulkDelete(amountToDelete, true).then(messages => {
                interaction.reply(`J'ai supprimé ${messages.size} messages sur ce salon !`);
            });
        }
    }
};
