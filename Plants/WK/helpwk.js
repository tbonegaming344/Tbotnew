const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
const  db = require("../../index.js");
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#964B00");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpwk`,
  aliases: [
    `commandswk`,
    `wkcommands`,
    `wkhelp`,
    `helpwall`,
    `helpknight`,
    `helpwallknight`,
    `wkdecks`,
    `wallknighthelp`,
    `wallknightdecks`,
    `wallknightdeck`
  ],
  category: `Wall Knight(WK)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view WallKnight's Decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Budget Deck")
      .setValue("budget")
      .setDescription('Decks that are cheap for new players')
			.setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Plant Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'),
      new StringSelectMenuOptionBuilder()
      .setLabel("All WallKnight Decks")
      .setValue("all")
      .setDescription('View all WallKnight decks in Tbot')
      .setEmoji("<:wallnut:1100168145186062426>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const wallKnightDecks = {
      budgetDecks: ["budgetwk"], 
      competitiveDecks: ["chemotherapy"],
      memeDecks: ["cancerknight", "highlander", "shitknight"],
      controlDecks: ["cancerknight", "chemotherapy"],
      midrangeDecks: ["budgetwk", "highlander"],
      allDecks: ["budgetwk", "cancerknight", "chemotherapy", "highlander", "shitknight"]
    }
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMemeString = buildDeckString(wallKnightDecks.memeDecks);
    const toBuildControlString = buildDeckString(wallKnightDecks.controlDecks);
    const toBuildString = buildDeckString(wallKnightDecks.allDecks);
    const toBuildMidrangeString = buildDeckString(wallKnightDecks.midrangeDecks);
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
    const memerow = new CreateButtons("shitknight", "cknight");
    const cknight = new CreateButtons("helpmeme", "hl");
    const hl = new CreateButtons("cancerknight", "sk");
    const sk = new CreateButtons("highlander", "memehelp");
    const controlrow = new CreateButtons("chemotherapy", "cknight2");
    const cknight2 = new CreateButtons("controlhelp", "chemo");
    const chemo = new CreateButtons("cancerknight", "helpcontrol");
    const midrangerow = new CreateButtons("highlander2", "bwk");
    const bwk = new CreateButtons("helpmidrange", "hl2");
    const hl2 = new CreateButtons("budgetwk", "midrangehelp");
    const alldecksrow = new CreateButtons("shitknight2", "bwk2");
    const bwk2 = new CreateButtons("helpall", "cknight3");
    const cknight3 = new CreateButtons("budgetwk2", "chemo2");
    const chemo2 = new CreateButtons("cancerknight3", "hl3");
    const hl3 = new CreateButtons("chemotherapy2", "sk2");
    const sk2 = new CreateButtons("highlander3", "allhelp");
    const embed = new CreateHelpEmbed(
      "WallKnight Decks",
      `To view the WallKnight decks please select an option from the select menu below!
Note: WallKnight has ${wallKnightDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945"
    )
      const allEmbed = new CreateHelpEmbed(
      "WallKnight Decks",
      `My decks for Wall Knight(WK) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945",
      `To view the Wall-Knight decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: WallKnight has ${wallKnightDecks.allDecks.length} decks in Tbot`
      )
      const memeEmbed = new CreateHelpEmbed(
      "WallKnight Meme Decks",
      `My meme decks for Wall Knight(WK) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945",
      `To view the Wall-Knight meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: WallKnight has ${wallKnightDecks.memeDecks.length} meme decks in Tbot`
      )
      const controlEmbed = new CreateHelpEmbed(
      "WallKnight Control Decks",
      `My control decks for Wall Knight(WK) are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945",
      `To view the Wall-Knight control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: WallKnight has ${wallKnightDecks.controlDecks.length} control decks in Tbot`
      )
      const midrangeEmbed = new CreateHelpEmbed(
      "WallKnight Midrange Decks",
      `My midrange decks for Wall Knight(WK) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945",
      `To view the Wall-Knight midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: WallKnight has ${wallKnightDecks.midrangeDecks.length} midrange decks in Tbot`
      )
    const [result] = await db.query(`SELECT * from wkdecks`);
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
         .setColor("Yellow");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetwk = new CreateDeckEmbed(result, "budgetwkmidheal");
    const chemotherapy = new CreateDeckEmbed(result, "chemotherapy");
    const cancerknight = new CreateDeckEmbed(result, "cancerknight");
    const highlander = new CreateDeckEmbed(result, "highlander");
    const shitknight = new CreateDeckEmbed(result, "shitknight");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
        if(value == "budget" || value == "tempo"){
          await i.reply({embeds: [budgetwk], flags: MessageFlags.Ephemeral})
        }
        else if(value == "comp"){
          await i.reply({embeds: [chemotherapy], flags: MessageFlags.Ephemeral})
        }
        else if(value == "meme"){
          await i.update({embeds: [memeEmbed], components: [memerow]})
        }
        else if(value == "control"){
          await i.update({embeds: [controlEmbed], components: [controlrow]})
        }
        else if(value == "midrange"){
          await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
        }
        else if(value == "all"){
          await i.update({embeds: [allEmbed], components: [alldecksrow]})
        }
      }
      async function handleButtonInteraction(i){
        const buttonActions = {
          allhelp: {embed: allEmbed, component: alldecksrow},
          helpall: {embed: allEmbed, component: alldecksrow},
          helpmeme: {embed: memeEmbed, component: memerow},
          memehelp: {embed: memeEmbed, component: memerow},
          helpcontrol: {embed: controlEmbed, component: controlrow},
          controlhelp: {embed: controlEmbed, component: controlrow},
          helpmidrange: {embed: midrangeEmbed, component: midrangerow},
          midrangehelp: {embed: midrangeEmbed, component: midrangerow},
          bwk: {embed: budgetwk, component: bwk},
          budgetwk: {embed: budgetwk, component: bwk},
          bwk2: {embed: budgetwk, component: bwk2},
          budgetwk2: {embed: budgetwk, component: bwk2},
          cknight: {embed: cancerknight, component: cknight},
          cancerknight: {embed: cancerknight, component: cknight},
          cknight2: {embed: cancerknight, component: cknight2},
          cancerknight2: {embed: cancerknight, component: cknight2},
          cknight3: {embed: cancerknight, component: cknight3},
          cancerknight3: {embed: cancerknight, component: cknight3},
          chemo: {embed: chemotherapy, component: chemo},
          chemotherapy: {embed: chemotherapy, component: chemo},
          chemo2: {embed: chemotherapy, component: chemo2},
          chemotherapy2: {embed: chemotherapy, component: chemo2},
          hl: {embed: highlander, component: hl},
          highlander: {embed: highlander, component: hl},
          hl2: {embed: highlander, component: hl2},
          highlander2: {embed: highlander, component: hl2},
          hl3: {embed: highlander, component: hl3},
          highlander3: {embed: highlander, component: hl3},
          sk: {embed: shitknight, component: sk}, 
          shitknight: {embed: shitknight, component: sk},
          sk2: {embed: shitknight, component: sk2}, 
          shitknight2: {embed: shitknight, component: sk2},
        }
        const action = buttonActions[i.customId];
        if(action){
          await i.update({embeds: [action.embed], components: [action.component]})
        }
        else{
          await i.reply({content: "Invalid button interaction", flags: MessageFlags.Ephemeral})
        }
      }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        await HandleSelectMenu(i)
      }
     else {
      await handleButtonInteraction(i)
     }
    });
  },
};
