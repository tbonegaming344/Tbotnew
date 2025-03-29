const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
let db = require("../../index.js");
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("#FFC0CB");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `immorticia`,
  aliases: [`im`, `ticia`, `i’m`, `i'm`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("Zombats")
        .setLabel("Zombats")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:zombats:1087159395965734962>"),
      new ButtonBuilder()
        .setCustomId("imhelp")
        .setLabel("Immorticia Decks")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:Immorticia_Website:1087749695322988634>")
    );
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Immorticia's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
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
          .setLabel("All Immorticia Decks")
          .setValue("all")
          .setDescription("View all the immorticia decks")
          .setEmoji("<:Immorticia_Website:1087749695322988634>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const immorticiaDecks = {
      budgetDecks: ["budgetim"],
      competitiveDecks: ["kaleidoscope"],
      ladderDecks: ["mechascope", "youngcatmartin"],
      memeDecks: ["22savage", "bastet", "rampticia", "stacheticia"],
      comboDecks: [
        "22savage",
        "bastet",
        "budgetim",
        "mechascope",
        "rampticia",
        "stacheticia",
        "youngcatmartin",
      ],
      controlDecks: ["kaleidoscope", "mechascope"],
      midrangeDecks: ["22savage", "bastet", "budgetim", "youngcatmartin"],
      allDecks: [
        "22savage",
        "bastet",
        "budgetim",
        "kaleidoscope",
        "mechascope",
        "rampticia",
        "stacheticia",
        "youngcatmartin",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(immorticiaDecks.allDecks);
    const toBuildLadderString = buildDeckString(immorticiaDecks.ladderDecks);
    const toBuildMemeString = buildDeckString(immorticiaDecks.memeDecks);
    const toBuildComboString = buildDeckString(immorticiaDecks.comboDecks);
    const toBuildControlString = buildDeckString(immorticiaDecks.controlDecks);
    const toBuildMidrangeString = buildDeckString(
      immorticiaDecks.midrangeDecks
    );
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
    const alldecksrow = new CreateButtons("youngcatmartin", "sav");
    const sav = new CreateButtons("helpall", "bas");
    const bas = new CreateButtons("savage", "bim");
    const bim = new CreateButtons("bastet", "kscope");
    const kscope = new CreateButtons("budgetim", "ms");
    const ms = new CreateButtons("kaleidoscope", "rim");
    const rim = new CreateButtons("otkmecha", "stac");
    const stac = new CreateButtons("rampticia", "ycm");
    const ycm = new CreateButtons("stacheticia", "allhelp");
    const ladderrow = new CreateButtons("youngcatmartin2", "ms2");
    const ms2 = new CreateButtons("ladderhelp", "ycm2");
    const ycm2 = new CreateButtons("mechascope2", "helpladder");
    const memerow = new CreateButtons("stacheticia2", "sav2");
    const sav2 = new CreateButtons("memehelp", "bas2");
    const bas2 = new CreateButtons("savage2", "rim2");
    const rim2 = new CreateButtons("bastet2", "stac2");
    const stac2 = new CreateButtons("rampticia2", "helpmeme");
    const comborow = new CreateButtons("youngcatmartin3", "sav3");
    const sav3 = new CreateButtons("combohelp", "bas3");
    const bas3 = new CreateButtons("savage3", "bim2");
    const bim2 = new CreateButtons("bastet3", "ms3");
    const ms3 = new CreateButtons("budgetim2", "rim3");
    const rim3 = new CreateButtons("mechascope3", "stac3");
    const stac3 = new CreateButtons("rampticia3", "ycm3");
    const ycm3 = new CreateButtons("stacheticia3", "helpcombo");
    const controlrow = new CreateButtons("mechascope4", "kscope2");
    const kscope2 = new CreateButtons("controlhelp", "ms4");
    const ms4 = new CreateButtons("kaleidoscope3", "helpcontrol");
    const midrangerow = new CreateButtons("youngcatmartin4", "sav4");
    const sav4 = new CreateButtons("midrangehelp", "bas4");
    const bas4 = new CreateButtons("savage4", "bim3");
    const bim3 = new CreateButtons("bastet4", "ycm4");
    const ycm4 = new CreateButtons("budgetim3", "helpmidrange");
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
      )
      .setTitle(
        "Immorticia | <:Brainy:1062500939908530246><:Beastly:1062500894744264714>"
      )
      .setDescription("**\\- Pet Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Summoning <:Brainy:1062500939908530246> \n Make a random Zombie that costs 2<:Brainz:1062503146745774183> or less. \n Evaporate <:Beastly:1062500894744264714> \n Destroy a damaged Plant. \n Draw a card. \n Acid Rain <:Beastly:1062500894744264714> \n All Plants on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Witch's Familiar <:Brainy:1062500939908530246><:Beastly:1062500894744264714> \n Make __Zom-Bats__. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "Yes, she's a Zombie AND a witch. She believes death is too short to limit oneself.",
        }
      )
      .setColor("#FFC0CB");

    let bats = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/f/f5/Zom-Bats_%28Card%29.png/revision/latest/scale-to-width-down/250?cb=20161026140138"
      )
      .setTitle(
        "Zom-Bats | <:Brainy:1062500939908530246><:Beastly:1062500894744264714>"
      )
      .setDescription("**\\- Pet Zombie  -**")
      .addFields(
        {
          name: "Stats",
          value:
            "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>",
        },
        {
          name: "Trait",
          value: "__Amphibious__",
        },
        {
          name: "Ability",
          value: "When this hurts a Plant, draw a card.",
        },
        {
          name: "Set-Rarity",
          value: "**Token**",
        },
        {
          name: "Flavor Text",
          value: `Like chihuahuas with wings... and fangs... and a taste for Plants.`,
        }
      )
      .setColor("Random");
    let alldecksEmbed = new CreateHelpEmbed(
      "Immorticia Decks",
      `My commands for Immorticia(IM) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the Immorticia decks please use the commands listed above or click on the buttons below to navigate through all Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.allDecks.length} total decks in Tbot`
    );
    let helpim = new CreateHelpEmbed(
      "Immorticia Decks",
      `To view the Immorticia decks please select an option from the select menu below!`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
    );
    let ladderEmbed = new CreateHelpEmbed(
      "Immorticia Ladder Decks",
      `My ladder decks for Immorticia(IM) are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the ladder Immorticia decks please use the commands listed above or click on the buttons below to navigate through all ladder Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.ladderDecks.length} ladder decks in Tbot`
    );
    let memeEmbed = new CreateHelpEmbed(
      "Immorticia Meme Decks",
      `My meme decks for Immorticia(IM) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the meme Immorticia decks please use the commands listed above or click on the buttons below to navigate through all meme Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.memeDecks.length} meme decks in Tbot`
    );
    let comboEmbed = new CreateHelpEmbed(
      "Immorticia Combo Decks",
      `My combo decks for Immorticia(IM) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the combo Immorticia decks please use the commands listed above or click on the buttons below to navigate through all combo Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.comboDecks.length} combo decks in Tbot`
    );
    let controlEmbed = new CreateHelpEmbed(
      "Immorticia Control Decks",
      `My control decks for Immorticia(IM) are ${toBuildControlString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the control Immorticia decks please use the commands listed above or click on the buttons below to navigate through all control Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.controlDecks.length} control decks in Tbot`
    );
    let midrangeEmbed = new CreateHelpEmbed(
      "Immorticia Midrange Decks",
      `My midrange decks for Immorticia(IM) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
      `To view the midrange Immorticia decks please use the commands listed above or click on the buttons below to navigate through all midrange Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    let [result] = await db.query(`SELECT * FROM imdecks`);
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
    let savage22 = new CreateDeckEmbed(result, "savage22");
    let bastet = new CreateDeckEmbed(result, "bastet");
    let budgetim = new CreateDeckEmbed(result, "budgetim");
    let mechascope = new CreateDeckEmbed(result, "mechascope");
    let kaleidoscope = new CreateDeckEmbed(result, "kaleidoscope");
    let rampticia = new CreateDeckEmbed(result, "rampticia");
    let stacheticia = new CreateDeckEmbed(result, "stacheticia");
    let youngcatmartin = new CreateDeckEmbed(result, "youngcatmartin");
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "budget") {
        await i.reply({ embeds: [budgetim], flags: MessageFlags.Ephemeral });
      } else if (value == "comp") {
        await i.reply({
          embeds: [kaleidoscope],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "bim" || i.customId == "budgetim") {
        await i.update({ embeds: [budgetim], components: [bim] });
      } else if (i.customId == "bim2" || i.customId == "budgetim2") {
        await i.update({ embeds: [budgetim], components: [bim2] });
      } else if (i.customId == "bim3" || i.customId == "budgetim3") {
        await i.update({ embeds: [budgetim], components: [bim3] });
      } else if (i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (i.customId == "budgethelp" || i.customId == "helpbudget") {
        await i.update({ embeds: [budgetEmbed], components: [budgetrow] });
      } else if (i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (i.customId == "memehelp" || i.customId == "helpmeme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (i.customId == "controlhelp" || i.customId == "helpcontrol") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (i.customId == "midrangehelp" || i.customId == "helpmidrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (i.customId == "kscope" || i.customId == "kaleidoscope") {
        await i.update({ embeds: [kaleidoscope], components: [kscope] });
      } else if (i.customId == "kscope2" || i.customId == "kaleidoscope2") {
        await i.update({ embeds: [kaleidoscope], components: [kscope2] });
      } else if (i.customId == "rim" || i.customId == "rampticia") {
        await i.update({ embeds: [rampticia], components: [rim] });
      } else if (i.customId == "rim2" || i.customId == "rampticia2") {
        await i.update({ embeds: [rampticia], components: [rim2] });
      } else if (i.customId == "rim3" || i.customId == "rampticia3") {
        await i.update({ embeds: [rampticia], components: [rim3] });
      } else if (i.customId == "ycm" || i.customId == "youngcatmartin") {
        await i.update({ embeds: [youngcatmartin], components: [ycm] });
      } else if (i.customId == "ycm2" || i.customId == "youngcatmartin2") {
        await i.update({ embeds: [youngcatmartin], components: [ycm2] });
      } else if (i.customId == "ycm3" || i.customId == "youngcatmartin3") {
        await i.update({ embeds: [youngcatmartin], components: [ycm3] });
      } else if (i.customId == "ycm4" || i.customId == "youngcatmartin4") {
        await i.update({ embeds: [youngcatmartin], components: [ycm4] });
      } else if (i.customId == "stac" || i.customId == "stacheticia") {
        await i.update({ embeds: [stacheticia], components: [stac] });
      } else if (i.customId == "stac2" || i.customId == "stacheticia2") {
        await i.update({ embeds: [stacheticia], components: [stac2] });
      } else if (i.customId == "stac3" || i.customId == "stacheticia3") {
        await i.update({ embeds: [stacheticia], components: [stac3] });
      } else if (i.customId == "bas" || i.customId == "bastet") {
        await i.update({ embeds: [bastet], components: [bas] });
      } else if (i.customId == "bas2" || i.customId == "bastet2") {
        await i.update({ embeds: [bastet], components: [bas2] });
      } else if (i.customId == "bas3" || i.customId == "bastet3") {
        await i.update({ embeds: [bastet], components: [bas3] });
      } else if (i.customId == "bas4" || i.customId == "bastet4") {
        await i.update({ embeds: [bastet], components: [bas4] });
      } else if (i.customId == "ms" || i.customId == "mechascope") {
        await i.update({ embeds: [mechascope], components: [ms] });
      } else if (i.customId == "ms2" || i.customId == "mechascope2") {
        await i.update({ embeds: [mechascope], components: [ms2] });
      } else if (i.customId == "ms3" || i.customId == "mechascope3") {
        await i.update({ embeds: [mechascope], components: [ms3] });
      } else if (i.customId == "ms4" || i.customId == "mechascope4") {
        await i.update({ embeds: [mechascope], components: [ms4] });
      } else if (i.customId == "sav" || i.customId == "savage") {
        await i.update({ embeds: [savage22], components: [sav] });
      } else if (i.customId == "sav2" || i.customId == "savage2") {
        await i.update({ embeds: [savage22], components: [sav2] });
      } else if (i.customId == "sav3" || i.customId == "savage3") {
        await i.update({ embeds: [savage22], components: [sav3] });
      } else if (i.customId == "sav4" || i.customId == "savage4") {
        await i.update({ embeds: [savage22], components: [sav4] });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "Zombats") {
        await i.reply({ embeds: [bats], flags: MessageFlags.Ephemeral });
      } else if (i.customId == "imhelp") {
        await i.update({ embeds: [helpim], components: [row] });
      } else if (i.customId == "select") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
