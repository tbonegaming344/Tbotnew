const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require('discord.js');

module.exports = {
    name: 'bugreport',
    aliases: ['bug'],
	category: `Miscellaneous`,
    async run(client, message, args) {
        const embed = new EmbedBuilder()
            .setTitle('Bug Report')
            .setColor('Random')
            .setDescription('Click the button below to report a bug.\nPlease be descriptive with the bug report!');

        const button = new ButtonBuilder()
            .setLabel('🐞 Bug Report')
            .setCustomId('bug-report')
            .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder({
            components: [button],
        });

        await message.reply({
            embeds: [embed],
            components: [row],
        });
    }
}