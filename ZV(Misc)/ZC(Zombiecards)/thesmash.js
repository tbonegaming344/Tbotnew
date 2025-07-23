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
    .setColor("Orange");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `thesmash`,
  aliases: [`smash`, `sm`, `ts`, `the-smash`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpsm")
        .setLabel("Smash Decks")
        .setStyle(ButtonStyle.Success)
        .setEmoji("<:The_SmashH:1088162519958425670>")
    );
   const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Smash's decklists")
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
          .setLabel("Meme Deck")
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
          .setLabel("Control Deck")
          .setValue("control")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
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
          .setLabel("All Smash Decks")
          .setValue("all")
          .setDescription("All of the Smash decks")
          .setEmoji("<:The_SmashH:1088162519958425670>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const smashDecks = {
      budgetDecks: ["budgetsm"],
      competitiveDecks: ["pablosyeezys"], 
      ladderDecks: ["luminous"],
      memeDecks: ["whalepharaoh"],
      aggroDecks: ["budgetsm"],
      comboDecks: ["budgetsm", "pablosyeezys", "whalepharaoh"],
      controlDecks: ["whalepharaoh"],
      midrangeDecks: ["luminous", "pablosyeezys"],
      tempoDecks: ["luminous"],
      allDecks: [
        "budgetsm",
        "luminous",
        "pablosyeezys",
        "whalepharaoh",
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
    const toBuildString = buildDeckString(smashDecks.allDecks);
    const toBuildMidrangeString = buildDeckString(smashDecks.midrangeDecks);
    const toBuildComboString = buildDeckString(smashDecks.comboDecks);
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
    const alldecksrow = createButtons("whalepharaoh", "bsm");
    const bsm = createButtons("helpall", "lum");
    const lum = createButtons("budgetsm", "py");
    const py = createButtons("luminous", "wp");
    const wp = createButtons("pablosyeezys", "allhelp");
    const comborow = createButtons("whalepharoh2", "bsm2");
    const bsm2 = createButtons("combohelp", "py2");
    const py2 = createButtons("budgetsm2", "wp2");
    const wp2 = createButtons("pablosyeezys2", "helpcombo");
    const midrangerow = createButtons("pablosyeezys3", "lum2");
    const lum2 = createButtons("helpmidrange", "py3");
    const py3 = createButtons("luminous2", "midrangehelp");
    const embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle(
        "The Smash | <:Hearty:1062501636557242429><:Beastly:1062500894744264714>"
      )
      .setDescription("** - Gargantuar Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Heroic Health <:Hearty:1062501636557242429> \n Heal your Hero for 6. \n Possessed <:Hearty:1062501636557242429> \n A Zombie gets +2<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__. \n Galvanize <:Beastly:1062500894744264714> \n A Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \n Slammin' Smackdown <:Hearty:1062501636557242429><:Beastly:1062500894744264714> \n Destroy a Plant with 4<:Strength:1062501774612779039> or less.  ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "The Smash enjoys...SMASHING!",
        }
      )
      .setColor("Orange");
      const helpsm = createHelpEmbed(
        "Smash Decks",
        `To view the Smash decks please select an option from the select menu below!
  Note: Smash has ${smashDecks.allDecks.length} total decks in Tbot`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      );
      const alldecksEmbed = createHelpEmbed(
        "Smash Decks",
        `My commands for Smash(SM) are ${toBuildString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
        `To view the Smash decks please use the commands listed above or click on the buttons below to navigate through all decks!
  Note: Smash has ${smashDecks.allDecks.length} total decks in Tbot`
      );
      const comboEmbed = createHelpEmbed(
        "Smash Combo Decks",
        `My combo decks for Smash(SM) are ${toBuildComboString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
        `To view the Smash combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
  Note: Smash has ${smashDecks.comboDecks.length} combo decks in Tbot`
      );
      const midrangeEmbed = createHelpEmbed(
      "Smash Midrange Decks",
      `My midrange decks for Smash(SM) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
      `To view the Smash midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Smash has ${smashDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM smdecks`);
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
    const budgetsm = createDeckEmbed(result, "budgetsm");
    const luminous = createDeckEmbed(result, "luminous");
    const pablosyeezys = createDeckEmbed(result, "pablosyeezys");
    const whalepharaoh = createDeckEmbed(result, "whalepharaoh");
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
    if (value == "comp") {
        await i.reply({
          embeds: [pablosyeezys],
          flags: MessageFlags.Ephemeral,
        });
      }  else if (value == "meme" || value == "control") {
        await i.reply({embeds: [whalepharaoh], flags: MessageFlags.Ephemeral})
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "budget" || value == "tempo") {
        await i.reply({ embeds: [budgetsm], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
      else if(value == "ladder" || value == "tempo"){
        await i.reply({ embeds: [luminous], flags: MessageFlags.Ephemeral });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpsm: {embed: helpsm, component: row},
        helpall: {embed: alldecksEmbed, component: alldecksrow}, 
        allhelp: {embed: alldecksEmbed, component: alldecksrow}, 
        combohelp: {embed: comboEmbed, component: comborow}, 
        helpcombo: {embed: comboEmbed, component: comborow}, 
        midrangehelp: {embed: midrangeEmbed, component: midrangerow},
        helpmidrange: {embed: midrangeEmbed, component: midrangerow},
        bsm: {embed: budgetsm, component: bsm}, 
        budgetsm: {embed: budgetsm, component: bsm},
        bsm2: {embed: budgetsm, component: bsm2},
        budgetsm2: {embed: budgetsm, component: bsm2},
        py: {embed: pablosyeezys, component: py},
        pablosyeezys: {embed: pablosyeezys, component: py},
        py2: {embed: pablosyeezys, component: py2},
        pablosyeezys2: {embed: pablosyeezys, component: py2},
        py3: {embed: pablosyeezys, component: py3},
        pablosyeezys3: {embed: pablosyeezys, component: py3},
        wp: {embed: whalepharaoh, component: wp},
        whalepharaoh: {embed: whalepharaoh, component: wp},
        wp2: {embed: whalepharaoh, component: wp2},
        whalepharaoh2: {embed: whalepharaoh, component: wp2},
        lum: {embed: luminous, component: lum},
        luminous: {embed: luminous, component: lum},
        lum2: {embed: luminous, component: lum2},
        luminous2: {embed: luminous, component: lum2},
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      } else {
        await i.reply({ content: "Invalid button interaction", flags: MessageFlags.Ephemeral });
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
