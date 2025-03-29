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
    .setColor("#964B00");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `citron`,
  aliases: [`ct`, `tron`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Citron Decks")
        .setEmoji("<:Citron_Pog:1100168420743450654>")
        .setStyle(ButtonStyle.Primary)
    );
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Citron's Decklists")
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
          .setLabel("Combo Decks")
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
          .setLabel("Tempo Decks")
          .setValue("tempo")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Citron Decks")
          .setValue("all")
          .setDescription("View all of Citron's decks")
          .setEmoji("<:Citron_Pog:1100168420743450654>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const citronDecks = {
      budgetDecks: ["budgetct"],
      competitiveDecks: ["wetron"],
      ladderDecks: ["going3nuts"],
      memeDecks: ["startron"],
      comboDecks: ["going3nuts", "startron"],
      midrangeDecks: ["going3nuts", "startron"],
      tempoDecks: ["startron"],
      allDecks: ["budgetct", "going3nuts", "startron", "wetron"],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    let toBuildComboString = buildDeckString(citronDecks.comboDecks);
    let toBuildMidrangeString = buildDeckString(citronDecks.midrangeDecks);
    let toBuildString = buildDeckString(citronDecks.allDecks);

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
    const comborow = new CreateButtons("startron", "g3n");
    const g3n = new CreateButtons("helpcombo", "star");
    const star = new CreateButtons("going3nuts", "combohelp");
    const midrangerow = new CreateButtons("startron2", "g3n2");
    const g3n2 = new CreateButtons("helpmid", "star2");
    const star2 = new CreateButtons("going3nuts2", "midhelp");
    const alldecksrow = new CreateButtons("watertron", "bct");
    const bct = new CreateButtons("helpall", "g3n3");
    const g3n3 = new CreateButtons("budgetct", "star3");
    const star3 = new CreateButtons("going3nuts3", "wt");
    const wt = new CreateButtons("startron3", "helpall");
    let ct = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747"
      )
      .setTitle(
        "Citron | <:Guardian:1062501130501885973><:Smarty:1062502890448638022>"
      )
      .setDescription("**\\- Fruit Hero  -**")
      .setColor("#964B00")

      .addFields(
        {
          name: "Superpowers",
          value: `Transmogrify <:Smarty:1062502890448638022> \n Transform a Zombie into a random Zombie that costs 1<:Brainz:1062503146745774183>. \n Nut Signal <:Guardian:1062501130501885973> \n Make a Wall-Nut. Draw a card. \n Wall-Nut
0<:Strength:1062501774612779039>/6<:Health:1062515540712751184>, __Team-Up__ \n Root Wall <:Guardian:1062501130501885973> \n A Plant gets +2<:Health:1062515540712751184> and can't be hurt this turn. \n Peel Shield <:Guardian:1062501130501885973><:Smarty:1062502890448638022> \n Plants can't be hurt this turn. \n Draw a card. `,
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "Wanted to be a poet, but couldn't find anything that rhymed with orange.",
        }
      );
    let embed = new CreateHelpEmbed(
      "Citron Decks",
      `To view the Citron decks please select an option from the select menu below!
  Note: Citron has ${citronDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747"
    );
    let allEmbed = new CreateHelpEmbed(
      "Citron Decks",
      `My decks for Citron(CT) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747",
      `To view the Citron decks please use the commands listed above or click on the buttons below to navigate through all Citron decks!
  Note: Citron has ${citronDecks.allDecks.length} total decks in Tbot`
    );
    let comboEmbed = new CreateHelpEmbed(
      "Citron Combo Decks",
      `My Combo decks for Citron(CT) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747",
      `To view the combo Citron decks please use the commands listed above or click on the buttons below to navigate through all combo decks!
  Note: Citron has ${citronDecks.comboDecks.length} combo decks in Tbot`
    );
    let midrangeEmbed = new CreateHelpEmbed(
      "Citron Midrange Decks",
      `My midrange decks for Citron(CT) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747",
      `To view the midrange Citron decks please use the commands listed above or click on the buttons below to navigate through all midrange decks!
  Note: Citron has ${citronDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    const [result] = await db.query("SELECT * FROM ctdecks");
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
        .setColor("White");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const budgetct = new CreateDeckEmbed(result, "budgetct");
    const going3nuts = new CreateDeckEmbed(result, "going3nuts");
    const startron = new CreateDeckEmbed(result, "startron");
    const watertron = new CreateDeckEmbed(result, "watertron");
    const m = await message.channel.send({ embeds: [ct], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget" || value == "tempo") {
        await i.reply({ embeds: [budgetct], flags: MessageFlags.Ephemeral });
      } else if (value == "comp" || value == "aggro") {
        await i.reply({ embeds: [watertron], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.reply({ embeds: [going3nuts], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.reply({ embeds: [startron], flags: MessageFlags.Ephemeral });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if (i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (i.customId == "helpmid" || i.customId == "midhelp") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (i.customId == "tempohelp" || i.customId == "helptempo") {
        await i.update({ embeds: [tempoEmbed], components: [temporow] });
      }
      //Budget CT
      else if (i.customId == "bct" || i.customId == "budgetct") {
        await i.update({ embeds: [budgetct], components: [bct] });
      } else if (i.customId == "bct2" || i.customId == "budgetct2") {
        await i.update({ embeds: [budgetct], components: [bct2] });
      } else if (i.customId == "star" || i.customId == "startron") {
        await i.update({ embeds: [startron], components: [star] });
      } else if (i.customId == "star2" || i.customId == "startron2") {
        await i.update({ embeds: [startron], components: [star2] });
      } else if (i.customId == "star3" || i.customId == "startron3") {
        await i.update({ embeds: [startron], components: [star3] });
      } else if (i.customId == "g3n" || i.customId == "going3nuts") {
        await i.update({ embeds: [going3nuts], components: [g3n] });
      } else if (i.customId == "g3n2" || i.customId == "going3nuts2") {
        await i.update({ embeds: [going3nuts], components: [g3n2] });
      } else if (i.customId == "g3n3" || i.customId == "going3nuts3") {
        await i.update({ embeds: [going3nuts], components: [g3n3] });
      } else if (i.customId == "wt" || i.customId == "watertron") {
        await i.update({ embeds: [watertron], components: [wt] });
      }
    }
    const collector = m.createMessageComponentCollector({
      filter: iFilter,
    });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [embed], components: [row] });
      } else if (i.customId == "select") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
