const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');
const prefix = '!';

const contextDescription = {
    userinfo : 'Renvoie des informations sur l\'utilisateur'
}

module.exports = {
    name: "help",
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'help <command>',
    examples: ['help', 'help ping', 'help emit'],
    description: "Liste des commandes disponibles",
    async run(client, message, args) {
        if (!args.length) {
            const noArgsEmbed = new MessageEmbed()
                .setColor('#64bf8a')
                .addField('Liste des commandes',`Voici la liste de toutes les commandes disponibles.
                \nPour plus d'informations sur une commande, tapez \`${prefix}help <command>\``)
       
            for (const category of commandFolder){
                noArgsEmbed.addField(
                    `● ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                )
            }
            return message.channel.send({ embeds: [noArgsEmbed], ephemeral: false });
        } 
        const cmd = client.commands.get(args[0])
        if (cmd) {
            const ArgsEmbed = new MessageEmbed()
                .setColor('#64bf8a')
                .addField('Help pour la commande',`➜ ${cmd.name}`, true)
                .addFields(
                    { name: `● Utilisation :`, value: `\`${prefix}${cmd.name}\``, inline: false },
                    { name: `● Description :`, value: `\`${cmd.description ? cmd.description: contextDescription[`${cmd.name}`]}\``, inline: false }
                    )
            
            message.channel.send({ embeds: [ArgsEmbed], ephemeral: false});
        
        } else 
            return message.reply('Cette commande n\'existe pas !');

    },
    options: [
        {
            name: "command",
            description: "Taper le nom de votre commande",
            type: "STRING",
            required: false,
        }
    ],

    async runInteraction(client, interaction) {
        const cmdName = interaction.options.getString('command');

        if (!cmdName) {
            const noArgsEmbed = new MessageEmbed()
                .setColor('#64bf8a')
                .addField('Liste des commandes',`Voici la liste de toutes les commandes disponibles.\nPour plus d'informations sur une commande, tapez \`${prefix}help <command>\``)
       
            for (const category of commandFolder){
                noArgsEmbed.addField(
                    `● ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                )
            }
            return interaction.reply({ embeds: [noArgsEmbed], ephemeral: false });
        }
        const cmd = client.commands.get(cmdName)
        if (cmd) {
            const ArgsEmbed = new MessageEmbed()
                .setColor('#64bf8a')
                .addField('Help pour la commande',`➜ ${cmd.name}`, true)
                .addFields(
                    { name: `● Utilisation :`, value: `\`${prefix}${cmd.name}\``, inline: false },
                    { name: `● Description :`, value: `\`${cmd.description ? cmd.description: contextDescription[`${cmd.name}`]}\``, inline: false }
                    )
            
            return interaction.reply({ embeds: [ArgsEmbed], ephemeral: false });
        
        } else 
            return interaction.reply({ content: 'Cette commande n\'existe pas !', ephemeral: false});

    },
};
