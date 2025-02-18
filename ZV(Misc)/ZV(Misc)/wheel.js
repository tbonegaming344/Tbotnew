const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require('discord.js');
  module.exports = {
    name: `wheel`,
    aliases: [`spin`],
    category: `Miscellaneous`,
    run: async (client, message, args) => {
      if(message.guild.id == "285818469960646657"){
        return message.author.send("This command is disabled in this server please use it in another server");
      }
      else{
      const button = new ButtonBuilder()
      .setLabel('Spin the Wheel')
      .setCustomId('wheel-spin')
      .setStyle(ButtonStyle.Secondary)
      .setEmoji('<:200w:1260951571840237628>');
      const row = new ActionRowBuilder({
        components: [button],
    });
        let search = new EmbedBuilder()
        .setTitle("Wheel of Decks")
        .setDescription("Please use the button below to spin the wheel and get cards to build a deck with")
        .setColor("Random")
        await message.reply({embeds: [search], components: [row]})
    }
  }
  }