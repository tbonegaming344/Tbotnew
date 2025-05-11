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
    .setColor("Red");
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
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
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
          .setLabel("All Solar Flare Decks")
          .setValue("all")
          .setDescription("View all Solar Flare decks")
          .setEmoji("<:SFSip:1018934631531282532>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const solarFlareDecks = {
      budgetDecks: ["budgetswarmsf"],
      competitiveDecks: ["figlottery"],
      memeDecks: ["funnyflare", "healburn", "psychosolstice", "ramp2seedling"],
      aggroDecks: ["budgetswarmsf"],
      comboDecks: ["funnyflare", "healburn", "psychosolstice", "ramp2seedling"],
      midrangeDecks: [
        "figlottery",
        "funnyflare",
        "healburn",
        "psychosolstice",
        "ramp2seedling",
      ],
      allDecks: [
        "budgetswarmsf",
        "figlottery",
        "funnyflare",
        "healburn",
        "psychosolstice",
        "ramp2seedling",
      ],
    };
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
    const memerow = createButtons("ramp2seedling", "ff");
    const ff = createButtons("helpmeme", "hburn");
    const hburn = createButtons("funnyflare", "psol");
    const psol = createButtons("healburn", "r2s");
    const r2s = createButtons("psychosolstice", "memehelp");
    const comborow = createButtons("ramp2seedling2", "ff2");
    const ff2 = createButtons("helpcombo", "hburn2");
    const hburn2 = createButtons("funnyflare2", "psol2");
    const psol2 = createButtons("healburn2", "r2s2");
    const r2s2 = createButtons("psychosolstice2", "combohelp");
    const midrangerow = createButtons("ramp2seedling3", "flottery");
    const flottery = createButtons("helpmid", "ff3");
    const ff3 = createButtons("figlottery", "hburn3");
    const hburn3 = createButtons("funnyflare3", "psol3");
    const psol3 = createButtons("healburn3", "r2s3");
    const r2s3 = createButtons("psychosolstice3", "midhelp");
    const alldecksrow = createButtons("ramp2seedling4", "bsf");
    const bsf = createButtons("helpall", "flottery2");
    const flottery2 = createButtons("budgetsf", "ff4");
    const ff4 = createButtons("figlottery2", "hburn4");
    const hburn4 = createButtons("funnyflare3", "psol4");
    const psol4 = createButtons("psol4", "r2s4");
    const r2s4 = createButtons("psychosolstice4", "allhelp");

    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMemeString = BuildDeckString(solarFlareDecks.memeDecks);
    const toBuildComboString = BuildDeckString(solarFlareDecks.comboDecks);
    const toBuildMidrangeString = BuildDeckString(
      solarFlareDecks.midrangeDecks
    );
    const toBuildString = BuildDeckString(solarFlareDecks.allDecks);
    const embed = createHelpEmbed(
      "Solar Flare Decks",
      `To view the Solar Flare decks please select an option from the select menu below!
Note: Solar Flare has ${solarFlareDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist"
    );
    const memeEmbed = createHelpEmbed(
      "Solar Flare Meme Decks",
      `My meme decks for Solar Flare(SF) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist",
      `To view the meme Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Solar Flare has ${solarFlareDecks.memeDecks.length} meme decks in Tbot`
    );
    const allEmbed = createHelpEmbed(
      "Solar Flare Decks",
      `My decks for Solar Flare(SF) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist",
      `To view the Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Solar Flare has ${solarFlareDecks.allDecks.length} decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      "Solar Flare Combo Decks",
      `My combo decks for Solar Flare(SF) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist",
      `To view the combo Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Solar Flare has ${solarFlareDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      "Solar Flare Midrange Decks",
      `My midrange decks for Solar Flare(SF) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist",
      `To view the midrange Solar Flare decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Solar Flare has ${solarFlareDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from sfdecks`);

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
        .setColor("Yellow");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetsf = createDeckEmbed(result, "budgetswarmsf");
    const funnyflare = createDeckEmbed(result, "funnyflare");
    const healburn = createDeckEmbed(result, "healburn");
    const figlottery = createDeckEmbed(result, "healmidflare");
    const psychosolstice = createDeckEmbed(result, "psychosolstice");
    const ramp2seedling = createDeckEmbed(result, "ramp2seedling");
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
      if (value == "comp") {
        await i.reply({ embeds: [figlottery], flags: MessageFlags.Ephemeral });
      } else if (value == "budget" || value == "aggro") {
        await i.reply({ embeds: [budgetsf], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
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
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpall: { embed: allEmbed, component: alldecksrow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpmeme: { embed: memeEmbed, component: memerow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcombo: { embed: comboEmbed, component: comborow },
        midhelp: { embed: midrangeEmbed, component: midrangerow },
        helpmid: { embed: midrangeEmbed, component: midrangerow },
        bsf: { embed: budgetsf, component: bsf },
        budgetsf: { embed: budgetsf, component: bsf },
        flottery: { embed: figlottery, component: flottery },
        figlottery: { embed: figlottery, component: flottery },
        flottery2: { embed: figlottery, component: flottery2 },
        figlottery2: { embed: figlottery, component: flottery2 },
        ff: { embed: funnyflare, component: ff },
        funnyflare: { embed: funnyflare, component: ff },
        ff2: { embed: funnyflare, component: ff2 },
        funnyflare2: { embed: funnyflare, component: ff2 },
        ff3: { embed: funnyflare, component: ff3 },
        funnyflare3: { embed: funnyflare, component: ff3 },
        ff4: { embed: funnyflare, component: ff4 },
        funnyflare4: { embed: funnyflare, component: ff4 },
        hburn: { embed: healburn, component: hburn },
        healburn: { embed: healburn, component: hburn },
        hburn2: { embed: healburn, component: hburn2 },
        healburn2: { embed: healburn, component: hburn2 },
        hburn3: { embed: healburn, component: hburn3 },
        healburn3: { embed: healburn, component: hburn3 },
        hburn4: { embed: healburn, component: hburn4 },
        healburn4: { embed: healburn, component: hburn4 },
        psol: { embed: psychosolstice, component: psol },
        psychosolstice: { embed: psychosolstice, component: psol },
        psol2: { embed: psychosolstice, component: psol2 },
        psychosolstice2: { embed: psychosolstice, component: psol2 },
        psol3: { embed: psychosolstice, component: psol3 },
        psychosolstice3: { embed: psychosolstice, component: psol3 },
        psol4: { embed: psychosolstice, component: psol4 },
        psychosolstice4: { embed: psychosolstice, component: psol4 },
        r2s: { embed: ramp2seedling, component: r2s },
        ramp2seedling: { embed: ramp2seedling, component: r2s },
        r2s2: { embed: ramp2seedling, component: r2s2 },
        ramp2seedling2: { embed: ramp2seedling, component: r2s2 },
        r2s3: { embed: ramp2seedling, component: r2s3 },
        ramp2seedling3: { embed: ramp2seedling, component: r2s3 },
        r2s4: { embed: ramp2seedling, component: r2s4 },
        ramp2seedling4: { embed: ramp2seedling, component: r2s4 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button action",
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
