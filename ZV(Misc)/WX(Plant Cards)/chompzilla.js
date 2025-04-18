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
 * The CreateHelpEmbed function creates an embed with the given title, description, thumbnail, and footer.
 * @param {string} title - The title of the embed
 * @param {string} description - The description of the embed
 * @param {string} thumbnail - The thumbnail of the embed
 * @param {string} footer - The footer of the embed
 * @returns {EmbedBuilder} - The embed object
 */
function CreateHelpEmbed(title, description, thumbnail, footer) {
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
module.exports = {
  name: `chompzilla`,
  aliases: [`cz`, `zilla`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Chompzilla Decks")
        .setEmoji("<:constsFrickenChomp:1100168574829596824>")
        .setStyle(ButtonStyle.Success)
    );
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view chompzilla's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setEmoji("💰")
          .setDescription("A Deck that is cheap for new players"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setEmoji("<:compemote:1325461143136764060>")
          .setDescription("Some of the best decks in the game"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
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
          .setLabel("All Chompzilla Decks")
          .setValue("all")
          .setEmoji("<:constsFrickenChomp:1100168574829596824>")
          .setDescription("View all Chompzilla Decks")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const chompzillaDecks = {
      budgetDecks: ["budgetmopzilla"],
      compDecks: ["healcontrol"],
      memeDecks: ["lasersnap", "moprbius"],
      ladderDecks: ["midred"],
      comboDecks: ["budgetmopzilla", "lasersnap", "midred", "moprbius"],
      controlDecks: ["healcontrol"],
      midrangeDecks: ["budgetmopzilla", "lasersnap", "midred", "moprbius"],
      allDecks: [
        "budgetmopzilla",
        "healcontrol",
        "lasersnap",
        "midred",
        "moprbius",
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
    const toBuildMemeString = buildDeckString(chompzillaDecks.memeDecks);
    const toBuildComboString = buildDeckString(chompzillaDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(
      chompzillaDecks.midrangeDecks
    );
    const toBuildString = buildDeckString(chompzillaDecks.allDecks);
    /**
     * The CreateButtons function creates a row of buttons for the embed
     * @param {string} leftButtonId - The ID of the left button to control the left button 
     * @param {string} rightButtonId - The ID of the right button to control the right button
     * @returns {ActionRowBuilder} - The ActionRowBuilder object with the buttons
     */
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
    const memerow = new CreateButtons("mopribus", "lsnap");
    const lsnap = new CreateButtons("helpmeme", "mop");
    const mop = new CreateButtons("lasersnap", "memehelp");
    const comborow = new CreateButtons("mopribus2", "bmz");
    const bmz = new CreateButtons("helpcombo", "lsnap2");
    const lsnap2 = new CreateButtons("budgetmopzilla", "mred");
    const mred = new CreateButtons("lasersnap2", "mop2");
    const mop2 = new CreateButtons("midred2", "combohelp");
    const midrangerow = new CreateButtons("mopribus3", "bmz2");
    const bmz2 = new CreateButtons("helpmid", "lsnap3");
    const lsnap3 = new CreateButtons("budgetmopzilla2", "mred2");
    const mred2 = new CreateButtons("lasersnap3", "mop3");
    const mop3 = new CreateButtons("midred3", "midhelp");
    const alldecksrow = new CreateButtons("mopribus4", "bmz3");
    const bmz3 = new CreateButtons("helpall", "healcon");
    const healcon = new CreateButtons("budgetmopzilla3", "lsnap4");
    const lsnap4 = new CreateButtons("healcontrol", "mred3");
    const mred3 = new CreateButtons("lasersnap4", "mop4");
    const mop4 = new CreateButtons("midred4", "allhelp");
    const cz = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110"
      )
      .setTitle(
        "Chompzilla | <:MegaGrow:1062501412992458802><:Solar:1062502678384607262>"
      )
      .setDescription("**\\- Flytrap Hero  -**")
      .setColor("Green")

      .addFields(
        {
          name: "Superpowers",
          value:
            "Holo-Flora <:MegaGrow:1062501412992458802> \n Draw two cards. \n Geyser <:Solar:1062502678384607262> \n Heal your Hero and all Plants for 4. \n Scorched Earth <:Solar:1062502678384607262> \n All Zombies on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Devour <:MegaGrow:1062501412992458802><:Solar:1062502678384607262> \n Destroy a Zombie with the lowest Health. ",
        },
        {
          name: "Set-Rarity",
          value: "Premium - Hero",
        },
        {
          name: "Flavor Text",
          value:
            "She flosses after every meal and still, Zombie Breath is a real problem.",
        }
      );
    const embed = new CreateHelpEmbed(
      "Chompzilla Decks",
      `To view the Chompzilla decks please select an option from the select menu below!
  Note: Chompzilla has ${chompzillaDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110"
    );
    const memeEmbed = new CreateHelpEmbed(
      "Chompzilla Meme Decks",
      `My Meme decks for Chompzilla(CZ) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Meme Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Meme decks!
  Note: Chompzilla has ${chompzillaDecks.memeDecks.length} Meme decks in Tbot`
    );
    const allEmbed = new CreateHelpEmbed(
      "Chompzilla Decks",
      `My decks for Chompzilla(CZ) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all decks!
  Note: Chompzilla has ${chompzillaDecks.allDecks.length} decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Chompzilla Combo Decks",
      `My Combo decks for Chompzilla(CZ) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Combo Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Combo decks!
  Note: Chompzilla has ${chompzillaDecks.comboDecks.length} Combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Chompzilla Midrange Decks",
      `My Midrange decks for Chompzilla(CZ) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
      `To view the Midrange Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Midrange decks!
  Note: Chompzilla has ${chompzillaDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from czdecks`);
    /**
     * The CreateDeckEmbed function creates an embed for a specific deck
     * @param {string} deckName - The name of the deck
     * @param {*} result - The result from the database query
     * @returns The embed for the deck
     */
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
    const healcontrol = new CreateDeckEmbed(result, "apotk");
    const budgetcz = new CreateDeckEmbed(result, "budgetcz");
    const lasersnap = new CreateDeckEmbed(result, "lasersnap");
    const midred = new CreateDeckEmbed(result, "midred");
    const mopribus = new CreateDeckEmbed(result, "mopribus");
    const m = await message.channel.send({ embeds: [cz], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i - The interaction object
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget") {
        await i.reply({ embeds: [budgetcz], flags: MessageFlags.Ephemeral });
      } else if (value == "comp" || value == "control") {
        await i.reply({ embeds: [healcontrol], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "ladder") {
        await i.reply({ embeds: [midred], flags: MessageFlags.Ephemeral });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        cmd: { embed: embed, component: row },
        memehelp: { embed: memeEmbed, component: memerow },
        helpmeme: { embed: memeEmbed, component: memerow },
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpall: { embed: allEmbed, component: alldecksrow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcombo: { embed: comboEmbed, component: comborow },
        midhelp: { embed: midrangeEmbed, component: midrangerow },
        helpmid: { embed: midrangeEmbed, component: midrangerow },
        bmz: { embed: budgetcz, component: bmz },
        budgetmopzilla: { embed: budgetcz, component: bmz },
        bmz2: { embed: budgetcz, component: bmz2 },
        budgetmopzilla2: { embed: budgetcz, component: bmz2 },
        bmz3: { embed: budgetcz, component: bmz3 },
        budgetmopzilla3: { embed: budgetcz, component: bmz3 },
        healcon: { embed: healcontrol, component: healcon },
        healcontrol: { embed: healcontrol, component: healcon },
        lsnap: { embed: lasersnap, component: lsnap },
        lasersnap: { embed: lasersnap, component: lsnap },
        lsnap2: { embed: lasersnap, component: lsnap2 },
        lasersnap2: { embed: lasersnap, component: lsnap2 },
        lsnap3: { embed: lasersnap, component: lsnap3 },
        lasersnap3: { embed: lasersnap, component: lsnap3 },
        lsnap4: { embed: lasersnap, component: lsnap4 },
        lasersnap4: { embed: lasersnap, component: lsnap4 },
        mred: { embed: midred, component: mred },
        midred: { embed: midred, component: mred },
        mred2: { embed: midred, component: mred2 },
        midred2: { embed: midred, component: mred2 },
        mred3: { embed: midred, component: mred3 },
        midred3: { embed: midred, component: mred3 },
        mop: { embed: mopribus, component: mop },
        mopribus: { embed: mopribus, component: mop },
        mop2: { embed: mopribus, component: mop2 },
        mopribus2: { embed: mopribus, component: mop2 },
        mop3: { embed: mopribus, component: mop3 },
        mopribus3: { embed: mopribus, component: mop3 },
        mop4: { embed: mopribus, component: mop4 },
        mopribus4: { embed: mopribus, component: mop4 },
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
