const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
let db = require("../../index.js")
function CreateHelpEmbed(title, description, thumbnail, footer){
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("Yellow");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpsf`,
  aliases: [
    `sfcommands`,
    `commandssf`,
    `sfhelp`,
    `helpsolarflare`,
    `helpflare`,
    `sfdecks`,
    `solarflaredecks`,
    `solarflarehelp`,
    `flaredecks`,
    `flarehelp`,
  ],
  category: `Solar Flare(SF)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Solar Flare's decklists")
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
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Solar Flare Decks")
      .setValue("all")
      .setDescription('View all Solar Flare decks')
      .setEmoji("<:SFSip:1018934631531282532>")
    )
    const row =new ActionRowBuilder().addComponents(select)
    const solarFlareDecks = {
      budgetDecks: ["budgetswarmsf"], 
      competitiveDecks: ["figlottery"], 
      ladderDecks: ["ejection"], 
      memeDecks: ["funnyflare", "healburn", "psychosolstice", "ramp2seedling"], 
      comboDecks: ["funnyflare", "healburn", "psychosolstice", "ramp2seedling"],
      controlDecks: ["ejection"], 
      midrangeDecks: ["figlottery", "funnyflare", "healburn", "psychosolstice", "ramp2seedling"], 
      tempoDecks: ["budgetswarmsf"], 
      allDecks: ["budgetswarmsf", "ejection", "figlottery", "funnyflare", "healburn", "psychosolstice", "ramp2seedling",]
    }
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
    const memerow = new CreateButtons("ramp2seedling", "ff")
    const ff = new CreateButtons("helpmeme", "hburn")
    const hburn = new CreateButtons("funnyflare", "psol")
    const psol = new CreateButtons("healburn", "r2s")
    const r2s = new CreateButtons("psychosolstice", "memehelp")
    const comborow = new CreateButtons("ramp2seedling2", "ff2")
    const ff2 = new CreateButtons("helpcombo", "hburn2")
    const hburn2 = new CreateButtons("funnyflare2", "psol2")
    const psol2 = new CreateButtons("healburn2", "r2s2")
    const r2s2 = new CreateButtons("psychosolstice2", "combohelp")
    const midrangerow = new CreateButtons("ramp2seedling3", "flottery")
    const flottery = new CreateButtons("helpmid", "ff3")
    const ff3 = new CreateButtons("figlottery", "hburn3")
    const hburn3 = new CreateButtons("funnyflare3", "psol3")
    const psol3 = new CreateButtons("healburn3", "r2s3")
    const r2s3 = new CreateButtons("psychosolstice3", "midhelp")
    const alldecksrow = new CreateButtons("ramp2seedling4", "bsf")
    const bsf = new CreateButtons("helpall", "eject")
    const eject = new CreateButtons("budgetsf", "flottery2")
    const flottery2 = new CreateButtons("ejection", "ff4")
    const ff4 = new CreateButtons("figlottery2", "hburn4")
    const hburn4 = new CreateButtons("funnyflare3", "psol4")
    const psol4 = new CreateButtons("psol4", "r2s4")
    const r2s4 = new CreateButtons("psychosolstice4", "allhelp")

    function BuildDeckString(decks) {
      return decks.map(deck => `\n<@1043528908148052089> **${deck}**`).join('');
    }
    let toBuildMemeString = BuildDeckString(solarFlareDecks.memeDecks)
    let toBuildComboString = BuildDeckString(solarFlareDecks.comboDecks)
    let toBuildMidrangeString = BuildDeckString(solarFlareDecks.midrangeDecks)
    let toBuildString = BuildDeckString(solarFlareDecks.allDecks)
    let embed = new CreateHelpEmbed(
      "Solar Flare Decks", 
      `To view the Solar Flare decks please select an option from the select menu below!
Note: Solar Flare has ${solarFlareDecks.allDecks.length} total decks in Tbot`, 
       "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
    )
      let memeEmbed = new CreateHelpEmbed(
        "Solar Flare Meme Decks", 
        `My meme decks for Solar Flare(SF) are ${toBuildMemeString}`, 
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist", 
        `To view the meme Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Solar Flare has ${solarFlareDecks.memeDecks.length} meme decks in Tbot`
      )
      let allEmbed = new CreateHelpEmbed(
        "Solar Flare Decks", 
        `My decks for Solar Flare(SF) are ${toBuildString}`, 
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist", 
        `To view the Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Solar Flare has ${solarFlareDecks.allDecks.length} decks in Tbot`
      )
      let comboEmbed = new CreateHelpEmbed(
        "Solar Flare Combo Decks", 
        `My combo decks for Solar Flare(SF) are ${toBuildComboString}`, 
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist", 
        `To view the combo Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Solar Flare has ${solarFlareDecks.comboDecks.length} combo decks in Tbot`
      )
      let midrangeEmbed = new CreateHelpEmbed(
        "Solar Flare Midrange Decks", 
        `My midrange decks for Solar Flare(SF) are ${toBuildMidrangeString}`, 
        "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist", 
        `To view the midrange Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Solar Flare has ${solarFlareDecks.midrangeDecks.length} midrange decks in Tbot`
      )
    let [result] = await db.query(`SELECT * from sfdecks`);
    
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
    let budgetsf = new CreateDeckEmbed(result, "budgetswarmsf")
    let ejection = new CreateDeckEmbed(result, "ejection")
    let funnyflare= new CreateDeckEmbed(result, "funnyflare")
    let healburn= new CreateDeckEmbed(result, "healburn")
    let figlottery = new CreateDeckEmbed(result, "healmidflare")
    let psychosolstice = new CreateDeckEmbed(result, "psychosolstice")
    let ramp2seedling= new CreateDeckEmbed(result, "ramp2seedling")
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i){
      const value = i.values[0];
      if(value == "comp"){
        await i.reply({embeds: [figlottery], flags: MessageFlags.Ephemeral})
      }
      if(value == "ladder" || value == "control"){
        await i.reply({embeds: [ejection], flags: MessageFlags.Ephemeral})
      }
      if(value == "budget" || value == "tempo"){
        await i.reply({embeds: [budgetsf], flags: MessageFlags.Ephemeral})
      }
      if(value == "all"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      if(value == "meme"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      if(value == "combo"){
        await i.update({embeds: [comboEmbed], components: [comborow]})
      }
      if(value == "midrange"){
        await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
      } 
    }
    async function handleButtonInteraction(i){
      if( i.customId == "allhelp" || i.customId == "helpall"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      if(i.customId == "memehelp" || i.customId == "helpmeme"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      if( i.customId == "helpcombo" || i.customId == "combohelp"){
        await i.update({embeds: [comboEmbed], components: [comborow]})
      }
      if( i.customId == "helpmid" || i.customId == "midhelp"){
        await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
      }
      if(i.customId == "psol" || i.customId == "psychosolstice"){
        await i.update({embeds: [psychosolstice], components: [psol]})
      }
      if(i.customId == "psol2" || i.customId == "psychosolstice2"){
        await i.update({embeds: [psychosolstice], components: [psol2]})
      }
      if(i.customId == "psol3" || i.customId == "psychosolstice3"){
        await i.update({embeds: [psychosolstice], components: [psol3]})
      }
      if(i.customId == "psol4" || i.customId == "psychosolstice4"){
        await i.update({embeds: [psychosolstice], components: [psol4]})
      }
      if(i.customId == "flottery" || i.customId == "figlottery"){
        await i.update({embeds: [figlottery], components: [flottery]})
      }
      if(i.customId == "flottery2" || i.customId == "figlottery2"){
        await i.update({embeds: [figlottery], components: [flottery2]})
      }
      if(i.customId == "eject" || i.customId == "ejection"){
        await i.update({embeds: [ejection], components: [eject]})
      }
      if(i.customId == "r2s" || i.customId == "ramp2seedling"){
        await i.update({embeds: [ramp2seedling], components: [r2s]})
      }
      if(i.customId == "r2s2" || i.customId == "ramp2seedling2"){
        await i.update({embeds: [ramp2seedling], components: [r2s2]})
      }
      if(i.customId == "r2s3" || i.customId == "ramp2seedling3"){
        await i.update({embeds: [ramp2seedling], components: [r2s3]})
      }
      if(i.customId == "r2s4" || i.customId == "ramp2seedling4"){
        await i.update({embeds: [ramp2seedling], components: [r2s4]})
      }
      if(i.customId == "ff" || i.customId == "funnyflare"){
        await i.update({embeds: [funnyflare], components: [ff]})
      }
      if(i.customId == "ff2" || i.customId == "funnyflare2"){
        await i.update({embeds: [funnyflare], components: [ff2]})
      }
      if(i.customId == "ff3" || i.customId == "funnyflare3"){
        await i.update({embeds: [funnyflare], components: [ff3]})
      }
      if(i.customId == "ff4" || i.customId == "funnyflare4"){
        await i.update({embeds: [funnyflare], components: [ff4]})
      }
      if(i.customId == "hburn" || i.customId == "healburn"){
        await i.update({embeds: [healburn], components: [hburn]})
      }
      if(i.customId == "hburn2" || i.customId == "healburn2"){
        await i.update({embeds: [healburn], components: [hburn2]})
      }
      if(i.customId == "hburn3" || i.customId == "healburn3"){
        await i.update({embeds: [healburn], components: [hburn3]})
      }
      if(i.customId == "hburn4" || i.customId == "healburn4"){
        await i.update({embeds: [healburn], components: [hburn4]})
      }
      if(i.customId == "bsf" || i.customId == "budgetsf"){
        await i.update({embeds: [budgetsf], components: [bsf]})
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
       await HandleSelectMenu(i)
      }
     else{
      await handleButtonInteraction(i)
     }
    });
  },
};
