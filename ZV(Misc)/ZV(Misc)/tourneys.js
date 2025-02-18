const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
  name: `tourneys`,
  aliases: [
    `touraments`,
    `pvzhtourneys`,
    `tourneyspvzh`,
    `tourney`,
    `tournamentspvzh`,
    `pvzhtournaments`,
    `tournamentsforpvzh`,
    `tournaments`, 
    `tournament`,
    `servers`,
    `pvzhservers`,
  ],
  category: `Miscellaneous`,
  run: async (client, message, args) => {
    if(message.guild.id == "285818469960646657"){
      return message.author.send("This command is disabled in this server please use it in another server");
    }
    else{
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel("Budget")
      .setStyle(ButtonStyle.Link)
      .setURL("https://discord.gg/tYMKzWxFsU")
      .setEmoji("<:budgetserver:1273842713971785748>"),
        new ButtonBuilder()
        .setLabel("Gimmick")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/ksC87rT6Yv")
        .setEmoji("<:gimmick:1273840288942522485>"),
        new ButtonBuilder()
        .setLabel("Jupiter(Creeperblade)")
        .setURL("https://discord.gg/HKUcA9nD4N")
        .setStyle(ButtonStyle.Link)
        .setEmoji("<:creeper:1314665027814559815>")
    );
    const row2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel("Martin Den")
      .setStyle(ButtonStyle.Link)
      .setURL("https://discord.gg/NeStx9Fe9R")
      .setEmoji("<:martinsden:1273835896348737600>"),
      new ButtonBuilder()
      .setLabel("PvzHeroes Revived")
      .setStyle(ButtonStyle.Link)
      .setURL("https://discord.gg/Wgf927Pbr6")
      .setEmoji("<:pvzheroesrevived:1273835442512461886>"),
      new ButtonBuilder()
        .setLabel("Pvzhtwjiz")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/7c9ybscBMN")
        .setEmoji("<:pvzthwjiz:1263193211082379295>"),
    );
    const row3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setLabel("Quicksand")
      .setStyle(ButtonStyle.Link)
      .setURL("https://discord.gg/ZqfqF7Wb3Z")
      .setEmoji("<:quicksand:1273834699072081920>"),
    );
    message.channel.send({
      content:
        "PVZH players are you looking for tourneys! Below you can click on the buttons to join servers for pvzh tournaments!",
      components: [row, row2, row3],
    });
  }
  },
};
