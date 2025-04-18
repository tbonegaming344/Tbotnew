const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require('discord.js');
module.exports = {
  name: `deckfuzzy`,
  aliases: [`decksearch`, `searchdecks`, `fuzzydeck`],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    const button = new ButtonBuilder()
    .setLabel('🔍 Deck Search')
    .setCustomId('deck-search')
    .setStyle(ButtonStyle.Secondary);

const row = new ActionRowBuilder({
    components: [button],
});
   const search = new EmbedBuilder()
    .setTitle("Deck Search")
    .setDescription("Please use the button below to search for a deck")
    .setColor("Random")
    await message.reply({embeds: [search], components: [row]})
  },
};