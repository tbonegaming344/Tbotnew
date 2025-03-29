const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
const db = require("../../index.js");
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#FFC0CB");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helprb`,
  aliases: [
    `rbhelp`,
    `rbcommands`,
    `commandsrb`,
    `helprust`,
    `helpbolt`,
    `helprustbolt`,
    `rustcommands`,
    `boltcommands`,
    `rustboltcommands`,
    `rbdecks`,
    `rustboltdecks`,
    `rustbolthelp`,
  ],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Rustbolt decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription("A deck that is cheap for new players")
      .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Decks")
      .setValue("comp")
      .setDescription("Some of the best Decks in the game")
      .setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Decks")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
      .setEmoji("<:ladder:1271503994857979964>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription("Decks that are built off a weird/fun combo"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Decks")
      .setValue("aggro")
      .setDescription("attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Decks")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("All Rustbolt Decks")
      .setValue("all")
      .setDescription("View all Rustbolt decklists")
      .setEmoji("<:RustboltH:1088094706346491904>")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const rustboltDecks = {
      budgetDecks: ["budgetrb"], 
      competitiveDecks: ["bustbolt", "uncrackabolt"],
      ladderDecks: ["boltbolt", "marxbolt", "mechacontrol"],
      memeDecks: ["coggerazzi", "igmablobchum", "sunbandits", "terrifytricksterazzi"],
      aggroDecks: ["budgetrb", "marxbolt"],
      comboDecks: ["boltbolt", "bustbolt", "coggerazzi", "igmablobchum", "sunbandits", "terrifytricksterazzi"],
      controlDecks: ["bustbolt", "mechacontrol", "sunbandits", "uncrackabolt"],
      midrangeDecks: ["boltbolt", "igmablobchum"],
      tempoDecks: ["coggerazzi", "terrifytricksterazzi"],
      allDecks: ["boltbolt", "budgetrb", "bustbolt", "coggerazzi", "igmablobchum", "marxbolt", "mechacontrol", "sunbandits", "terrifytricksterazzi", "uncrackabolt"],
    }
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(rustboltDecks.allDecks);
    const toBuildCompString = buildDeckString(rustboltDecks.competitiveDecks);
    const toBuildLadderString = buildDeckString(rustboltDecks.ladderDecks);
    const toBuildMemeString = buildDeckString(rustboltDecks.memeDecks);
    const toBuildAggroString = buildDeckString(rustboltDecks.aggroDecks);
    const toBuildComboString = buildDeckString(rustboltDecks.comboDecks);
    const toBuildControlString = buildDeckString(rustboltDecks.controlDecks);
    const toBuildMidrangeString = buildDeckString(rustboltDecks.midrangeDecks);
    const toBuildTempoString = buildDeckString(rustboltDecks.tempoDecks);
    function CreateButtons(leftButtonId, rightButtonId) {
      return new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(leftButtonId)
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId(rightButtonId)
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
    }
    const alldecksrow = new CreateButtons("uncrackabolt", "bol");
    const bol = new CreateButtons("helpall", "brb");
    const brb = new CreateButtons("boltbolt", "bust");
    const bust = new CreateButtons("budgetrb", "cog");
    const cog = new CreateButtons("bustbolt", "igb");
    const igb = new CreateButtons("coggerazzi", "marx");
    const marx = new CreateButtons("igmablobchum", "mc");
    const mc = new CreateButtons("marxbolt", "sb");
    const sb = new CreateButtons("mechacontrol", "tster");
    const tster = new CreateButtons("sunbandits", "uncrack");
    const uncrack = new CreateButtons("terrifytricksterazzi", "allhelp");
    const comprow = new CreateButtons("uncrackabolt2", "bust2");
    const bust2 = new CreateButtons("comphelp", "uncrack2");
    const uncrack2 = new CreateButtons("bustbolt2", "helpcomp");
    const ladderrow = new CreateButtons("mechacontrol2", "bol2");
    const bol2 = new CreateButtons("ladderhelp", "marx2");
    const marx2 = new CreateButtons("boltbolt2", "mc2");
    const mc2 = new CreateButtons("marxbolt2", "helpladder");
    const memerow = new CreateButtons("terrifytricksterazzi2", "cog2");
    const cog2 = new CreateButtons("memehelp", "igb2");
    const igb2 = new CreateButtons("coggerazzi2", "sb2");
    const sb2 = new CreateButtons("igmablobchum2", "tster2");
    const tster2 = new CreateButtons("sunbandits2", "helpmeme");
    const aggrorow = new CreateButtons("marxbolt3", "brb2");
    const brb2 = new CreateButtons("aggrohelp", "marx3");
    const marx3 = new CreateButtons("budgetrb2", "helpaggro");
    const comborow = new CreateButtons("terrifytricksterazzi3", "bol3");
    const bol3 = new CreateButtons("combohelp", "bust3");
    const bust3 = new CreateButtons("boltbolt3", "cog3");
    const cog3 = new CreateButtons("bustbolt3", "igb3");
    const igb3 = new CreateButtons("coggerazzi3", "sb3");
    const sb3 = new CreateButtons("igmablobchum3", "tster3");
    const tster3 = new CreateButtons("sunbandits3", "helpcombo");
    const controlrow = new CreateButtons("uncrackabolt3", "bust4");
    const bust4 = new CreateButtons("controlhelp", "mc3");
    const mc3 = new CreateButtons("bustbolt4", "sb4");
    const sb4 = new CreateButtons("mechacontrol3", "uncrack3");
    const uncrack3 = new CreateButtons("sunbandits4", "helpcontrol");
    const midrangerow = new CreateButtons("igmablobchum4", "bol4");
    const bol4 = new CreateButtons("midrangehelp", "igb4");
    const igb4 = new CreateButtons("boltbolt4", "helpmidrange");
    const temporow = new CreateButtons("terrifytricksterazzi4", "cog4");
    const cog4 = new CreateButtons("tempohelp", "tster4");
    const tster4 = new CreateButtons("coggerazzi4", "helptempo");
    const alldecksEmbed = new CreateHelpEmbed(
      "Rustbolt Decks",
      `My commands for Rustbolt(RB) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Rustbolt has ${rustboltDecks.allDecks.length} total decks in Tbot`
    )
      const helprb = new CreateHelpEmbed(
        "Rustbolt Decks",
        `To view the RustBolt decks please select an option from the select menu below!
Note: Rustbolt has ${rustboltDecks.allDecks.length} total decks in Tbot`, 
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      )
      const compEmbed = new CreateHelpEmbed(
        "Rustbolt Competitive Decks",
        `My commands for Rustbolt(RB) are ${toBuildCompString}`,
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
        `To view the RustBolt competitive decks please use the commands listed above or click on the buttons below to navigate through all competitive decks!
Note: Rustbolt has ${rustboltDecks.competitiveDecks.length} total competitive decks in Tbot`
      )
      const ladderEmbed = new CreateHelpEmbed(
        "Rustbolt Ladder Decks",
        `My commands for Rustbolt(RB) are ${toBuildLadderString}`,
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
        `To view the RustBolt ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Rustbolt has ${rustboltDecks.ladderDecks.length} total ladder decks in Tbot`
      )
      const memeEmbed = new CreateHelpEmbed(
        "Rustbolt Meme Decks",
        `My commands for Rustbolt(RB) are ${toBuildMemeString}`,
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
        `To view the RustBolt meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Rustbolt has ${rustboltDecks.memeDecks.length} total meme decks in Tbot`
      )
      const aggroEmbed = new CreateHelpEmbed(
        "Rustbolt Aggro Decks",
        `My commands for Rustbolt(RB) are ${toBuildAggroString}`,
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
        `To view the RustBolt aggro decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: Rustbolt has ${rustboltDecks.aggroDecks.length} total aggro decks in Tbot`
      )
      const comboEmbed = new CreateHelpEmbed(
        "Rustbolt Combo Decks",
        `My commands for Rustbolt(RB) are ${toBuildComboString}`,
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
        `To view the RustBolt combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Rustbolt has ${rustboltDecks.comboDecks.length} total combo decks in Tbot`
      )
      const controlEmbed = new CreateHelpEmbed(
        "Rustbolt Control Decks",
        `My commands for Rustbolt(RB) are ${toBuildControlString}`,
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
        `To view the RustBolt control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: Rustbolt has ${rustboltDecks.controlDecks.length} total control decks in Tbot`
      )
      const midrangeEmbed = new CreateHelpEmbed(
        "Rustbolt Midrange Decks",
        `My commands for Rustbolt(RB) are ${toBuildMidrangeString}`,
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
        `To view the RustBolt midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Rustbolt has ${rustboltDecks.midrangeDecks.length} total midrange decks in Tbot`
      )
      const tempoEmbed = new CreateHelpEmbed(
        "Rustbolt Tempo Decks",
        `My commands for Rustbolt(RB) are ${toBuildTempoString}`,
        "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
        `To view the RustBolt tempo decks please use the commands listed above or click on the buttons below to navigate through all tempo decks!
Note: Rustbolt has ${rustboltDecks.tempoDecks.length} total tempo decks in Tbot`
      )
    const [result] = await db.query(`select * from rbdecks`);
    function CreateDeckEmbed(result, deckName) {
      const embed = new EmbedBuilder()
        .setTitle(`${result[5][deckName]}`)
        .setDescription(`${result[3][deckName]}`)
        .setFooter({ text: `${result[2][deckName]}` })
        .addFields(
          { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
          { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
          { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
        )
        .setColor("Orange");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const boltbolt = new CreateDeckEmbed(result, "boltbolt");
    const budgetrb = new CreateDeckEmbed(result, "budgetrb");
    const bustbolt = new CreateDeckEmbed(result, "bustbolt");
    const igmablobchum = new CreateDeckEmbed(result, "igmablobchum");
    const marxbolt = new CreateDeckEmbed(result, "marxbolt");
    const mechacontrol = new CreateDeckEmbed(result, "mechacontrol");
    const coggerazzi = new CreateDeckEmbed(result, "poggerrazzi");
    const sunbandits = new CreateDeckEmbed(result, "sunbandits");
    const terrifytricksterazzi = new CreateDeckEmbed(result, "terrifytricksterazzi");
    const uncrackabolt = new CreateDeckEmbed(result, "uncrackabolt");
    const m = await message.channel.send({
      embeds: [helprb],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i){
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      else if (value == "comp") {
        await i.update({ embeds: [compEmbed], components: [comprow] });
      }
      else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
      else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      }
      else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      }
      else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
      else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      }
      else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
      else if (value == "tempo") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      }
      else if (value == "budget") {
        await i.reply({embeds: [budgetrb], flags: MessageFlags.Ephemeral})
      }
    }
    async function HandleButtonInteraction(i){
     if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
    else if (i.customId == "helpcomp" || i.customId == "comphelp") {
        await i.update({ embeds: [compEmbed], components: [comprow] });
      }
    else if (i.customId == "helpladder" || i.customId == "ladderhelp") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
    else if (i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      }
    else if (i.customId == "helpaggro" || i.customId == "aggrohelp") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      }
    else if (i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      }
    else if (i.customId == "helpcontrol" || i.customId == "controlhelp") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      }
    else if (i.customId == "helpmidrange" || i.customId == "midrangehelp") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
    else if (i.customId == "helptempo" || i.customId == "tempohelp") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      }
    else if (i.customId == "bol" || i.customId == "boltbolt") {
        await i.update({ embeds: [boltbolt], components: [bol] });
      }
    else if (i.customId == "bol2" || i.customId == "boltbolt2") {
        await i.update({ embeds: [boltbolt], components: [bol2] });
      }
    else if (i.customId == "bol3" || i.customId == "boltbolt3") {
        await i.update({ embeds: [boltbolt], components: [bol3] });
      }
    else if (i.customId == "bol4" || i.customId == "boltbolt4") {
        await i.update({ embeds: [boltbolt], components: [bol4] });
      }
    else if (i.customId == "brb" || i.customId == "budgetrb") {
        await i.update({ embeds: [budgetrb], components: [brb] });
      }
    else if (i.customId == "brb2" || i.customId == "budgetrb2") {
        await i.update({ embeds: [budgetrb], components: [brb2] });
      }
    else if (i.customId == "igb" || i.customId == "igmablobchum") {
        await i.update({ embeds: [igmablobchum], components: [igb] });
      }
    else if (i.customId == "igb2" || i.customId == "igmablobchum2") {
        await i.update({ embeds: [igmablobchum], components: [igb2] });
      }
    else if (i.customId == "igb3" || i.customId == "igmablobchum3") {
        await i.update({ embeds: [igmablobchum], components: [igb3] });
      }
    else if (i.customId == "igb4" || i.customId == "igmablobchum4") {
        await i.update({ embeds: [igmablobchum], components: [igb4] });
      }
    else if (i.customId == "bust" || i.customId == "bustbolt") {
        await i.update({ embeds: [bustbolt], components: [bust] });
      }
    else if (i.customId == "bust2" || i.customId == "bustbolt2") {
        await i.update({ embeds: [bustbolt], components: [bust2] });
      }
    else if (i.customId == "bust3" || i.customId == "bustbolt3") {
        await i.update({ embeds: [bustbolt], components: [bust3] });
      }
    else if (i.customId == "bust4" || i.customId == "bustbolt4") {
        await i.update({ embeds: [bustbolt], components: [bust4] });
      }
    else if (i.customId == "marx" || i.customId == "marxbolt") {
        await i.update({ embeds: [marxbolt], components: [marx] });
      }
    else if (i.customId == "marx2" || i.customId == "marxbolt2") {
        await i.update({ embeds: [marxbolt], components: [marx2] });
      }
    else if (i.customId == "marx3" || i.customId == "marxbolt3") {
        await i.update({ embeds: [marxbolt], components: [marx3] });
      }
    else if (i.customId == "mc" || i.customId == "mechacontrol") {
        await i.update({ embeds: [mechacontrol], components: [mc] });
      }
    else if (i.customId == "mc2" || i.customId == "mechacontrol2") {
        await i.update({ embeds: [mechacontrol], components: [mc2] });
      }
    else if (i.customId == "mc3" || i.customId == "mechacontrol3") {
        await i.update({ embeds: [mechacontrol], components: [mc3] });
      }
    else if (i.customId == "cog" || i.customId == "coggerazzi") {
        await i.update({ embeds: [coggerazzi], components: [cog] });
      }
    else if (i.customId == "cog2" || i.customId == "coggerazzi2") {
        await i.update({ embeds: [coggerazzi], components: [cog2] });
      }
    else if (i.customId == "cog3" || i.customId == "coggerazzi3") {
        await i.update({ embeds: [coggerazzi], components: [cog3] });
      }
    else if (i.customId == "cog4" || i.customId == "coggerazzi4") {
        await i.update({ embeds: [coggerazzi], components: [cog4] });
      }
    else if (i.customId == "sb" || i.customId == "sunbandits") {
        await i.update({ embeds: [sunbandits], components: [sb] });
      }
    else if (i.customId == "sb2" || i.customId == "sunbandits2") {
        await i.update({ embeds: [sunbandits], components: [sb2] });
      }
    else if (i.customId == "sb3" || i.customId == "sunbandits3") {
        await i.update({ embeds: [sunbandits], components: [sb3] });
      }
    else if (i.customId == "sb4" || i.customId == "sunbandits4") {
        await i.update({ embeds: [sunbandits], components: [sb4] });
      }
    else if (i.customId == "uncrack" || i.customId == "uncrackabolt") {
        await i.update({ embeds: [uncrackabolt], components: [uncrack] });
      }
     else if(i.customId == "uncrack2" || i.customId == "uncrackabolt2"){
        await i.update({ embeds: [uncrackabolt], components: [uncrack2] });
      }
     else if(i.customId == "uncrack3" || i.customId == "uncrackabolt3"){
        await i.update({ embeds: [uncrackabolt], components: [uncrack3] });
      }
      else if(i.customId == "tster" || i.customId == "terrifytricksterazzi"){
        await i.update({ embeds: [terrifytricksterazzi], components: [tster] });
      }
      else if(i.customId == "tster2" || i.customId == "terrifytricksterazzi2"){
        await i.update({ embeds: [terrifytricksterazzi], components: [tster2] });
      }
      else if(i.customId == "tster3" || i.customId == "terrifytricksterazzi3"){
        await i.update({ embeds: [terrifytricksterazzi], components: [tster3] });
      }
      else if(i.customId == "tster4" || i.customId == "terrifytricksterazzi4"){
        await i.update({ embeds: [terrifytricksterazzi], components: [tster4] });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
       await HandleSelectMenu(i);
      }
      else{
        await HandleButtonInteraction(i);
      }
    });
  },
};
