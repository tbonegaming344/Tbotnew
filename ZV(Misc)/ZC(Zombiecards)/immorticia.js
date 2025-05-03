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
      ladderDecks: ["mechascope"],
      memeDecks: ["22savage", "bastet", "rampticia"],
      comboDecks: [
        "22savage",
        "bastet",
        "budgetim",
        "mechascope",
        "rampticia",
      ],
      controlDecks: ["budgetim", "kaleidoscope", "mechascope"],
      midrangeDecks: ["22savage", "bastet", "budgetim"],
      allDecks: [
        "22savage",
        "bastet",
        "budgetim",
        "kaleidoscope",
        "mechascope",
        "rampticia",
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
    const toBuildString = buildDeckString(immorticiaDecks.allDecks);
    const toBuildMemeString = buildDeckString(immorticiaDecks.memeDecks);
    const toBuildComboString = buildDeckString(immorticiaDecks.comboDecks);
    const toBuildControlString = buildDeckString(immorticiaDecks.controlDecks);
    const toBuildMidrangeString = buildDeckString(
      immorticiaDecks.midrangeDecks
    );
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
    const alldecksrow = new CreateButtons("rampticia", "sav");
    const sav = new CreateButtons("helpall", "bas");
    const bas = new CreateButtons("savage", "bim");
    const bim = new CreateButtons("bastet", "kscope");
    const kscope = new CreateButtons("budgetim", "ms");
    const ms = new CreateButtons("kaleidoscope", "rim");
    const rim = new CreateButtons("otkmecha", "allhelp");
    const memerow = new CreateButtons("rampticia2", "sav2");
    const sav2 = new CreateButtons("memehelp", "bas2");
    const bas2 = new CreateButtons("savage2", "rim2");
    const rim2 = new CreateButtons("bastet2", "helpmeme");
    const comborow = new CreateButtons("rampticia3", "sav3");
    const sav3 = new CreateButtons("combohelp", "bas3");
    const bas3 = new CreateButtons("savage3", "bim2");
    const bim2 = new CreateButtons("bastet3", "ms2");
    const ms2 = new CreateButtons("budgetim2", "rim3");
    const rim3 = new CreateButtons("mechascope2", "helpcombo");
    const controlrow = new CreateButtons("mechascope3", "bim3");
    const bim3 = new CreateButtons("controlhelp", "kscope2");
    const kscope2 = new CreateButtons("budgetim3", "ms3");
    const ms3 = new CreateButtons("kaleidoscope3", "helpcontrol");
    const midrangerow = new CreateButtons("budgetim4", "sav4");
    const sav4 = new CreateButtons("midrangehelp", "bas4");
    const bas4 = new CreateButtons("savage4", "bim4");
    const bim4 = new CreateButtons("bastet4", "helpmidrange");
    const embed = new EmbedBuilder()
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

    const bats = new EmbedBuilder()
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
      const alldecksEmbed = new CreateHelpEmbed(
        "Immorticia Decks",
        `My commands for Immorticia(IM) are ${toBuildString}`,
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
        `To view the Immorticia decks please use the commands listed above or click on the buttons below to navigate through all Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.allDecks.length} total decks in Tbot`
      );
      const helpim = new CreateHelpEmbed(
        "Immorticia Decks",
        `To view the Immorticia decks please select an option from the select menu below!
  Note: Immorticia has ${immorticiaDecks.allDecks.length} total decks in Tbot`,
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408"
      );
      const memeEmbed = new CreateHelpEmbed(
        "Immorticia Meme Decks",
        `My meme decks for Immorticia(IM) are ${toBuildMemeString}`,
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
        `To view the meme Immorticia decks please use the commands listed above or click on the buttons below to navigate through all meme Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.memeDecks.length} meme decks in Tbot`
      );
      const comboEmbed = new CreateHelpEmbed(
        "Immorticia Combo Decks",
        `My combo decks for Immorticia(IM) are ${toBuildComboString}`,
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
        `To view the combo Immorticia decks please use the commands listed above or click on the buttons below to navigate through all combo Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.comboDecks.length} combo decks in Tbot`
      );
      const controlEmbed = new CreateHelpEmbed(
        "Immorticia Control Decks",
        `My control decks for Immorticia(IM) are ${toBuildControlString}`,
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
        `To view the control Immorticia decks please use the commands listed above or click on the buttons below to navigate through all control Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.controlDecks.length} control decks in Tbot`
      );
      const midrangeEmbed = new CreateHelpEmbed(
        "Immorticia Midrange Decks",
        `My midrange decks for Immorticia(IM) are ${toBuildMidrangeString}`,
        "https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408",
        `To view the midrange Immorticia decks please use the commands listed above or click on the buttons below to navigate through all midrange Immorticia decks!
  Note: Immorticia has ${immorticiaDecks.midrangeDecks.length} midrange decks in Tbot`
      );
    const [result] = await db.query(`SELECT * FROM imdecks`);
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
        .setColor("Blue");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const savage22 = new CreateDeckEmbed(result, "savage22");
    const bastet = new CreateDeckEmbed(result, "bastet");
    const budgetim = new CreateDeckEmbed(result, "budgetim");
    const mechascope = new CreateDeckEmbed(result, "otkmecha");
    const kaleidoscope = new CreateDeckEmbed(result, "otktrickster");
    const rampticia = new CreateDeckEmbed(result, "rampticia");
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
        await i.reply({embeds: [mechascope], flags: MessageFlags.Ephemeral});
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
    /**
     * the handleButtonInteraction function handles the button interactions for the decks
     * @param {*} i - The interaction object
     */
    async function handleButtonInteraction(i) {
      const buttonActions = {
        imhelp: { embed: helpim, component: row },
        allhelp: {embed: alldecksEmbed, component: alldecksrow},
        helpall: {embed: alldecksEmbed, component: alldecksrow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpmeme: {embed: memeEmbed, component: memerow},
        combohelp: {embed: comboEmbed, component: comborow},
        helpcombo: {embed: comboEmbed, component: comborow},
        controlhelp: {embed: controlEmbed, component: controlrow},
        helpcontrol: {embed: controlEmbed, component: controlrow},
        midrangehelp: {embed: midrangeEmbed, component: midrangerow},
        helpmidrange: {embed: midrangeEmbed, component: midrangerow},
        bas: {embed: bastet, component: bas},
        bastet: {embed: bastet, component: bas},
        bas2: {embed: bastet, component: bas2},
        bastet2: {embed: bastet, component: bas2},
        bas3: {embed: bastet, component: bas3},
        bastet3: {embed: bastet, component: bas3},
        bas4: {embed: bastet, component: bas4},
        bastet4: {embed: bastet, component: bas4},
        bim: {embed: budgetim, component: bim},
        budgetim: {embed: budgetim, component: bim},
        bim2: {embed: budgetim, component: bim2},
        budgetim2: {embed: budgetim, component: bim2},
        bim3: {embed: budgetim, component: bim3},
        budgetim3: {embed: budgetim, component: bim3},
        bim4: {embed: budgetim, component: bim4},
        budgetim4: {embed: budgetim, component: bim4},
        kscope: {embed: kaleidoscope, component: kscope},
        kaleidoscope: {embed: kaleidoscope, component: kscope},
        kscope2: {embed: kaleidoscope, component: kscope2},
        kaleidoscope2: {embed: kaleidoscope, component: kscope2},
        rim: {embed: rampticia, component: rim},
        rampticia: {embed: rampticia, component: rim},
        rim2: {embed: rampticia, component: rim2},
        rampticia2: {embed: rampticia, component: rim2},
        rim3: {embed: rampticia, component: rim3},
        rampticia3: {embed: rampticia, component: rim3},
        sav: {embed: savage22, component: sav},
        savage: {embed: savage22, component: sav},
        sav2: {embed: savage22, component: sav2},
        savage2: {embed: savage22, component: sav2},
        sav3: {embed: savage22, component: sav3},
        savage3: {embed: savage22, component: sav3},
        sav4: {embed: savage22, component: sav4},
        savage4: {embed: savage22, component: sav4},
        ms: {embed: mechascope, component: ms},
        mechascope: {embed: mechascope, component: ms},
        ms2: {embed: mechascope, component: ms2},
        mechascope2: {embed: mechascope, component: ms2},
        ms3: {embed: mechascope, component: ms3},
        mechascope3: {embed: mechascope, component: ms3},
      }
      const action = buttonActions[i.customId]
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({ content: "Invalid button action!", flags: MessageFlags.Ephemeral });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "Zombats") {
        await i.reply({ embeds: [bats], flags: MessageFlags.Ephemeral });
      } else if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
