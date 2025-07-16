const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
const db = require("../../index.js");
/**
 * The createHelpEmbed function creates an embed with the given title, description, thumbnail, and footer.
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {string} thumbnail - The thumbnail of the embed
 * @param {string} footer - The footer of the embed
 * @returns {EmbedBuilder} - The embed object
 */
function createHelpEmbed(title, description, thumbnail, footer) {
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
  name: `helpbf`,
  aliases: [
    `bfhelp`,
    `bfcommands`,
    `commandsbf`,
    `helpfreeze`,
    `helpbrainfreeze`,
    `brainfreezehelp`,
    `bfdecks`,
    `brainfreezedecks`,
  ],
  category: `Brain Freeze(BF)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Brainfreeze's decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setValue("aggro")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Brainfreeze Decks")
          .setValue("all")
          .setDescription("View all of Brainfreeze's decks")
          .setEmoji("<:Brain_FreezeH:1088196729192587284>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const brainFreezeDecks = {
      budgetDecks: ["budgetbf"],
      competitiveDecks: ["lockthebathroom"],
      ladderDecks: ["bfmidgargs"],
      memeDecks: [
        "banhammer",
        "himpter",
        "lunchtime",
        "watersports",
      ],
      aggroDecks: ["budgetbf"],
      comboDecks: ["banhammer", "himpter", "watersports"],
      midrangeDecks: [
        "bhammer",
        "bfmidgargs",
        "himpter",
        "lunchtime",
        "watersports",
      ],
      tempoDecks: ["lockthebathroom"],
      allDecks: [
        "banhammer",
        "bfmidgargs",
        "budgetbf",
        "himpter",
        "lunchtime",
        "lockthebathroom",
        "watersports",
      ],
    };
     /**
     * The buildDeckString function takes an array of deck names and builds a string with each deck name on a new line, prefixed with the bot mention.
     * @param {Array} decks - The array of deck names to build the string from
     * @returns {string} - The string of deck names
     */
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(brainFreezeDecks.allDecks);
    const toBuildMemeString = buildDeckString(brainFreezeDecks.memeDecks);
    const toBuildComboString = buildDeckString(brainFreezeDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(
      brainFreezeDecks.midrangeDecks
    );
    /**
     * The createButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to control the left button 
     * @param {string} rightButtonId - The ID of the right button to control the right button
     * @returns {ActionRowBuilder} - The ActionRowBuilder object with the buttons
     */
    function createButtons(leftButtonId, rightButtonId) {
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
    const alldecksrow = createButtons("watersports", "bhammer");
    const bhammer = createButtons("helpall", "bfmg");
    const bfmg = createButtons("banhammer", "bbf");
    const bbf = createButtons("bfmidgargs", "hi");
    const hi = createButtons("budgetbf", "lt");
    const lt = createButtons("himps", "ltbr");
    const ltbr = createButtons("lunchtime", "ws")
    const ws = createButtons("lockthebathroom", "allhelp");
    const memerow = createButtons("watersports2", "bhammer2");
    const bhammer2 = createButtons("helpmeme", "hi2");
    const hi2 = createButtons("banhammer2", "lt2");
    const lt2 = createButtons("himps2", "ws2");
    const ws2 = createButtons("lunchtime2", "memehelp");
    const comborow = createButtons("watersports3", "bhammer3");
    const bhammer3 = createButtons("helpcombo", "hi3");
    const hi3 = createButtons("banhammer3", "ws3");
    const ws3 = createButtons("himps3", "combohelp");
    const midrangerow = createButtons("watersports4", "bhammer4");
    const bhammer4= createButtons("helpmid", "bfmg3");
    const bfmg3 = createButtons("banhammer4", "hi4");
    const hi4 = createButtons("bfmidgargs3", "lt3");
    const lt3 = createButtons("himps4", "ws4");
    const ws4 = createButtons("lunchtime3", "midhelp");
    const [result] = await db.query(`SELECT * FROM bfdecks`);
    const allEmbed = createHelpEmbed(
      "Brainfreeze Decks",
      `My commands for Brain Freeze(BF) are ${toBuildString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze decks please use the commands listed above or click on the buttons below!
Note: Brainfreeze has ${brainFreezeDecks.allDecks.length} total decks in Tbot`
    );
    const embed = createHelpEmbed(
      "Brainfreeze Decks",
      `To view the Brain Freeze decks please select an option from the select menu below!
Note: Brainfreeze has ${brainFreezeDecks.allDecks.length} total decks in Tbot`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
    );
    const memeEmbed = createHelpEmbed(
      "Brainfreeze Meme Decks",
      `My Meme decks for Brain Freeze(BF) are ${toBuildMemeString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze Meme decks please use the commands listed above or click on the buttons below to navigate through all Meme Decks!
Note: Brainfreeze has ${brainFreezeDecks.memeDecks.length} Meme decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      "Brainfreeze Combo Decks",
      `My Combo decks for Brain Freeze(BF) are ${toBuildComboString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze Combo decks please use the commands listed above or click on the buttons below to navigate through all Combo Decks!
Note: Brainfreeze has ${brainFreezeDecks.comboDecks.length} Combo decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      "Brainfreeze Midrange Decks",
      `My Midrange decks for Brain Freeze(BF) are ${toBuildMidrangeString}`,
      "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png",
      `To view the Brain Freeze Midrange decks please use the commands listed above or click on the buttons below to navigate through all Midrange Decks!
Note: Brainfreeze has ${brainFreezeDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
     /**
     * The createDeckEmbed function creates an embed for a specific deck
     * @param {string} deckName - The name of the deck
     * @param {*} result - The result from the database query
     * @returns The embed for the deck
     */
    function createDeckEmbed(result, deckName) {
      const embed = new EmbedBuilder()
        .setTitle(`${result[5][deckName]}`)
        .setDescription(`${result[3][deckName]}`)
        .setFooter({ text: `${result[2][deckName]}` })
        .addFields(
          { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
          { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
          { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
        )
        .setColor("Blue");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const bfmidgargs = createDeckEmbed(result, "bfmidgargs");
    const budgetbf = createDeckEmbed(result, "budgetbf");
    const himps = createDeckEmbed(result, "himps");
    const lockthebathroom = createDeckEmbed(result, "lockin");
    const lunchtime = createDeckEmbed(result, "midpets");
    const banhammer= createDeckEmbed(result, "racism");
    const watersports = createDeckEmbed(result, "watersports");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if (value == "budget" || value == "aggro") {
        await i.reply({ embeds: [budgetbf], flags: MessageFlags.Ephemeral });
      } else if (value == "comp"|| value == "tempo") {
        await i.reply({
          embeds: [lockthebathroom],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "ladder") {
        await i.reply({
          embeds: [bfmidgargs], flags: MessageFlags.Ephemeral})
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpall: {embed: allEmbed, component: alldecksrow},
        allhelp: {embed: allEmbed, component: alldecksrow},
        helpladder: {embed: ladderEmbed, component: ladderrow},
        ladderhelp: {embed: ladderEmbed, component: ladderrow},
        helpmeme: {embed: memeEmbed, component: memerow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpcombo: {embed: comboEmbed, component: comborow},
        combohelp: {embed: comboEmbed, component: comborow},
        helpmid: {embed: midrangeEmbed, component: midrangerow},
        midhelp: {embed: midrangeEmbed, component: midrangerow},
        helptempo: {embed: tempoEmbed, component: temporow},
        tempohelp: {embed: tempoEmbed, component: temporow},
        bhammer: {embed: banhammer, component: bhammer},
        banhammer: {embed: banhammer, component: bhammer},
        bhammer2: {embed: banhammer, component: bhammer2},
        banhammer2: {embed: banhammer, component: bhammer2},
        bhammer3: {embed: banhammer, component: bhammer3},
        banhammer3: {embed: banhammer, component: bhammer3},
        bhammer4: {embed: banhammer, component: bhammer4},
        banhammer4: {embed: banhammer, component: bhammer4},
        bfmg: {embed: bfmidgargs, component: bfmg},
        bfmidgargs: {embed: bfmidgargs, component: bfmg},
        bfmg2: {embed: bfmidgargs, component: bfmg2},
        bfmidgargs2: {embed: bfmidgargs, component: bfmg2},
        bfmg3: {embed: bfmidgargs, component: bfmg3},
        bfmidgargs3: {embed: bfmidgargs, component: bfmg3},
        bbf: {embed: budgetbf, component: bbf},
        budgetbf: {embed: budgetbf, component: bbf},
        hi: {embed: himps, component: hi}, 
        himps: {embed: himps, component: hi},
        hi2: {embed: himps, component: hi2}, 
        himps2: {embed: himps, component: hi2},
        hi3: {embed: himps, component: hi3}, 
        himps3: {embed: himps, component: hi3},
        hi4: {embed: himps, component: hi4}, 
        himps4: {embed: himps, component: hi4},
        ltbr: {embed: lockthebathroom, component: ltbr}, 
        lockthebathroom: {embed: lockthebathroom, component: ltbr},
        ltbr2: {embed: lockthebathroom, component: ltbr2}, 
        lockthebathroom2: {embed: lockthebathroom, component: ltbr2},
        lt: {embed: lunchtime, component: lt},
        lunchtime: {embed: lunchtime, component: lt},
        lt2: {embed: lunchtime, component: lt2},
        lunchtime2: {embed: lunchtime, component: lt2},
        lt3: {embed: lunchtime, component: lt3},
        lunchtime3: {embed: lunchtime, component: lt3},
        ws: {embed: watersports, component: ws},
        watersports: {embed: watersports, component: ws},
        ws2: {embed: watersports, component: ws2},
        watersports2: {embed: watersports, component: ws2},
        ws3: {embed: watersports, component: ws3},
        watersports3: {embed: watersports, component: ws3},
        ws4: {embed: watersports, component: ws4},
        watersports4: {embed: watersports, component: ws4},
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Unknown button interaction.",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
