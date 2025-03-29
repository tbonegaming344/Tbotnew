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
      ladderDecks: ["horts"],
      memeDecks: ["homophobia", "whalepharaoh"],
      aggroDecks: ["homophobia"],
      comboDecks: ["horts", "pablosyeezys", "whalepharaoh"],
      controlDecks: ["whalepharaoh"],
      midrangeDecks: ["horts", "pablosyeezys"],
      tempoDecks: ["budgetsm"],
      allDecks: [
        "budgetsm",
        "homophobia",
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
    const toBuildMemeString = buildDeckString(smashDecks.memeDecks);
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
    const bsm = new CreateButtons("helpall", "ho");
    const ho = new CreateButtons("budgetsm", "hor");
    const hor = new CreateButtons("homophobia", "py");
    const py = new CreateButtons("horts", "wp");
    const wp = new CreateButtons("pablosyeezys", "allhelp");
    const memerow = new CreateButtons("whalepharaoh2", "ho2");
    const ho2 = new CreateButtons("memehelp", "wp2");
    const wp2 = new CreateButtons("homophobia2", "helpmeme");
    const comborow = new CreateButtons("whalepharoh3", "hor2");
    const hor2 = new CreateButtons("combohelp", "py3");
    const py3 = new CreateButtons("horts2", "wp3");
    const wp3 = new CreateButtons("pablosyeezys3", "helpcombo");
    const midrangerow = new CreateButtons("pablosyeezys4", "hor3");
    const hor3 = new CreateButtons("midrangehelp", "py4");
    const py4 = new CreateButtons("horts3", "helpmidrange");
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
    const memeEmbed = new CreateHelpEmbed(
      "Smash Meme Decks",
      `My meme decks for Smash(SM) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543",
      `To view the Smash meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Smash has ${smashDecks.memeDecks.length} meme decks in Tbot`
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
    const homophobia = new CreateDeckEmbed(result, "homophobia");
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
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.reply({ embeds: [homophobia], flags: MessageFlags.Ephemeral });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "control") {
        await i.reply({
          embeds: [whalepharaoh],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "budget" || value == "tempo") {
        await i.reply({ embeds: [budgetsm], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (i.customId == "memehelp" || i.customId == "helpmeme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (i.customId == "midrangehelp" || i.customId == "helpmidrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (i.customId == "tempohelp" || i.customId == "helptempo") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      } else if (i.customId == "bsm" || i.customId == "budgetsm") {
        await i.update({ embeds: [budgetsm], components: [bsm] });
      } else if (i.customId == "ho" || i.customId == "homophobia") {
        await i.update({ embeds: [homophobia], components: [ho] });
      } else if (i.customId == "ho2" || i.customId == "homophobia2") {
        await i.update({ embeds: [homophobia], components: [ho2] });
      } else if (i.customId == "hor" || i.customId == "horts") {
        await i.update({ embeds: [horts], components: [hor] });
      } else if (i.customId == "hor2" || i.customId == "horts2") {
        await i.update({ embeds: [horts], components: [hor2] });
      } else if (i.customId == "hor3" || i.customId == "horts3") {
        await i.update({ embeds: [horts], components: [hor3] });
      } else if (i.customId == "py" || i.customId == "pablosyeezys") {
        await i.update({ embeds: [pablosyeezys], components: [py] });
      } else if (i.customId == "py2" || i.customId == "pablosyeezys2") {
        await i.update({ embeds: [pablosyeezys], components: [py2] });
      } else if (i.customId == "py3" || i.customId == "pablosyeezys3") {
        await i.update({ embeds: [pablosyeezys], components: [py3] });
      } else if (i.customId == "py4" || i.customId == "pablosyeezys4") {
        await i.update({ embeds: [pablosyeezys], components: [py4] });
      } else if (i.customId == "wp" || i.customId == "whalepharaoh") {
        await i.update({ embeds: [whalepharaoh], components: [wp] });
      } else if (i.customId == "wp2" || i.customId == "whalepharaoh2") {
        await i.update({ embeds: [whalepharaoh], components: [wp2] });
      } else if (i.customId == "wp3" || i.customId == "whalepharaoh3") {
        await i.update({ embeds: [whalepharaoh], components: [wp3] });
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
