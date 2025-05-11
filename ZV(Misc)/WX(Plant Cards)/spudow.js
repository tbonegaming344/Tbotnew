const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
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
const db = require("../../index.js");
module.exports = {
  name: `spudow`,
  aliases: [`sp`, `spud`, `sd`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Spudow Decks")
        .setEmoji("<:spudgun:1100168090110656582>")
        .setStyle(ButtonStyle.Danger)
    );
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Spudow decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
        .setLabel("Budget Deck")
        .setValue("budget")
        .setDescription("A Deck that is cheap for new players")
        .setEmoji("💰"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Competitive Deck")
        .setValue("competitive")
        .setDescription("Some of the best Decks in the game")
        .setEmoji("<:compemote:1325461143136764060>"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Meme Decks")
        .setDescription("Decks that are built off a weird/fun combo")
        .setValue("meme"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Combo Deck")
        .setDescription(
          "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
        )
        .setValue("combo"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Control Decks")
        .setDescription(
          'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
        )
        .setValue("control"),
      new StringSelectMenuOptionBuilder()
        .setLabel("Midrange Decks")
        .setDescription(
          "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
        )
        .setValue("midrange"),
      new StringSelectMenuOptionBuilder()
        .setLabel("All Spudow Decks")
        .setValue("all")
        .setDescription("View all the Spudow decks")
        .setEmoji("<:spudgun:1100168090110656582>")
    );

  const row = new ActionRowBuilder().addComponents(select);
  const spudowDecks = {
    budgetDecks: ["budgetsp"],
    competitiveDecks: ["radiotherapy"],
    memeDecks: ["nutting", "popsicle", "recycling"],
    comboDecks: ["nutting"],
    controlDecks: ["radiotherapy", "popsicle"],
    midrangeDecks: ["budgetsp", "recycling"],
    allDecks: ["budgetsp", "nutting", "popsicle", "radiotherapy", "recycling"]
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

  const toBuildString = buildDeckString(spudowDecks.allDecks);
  const toBuildMemeString = buildDeckString(spudowDecks.memeDecks);
  const toBuildControlString = buildDeckString(spudowDecks.controlDecks);
  const toBuildMidrangeString = buildDeckString(spudowDecks.midrangeDecks);
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
  const memerow = createButtons("recycling", "nut2");
  const nut2 = createButtons("helpmeme", "pop2");
  const pop2 = createButtons("nuttin2", "recy");
  const recy = createButtons("popsicle2", "memehelp");
  const controlrow = createButtons("radiotherapy2", "pop");
  const pop = createButtons("helpcontrol", "radio2");
  const radio2 = createButtons("popsicle", "controlhelp"); 
  const midrangerow = createButtons("recycling2", "bsp");
  const bsp = createButtons("helpmidrange", "recy2");
  const recy2 = createButtons("budgetsp", "midrangehelp");
  const alldecksrow = createButtons("recycling3", "bsp2");
  const bsp2 = createButtons("helpall", "nut");
  const nut = createButtons("budgetsp2", "pop3");
  const pop3 = createButtons("nuttin", "radio");
  const radio = createButtons("popsicle3", "recy3");
  const recy3 = createButtons("radiotherapy", "helpall");
    const sp = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/4/49/HD_Tater_Toss.png/revision/latest?cb=20190624184934&path-prefix=protagonist"
      )
      .setTitle(
        "Spudow | <:Kabloom:1062502137826910268><:Guardian:1062501130501885973>"
      )
      .setDescription("**\\- Root Hero  -**")
      .setColor("Red")

      .addFields(
        {
          name: "Superpowers",
          value:
            "Bubble Up <:Guardian:1062501130501885973>\n Move a Plant. It gets +4<:Health:1062515540712751184>. \nStorm Front <:Kabloom:1062502137826910268> \n All Plants get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. \nMeteor Strike <:Kabloom:1062502137826910268> \n Do 3 damage to a Zombie. \nTater Toss <:Kabloom:1062502137826910268><:Guardian:1062501130501885973> \n Make a 1<:Health:1062515540712751184> \n Hothead that has __Team-Up__. \n **When destroyed:** Do 6 damage to a Zombie here.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "Always tries to keep his head in tough situations. Always loses it.",
        }
      );
      const embed = createHelpEmbed(
        "Spudow Decks",
        `To view the Spudow decks please select an option using the select menu below!
  Note: Spudow has ${spudowDecks.allDecks.length} decks in Tbot`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719"
      );
      const memeEmbed = createHelpEmbed(
        "Spudow Meme Decks",
        `My meme decks for Spudow are ${toBuildMemeString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719",
        `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
  Note: Spudow has ${spudowDecks.memeDecks.length} decks in Tbot`
      );
      const allEmbed = createHelpEmbed(
        "All Spudow Decks",
        `My decks for Spudow are ${toBuildString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719",
        `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
  Note: Spudow has ${spudowDecks.allDecks.length} decks in Tbot`
      );
      const controlEmbed = createHelpEmbed(
        "Spudow Control Decks",
        `My control decks for Spudow are ${toBuildControlString}`,
        "https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719",
        `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
  Note: Spudow has ${spudowDecks.controlDecks.length} decks in Tbot`
      );
      const midrangeEmbed = createHelpEmbed(
        "Spudow Midrange Decks",
        `My midrange decks for Spudow are ${toBuildMidrangeString}`,
        "https://static.wikia.nocookie.net/plantsvzninjastars/images/0/0f/Spudow.png/revision/latest?cb=20230921000000",
        `To view the Spudow decks either use the listed commands above or navigate through all decks by using the buttons below!
  Note: Spudow has ${spudowDecks.midrangeDecks.length} decks in Tbot`
      );
    const [result] = await db.query(`SELECT * from spdecks`);
    /**
     * This function creates an embed for a deck
     * @param result - The result from the database
     * @param deckName - The name of the deck
     * @returns {embed}  The embedBuilder for the deck
     */
    function createDeckEmbed(result, deckName) {
      const embed = new EmbedBuilder()
        .setTitle(`${result[5][deckName]}`)
        .setDescription(`${result[3][deckName]}`)
        .setFooter({ text: `${result[2][deckName]}` })
        .addFields(
          {
            name: "Deck Type",
            value: `${result[6][deckName]}`,
            inline: true,
          },
          {
            name: "Archetype",
            value: `${result[0][deckName]}`,
            inline: true,
          },
          {
            name: "Deck Cost",
            value: `${result[1][deckName]}`,
            inline: true,
          }
        )
        .setColor("#964B00");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }

      return embed;
    }
    const budgetsp = createDeckEmbed(result, "budgetburstsp");
    const radiotherapy = createDeckEmbed(result, "radiotherapy");
    const recycling = createDeckEmbed(result, "recycling");
    const nuttin = createDeckEmbed(result, "nutting");
    const popsicle = createDeckEmbed(result, "popsicle");
    const m = await message.channel.send({ embeds: [sp], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value === "budget") {
        await i.reply({ embeds: [budgetsp], flags: MessageFlags.Ephemeral });
      } else if (value === "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.reply({ embeds: [nuttin], flags: MessageFlags.Ephemeral });
      } else if (value === "competitive") {
        await i.reply({
          embeds: [radiotherapy],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (value === "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
      else if(value === "midrange"){
        await i.update({embeds: [midrangeEmbed], components: [midrangerow]})
      }
    }

    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        cmd: { embed: embed, component: row },
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpall: { embed: allEmbed, component: alldecksrow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpmeme: { embed: memeEmbed, component: memerow },
        controlhelp: { embed: controlEmbed, component: controlrow },
        helpcontrol: { embed: controlEmbed, component: controlrow },
        bsp: { embed: budgetsp, component: bsp },
        budgetsp: { embed: budgetsp, component: bsp },
        bsp2: { embed: budgetsp, component: bsp2 },
        budgetsp2: { embed: budgetsp, component: bsp2 },
        nut: { embed: nuttin, component: nut },
        nuttin: { embed: nuttin, component: nut },
        nut2: { embed: nuttin, component: nut2 },
        nuttin2: { embed: nuttin, component: nut2 },
        radio: { embed: radiotherapy, component: radio },
        radiotherapy: { embed: radiotherapy, component: radio },
        radio2: { embed: radiotherapy, component: radio2 },
        radiotherapy2: { embed: radiotherapy, component: radio2 },
        pop: { embed: popsicle, component: pop },
        popsicle: { embed: popsicle, component: pop },
        pop2: { embed: popsicle, component: pop2 },
        popsicle2: { embed: popsicle, component: pop2 },
        pop3: { embed: popsicle, component: pop3 },
        popsicle3: { embed: popsicle, component: pop3 },
        recy: {embed: recycling, component: recy},
        recycling: {embed: recycling, component: recy},
        recy2: {embed: recycling, component: recy2},
        recycling2: {embed: recycling, component: recy2},
        recy3: {embed: recycling, component: recy3},
        recycling3: {embed: recycling, component: recy3},
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Unknown button action",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId === "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
