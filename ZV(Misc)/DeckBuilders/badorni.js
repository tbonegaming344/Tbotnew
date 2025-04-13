const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
let db = require("../../index.js");
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#000000");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `badorni`,
  aliases: [
    `decksmadebybadorni`,
    `badornihelp`,
    `helpbadorni`,
    `baddecks`,
    `decksmadebybad`,
    `badhelp`,
    `helpbad`,
    `badornidecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Badorni's Decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setDescription('Plant Decks that are built off a weird/fun combo')
      .setValue("meme"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
      .setValue("combo"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
      .setValue("control"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      .setValue("midrange")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const badorniDecks = {
      memeDecks: ["antiagor",
      "antiagoragor",
      "freezeheal",
      "frozentelimps",
      "moprbius",
      "plantmop",
      "psychosolstice"], 
      comboDecks: ["antiagor",
      "antiagoragor",
      "freezeheal",
      "frozentelimps",
      "moprbius",
      "plantmop",
      "psychosolstice"],
      controlDecks: ["antiagor", "frozentelimps"],
      midrangeDecks: [ "moprbius","psychosolstice"]
    }
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMeme = buildDeckString(badorniDecks.memeDecks);
    const toBuildCombo = buildDeckString(badorniDecks.comboDecks);
    const toBuildMid = buildDeckString(badorniDecks.midrangeDecks);
    const toBuildCon = buildDeckString(badorniDecks.controlDecks);
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
    const combo = new CreateButtons("psychosolstice2", "aa");
    const aa = new CreateButtons("combo", "aanti");
    const aanti = new CreateButtons("antiagor", "freeze");
    const freeze = new CreateButtons("antiantiagor", "ftimps");
    const ftimps = new CreateButtons("freezeheal", "mopr");
    const mopr = new CreateButtons("frozentelimps", "pmop2");
    const pmop2 = new CreateButtons("moprbius", "psy2");
    const psy2 = new CreateButtons("plantmop2", "helpcombo");
    let meme = new CreateButtons("psychosolstice", "aa2");
    let aa2 = new CreateButtons("meme", "aaa2");
    let aaa2 = new CreateButtons("antiagor2", "freeze2");
    let freeze2 = new CreateButtons("antiantiagor2", "fti2");
    let fti2 = new CreateButtons("freezeheal2", "mopr2");
    let mopr2 = new CreateButtons("ftimps2", "pmop");
    let pmop = new CreateButtons("mopribus2", "psy");
    let psy = new CreateButtons("plantmop", "meme2");
    let control = new CreateButtons("ftimps3", "aaa3");
    let aaa3 = new CreateButtons("control", "fti3");
    let fti3 = new CreateButtons("aaagor3", "con");
    let midrange = new CreateButtons("psychosolstice3", "mopr3");
    let mopr3 = new CreateButtons("midrange", "psy3");
    let psy3 = new CreateButtons("mopribus3", "mid");
    let [result] =
      await db.query(`select antiagor, antiagoragor,
	freezeheal, frozentelimps, mopribus, plantmop,
	psychosolstice from ntdecks nt
	inner join ccdecks cc
	on (nt.deckinfo = cc.deckinfo)
	inner join rodecks ro
	on (nt.deckinfo = ro.deckinfo)
	inner join hgdecks hg 
	on (nt.deckinfo = hg.deckinfo)
	inner join sfdecks sf
	on (nt.deckinfo = sf.deckinfo)
	inner join czdecks cz 
	on (nt.deckinfo = cz.deckinfo)
  inner join ctdecks ct 
  on (nt.deckinfo = ct.deckinfo)`);
    const user = await client.users.fetch("749149322561716294");
    let bad = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
To view all decks made by Badorni select the meme or combo decks option
Note: ${user.displayName} has ${badorniDecks.memeDecks.length} decks in Tbot`,
        user.displayAvatarURL(),
    )
      let combobad = new CreateHelpEmbed(
        `${user.displayName} Combo Decks`,
        `My Combo decks made by ${user.displayName} are ${toBuildCombo}`,
        user.displayAvatarURL(),
        `To view the Combo Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${badorniDecks.comboDecks.length} combo decks in Tbot`
      )
      let memebad = new CreateHelpEmbed(
        `${user.displayName} Meme Decks`,
        `My Meme decks made by ${user.displayName} are ${toBuildMeme}`,
        user.displayAvatarURL(),
        `To view the Meme Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${badorniDecks.memeDecks.length} meme decks in Tbot`
      )
      let midbad = new CreateHelpEmbed(
        `${user.displayName} Midrange Decks`,
        `My Midrange decks made by ${user.displayName} are ${toBuildMid}`,
        user.displayAvatarURL(),
        `To view the Midrange Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${badorniDecks.midrangeDecks.length} midrange decks in Tbot`
      )
      let conbad = new CreateHelpEmbed(
        `${user.displayName} Control Decks`,
        `My Control decks made by ${user.displayName} are ${toBuildCon}`,
        user.displayAvatarURL(),
        `To view the Control Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${badorniDecks.controlDecks.length} control decks in Tbot`
      )
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
          .setColor("#000000");
        const imageUrl = result[4][deckName];
        if (imageUrl) {
          embed.setImage(imageUrl);
        }
        return embed;
      }
    let coloboy = new CreateDeckEmbed(result, "antiagor");
    let a = new CreateDeckEmbed(result, "antiagoragor");
    let freal = new CreateDeckEmbed(result, "freezeheal");
    let fti = new CreateDeckEmbed(result, "frozentelimps");
    let mop = new CreateDeckEmbed(result, "mopribus");
    let plantmop = new CreateDeckEmbed(result, "plantmop");
    let pysol = new CreateDeckEmbed(result, "psychosolstice");
    const m = await message.channel.send({ embeds: [bad], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if(value == "combo"){
        await i.update({embeds: [combobad], components: [combo]});
      }
      else if(value == "meme"){
        await i.update({embeds: [memebad], components: [meme]});
      }
      else if(value == "midrange"){
        await i.update({embeds: [midbad], components: [midrange]});
      }
      else if(value == "control"){
        await i.update({embeds: [conbad], components: [control]});
      }     
    }
    async function handleButtonInteraction(i){
      const buttonActions = {
        pmop: {embed: plantmop, component: pmop},
        mopr: {embed: mop, component: mopr},
        psy: {embed: pysol, component: psy},
        combo: {embed: combobad, component: combo},
        aa: {embed: coloboy, component: aa},
        aanti: {embed: a, component: aanti},
        freeze: {embed: freal, component: freeze},
        ftimps: {embed: fti, component: ftimps},
        ftimps2: {embed: fti, component: fti2},
        ftimps3: {embed: fti, component: fti3},
        mopr2: {embed: mop, component: mopr2},
        pmop2: {embed: plantmop, component: pmop2},
        psy2: {embed: pysol, component: psy2},
        meme: {embed: memebad, component: meme},
        meme2: {embed: memebad, component: meme},
        aa2: {embed: coloboy, component: aa2},
        aaa2: {embed: a, component: aaa2},
        freeze2: {embed: freal, component: freeze2},
        fti2: {embed: fti, component: fti2},
        fti3: {embed: fti, component: fti3},
        mopr3: {embed: mop, component: mopr3},
        psy3: {embed: pysol, component: psy3},
        con: {embed: conbad, component: control},
        control: {embed: conbad, component: control},
        mid: {embed: midbad, component: midrange},
        midrange: {embed: midbad, component: midrange},
        aaa3: {embed: a, component: aaa3},
        mopribus: {embed: mop, component: mopr},
        antiagor: {embed: coloboy, component: aa},
        anti2: {embed: a, component: aa2},
        freezeheal: {embed: freal, component: freeze},
        freezeheal2: {embed: freal, component: freeze2},
        plantmop: {embed: plantmop, component: pmop},
        helpcombo: {embed: combobad, component: combo},
        mopribus2: {embed: mop, component: mopr2},
        mopribus3: {embed: mop, component: mopr3},
        frozentelimps: {embed: fti, component: ftimps},
        antiantiagor: {embed: a, component: aanti},
        antiagor2: {embed: coloboy, component: aa2},
        psychosolstice: {embed: pysol, component: psy},
        psychosolstice2: {embed: pysol, component: psy2},
        psychosolstice3: {embed: pysol, component: psy3},
        aaagor2: {embed: a, component: aaa2},
        aaagor3: {embed: a, component: aaa3},
      }
      const action = buttonActions[i.customId];
      if(action){
        await i.update({embeds: [action.embed], components: [action.component]});
      }
      else{
        await i.reply({content: "Unknown Button Interaction", flags: MessageFlags.Ephemeral});
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
      await handleSelectMenu(i);

      }
      else{
        await handleButtonInteraction(i);
      }
    });
  },
};
