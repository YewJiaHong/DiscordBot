const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
            .setName('server')
            .setDescription('Provides Information On The Server'),
        async execute(interaction){
            await interaction.reply(`The server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`)
        }
}