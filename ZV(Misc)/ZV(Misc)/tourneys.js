const { ButtonBuilder, ButtonStyle,  ContainerBuilder,
 SectionBuilder, SeparatorSpacingSize, TextDisplayBuilder, MessageFlags } = require("discord.js");
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
    if(message.guild && message.guild.id == "285818469960646657"){
      return message.author.send("This command is disabled in this server please use it in another server");
    }
    else{
      const container = new ContainerBuilder()
    const tourneyText = new TextDisplayBuilder().setContent(
      "# Looking for Tournaments for PvZ Heroes? Below are some servers that host tournaments for PvZ Heroes!");
      container.addTextDisplayComponents(tourneyText);
      const tourneyText2 = new TextDisplayBuilder().setContent([
        "# Gimmick Tournaments",
        "PvZH Gimmick Tournaments is a server that exclusively hosts niche, unordinary tournaments in pvzh. In this server you can also find updates for when a pvzh tournament opens and closes their sign ups.", 
        "Tournaments are usually hosted once every 1 1/2 months"
      ].join('\n'));
    const gimmickTournaments = new ButtonBuilder()
      .setLabel('Gimmick Tournaments')
      .setStyle(ButtonStyle.Link)
      .setURL('https://discord.gg/ksC87rT6Yv')
      .setEmoji('<:gimmick:1273840288942522485>')
    const section2 = new SectionBuilder().addTextDisplayComponents(tourneyText2).setButtonAccessory(gimmickTournaments);
    container.addSectionComponents(section2);
    const tourneyText3 = new TextDisplayBuilder().setContent([
       "# PvzHeroes Revived",
      "PvZ Heroes Revived is a server where you can find various databases of the people in the community, occasional tournaments and other fun things PvZH. Let's revive PvZH together!"
    ].join('\n'));
    const pvzhRevived = new ButtonBuilder()
      .setLabel('PvZ Heroes Revived')
      .setStyle(ButtonStyle.Link)
      .setURL('https://discord.gg/M3Y6zE2Uyr')
      .setEmoji('<:pvzheroesrevived:1273835442512461886>')
    const section3 = new SectionBuilder().addTextDisplayComponents(tourneyText3).setButtonAccessory(pvzhRevived);
    container.addSectionComponents(section3);
    const tourneyText4 = new TextDisplayBuilder().setContent([
      "# pvzh archives", 
      "Offers varied and experimental tournaments, that try to push pvzh competitive outside of the norm.",
      "Tends to have one tournament active at any given time, with often a month or two till one tourney ends and another begins."
    ].join('\n'));
    const pvzhArchives = new ButtonBuilder()
      .setLabel('pvzh archives')
      .setStyle(ButtonStyle.Link)
      .setURL('https://discord.gg/JtsYctnZTc')
      .setEmoji('<:pvzharchives:1367922015004135484>')
    const section4 = new SectionBuilder().addTextDisplayComponents(tourneyText4).setButtonAccessory(pvzhArchives);
    container.setAccentColor(0xFF0000);
    container.addSectionComponents(section4);
    const tourneyText5 = new TextDisplayBuilder().setContent([
      "# Quicksand", 
      "Quicksand Tournaments is an elo system server, meaning that rather than participating in a bracket-style tournament, you can play at any time you like as long as there is another player who is down to play against you. Top 8 of each season (=3 months) participates in a special Playoffs Tournament. Hope to see you there!"
    ].join('\n'));
    const quicksand = new ButtonBuilder()
      .setLabel('Quicksand')
      .setStyle(ButtonStyle.Link)
      .setURL('https://discord.gg/fFZBpVry')
      .setEmoji('<:quicksand:1273834699072081920>')
    const section5 = new SectionBuilder().addTextDisplayComponents(tourneyText5).setButtonAccessory(quicksand);
    container.addSectionComponents(section5);
    const tourneyText6 = new TextDisplayBuilder().setContent([
      "# pvzhtwjizñë", 
      "Essentially a tournament-focused server that aims to invite both new and experienced players. We tend to have tournaments every few months, sometimes being “gimmick” tournaments with special rules, while other times being a regular tournament with two brackets"
    ].join('\n'));
    const pvzhtwjizne = new ButtonBuilder()
      .setLabel('pvzhtwjizñë')
      .setStyle(ButtonStyle.Link)
      .setURL('https://discord.gg/7c9ybscBMN')
      .setEmoji('<:pvzhtw:1369013512709345372>')
    const section6 = new SectionBuilder().addTextDisplayComponents(tourneyText6).setButtonAccessory(pvzhtwjizne);
    container.addSectionComponents(section6);
    message.channel.send({
      components: [container],
      flags: MessageFlags.IsComponentsV2
    });
  }
  },
};
