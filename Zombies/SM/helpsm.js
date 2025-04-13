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
function CreateHelpEmbed(title, description, thumbnail, footer) {
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
  name: `helpsm`,
  aliases: [
    `smhelp`,
    `smcommands`,
    `commandssm`,
    `helpsmash`,
    `smashcommands`,
    `smashhelp`,
    `smdecks`,
    `smashdecks`,
    `deckssm`,
    `deckssmash`,
    `helpts`,
    `helpthesmash`,
    `tshelp`,
    `smashlist`,
    `smashlists`,
  ],
  category: `Smash(SM)`,
  run: async (client, message, args) => {
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
          .setLabel("All Smash Decks")
          .setValue("all")
          .setDescription("All of the Smash decks")
          .setEmoji("<:The_SmashH:1088162519958425670>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const smashDecks = {
      budgetDecks: ["budgetsm"],
      competitiveDecks: ["pablosyeezys"],
      ladderDecks: ["horts"],
      memeDecks: ["whalepharaoh"],
      aggroDecks: ["budgetsm"],
      comboDecks: ["budgetsm", "horts", "pablosyeezys", "whalepharaoh"],
      controlDecks: ["whalepharaoh"],
      midrangeDecks: ["horts", "pablosyeezys"],
      allDecks: [
        "budgetsm",
        "horts",
        "pablosyeezys",
        "whalepharaoh",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(smashDecks.allDecks);
    const toBuildComboString = buildDeckString(smashDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(smashDecks.midrangeDecks);
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
    const alldecksrow = new CreateButtons("whalepharaoh", "bsm");
    const bsm = new CreateButtons("helpall", "hor");
    const hor = new CreateButtons("budgetsm", "py");
    const py = new CreateButtons("horts", "wp");
    const wp = new CreateButtons("pablosyeezys", "allhelp");
    const comborow = new CreateButtons("whalepharoh2", "bsm2");
    const bsm2 = new CreateButtons("combohelp", "hor2");
    const hor2 = new CreateButtons("budgetsm2", "py2");
    const py2 = new CreateButtons("horts2", "wp2");
    const wp2 = new CreateButtons("pablosyeezys2", "helpcombo");
    const midrangerow = new CreateButtons("pablosyeezys3", "hor3");
    const hor3 = new CreateButtons("midrangehelp", "py3");
    const py3 = new CreateButtons("horts3", "helpmidrange");
    const helpsm = new CreateHelpEmbed(
      "Smash Decks",
      `To view the Smash decks please select an option from the select menu below!
Note: Smash has ${smashDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
    );
    const alldecksEmbed = new CreateHelpEmbed(
      "Smash Decks",
      `My commands for Smash(SM) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
      `To view the Smash decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Smash has ${smashDecks.allDecks.length} total decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Smash Combo Decks",
      `My combo decks for Smash(SM) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
      `To view the Smash combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Smash has ${smashDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Smash Midrange Decks",
      `My midrange decks for Smash(SM) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
      `To view the Smash midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Smash has ${smashDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM smdecks`);
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
        .setColor("Blue");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetsm = new CreateDeckEmbed(result, "budgetsm");
    const horts = new CreateDeckEmbed(result, "horts");
    const pablosyeezys = new CreateDeckEmbed(result, "pablosyeezys");
    const whalepharaoh = new CreateDeckEmbed(result, "whalepharaoh");
    const m = await message.channel.send({
      embeds: [helpsm],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "comp") {
        await i.reply({
          embeds: [pablosyeezys],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "ladder") {
        await i.reply({ embeds: [horts], flags: MessageFlags.Ephemeral });
      } else if (value == "meme" || value == "control") {
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
    }
    async function HandleButtonInteraction(i) {
      const buttonActions = {
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
        hor: {embed: horts, component: hor},
        horts: {embed: horts, component: hor},
        hor2: {embed: horts, component: hor2},
        horts2: {embed: horts, component: hor2},
        hor3: {embed: horts, component: hor3},
        horts3: {embed: horts, component: hor3},
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
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
