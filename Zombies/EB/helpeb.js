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
    .setColor("Blue");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `helpeb`,
  aliases: [
    `ebcommands`,
    `commandseb`,
    `ebhelp`,
    `helpelectric`,
    `helpelectricboog`,
    `helpboog`,
    `helpelectricboogaloo`,
    `ebdecks`,
    `electricboogaloohelp`,
    `electricboogaloodecks`,
    `deckseb`,
    `helpboogaloo`,
    `helpboogaloodecks`,
    `boogaloocommands`,
    `boogaloodecks`,
  ],
  category: `Electric Boogaloo(EB)`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder(
        "Select an option below to view electric boogaloo's decklists"
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
          .setLabel("Ladder Deck")
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
          .setLabel("Combo Deck")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Decks")
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
          .setLabel("All Electric Boogaloo Decks")
          .setValue("all")
          .setDescription("View all of Electric Boogaloo's decks")
          .setEmoji("<:electricsleeper:1100169044440645776>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const electricBoogalooDecks = {
      budgetDecks: ["budgetburn"],
      competitiveDecks: ["seacret"],
      ladderDecks: ["gargstar22"],
      memeDecks: ["huntgargs", "noplayingallowed"],
      aggroDecks: ["budgetburn", "seacret"],
      comboDecks: ["seacret"],
      controlDecks: ["huntgargs", "noplayingallowed"],
      midrangeDecks: ["gargstar22"],
      allDecks: [
        "budgetburn",
        "gargstar22",
        "huntgargs",
        "noplayingallowed",
        "seacret",
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
    const toBuildAggroString = buildDeckString(
      electricBoogalooDecks.aggroDecks
    );
    const toBuildControlString = buildDeckString(
      electricBoogalooDecks.controlDecks
    );
    const toBuildMemeString = buildDeckString(electricBoogalooDecks.memeDecks);
    const toBuildString = buildDeckString(electricBoogalooDecks.allDecks);
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

    const alldecksrow = new CreateButtons("seacret", "beb");
    const beb = new CreateButtons("helpall", "gstar22");
    const gstar22 = new CreateButtons("budgeteb", "hgargs");
    const hgargs = new CreateButtons("gargstar22", "npa");
    const npa = new CreateButtons("huntgargs", "sea");
    const sea = new CreateButtons("noplayingallowed", "allhelp");
    const memerow = new CreateButtons("noplayingallowed2", "hgargs2");
    const hgargs2 = new CreateButtons("helpmeme", "npa2");
    const npa2 = new CreateButtons("huntgargs2", "memehelp");
    const aggrorow = new CreateButtons("seacret2", "beb2");
    const beb2 = new CreateButtons("helpaggro", "sea2");
    const sea2 = new CreateButtons("budgeteb2", "aggrohelp");
    const controlrow = new CreateButtons("noplayingallowed3", "hgargs3");
    const hgargs3 = new CreateButtons("helpcontrol", "npa3");
    const npa3 = new CreateButtons("huntgargs3", "controlhelp");
    const [result] = await db.query(`SELECT * FROM ebdecks`);
    // Help EB command
    const embed = new CreateHelpEmbed(
      "Electric Boogaloo Decks",
      `To view the Electric Boogaloo decks please select an option from the select menu below!
Note: Electric Boogaloo has ${electricBoogalooDecks.allDecks.length} total decks in Tbot`,
      "https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png"
    );
    const allEmbed = new CreateHelpEmbed(
      "Electric Boogaloo Decks",
      `My Decks for Electric Boogaloo(EB) are ${toBuildString}`
    )
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle("Electric Boogaloo Decks")
      .setDescription(`My Decks for Electric Boogaloo(EB) are ${toBuildString}`)
      .setFooter({
        text: `To view the Electric Boogaloo decks please use the commands listed above or navigate through all of the decks using the buttons below!
Note: Electric Boogaloo has ${electricBoogalooDecks.allDecks.length} total decks in Tbot`,
      })
      .setColor("Random");
    const memeEmbed = new CreateHelpEmbed(
      "Electric Boogaloo Meme Decks",
      `My Meme Decks for Electric Boogaloo(EB) are ${toBuildMemeString}`,
      "https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png",
      `To view the Meme Electric Boogaloo decks please use the commands listed above or navigate through all of the Meme decks using the buttons below!
Note: Electric Boogaloo has ${electricBoogalooDecks.memeDecks.length} Meme decks in Tbot`
    );
    const aggroEmbed = new CreateHelpEmbed(
      "Electric Boogaloo Aggro Decks",
      `My Aggro Decks for Electric Boogaloo(EB) are ${toBuildAggroString}`,
      "https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png",
      `To view the Aggro Electric Boogaloo decks please use the commands listed above or navigate through all of the Aggro decks using the buttons below!
Note: Electric Boogaloo has ${electricBoogalooDecks.aggroDecks.length} Aggro decks in Tbot`
    );
    const controlEmbed = new CreateHelpEmbed(
      "Electric Boogaloo Control Decks",
      `My Control Decks for Electric Boogaloo(EB) are ${toBuildControlString}`,
      "https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png",
      `To view the Control Electric Boogaloo decks please use the commands listed above or navigate through all of the Control decks using the buttons below!
Note: Electric Boogaloo has ${electricBoogalooDecks.controlDecks.length} Control decks in Tbot`
    );
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
    //Deck Embeds
    const budgetburn = new CreateDeckEmbed(result, "budgetburn");
    const gargstar22 = new CreateDeckEmbed(result, "gargstar22");
    const huntgargs = new CreateDeckEmbed(result, "huntgargs");
    const noplayingallowed = new CreateDeckEmbed(result, "noplayingallowed");
    const seacret = new CreateDeckEmbed(result, "seacret");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    /**
     * The handleSelectMenu function handles the select menu interactions for the user
     * @param {*} i - The interaction object
     */
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget") {
        await i.reply({ embeds: [budgetburn], flags: MessageFlags.Ephemeral });
      } else if (value == "comp" || value == "combo") {
        await i.reply({ embeds: [seacret], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder" || value == "midrange") {
        await i.reply({ embeds: [gargstar22], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
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
        allhelp: { embed: allEmbed, component: alldecksrow },
        helpall: { embed: allEmbed, component: alldecksrow },
        helpmeme: { embed: memeEmbed, component: memerow },
        memehelp: { embed: memeEmbed, component: memerow },
        helpaggro: { embed: aggroEmbed, component: aggrorow },
        aggrohelp: { embed: aggroEmbed, component: aggrorow },
        helpcontrol: { embed: controlEmbed, component: controlrow },
        controlhelp: { embed: controlEmbed, component: controlrow },
        beb: { embed: budgetburn, component: beb },
        budgeteb: { embed: budgetburn, component: beb},
        beb2: { embed: budgetburn, component: beb2 },
        budgeteb2: { embed: budgetburn, component: beb2 },
        gstar22: { embed: gargstar22, component: gstar22 },
        gargstar22: { embed: gargstar22, component: gstar22 },
        hgargs: { embed: huntgargs, component: hgargs },
        huntgargs: { embed: huntgargs, component: hgargs },
        hgargs2: { embed: huntgargs, component: hgargs2 },
        huntgargs2: { embed: huntgargs, component: hgargs2 },
        hgargs3: { embed: huntgargs, component: hgargs3 },
        huntgargs3: { embed: huntgargs, component: hgargs3 },
        npa: { embed: noplayingallowed, component: npa },
        noplayingallowed: { embed: noplayingallowed, component: npa },
        npa2: { embed: noplayingallowed, component: npa2 },
        noplayingallowed2: { embed: noplayingallowed, component: npa2 },
        npa3: { embed: noplayingallowed, component: npa3 },
        noplayingallowed3: { embed: noplayingallowed, component: npa3 },
        sea: { embed: seacret, component: sea },
        seacret: { embed: seacret, component: sea },
        sea2: { embed: seacret, component: sea2 },
        seacret2: { embed: seacret, component: sea2 },
      };
     const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button interaction.",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } else {
        handleButtonInteraction(i);
      }
    });
  },
};
