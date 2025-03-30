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
  name: `helpzm`,
  aliases: [
    `zmhelp`,
    `zmcommands`,
    `commandszm`,
    `helpzmech`,
    `zmechcommands`,
    `commandszmech`,
    `helpmech`,
    `helpzmech`,
    `zmdecks`,
    `deckszm`,
    `zmechdecks`,
    `deckszmech`,
    `zmechhelp`,
  ],
  category: `Zmech(ZM)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Zmech's Decklists")
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
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
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
          .setLabel("All Zmech Decks")
          .setValue("all")
          .setDescription("View all Zmech decks in Tbot")
          .setEmoji("<:zmech:1088189178224853063>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const zmechDecks = {
      budgetDecks: ["budgetzm"],
      competitiveDecks: ["gargburn"],
      ladderDecks: ["binaryflagwar", "brady", "trickmech"],
      memeDecks: ["dozzamech", "uncrackamech", "zmoss"],
      aggroDecks: ["budgetzm", "dozzamech", "trickmech"],
      comboDecks: ["binaryflagwar", "gargburn", "uncrackamech", "zmoss"],
      controlDecks: ["uncrackamech"],
      midrangeDecks: ["binaryflagwar", "gargburn"],
      tempoDecks: ["brady"],
      allDecks: [
        "binaryflagwar",
        "brady",
        "budgetzm",
        "dozzamech",
        "gargburn",
        "trickmech",
        "uncrackamech",
        "zmoss",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(zmechDecks.allDecks);
    const toBuildLadderString = buildDeckString(zmechDecks.ladderDecks);
    const toBuildMemeString = buildDeckString(zmechDecks.memeDecks);
    const toBuildAggroString = buildDeckString(zmechDecks.aggroDecks);
    const toBuildComboString = buildDeckString(zmechDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(zmechDecks.midrangeDecks);
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
    const alldecksrow = new CreateButtons("zmoss", "bfw");
    const bfw = new CreateButtons("helpall", "br");
    const br = new CreateButtons("binaryflagwar", "bzm");
    const bzm = new CreateButtons("brady", "dm");
    const dm = new CreateButtons("budgetzm", "gb");
    const gb = new CreateButtons("dozzamech", "tm");
    const tm = new CreateButtons("gargburn", "um");
    const um = new CreateButtons("trickmech", "zm");
    const zm = new CreateButtons("uncrackamech", "allhelp");
    const ladderrow = new CreateButtons("trickmech2", "bfw2");
    const bfw2 = new CreateButtons("ladderhelp", "br2");
    const br2 = new CreateButtons("binaryflagwar2", "tm2");
    const tm2 = new CreateButtons("brady2", "helpladder");
    const memerow = new CreateButtons("zmoss2", "dm2");
    const dm2 = new CreateButtons("memehelp", "um2");
    const um2 = new CreateButtons("dozzamech2", "zm2");
    const zm2 = new CreateButtons("uncrackamech2", "helpmeme");
    const aggrorow = new CreateButtons("trickmech2", "bzm2");
    const bzm2 = new CreateButtons("aggrohelp", "dm3");
    const dm3 = new CreateButtons("budgetzm2", "tm3");
    const tm3 = new CreateButtons("dozzamech3", "helpaggro");
    const comborow = new CreateButtons("zmoss3", "bfw3");
    const bfw3 = new CreateButtons("combohelp", "gb3");
    const gb3 = new CreateButtons("binaryflagwar3", "um3");
    const um3 = new CreateButtons("gargburn3", "zm3");
    const zm3 = new CreateButtons("uncrackamech3", "helpcombo");
    const midrangerow = new CreateButtons("gargburn4", "bfw4");
    const bfw4 = new CreateButtons("midrangehelp", "gb4");
    const gb4 = new CreateButtons("binaryflagwar4", "helpmidrange");
    const embed = new CreateHelpEmbed(
      "Zmech Decks",
      `To view the Zmech decks please select an option from the select menu below!
