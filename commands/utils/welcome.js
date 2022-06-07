const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('accept-button')
            .setLabel('Accepter')
            .setStyle('SUCCESS'),

        new MessageButton()
            .setCustomId('about-button')
            .setLabel('A propos du bot')
            .setStyle('SECONDARY')
            .setEmoji('<:info:983185956821676032>'),
    )

const welcomeEmbed = new MessageEmbed()
        .setTitle('📃 Règlement')
        .setColor('#8184e4')
        .setDescription('Afin de rester dans une bonne ambiance, voici les quelques règles à respecter au sein du serveur.')
        .addFields(
            { name: `__1. Respect d'autrui__`, value: '● Merci de rester respectueux de manière générale avec toutes les personnes du serveur.\n● Le spam de mentions et de caractères est inutile, merci de ne pas en abuser.\n● Tout les propos discriminatoires et racistes seront sanctionnés.', inline: false},
            { name: `__2. Vocaux & Salons__`, value: '● Merci de respecter le sujet de chaque salon.\n● Les règles s\'appliquent aux salons textuels et aux vocaux.\n● Essayez d\'utiliser un français correct !', inline: false},
        )
        .setFooter({ text: 'Bienvenue sur le serveur' })
        .setTimestamp()

module.exports  = {
    name: 'welcome',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'welcome',
    examples: ['welcome'],
    description: "La commande welcome permet d'envoyer l'embed des règles",
    async run(client, message, args) {
        await message.channel.send({ embeds: [welcomeEmbed], components: [buttons] });
    },
   
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [welcomeEmbed], components: [buttons] });
    },
};
