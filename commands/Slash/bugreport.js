const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
module.exports = {  
    data: new SlashCommandBuilder()
        .setName('bugreport')
        .setDescription('Report a bug in Tbot')
        .addStringOption(option =>
            option.setName('command_name')
                .setDescription('The name of the command where you found the bug')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('bug_description')
                .setDescription('A detailed description of the bug')
                .setRequired(true)),
    async execute(interaction) {
        const commandName = interaction.options.getString('command_name');
        const bugDescription = interaction.options.getString('bug_description');
        const owner = await interaction.client.users.fetch(
          "625172218120372225"
        );
        const embed = new EmbedBuilder()
          .setTitle(`Bug Report on the command: ${commandName}`)
          .setColor("Random")
          .setAuthor({
            name: interaction.user.tag,
            iconURL: interaction.user.avatarURL({
              dynamic: true,
            }),
          })
          .setDescription(bugDescription);


        try{
            await owner.send({
                embeds: [embed],
            });
        } catch (error) {
            console.error('Error sending bug report:', error);
            await interaction.reply({ content: 'There was an error sending your bug report.', ephemeral: true });
            return;
        }

        await interaction.reply({ content: 'Thank you for your bug report! It has been reported to Tbone, who is the owner of Tbot', ephemeral: true });
    }
}