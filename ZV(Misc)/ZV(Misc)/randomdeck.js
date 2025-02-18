const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require('discord.js');
module.exports = {
  name: `random`,
  aliases: [`randomdeck`, `ramdomizeddeck`, `deckrandom`, `rand`, `randomhero`],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    try{
    const button = new ButtonBuilder()
    .setLabel('Random')
    .setCustomId('random-deck')
    .setStyle(ButtonStyle.Secondary);
    const row = new ActionRowBuilder({
      components: [button],
  });
      let search = new EmbedBuilder()
      .setTitle("Randomized Deck")
      .setDescription(`Please use the button below to get a random deck
Put NA for no heroes just completely random 
Put plants for a random plant deck 
Put zombies for a random zombie deck or just put the hero name for a random deck for that hero`)
      .setColor("Random")
      await message.channel.send({embeds: [search], components: [row]})
    }catch(err){
    return message.channel.send({content: "Please use this command in a server"})
  }

  },
};
