const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
function CreateHelpEmbed(title, description, thumbnail, footer){
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("Green");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
let db = require("../../index.js");
module.exports = {
  name: `helpgk`,
  aliases: [
    `gkcommands`,
    `commandsgk`,
    `gkhelp`,
    `helpgrass`,
    `helpknuckles`,
    `grassknuckleshelp`,
    `helpgrassknuckles`,
    `gkdecks`,
    `grassknucklesdecks`,
    `knucklesdecks`,
    `decksgk`,
  ],
  category: `Grass Knuckles(GK)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Grass Knuckles decklists")
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
      .setLabel("Meme Deck")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
      .setValue("aggro")
      .setDescription("Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."),
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Deck")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Grass Knuckles Decks")
      .setValue("all")
      .setDescription('View all Grass Knuckles decks')
      .setEmoji("<:FUCKLES:1100168498363240518>")
    )
    const row = new ActionRowBuilder().addComponents(select)
    const grassKnucklesDecks = {
      budgetDecks: ["budgetgk"], 
      competitiveDecks: ["pawntrickstab"], 
      memeDecks: ["dinogloves", "healthotk"], 
      aggroDecks: ["dinogloves"], 
      comboDecks: ["healthotk"],
      controlDecks: ["pawntrickstab"],
      midrangeDecks: ["healthotk"],
      tempoDecks: ["budgetgk"],
      allDecks: ["budgetgk", "dinogloves", "healthotk", "pawntrickstab"]
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
    const memerow = new CreateButtons("healthotk", "dgloves")
    const dgloves = new CreateButtons("helpmeme", "hotk")
    const hotk = new CreateButtons("dinogloves", "memehelp")
    const alldecksrow = new CreateButtons("pawntrickstab", "bgk")
    const bgk = new CreateButtons("helpall", "dgloves2")
    const dgloves2 = new CreateButtons("budgetgk", "hotk2")
    const hotk2 = new CreateButtons("dinogloves2", "pts")
    const pts = new CreateButtons("healthotk2", "allhelp")
    function BuildDeckString(decks) {
      return decks.map(deck => `\n<@1043528908148052089> **${deck}**`).join('');
    }
    const toBuildString = BuildDeckString(grassKnucklesDecks.allDecks);
    const toBuildMemeString = BuildDeckString(grassKnucklesDecks.memeDecks);
    //Help GK Embed
    const embed = new CreateHelpEmbed(
      "Grass Knuckles Decks",
      `To view the Grass Knuckles decks please select an option from the select menu below!
Note: Grass Knuckles has ${grassKnucklesDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist",
    )
    const memeEmbed = new CreateHelpEmbed(
      "Grass Knuckles Meme Decks", 
      `My meme decks for Grass Knuckles(GK) are ${toBuildMemeString}`, 
      "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist", 
      `To view the Grass Knuckles please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Grass Knuckles has ${grassKnucklesDecks.memeDecks.length} meme decks in Tbot`
    )
 const allEmbed = new CreateHelpEmbed(
    "All Grass Knuckles Decks",
    `My decks for Grass Knuckles(GK) are ${toBuildString}`, 
    "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist",
    `To view the Grass Knuckles decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Grass Knuckles has ${grassKnucklesDecks.allDecks.length} decks in Tbot`
 )
    let [result] = await db.query(`SELECT * FROM gkdecks`);

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
        .setColor("Green");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetgk = new CreateDeckEmbed(result, "budgetgk")
    const dinogloves = new CreateDeckEmbed(result, "dinogloves")
    const healthotk = new CreateDeckEmbed(result, "healthotk")
    const pawntrickstab = new CreateDeckEmbed(result, "pawntrickstab")
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i){
      const value = i.values[0]
      if(value == "budget" || value == "tempo"){
        await i.reply({embeds: [budgetgk], flags: MessageFlags.Ephemeral})
      }
      if(value == "aggro"){
        await i.reply({embeds: [dinogloves], flags: MessageFlags.Ephemeral})
      }
      if(value == "combo" || value == "midrange"){
        await i.reply({embeds: [healthotk], flags: MessageFlags.Ephemeral})
      }
      if(value == "meme"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      if(value == "comp" || value == "control"){
        await i.reply({embeds: [pawntrickstab], flags: MessageFlags.Ephemeral})
      }
      if(value == "all"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
    }
    async function handleButtonInteraction(i){
      if(i.customId == "helpmeme" || i.customId == "memehelp"){
        await i.update({embeds: [memeEmbed], components: [memerow]})
      }
      if(i.customId == "allhelp" || i.customId == "helpall"){
        await i.update({embeds: [allEmbed], components: [alldecksrow]})
      }
      if(i.customId == "bgk" || i.customId == "budgetgk"){
        await i.update({embeds: [budgetgk], components: [bgk]})
      }
      if(i.customId == "dgloves" || i.customId == "dinogloves"){
        await i.update({embeds: [dinogloves], components: [dgloves]})
      }
      if(i.customId == "dgloves2" || i.customId == "dinogloves2"){
        await i.update({embeds: [dinogloves], components: [dgloves2]})
      }
      if(i.customId == "hotk" || i.customId == "healthotk"){
        await i.update({embeds: [healthotk], components: [hotk]})
      }
      if(i.customId == "hotk2" || i.customId == "healthotk2"){
        await i.update({embeds: [healthotk], components: [hotk2]})
      }
      if(i.customId == "pts" || i.customId == "pawntrickstab"){
          await i.update({embeds: [pawntrickstab], components: [pts]})
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        await HandleSelectMenu(i);
      }
      else {
        await handleButtonInteraction(i);
      }
    });
  },
};
