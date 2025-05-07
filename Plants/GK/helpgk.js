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
const db = require("../../index.js");
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
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
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
          .setLabel("Combo Deck")
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
          .setLabel("All Grass Knuckles Decks")
          .setValue("all")
          .setDescription("View all Grass Knuckles decks")
          .setEmoji("<:FUCKLES:1100168498363240518>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const grassKnucklesDecks = {
      budgetDecks: ["budgetgk"],
      ladderDecks: ["pawntrickstab"],
      memeDecks: ["dinogloves", "healthotk"],
      aggroDecks: ["dinogloves"],
      comboDecks: ["healthotk"],
      controlDecks: ["pawntrickstab"],
      midrangeDecks: ["budgetgk", "healthotk"],
      allDecks: ["budgetgk", "dinogloves", "healthotk", "pawntrickstab"],
    };
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
    const memerow = new CreateButtons("healthotk", "dgloves");
    const dgloves = new CreateButtons("helpmeme", "hotk");
    const hotk = new CreateButtons("dinogloves", "memehelp");
    const midrangerow = new CreateButtons("healthotk2", "bgk");
    const bgk = new CreateButtons("helpmidrange", "hotk2");
    const hotk2 = new CreateButtons("budgetgk", "midrangehelp");
    const alldecksrow = new CreateButtons("pawntrickstab", "bgk2");
    const bgk2 = new CreateButtons("helpall", "dgloves2");
    const dgloves2 = new CreateButtons("budgetgk2", "hotk3");
    const hotk3 = new CreateButtons("dinogloves2", "pts");
    const pts = new CreateButtons("healthotk3", "allhelp");
    function BuildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = BuildDeckString(grassKnucklesDecks.allDecks);
    const toBuildMidrangeString = BuildDeckString(grassKnucklesDecks.midrangeDecks);
    const toBuildMemeString = BuildDeckString(grassKnucklesDecks.memeDecks);
    //Help GK Embed
    const embed = new CreateHelpEmbed(
      "Grass Knuckles Decks",
      `To view the Grass Knuckles decks please select an option from the select menu below!
Note: Grass Knuckles has ${grassKnucklesDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist"
    );
    const memeEmbed = new CreateHelpEmbed(
      "Grass Knuckles Meme Decks",
      `My meme decks for Grass Knuckles(GK) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist",
      `To view the Grass Knuckles please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Grass Knuckles has ${grassKnucklesDecks.memeDecks.length} meme decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Grass Knuckles Midrange Decks",
      `My midrange decks for Grass Knuckles(GK) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist",
      `To view the Grass Knuckles decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Grass Knuckles has ${grassKnucklesDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const allEmbed = new CreateHelpEmbed(
      "All Grass Knuckles Decks",
      `My decks for Grass Knuckles(GK) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist",
      `To view the Grass Knuckles decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Grass Knuckles has ${grassKnucklesDecks.allDecks.length} decks in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM gkdecks`);

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
        .setColor("#964B00");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetgk = new CreateDeckEmbed(result, "budgetgk");
    const dinogloves = new CreateDeckEmbed(result, "dinogloves");
    const healthotk = new CreateDeckEmbed(result, "healthotk");
    const pawntrickstab = new CreateDeckEmbed(result, "pawntrickstab");
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
      if (value == "budget" || value == "tempo") {
        await i.reply({ embeds: [budgetgk], flags: MessageFlags.Ephemeral });
      } else if (value == "aggro") {
        await i.reply({ embeds: [dinogloves], flags: MessageFlags.Ephemeral });
      } else if (value == "combo") {
        await i.reply({ embeds: [healthotk], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "ladder" || value == "control") {
        await i.reply({
          embeds: [pawntrickstab],
          flags: MessageFlags.Ephemeral,
        });
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
        helpmeme: { embed: memeEmbed, component: memerow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpmidrange: { embed: midrangeEmbed, component: midrangerow },
        midrangehelp: { embed: midrangeEmbed, component: midrangerow },
        helpall: { embed: allEmbed, component: alldecksrow },
        allhelp: { embed: allEmbed, component: alldecksrow },
        bgk: { embed: budgetgk, component: bgk },
        budgetgk: { embed: budgetgk, component: bgk },
        bgk2: { embed: budgetgk, component: bgk2 },
        budgetgk2: { embed: budgetgk, component: bgk2 },
        dgloves: { embed: dinogloves, component: dgloves },
        dinogloves: { embed: dinogloves, component: dgloves },
        dgloves2: { embed: dinogloves, component: dgloves2 },
        dinogloves2: { embed: dinogloves, component: dgloves2 },
        hotk: { embed: healthotk, component: hotk },
        healthotk: { embed: healthotk, component: hotk },
        hotk2: { embed: healthotk, component: hotk2 },
        healthotk2: { embed: healthotk, component: hotk2 },
        hotk3: { embed: healthotk, component: hotk3 },
        healthotk3: { embed: healthotk, component: hotk3 },
        pts: { embed: pawntrickstab, component: pts },
        pawntrickstab: { embed: pawntrickstab, component: pts },
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
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
