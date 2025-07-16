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
  name: `snortingsalt`,
  aliases: [
    `helpsalt`,
    `salthelp`,
    `decksmadebysalt`,
    `saltdecklists`,
    `decklistsmadebysalt`,
    `saltdecks`,
    `salt`,
    `snortingsaltdecks`,
    `snortingsalt`,
    `snorting`,
    `decksalt`,
    `decksalt`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Salt's Decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Decks")
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
          .setLabel("Aggro Decks")
          .setValue("aggro")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
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
          .setLabel("All Decks")
          .setDescription("View all of Salt's Decks")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const snortingSaltDecks = {
      budgetDecks: ["budgetykm"],
      competitiveDecks: [
        "chemotherapy",
        "cyburn",
        "espressoaggro",
        "logbait",
        "radiotherapy",
        "seacret",
        "spacestars"
      ],
      ladderDecks: ["schoolyard"],
      memeDecks: ["noplayingallowed"],
      aggroDecks: ["espressoaggro", "logbait", "schoolyard", "seacret"],
      comboDecks: [
        "budgetykm",
        "cyburn",
        "seacret",
        "spacestars"
      ],
      controlDecks: [
        "chemotherapy",
        "noplayingallowed",
        "radiotherapy",
      ],
      midrangeDecks: [
        "budgetykm",
        "cyburn",
        "spacestars",
      ],
      allDecks: [
        "budgetykm",
        "chemotherapy",
        "cyburn",
        "espressoaggro",
        "logbait",
        "noplayingallowed",
        "radiotherapy",
        "schoolyard",
        "seacret",
        "spacestars"
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
    const toBuildString = buildDeckString(snortingSaltDecks.allDecks);
    const toBuildCompetitive = buildDeckString(
      snortingSaltDecks.competitiveDecks
    );
    const toBuildAggro = buildDeckString(snortingSaltDecks.aggroDecks);
    const toBuildCombo = buildDeckString(snortingSaltDecks.comboDecks);
    const toBuildControl = buildDeckString(snortingSaltDecks.controlDecks);
    const toBuildMid = buildDeckString(snortingSaltDecks.midrangeDecks);
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
    const competitiverow = createButtons("spacestars", "chemo");
    const chemo = createButtons("helpcomp", "cburn");
    const cburn = createButtons("chemotherapy", "eaggro");
    const eaggro = createButtons("cyburn", "lbait");
    const lbait = createButtons("espressoaggro", "radio");
    const radio = createButtons("logbait", "sea");
    const sea = createButtons("radiotherapy", "stars");
    const stars = createButtons("seacret", "helpcomp");
    const aggrorow = createButtons("seacret2", "eaggro2");
    const eaggro2 = createButtons("aggrohelp", "lbait2");
    const lbait2 = createButtons("espressoaggro2", "syard");
    const syard = createButtons("logbait2", "sea2");
    const sea2 = createButtons("schoolyard", "helpaggro");
    const comborow = createButtons("spacestars2", "bykm");
    const bykm = createButtons("combohelp", "cburn2");
    const cburn2 = createButtons("budgetykm", "sea3");
    const sea3 = createButtons("cyburn2", "stars2");
    const stars2 = createButtons("seacret3", "helpcombo");
    const midrangerow = createButtons("spacestars3", "bykm2");
    const bykm2 = createButtons("midhelp", "cburn3");
    const cburn3 = createButtons("budgetykm2", "stars3");
    const stars3 = createButtons("cyburn3", "helpmid");
    const controlrow = createButtons("radiotherapy2", "chemo2");
    const chemo2 = createButtons("helpcontrol", "npa2");
    const npa2 = createButtons("chemotherapy2", "radio2");
    const radio2 = createButtons("noplayingallowed2", "controlhelp");
    const alldecksrow = createButtons("spacestars4", "bykm3");
    const bykm3 = createButtons("allhelp", "chemo3");
    const chemo3 = createButtons("budgetykm3", "cburn4");
    const cburn4 = createButtons("chemotherapy3", "eaggro3");
    const eaggro3 = createButtons("cyburn4", "lbait3");
    const lbait3 = createButtons("espressoaggro3", "npa3");
    const npa3 = createButtons("logbait3", "radio3");
    const radio3 = createButtons("noplayingallowed3", "syard2");
    const syard2 = createButtons("radiotherapy3", "sea4");
    const sea4 = createButtons("schoolyard2", "stars4");
    const stars4 = createButtons("seacret4", "helpall");
    const [result] = await db.query(`select
budgetykm, chemotherapy,
cyburn, espressoaggro,  logbait, noplayingallowed, 
schoolyard, seacret, spacestars, radiotherapy
from hgdecks hg
inner join wkdecks wk
on (hg.deckinfo = wk.deckinfo)
inner join ncdecks nc
on (hg.deckinfo = nc.deckinfo)
inner join gkdecks gk
on (hg.deckinfo = gk.deckinfo)
inner join ccdecks cc
on (hg.deckinfo = cc.deckinfo)
inner join ebdecks eb
on (hg.deckinfo = eb.deckinfo)
inner join ntdecks nt
on (hg.deckinfo = nt.deckinfo)
inner join ifdecks fi
on (hg.deckinfo = fi.deckinfo)
inner join spdecks sp
on (hg.deckinfo = sp.deckinfo)`);
    const user = await client.users.fetch("599750713509281792");
    const salt = createHelpEmbed(
      `${user.username} Decks`,
      `To view the Decks Made By ${user.username} please select an option from the select menu below
Note: ${user.username} has ${snortingSaltDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const combosalt = createHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My commands for combo decks made by ${user.displayName} are ${toBuildCombo}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.comboDecks.length} combo decks in Tbot`
    );
    const midsalt = createHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My commands for midrange decks made by ${user.displayName} are ${toBuildMid}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const compsalt = createHelpEmbed(
      `${user.displayName} Competitive Decks`,
      `My commands for competitive decks made by ${user.displayName} are ${toBuildCompetitive}`,
      user.displayAvatarURL(),
      `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.competitiveDecks.length} competitive decks in Tbot`
    );
    const aggrosalt = createHelpEmbed(
      `${user.displayName} Aggro Decks`,
      `My commands for aggro decks made by ${user.displayName} are ${toBuildAggro}`,
      user.displayAvatarURL(),
      `To view the Aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const controlsalt = createHelpEmbed(
      `${user.displayName} Control Decks`,
      `My commands for control decks made by ${user.displayName} are ${toBuildControl}`,
      user.displayAvatarURL(),
      `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.controlDecks.length} control decks in Tbot`
    );
    const alldecksEmbed = createHelpEmbed(
      `${user.displayName} Decks`,
      `My commands for all decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${snortingSaltDecks.allDecks.length} total decks in Tbot`
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
        .setColor("White");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const logbait = createDeckEmbed(result, "logbait");
    const budgetykm = createDeckEmbed(result, "budgetykm");
    const chemotherapy = createDeckEmbed(result, "chemotherapy");
    const cyburn = createDeckEmbed(result, "cyburn");
    const espressoaggro = createDeckEmbed(result, "espressoaggro");
    const noplayingallowed = createDeckEmbed(result, "noplayingallowed");
    const radiotherapy = createDeckEmbed(result, "radiotherapy");
    const seacret = createDeckEmbed(result, "seacret");
    const schoolyard = createDeckEmbed(result, "schoolyard");
    const spacestars = createDeckEmbed(result, "spacestars");
    const m = await message.channel.send({ embeds: [salt], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i 
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget") {
        await i.reply({ embeds: [budgetykm], flags: MessageFlags.Ephemeral });
      } else if (value == "control") {
        await i.update({ embeds: [controlsalt], components: [controlrow] });
      } else if (value == "combo") {
        await i.update({ embeds: [combosalt], components: [comborow] });
      } else if (value == "comp") {
        await i.update({ embeds: [compsalt], components: [competitiverow] });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggrosalt], components: [aggrorow] });
      } else if (value == "ladder") {
        await i.reply({embeds: [schoolyard], flags: MessageFlags.Ephemeral})
      } else if (value == "midrange") {
        await i.update({ embeds: [midsalt], components: [midrangerow] });
      } else if (value == "meme") {
        await i.reply({embeds: [noplayingallowed], flags: MessageFlags.Ephemeral})
      } else if (value == "all") {
        await i.update({
          embeds: [alldecksEmbed],
          components: [alldecksrow],
        });
      }
    }
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        combohelp: { embed: combosalt, component: comborow },
        helpcombo: { embed: combosalt, component: comborow },
        controlhelp: { embed: controlsalt, component: controlrow },
        helpcontrol: { embed: controlsalt, component: controlrow },
        midhelp: { embed: midsalt, component: midrangerow },
        helpmid: { embed: midsalt, component: midrangerow },
        aggrohelp: { embed: aggrosalt, component: aggrorow },
        helpaggro: { embed: aggrosalt, component: aggrorow },
        comphelp: { embed: compsalt, component: competitiverow },
        helpcomp: { embed: compsalt, component: competitiverow },
        allhelp: { embed: alldecksEmbed, component: alldecksrow },
        helpall: { embed: alldecksEmbed, component: alldecksrow },
        bykm: { embed: budgetykm, component: bykm },
        budgetykm: { embed: budgetykm, component: bykm },
        bykm2: { embed: budgetykm, component: bykm2 },
        budgetykm2: { embed: budgetykm, component: bykm2 },
        bykm3: { embed: budgetykm, component: bykm3 },
        budgetykm3: { embed: budgetykm, component: bykm3 },
        cburn: { embed: cyburn, component: cburn },
        cburn2: { embed: cyburn, component: cburn2 },
        cburn3: { embed: cyburn, component: cburn3 },
        cburn4: { embed: cyburn, component: cburn4 },
        cyburn: { embed: cyburn, component: cburn },
        cyburn2: { embed: cyburn, component: cburn2 },
        cyburn3: { embed: cyburn, component: cburn3 },
        cyburn4: { embed: cyburn, component: cburn4 },
        stars: { embed: spacestars, component: stars },
        stars2: { embed: spacestars, component: stars2 },
        stars3: { embed: spacestars, component: stars3 },
        stars4: { embed: spacestars, component: stars4 },
        spacestars: { embed: spacestars, component: stars },
        spacestars2: { embed: spacestars, component: stars2 },
        spacestars3: { embed: spacestars, component: stars3 },
        spacestars4: { embed: spacestars, component: stars4 },
        syard: { embed: schoolyard, component: syard },
        syard2: { embed: schoolyard, component: syard2 },
        schoolyard: { embed: schoolyard, component: syard },
        schoolyard2: { embed: schoolyard, component: syard2 },
        chemo: { embed: chemotherapy, component: chemo },
        chemo2: { embed: chemotherapy, component: chemo2 },
        chemo3: { embed: chemotherapy, component: chemo3 },
        chemotherapy: { embed: chemotherapy, component: chemo },
        chemotherapy2: { embed: chemotherapy, component: chemo2 },
        chemotherapy3: { embed: chemotherapy, component: chemo3 },
        sea: { embed: seacret, component: sea },
        sea2: { embed: seacret, component: sea2 },
        sea3: { embed: seacret, component: sea3 },
        sea4: { embed: seacret, component: sea4 },
        seacret: { embed: seacret, component: sea },
        seacret2: { embed: seacret, component: sea2 },
        seacret3: { embed: seacret, component: sea3 },
        seacret4: { embed: seacret, component: sea4 },
        npa2: { embed: noplayingallowed, component: npa2 },
        npa3: { embed: noplayingallowed, component: npa3 },
        noplayingallowed2: { embed: noplayingallowed, component: npa2 },
        noplayingallowed3: { embed: noplayingallowed, component: npa3 },
        lbait: { embed: logbait, component: lbait },
        lbait2: { embed: logbait, component: lbait2 },
        lbait3: { embed: logbait, component: lbait3 },
        logbait: { embed: logbait, component: lbait },
        logbait2: { embed: logbait, component: lbait2 },
        logbait3: { embed: logbait, component: lbait3 },
        radio: { embed: radiotherapy, component: radio },
        radio2: { embed: radiotherapy, component: radio2 },
        radio3: { embed: radiotherapy, component: radio3 },
        radiotherapy: { embed: radiotherapy, component: radio },
        radiotherapy2: { embed: radiotherapy, component: radio2 },
        radiotherapy3: { embed: radiotherapy, component: radio3 },
        eaggro: { embed: espressoaggro, component: eaggro },
        espressoaggro: { embed: espressoaggro, component: eaggro },
        eaggro2: { embed: espressoaggro, component: eaggro2 },
        espressoaggro2: { embed: espressoaggro, component: eaggro2}, 
        eaggro3: { embed: espressoaggro, component: eaggro3 },
        espressoaggro3: { embed: espressoaggro, component: eaggro3 },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
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
