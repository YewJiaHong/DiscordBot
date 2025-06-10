const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
            .setName('user')
            .setDescription('Provide information about the user'),
        async execute(interaction){
            interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`)
        }
}