Note: Zmech has ${zmechDecks.allDecks.length} total decks in Tbot`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8"
    );
    const alldecksEmbed = new CreateHelpEmbed(
      "Zmech Decks",
      `My commands for Zmech(ZM) are ${toBuildString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech decks please use the commands listed above or click on the buttons below to navigate through all decks!
Note: Zmech has ${zmechDecks.allDecks.length} total decks in Tbot`
    );
    const ladderEmbed = new CreateHelpEmbed(
      "Zmech Ladder Decks",
      `My ladder decks for Zmech(ZM) are ${toBuildLadderString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech ladder decks please use the commands listed above or click on the buttons below to navigate through all ladder decks!
Note: Zmech has ${zmechDecks.ladderDecks.length} ladder decks in Tbot`
    );
    const memeEmbed = new CreateHelpEmbed(
      "Zmech Meme Decks",
      `My meme decks for Zmech(ZM) are ${toBuildMemeString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech meme decks please use the commands listed above or click on the buttons below to navigate through all meme decks!
Note: Zmech has ${zmechDecks.memeDecks.length} meme decks in Tbot`
    );
    const aggroEmbed = new CreateHelpEmbed(
      "Zmech Aggro Decks",
      `My aggro decks for Zmech(ZM) are ${toBuildAggroString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech aggro decks please use the commands listed above or click on the buttons below to navigate through all aggro decks!
Note: Zmech has ${zmechDecks.aggroDecks.length} aggro decks in Tbot`
    );
    const comboEmbed = new CreateHelpEmbed(
      "Zmech Combo Decks",
      `My combo decks for Zmech(ZM) are ${toBuildComboString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech combo decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
Note: Zmech has ${zmechDecks.comboDecks.length} combo decks in Tbot`
    );
    const midrangeEmbed = new CreateHelpEmbed(
      "Zmech Midrange Decks",
      `My midrange decks for Zmech(ZM) are ${toBuildMidrangeString}`,
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8",
      `To view the Zmech midrange decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
Note: Zmech has ${zmechDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query(`SELECT * FROM zmdecks`);
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
        .setColor("Purple");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const binaryflagwar = new CreateDeckEmbed(result, "binaryflagwar");
    const brady = new CreateDeckEmbed(result, "brady");
    const budgetzm = new CreateDeckEmbed(result, "budgetzm");
    const dozzamech = new CreateDeckEmbed(result, "dozzamech");
    const uncrackamech = new CreateDeckEmbed(result, "feastmech");
    const gargburn = new CreateDeckEmbed(result, "gargburn");
    const trickmech = new CreateDeckEmbed(result, "trickmech");
    const zmoss = new CreateDeckEmbed(result, "zmoss");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "comp") {
        await i.reply({ embeds: [gargburn], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "tempo") {
        await i.reply({ embeds: [brady], flags: MessageFlags.Ephemeral });
      } else if (value == "control") {
        await i.reply({
          embeds: [uncrackamech],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "budget") {
        await i.reply({ embeds: [budgetzm], flags: MessageFlags.Ephemeral });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (i.customId == "memehelp" || i.customId == "helpmeme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (i.customId == "aggrohelp" || i.customId == "helpaggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (i.customId == "midrangehelp" || i.customId == "helpmidrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (i.customId == "bfw" || i.customId == "binaryflagwar") {
        await i.update({ embeds: [binaryflagwar], components: [bfw] });
      } else if (i.customId == "bfw2" || i.customId == "binaryflagwar2") {
        await i.update({ embeds: [binaryflagwar], components: [bfw2] });
      } else if (i.customId == "bfw3" || i.customId == "binaryflagwar3") {
        await i.update({ embeds: [binaryflagwar], components: [bfw3] });
      } else if (i.customId == "bfw4" || i.customId == "binaryflagwar4") {
        await i.update({ embeds: [binaryflagwar], components: [bfw4] });
      } else if (i.customId == "bzm" || i.customId == "budgetzm") {
        await i.update({ embeds: [budgetzm], components: [bzm] });
      } else if (i.customId == "bzm2" || i.customId == "budgetzm2") {
        await i.update({ embeds: [budgetzm], components: [bzm2] });
      } else if (i.customId == "dm" || i.customId == "dozzamech") {
        await i.update({ embeds: [dozzamech], components: [dm] });
      } else if (i.customId == "dm2" || i.customId == "dozzamech2") {
        await i.update({ embeds: [dozzamech], components: [dm2] });
      } else if (i.customId == "dm3" || i.customId == "dozzamech3") {
        await i.update({ embeds: [dozzamech], components: [dm3] });
      } else if (i.customId == "um" || i.customId == "uncrackamech") {
        await i.update({ embeds: [uncrackamech], components: [um] });
      } else if (i.customId == "um2" || i.customId == "uncrackamech2") {
        await i.update({ embeds: [uncrackamech], components: [um2] });
      } else if (i.customId == "um3" || i.customId == "uncrackamech3") {
        await i.update({ embeds: [uncrackamech], components: [um3] });
      } else if (i.customId == "gb" || i.customId == "gargburn") {
        await i.update({ embeds: [gargburn], components: [gb] });
      } else if (i.customId == "gb2" || i.customId == "gargburn2") {
        await i.update({ embeds: [gargburn], components: [gb2] });
      } else if (i.customId == "gb3" || i.customId == "gargburn3") {
        await i.update({ embeds: [gargburn], components: [gb3] });
      } else if (i.customId == "gb4" || i.customId == "gargburn4") {
        await i.update({ embeds: [gargburn], components: [gb4] });
      } else if (i.customId == "zm" || i.customId == "zmoss") {
        await i.update({ embeds: [zmoss], components: [zm] });
      } else if (i.customId == "zm2" || i.customId == "zmoss2") {
        await i.update({ embeds: [zmoss], components: [zm2] });
      } else if (i.customId == "zm3" || i.customId == "zmoss3") {
        await i.update({ embeds: [zmoss], components: [zm3] });
      } else if (i.customId == "tm" || i.customId == "trickmech") {
        await i.update({ embeds: [trickmech], components: [tm] });
      } else if (i.customId == "tm2" || i.customId == "trickmech2") {
        await i.update({ embeds: [trickmech], components: [tm2] });
      } else if (i.customId == "tm3" || i.customId == "trickmech3") {
        await i.update({ embeds: [trickmech], components: [tm3] });
      } else if (i.customId == "br" || i.customId == "brady") {
        await i.update({ embeds: [brady], components: [br] });
      } else if (i.customId == "br2" || i.customId == "brady2") {
        await i.update({ embeds: [brady], components: [br2] });
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
