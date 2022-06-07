const prefix = '!';
const ownerId = '597152121581731861';

module.exports = {
    name: "messageCreate",
    once: false,
    execute(client, message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        if (!cmd) return message.reply('Cette commande n\'existe pas!');

        if (cmd.ownerOnly) {
            if (message.author.id != ownerId) 
            return message.reply('La seule personne pouvant taper cette commande est l\'owner du bot!');
        };

        if (!message.member.permissions.has([cmd.permissions])) 
            return message.reply(`Vous n'avez pas la/les permission(s).\nSi vous avez besoin d'aide, mentionnez un ${modo} !`);

        if (cmd) cmd.run(client, message, args);
    },
};
