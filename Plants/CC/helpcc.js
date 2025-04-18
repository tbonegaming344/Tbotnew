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
    .setColor("Red");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpcc`,
  aliases: [
    `cccomands`,
    `commandscc`,
    `cchelp`,
    `helpcaptin`,
    `helpcombustible`,
    `helpcaptincombustible`,
    `ccdecks`,
    `captincombustiblehelp`,
    `captincombustibledecks`,
    `helpcaptain`,
  ],
  category: `Captain Combustible(CC)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder(
        "Select an option below to view Captain Combustible's Decklists"
      )
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
          .setLabel("Aggro Decks")
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
          .setLabel("Tempo Deck")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Captain Combustible Decks")
          .setValue("all")
          .setDescription("View all the decks for Captain Combustible")
          .setEmoji("<a:aCombustible:1100168807391166525>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const captainCombustibleDecks = {
      budgetDecks: ["budgetcc"],
      competitiveDecks: ["logbait"],
      memeDecks: ["lifecouldbedream", "mspotk", "plantmop", "reflourished"],
      aggroDecks: ["budgetcc", "logbait"],
      comboDecks: ["budgetcc", "mspotk", "plantmop", "reflourished"],
      tempoDecks: ["lifecouldbedream"],
      allDecks: [
        "budgetcc",
        "lifecouldbedream",
        "logbait",
        "mspotk",
        "plantmop",
        "reflourished",
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
    const toBuildMemeString = buildDeckString(
      captainCombustibleDecks.memeDecks
    );
    const toBuildAggroString = buildDeckString(
      captainCombustibleDecks.aggroDecks
    );
    const toBuildComboString = buildDeckString(
      captainCombustibleDecks.comboDecks
    );
    const toBuildString = buildDeckString(captainCombustibleDecks.allDecks);
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
    const memerow = new CreateButtons("mspotk", "lcbd");
    const lcbd = new CreateButtons("helpmeme", "msp");
    const msp = new CreateButtons("lifecouldbedream", "pm");
    const pm = new CreateButtons("mspotk", "rfl");
    const rfl = new CreateButtons("plantmop", "memehelp");
    const aggrorow = new CreateButtons("logbait", "bpm");
    const bpm = new CreateButtons("helpaggro", "lbait");
    const lbait = new CreateButtons("budgetplantmop", "aggrohelp");
    const comborow = new CreateButtons("reflourished2", "bpm2");
    const bpm2 = new CreateButtons("helpcombo", "msp2");
    const msp2 = new CreateButtons("budgetplantmop2", "pm2");
    const pm2 = new CreateButtons("mspotk2", "rfl2");
    const rfl2 = new CreateButtons("plantmop2", "combohelp");
    const alldecksrow = new CreateButtons("reflourished3", "bpm3");
    const bpm3 = new CreateButtons("helpall", "lcbd2");
    const lcbd2 = new CreateButtons("budgetplantmop3", "lbait2");
    const lbait2 = new CreateButtons("lifecouldbedream2", "msp3");
    const msp3 = new CreateButtons("logbait2", "pm3");
    const pm3 = new CreateButtons("mspotk3", "rfl3");
    const rfl3 = new CreateButtons("plantmop3", "allhelp");
    const embed = new CreateHelpEmbed(
      "Captain Combustible Decks",
      `To view the Captain Combustible decks please select an option from the select menu below!
Note: Captain Combustible has ${captainCombustibleDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212"
    );
    const allEmbed = new CreateHelpEmbed(
      "Captain Combustible Decks",
      `My Decks for Captain Combustible(CC) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212",
      `To view the Decks for Captain Combustible decks please use the commands listed above or click on the buttons below!
Note: Captain Combustible has ${captainCombustibleDecks.allDecks.length} total Decks in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Captain Combustible Meme Decks",
      `My Meme Decks for Captain Combustible(CC) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212",
      `To view the Meme Decks for Captain Combustible decks please use the commands listed above or click on the buttons below!
Note: Captain Combustible has ${captainCombustibleDecks.memeDecks.length} Meme Decks in Tbot`
    );
    const aggroEmbed = new CreateHelpEmbed(
      "Captain Combustible Aggro Decks",
      `My Aggro Decks for Captain Combustible(CC) are ${toBuildAggroString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212",
      `To view the Aggro Decks for Captain Combustible decks please use the commands listed above or click on the buttons below!
Note: Captain Combustible has ${captainCombustibleDecks.aggroDecks.length} Aggro Decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Captain Combustible Combo Decks",
      `My Combo Decks for Captain Combustible(CC) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212",
      `To view the Combo Decks for Captain Combustible decks please use the commands listed above or click on the buttons below!
Note: Captain Combustible has ${captainCombustibleDecks.comboDecks.length} Combo Decks in Tbot`
    );
    const [result] = await db.query(`SELECT * from ccdecks`);

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
        .setColor("Green");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budetplantmop = new CreateDeckEmbed(result, "budgetcc");
    const lcbdream = new CreateDeckEmbed(result, "lcbd");
    const logbait = new CreateDeckEmbed(result, "logbait");
    const mspotk = new CreateDeckEmbed(result, "mspotk");
    const plantmop = new CreateDeckEmbed(result, "plantmop");
    const reflourished = new CreateDeckEmbed(result, "reflourished");
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
      if (value == "budget") {
        await i.reply({
          embeds: [budetplantmop],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "comp") {
        await i.reply({
          embeds: [logbait],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "tempo") {
        await i.reply({ embeds: [lcbdream], flags: MessageFlags.Ephemeral });
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
        helpall: { embed: allEmbed, component: alldecksrow },
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpmeme: { embed: memeEmbed, component: memerow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpaggro: { embed: aggroEmbed, component: aggrorow },
        aggrohelp: { embed: aggroEmbed, component: aggrorow },
        helpcombo: { embed: comboEmbed, component: comborow },
        combohelp: { embed: comboEmbed, component: comborow },
        pm: { embed: plantmop, component: pm },
        plantmop: { embed: plantmop, component: pm },
        pm2: { embed: plantmop, component: pm2 },
        plantmop2: { embed: plantmop, component: pm2 },
        pm3: { embed: plantmop, component: pm3 },
        plantmop3: { embed: plantmop, component: pm3 },
        lcbd: { embed: lcbdream, component: lcbd },
        lifecouldbedream: { embed: lcbdream, component: lcbd },
        lcbd2: { embed: lcbdream, component: lcbd2 },
        lifecouldbedream2: { embed: lcbdream, component: lcbd2 },
        msp: { embed: mspotk, component: msp },
        mspotk: { embed: mspotk, component: msp },
        msp2: { embed: mspotk, component: msp2 },
        mspotk2: { embed: mspotk, component: msp2 },
        msp3: { embed: mspotk, component: msp3 },
        mspotk3: { embed: mspotk, component: msp3 },
        bpm: { embed: budetplantmop, component: bpm },
        budgetplantmop: { embed: budetplantmop, component: bpm },
        bpm2: { embed: budetplantmop, component: bpm2 },
        budgetplantmop2: { embed: budetplantmop, component: bpm2 },
        bpm3: { embed: budetplantmop, component: bpm3 },
        budgetplantmop3: { embed: budetplantmop, component: bpm3 },
        rfl: { embed: reflourished, component: rfl },
        reflourished: { embed: reflourished, component: rfl },
        rfl2: { embed: reflourished, component: rfl2 },
        reflourished2: { embed: reflourished, component: rfl2 },
        rfl3: { embed: reflourished, component: rfl3 },
        reflourished3: { embed: reflourished, component: rfl3 },
        lbait: { embed: logbait, component: lbait },
        logbait: { embed: logbait, component: lbait },
        lbait2: { embed: logbait, component: lbait2 },
        logbait2: { embed: logbait, component: lbait2 },
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
