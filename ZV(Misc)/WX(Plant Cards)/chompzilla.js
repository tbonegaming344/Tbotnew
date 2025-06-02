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
          )
      );
    const row = new ActionRowBuilder().addComponents(select);
    const chompzillaDecks = {
      budgetDecks: ["budgetmopzilla"],
      compDecks: ["valuezilla"],
      memeDecks: ["lasersnap", "moprbius"],
      comboDecks: ["budgetmopzilla", "lasersnap", "moprbius"],
      controlDecks: ["valuezilla"],
      midrangeDecks: ["budgetmopzilla", "lasersnap", "moprbius", "valuezilla"],
      allDecks: [
        "budgetmopzilla",
        "lasersnap",
        "moprbius",
        "valuezilla"
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
    const memerow = createButtons("mopribus", "lsnap");
    const lsnap = createButtons("helpmeme", "mop");
    const mop = createButtons("lasersnap", "memehelp");
    const comborow = createButtons("mopribus2", "bmz");
    const bmz = createButtons("helpcombo", "lsnap2");
    const lsnap2 = createButtons("budgetmopzilla", "mop2");
    const mop2 = createButtons("lasersnap2", "combohelp");
    const midrangerow = createButtons("mopribus3", "bmz2");
    const bmz2 = createButtons("helpmid", "lsnap3");
    const lsnap3 = createButtons("budgetmopzilla2", "mop3");
    const mop3 = createButtons("lasersnap3", "vzilla");
    const vzilla = createButtons("mopribus3", "midhelp");
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
      const embed = createHelpEmbed(
        "Chompzilla Decks",
        `To view the Chompzilla decks please select an option from the select menu below!
Note: Chompzilla has ${chompzillaDecks.allDecks.length} total decks in Tbot. Select Midrange decks to view all Chompzilla decks`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110"
      );
      const memeEmbed = createHelpEmbed(
        "Chompzilla Meme Decks",
        `My Meme decks for Chompzilla(CZ) are ${toBuildMemeString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
        `To view the Meme Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Meme decks!
  Note: Chompzilla has ${chompzillaDecks.memeDecks.length} Meme decks in Tbot`
      );
      const comboEmbed = createHelpEmbed(
        "Chompzilla Combo Decks",
        `My Combo decks for Chompzilla(CZ) are ${toBuildComboString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
        `To view the Combo Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Combo decks!
Note: Chompzilla has ${chompzillaDecks.comboDecks.length} Combo decks in Tbot`
      );
      const midrangeEmbed = createHelpEmbed(
        "Chompzilla Midrange Decks",
        `My Midrange decks for Chompzilla(CZ) are ${toBuildMidrangeString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110",
        `To view the Midrange Chompzilla decks please use the commands listed above or click on the buttons below to naviagte through all Midrange decks!
Note: Chompzilla has ${chompzillaDecks.midrangeDecks.length} Midrange decks in Tbot`
      );
    const [result] = await db.query(`SELECT * from czdecks`);
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
    const valuezilla = createDeckEmbed(result, "apotk");
    const budgetcz = createDeckEmbed(result, "budgetcz");
    const lasersnap = createDeckEmbed(result, "lasersnap");
    const mopribus = createDeckEmbed(result, "mopribus");
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
        await i.reply({ embeds: [valuezilla], flags: MessageFlags.Ephemeral });
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
        cmd: { embed: embed, component: row },
         memehelp: { embed: memeEmbed, component: memerow },
        helpmeme: { embed: memeEmbed, component: memerow },
        combohelp: { embed: comboEmbed, component: comborow },
        helpcombo: { embed: comboEmbed, component: comborow },
        midhelp: { embed: midrangeEmbed, component: midrangerow },
        helpmid: { embed: midrangeEmbed, component: midrangerow },
        bmz: { embed: budgetcz, component: bmz },
        budgetmopzilla: { embed: budgetcz, component: bmz },
        bmz2: { embed: budgetcz, component: bmz2 },
        budgetmopzilla2: { embed: budgetcz, component: bmz2 },
        vzilla: { embed: valuezilla, component: vzilla },
        valuezilla: { embed: valuezilla, component: vzilla },
        lsnap: { embed: lasersnap, component: lsnap },
        lasersnap: { embed: lasersnap, component: lsnap },
        lsnap2: { embed: lasersnap, component: lsnap2 },
        lasersnap2: { embed: lasersnap, component: lsnap2 },
        lsnap3: { embed: lasersnap, component: lsnap3 },
        lasersnap3: { embed: lasersnap, component: lsnap3 },
        mop: { embed: mopribus, component: mop },
        mopribus: { embed: mopribus, component: mop },
        mop2: { embed: mopribus, component: mop2 },
        mopribus2: { embed: mopribus, component: mop2 },
        mop3: { embed: mopribus, component: mop3 },
        mopribus3: { embed: mopribus, component: mop3 }
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
