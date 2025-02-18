const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require('discord.js');
module.exports = {
	name: `fuzzy`,
	aliases: [`search`, `cardsearch`, `fuzzysearch`],
	category: `Miscellaneous`,
	run: async(client, message, args)=> {
    const button = new ButtonBuilder()
    .setLabel('🔍 Card Search')
    .setCustomId('card-search')
    .setStyle(ButtonStyle.Secondary);

const row = new ActionRowBuilder({
    components: [button],
});
   let search = new EmbedBuilder()
    .setTitle("Card Search")
    .setDescription("Please use the button below to search for cards")
    .setColor("Random")
    await message.reply({embeds: [search], components: [row]})
}
}