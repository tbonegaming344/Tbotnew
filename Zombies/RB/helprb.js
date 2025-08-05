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
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
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
            "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Decks")
          .setValue("control")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
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
          .setLabel("All Rustbolt Decks")
          .setValue("all")
          .setDescription("View all Rustbolt decklists")
          .setEmoji("<:RustboltH:1088094706346491904>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const rustboltDecks = {
      budgetDecks: ["budgetrb"],
      competitiveDecks: ["boltbolt", "cardsbolt"],
      ladderDecks: ["marxbolt", "mechacontrol", "scimania"],
      memeDecks: [
        "igmablobchum",
        "sunbandits",
      ],
      aggroDecks: ["marxbolt"],
      comboDecks: [
        "boltbolt",
        "cardsbolt",
        "igmablobchum",
        "sunbandits",
      ],
      controlDecks: ["mechacontrol", "sunbandits"],
      midrangeDecks: ["boltbolt", "budgetrb", "igmablobchum", "scimania"],
      tempoDecks: ["cardsbolt"],
      allDecks: [
        "boltbolt",
        "budgetrb",
        "cardsbolt",
        "igmablobchum",
        "marxbolt",
        "mechacontrol",
        "scimania",
        "sunbandits"      
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
    const toBuildString = buildDeckString(rustboltDecks.allDecks);
    const toBuildCompString = buildDeckString(rustboltDecks.competitiveDecks);
    const toBuildLadderString = buildDeckString(rustboltDecks.ladderDecks);
    const toBuildMemeString = buildDeckString(rustboltDecks.memeDecks);
    const toBuildComboString = buildDeckString(rustboltDecks.comboDecks);
    const toBuildControlString = buildDeckString(rustboltDecks.controlDecks);
    const toBuildMidrangeString = buildDeckString(rustboltDecks.midrangeDecks);
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
    const alldecksrow = createButtons("sunbandits", "bol");
    const bol = createButtons("helpall", "brb");
    const brb = createButtons("boltbolt", "cbolt");
    const cbolt = createButtons("budgetrb", "igb");
    const igb = createButtons("cardsbolt", "marx");
    const marx = createButtons("igmablobchum", "mc");
    const mc = createButtons("marxbolt", "smania");
    const smania = createButtons("mechacontrol", "sb");
    const sb = createButtons("scimania", "allhelp");
    const comprow = createButtons("cardsbolt2", "bol2"); 
    const bol2 = createButtons("helpcomp", "cbolt2");
    const cbolt2 = createButtons("boltbolt2", "comphelp");
    const ladderrow = createButtons("scimania2", "marx2");
    const marx2 = createButtons("ladderhelp", "mc2");
    const mc2 = createButtons("marxbolt2", "smania2");
    const smania2 = createButtons("mechacontrol2", "helpladder");
    const memerow = createButtons("sunbandits2", "igb2");
    const igb2 = createButtons("memehelp", "sb2");
    const sb2 = createButtons("igmablobchum2", "helpmeme");
    const comborow = createButtons("sunbandits3", "bol3");
    const bol3 = createButtons("combohelp", "cbolt3");
    const cbolt3 = createButtons("boltbolt3", "igb3");
    const igb3 = createButtons("cardsbolt3", "sb3");
    const sb3 = createButtons("igmablobchum3", "helpcombo");
    const controlrow = createButtons("sunbandits4", "mc3");
    const mc3 = createButtons("controlhelp", "sb4");
    const sb4 = createButtons("mechacontrol3", "helpcontrol");
    const midrangerow = createButtons("scimania3", "bol4");
    const bol4 = createButtons("midrangehelp", "brb2");
    const brb2 = createButtons("boltbolt4", "igb4");
    const igb4 = createButtons("budgetrb2", "smania3");
    const smania3 = createButtons("igmablobchum4", "helpmidrange");
    const alldecksEmbed = createHelpEmbed(
      "Rustbolt Decks",
      `My commands for Rustbolt(RB) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Rustbolt has ${rustboltDecks.allDecks.length} total decks in Tbot`
    );
    const helprb = createHelpEmbed(
      "Rustbolt Decks",
      `To view the RustBolt decks please select an option from the select menu below!
Note: Rustbolt has ${rustboltDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027"
    );
    const compEmbed = createHelpEmbed(
      "Rustbolt Competitive Decks",
      `My commands for Rustbolt(RB) are ${toBuildCompString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt competitive decks please use the commands listed above or click on the
buttons below to navigate through all competitive decks!
Note: Rustbolt has ${rustboltDecks.competitiveDecks.length} total competitive decks in Tbot`
    );
    const ladderEmbed = createHelpEmbed(
      "Rustbolt Ladder Decks",
      `My commands for Rustbolt(RB) are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Rustbolt has ${rustboltDecks.ladderDecks.length} total ladder decks in Tbot`
    );
    const memeEmbed = createHelpEmbed(
      "Rustbolt Meme Decks",
      `My commands for Rustbolt(RB) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Rustbolt has ${rustboltDecks.memeDecks.length} total meme decks in Tbot`
    );
    const comboEmbed = createHelpEmbed(
      "Rustbolt Combo Decks",
      `My commands for Rustbolt(RB) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Rustbolt has ${rustboltDecks.comboDecks.length} total combo decks in Tbot`
    );
    const controlEmbed = createHelpEmbed(
      "Rustbolt Control Decks",
      `My commands for Rustbolt(RB) are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt control decks please use the commands listed above or click on the buttons below to navigate through all control decks!
Note: Rustbolt has ${rustboltDecks.controlDecks.length} total control decks in Tbot`
    );
    const midrangeEmbed = createHelpEmbed(
      "Rustbolt Midrange Decks",
      `My commands for Rustbolt(RB) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027",
      `To view the RustBolt midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Rustbolt has ${rustboltDecks.midrangeDecks.length} total midrange decks in Tbot`
    );
    const [result] = await db.query(`select * from rbdecks`);
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
        .setColor("Orange");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const boltbolt = createDeckEmbed(result, "boltbolt");
    const budgetrb = createDeckEmbed(result, "budgetrb");
    const igmablobchum = createDeckEmbed(result, "igmablobchum");
    const marxbolt = createDeckEmbed(result, "marxbolt");
    const mechacontrol = createDeckEmbed(result, "mechacontrol");
    const scimania = createDeckEmbed(result, "scimania");
    const cardsbolt = createDeckEmbed(result, "poggerrazzi");
    const sunbandits = createDeckEmbed(result, "sunbandits");
    const m = await message.channel.send({
      embeds: [helprb],
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
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "comp") {
        await i.update({ embeds: [compEmbed], components: [comprow] });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.reply({ embeds: [marxbolt], flags: MessageFlags.Ephemeral });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.reply({ embeds: [cardsbolt], flags: MessageFlags.Ephemeral });
      } else if (value == "budget") {
        await i.reply({ embeds: [budgetrb], flags: MessageFlags.Ephemeral });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpall: { embed: alldecksEmbed, component: alldecksrow },
        allhelp: { embed: alldecksEmbed, component: alldecksrow },
        helpladder: { embed: ladderEmbed, component: ladderrow },
        ladderhelp: { embed: ladderEmbed, component: ladderrow },
        helpmeme: { embed: memeEmbed, component: memerow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpcombo: { embed: comboEmbed, component: comborow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcontrol: { embed: controlEmbed, component: controlrow },
        controlhelp: { embed: controlEmbed, component: controlrow },
        helpmidrange: { embed: midrangeEmbed, component: midrangerow },
        midrangehelp: { embed: midrangeEmbed, component: midrangerow },
        helpcomp: { embed: compEmbed, component: comprow },
        comphelp: { embed: compEmbed, component: comprow },
        bol: { embed: boltbolt, component: bol },
        boltbolt: { embed: boltbolt, component: bol },
        bol2: { embed: boltbolt, component: bol2 },
        boltbolt2: { embed: boltbolt, component: bol2 },
        bol3: { embed: boltbolt, component: bol3 },
        boltbolt3: { embed: boltbolt, component: bol3 },
        bol4: { embed: boltbolt, component: bol4 },
        boltbolt4: { embed: boltbolt, component: bol4 },
        brb: { embed: budgetrb, component: brb },
        budgetrb: { embed: budgetrb, component: brb },
        brb2: { embed: budgetrb, component: brb2 },
        budgetrb2: { embed: budgetrb, component: brb2 },
        cbolt: { embed: cardsbolt, component: cbolt },
        cardsbolt: { embed: cardsbolt, component: cbolt },
        cbolt2: { embed: cardsbolt, component: cbolt2 },
        cardsbolt2: { embed: cardsbolt, component: cbolt2 },
        cbolt3: { embed: cardsbolt, component: cbolt3 },
        cardsbolt3: { embed: cardsbolt, component: cbolt3 },
        igb: { embed: igmablobchum, component: igb },
        igmablobchum: { embed: igmablobchum, component: igb },
        igb2: { embed: igmablobchum, component: igb2 },
        igmablobchum2: { embed: igmablobchum, component: igb2 },
        igb3: { embed: igmablobchum, component: igb3 },
        igmablobchum3: { embed: igmablobchum, component: igb3 },
        igb4: { embed: igmablobchum, component: igb4 },
        igmablobchum4: { embed: igmablobchum, component: igb4 },
        marx: { embed: marxbolt, component: marx },
        marxbolt: { embed: marxbolt, component: marx },
        marx2: { embed: marxbolt, component: marx2 },
        marxbolt2: { embed: marxbolt, component: marx2 },
        mc: { embed: mechacontrol, component: mc },
        mechacontrol: { embed: mechacontrol, component: mc },
        mc2: { embed: mechacontrol, component: mc2 },
        mechacontrol2: { embed: mechacontrol, component: mc2 },
        mc3: { embed: mechacontrol, component: mc3 },
        mechacontrol3: { embed: mechacontrol, component: mc3 },
        sb: { embed: sunbandits, component: sb },
        sunbandits: { embed: sunbandits, component: sb },
        sb2: { embed: sunbandits, component: sb2 },
        sunbandits2: { embed: sunbandits, component: sb2 },
        sb3: { embed: sunbandits, component: sb3 },
        sunbandits3: { embed: sunbandits, component: sb3 },
        sb4: { embed: sunbandits, component: sb4 },
        sunbandits4: { embed: sunbandits, component: sb4 }, 
        smania: { embed: scimania, component: smania },
        scimania: { embed: scimania, component: smania },
        smania2: { embed: scimania, component: smania2 },
        scimania2: { embed: scimania, component: smania2 },
        smania3: { embed: scimania, component: smania3 },
        scimania3: { embed: scimania, component: smania3 }
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button interaction",
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
