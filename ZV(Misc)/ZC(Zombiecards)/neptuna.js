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
    .setColor("Orange");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `neptuna`,
  aliases: [`nt`, `tuna`, `np`, `neptune`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpnt")
        .setLabel("Neptuna Decks")
        .setStyle(ButtonStyle.Danger)
        .setEmoji("<:NeptunaH:1087845030867247174>")
    );
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Please select an option below to view Neptuna Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setDescription("A Deck that is cheap for new players")
          .setEmoji("💰")
          .setValue("budget"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comp"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setDescription("Decks that are generally only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>")
          .setValue("ladder"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Decks")
          .setDescription(
            "attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          )
          .setValue("aggro"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Deck")
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
          .setLabel("Tempo Deck")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Neptuna Decks")
          .setDescription("An option to view all decks")
          .setEmoji("<:NeptunaH:1087845030867247174>")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const neptunaDecks = {
      budgetDecks: ["budgetnt"],
      competitiveDecks: ["icebox"],
      ladderDecks: ["ladytuna", "gomorrah", "schoolyard"],
      memeDecks: ["antiagor", "antiagoragor", "floss", "sunlord"],
      aggroDecks: ["agraves", "schoolyard"],
      comboDecks: ["antiagor", "antiagoragor", "floss", "sunlord"],
      controlDecks: ["antiagoragor"],
      midrangeDecks: ["gomorrah", "icebox", "ladytuna", "sunlord"],
      tempoDecks: ["budgetnt"],
      allDecks: [
        "agraves",
        "antiagor",
        "antiagoragor",
        "budgetnt",
        "floss",
        "gomorrah",
        "icebox",
        "ladytuna",
        "schoolyard",
        "sunlord",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(neptunaDecks.allDecks);
    const toBuildLadderString = buildDeckString(neptunaDecks.ladderDecks);
    const toBuildMemeString = buildDeckString(neptunaDecks.memeDecks);
    const toBuildAggroString = buildDeckString(neptunaDecks.aggroDecks);
    const toBuildComboString = buildDeckString(neptunaDecks.comboDecks);
    const toBuildMidrangeString = buildDeckString(neptunaDecks.midrangeDecks);
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
    const alldecksrow = new CreateButtons("sunlord", "ag");
    const ag = new CreateButtons("helpall", "anti");
    const anti = new CreateButtons("agraves", "aaa");
    const aaa = new CreateButtons("antiagor", "bnt");
    const bnt = new CreateButtons("antiagoragor", "fl");
    const fl = new CreateButtons("budgetnt", "go");
    const go = new CreateButtons("floss", "ib");
    const ib = new CreateButtons("gomorrah", "lt");
    const lt = new CreateButtons("icebox", "sy");
    const sy = new CreateButtons("ladytuna", "sl");
    const sl = new CreateButtons("schoolyard", "allhelp");
    const ladderrow = new CreateButtons("schoolyard2", "ag2");
    const ag2 = new CreateButtons("helpladder", "go2");
    const go2 = new CreateButtons("agraves2", "sy2");
    const sy2 = new CreateButtons("gomorrah2", "ladderhelp");
    const memerow = new CreateButtons("sunlord2", "anti2");
    const anti2 = new CreateButtons("helpmeme", "aaa2");
    const aaa2 = new CreateButtons("antiagor2", "fl2");
    const fl2 = new CreateButtons("antiagoragor2", "lt2");
    const lt2 = new CreateButtons("floss2", "sl2");
    const sl2 = new CreateButtons("ladytuna2", "memehelp");
    const aggrorow = new CreateButtons("schoolyard3", "ag3");
    const ag3 = new CreateButtons("helpaggro", "sy3");
    const sy3 = new CreateButtons("agraves3", "aggrohelp");
    const comborow = new CreateButtons("sunlord3", "anti3");
    const anti3 = new CreateButtons("helpcombo", "aaa3");
    const aaa3 = new CreateButtons("antiagor3", "fl3");
    const fl3 = new CreateButtons("antiagoragor3", "sl3");
    const sl3 = new CreateButtons("floss3", "combohelp");
    const midrangerow = new CreateButtons("sunlord4", "go3");
    const go3 = new CreateButtons("helpmid", "ib2");
    const ib2 = new CreateButtons("gomorrah3", "lt3");
    const lt3 = new CreateButtons("icebox2", "sl4");
    const sl4 = new CreateButtons("ladytuna3", "midhelp");
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
      )
      .setTitle(
        "Neptuna | <:Hearty:1062501636557242429><:Sneaky:1062502187781075094>"
      )
      .setDescription("**\\- Pet Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Dolphinado <:Sneaky:1062502187781075094> \n __Bounce__ a random Plant. \n Possessed <:Hearty:1062501636557242429> \n A Zombie gets +2<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__. \n In-Crypted <:Sneaky:1062502187781075094> \n A Zombie hides in a __Gravestone__. \n Draw a card. \n Octo-Pult <:Hearty:1062501636557242429><:Sneaky:1062502187781075094> \n Make a 3<:Strength:1062501774612779039>/2<:Health:1062515540712751184> Octo-Pet with __Amphibious__, __Frenzy__.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "She is the first Zombie to fight in a tank.",
        }
      )
      .setColor("Orange");
    let alldecksEmbed = new CreateHelpEmbed(
      "Neptuna Decks",
      `My commands for Neptuna(NT) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna decks please use the commands listed above or click on the buttons below!
  Note: Neptuna has ${neptunaDecks.allDecks.length} total decks in Tbot`
    );
    let ladderEmbed = new CreateHelpEmbed(
      "Neptuna Ladder Decks",
      `My commands for Neptuna(NT) are ${toBuildLadderString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna ladder decks please use the commands listed above or click on the buttons below!
  Note: Neptuna has a total of ${neptunaDecks.ladderDecks.length} ladder decks in Tbot`
    );
    let memeEmbed = new CreateHelpEmbed(
      "Neptuna Meme Decks",
      `My commands for Neptuna(NT) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna meme decks please use the commands listed above or click on the buttons below!
  Note: Neptuna has a total of ${neptunaDecks.memeDecks.length} meme decks in Tbot`
    );
    let aggroEmbed = new CreateHelpEmbed(
      "Neptuna Aggro Decks",
      `My commands for Neptuna(NT) are ${toBuildAggroString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna aggro decks please use the commands listed above or click on the buttons below!
  Note: Neptuna has a total of ${neptunaDecks.aggroDecks.length} aggro decks in Tbot`
    );
    let comboEmbed = new CreateHelpEmbed(
      "Neptuna Combo Decks",
      `My commands for Neptuna(NT) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna combo decks please use the commands listed above or click on the buttons below!
  Note: Neptuna has a total of ${neptunaDecks.comboDecks.length} combo decks in Tbot`
    );
    let midrangeEmbed = new CreateHelpEmbed(
      "Neptuna Midrange Decks",
      `My commands for Neptuna(NT) are ${toBuildMidrangeString}`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317",
      `To view the Neptuna midrange decks please use the commands listed above or click on the buttons below!
  Note: Neptuna has a total of ${neptunaDecks.midrangeDecks.length} midrange decks in Tbot`
    );
    let nthelp = new CreateHelpEmbed(
      "Neptuna Decks",
      `To view the Neptuna decks please select an option from the select menu below!
  Note: Neptuna has ${neptunaDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317"
    );
    let [result] = await db.query(`select * from ntdecks`);
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
        .setColor("#000000");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    let agraves = new CreateDeckEmbed(result, "agraves");
    let antiagor = new CreateDeckEmbed(result, "antiagor");
    let antiagoragor = new CreateDeckEmbed(result, "antiagoragor");
    let budgetnt = new CreateDeckEmbed(result, "budgetnt");
    let floss = new CreateDeckEmbed(result, "floss");
    let gomorrah = new CreateDeckEmbed(result, "gomorrah");
    let icebox = new CreateDeckEmbed(result, "icebox");
    let ladytuna = new CreateDeckEmbed(result, "ladytuna");
    let schoolyard = new CreateDeckEmbed(result, "schoolyard");
    let sunlord = new CreateDeckEmbed(result, "wimps");
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "all") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (value == "comp") {
        await i.reply({ embeds: [icebox], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (value == "control") {
        await i.reply({
          embeds: [antiagoragor],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (value == "budget" || value == "tempo") {
        await i.reply({ embeds: [budgetnt], flags: MessageFlags.Ephemeral });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "ag" || i.customId == "agraves") {
        await i.update({ embeds: [agraves], components: [ag] });
      } else if (i.customId == "ag2" || i.customId == "agraves2") {
        await i.update({ embeds: [agraves], components: [ag2] });
      } else if (i.customId == "ag3" || i.customId == "agraves3") {
        await i.update({ embeds: [agraves], components: [ag3] });
      } else if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [alldecksEmbed], components: [alldecksrow] });
      } else if (i.customId == "helpladder" || i.customId == "ladderhelp") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      } else if (i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (i.customId == "helpaggro" || i.customId == "aggrohelp") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [comboEmbed], components: [comborow] });
      } else if (i.customId == "helpcontrol" || i.customId == "controlhelp") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (i.customId == "helpmid" || i.customId == "midhelp") {
        await i.update({ embeds: [midrangeEmbed], components: [midrangerow] });
      } else if (i.customId == "anti" || i.customId == "antiagor") {
        await i.update({ embeds: [antiagor], components: [anti] });
      } else if (i.customId == "anti2" || i.customId == "antiagor2") {
        await i.update({ embeds: [antiagor], components: [anti2] });
      } else if (i.customId == "anti3" || i.customId == "antiagor3") {
        await i.update({ embeds: [antiagor], components: [anti3] });
      } else if (i.customId == "bnt" || i.customId == "budgetnt") {
        await i.update({ embeds: [budgetnt], components: [bnt] });
      }
      //Floss
      else if (i.customId == "fl" || i.customId == "floss") {
        await i.update({ embeds: [floss], components: [fl] });
      } else if (i.customId == "fl2" || i.customId == "floss2") {
        await i.update({ embeds: [floss], components: [fl2] });
      } else if (i.customId == "fl3" || i.customId == "floss3") {
        await i.update({ embeds: [floss], components: [fl3] });
      }
      //IceBox
      else if (i.customId == "ib" || i.customId == "icebox") {
        await i.update({ embeds: [icebox], components: [ib] });
      } else if (i.customId == "ib2" || i.customId == "icebox2") {
        await i.update({ embeds: [icebox], components: [ib2] });
      } else if (i.customId == "lt" || i.customId == "ladytuna") {
        await i.update({ embeds: [ladytuna], components: [lt] });
      } else if (i.customId == "lt2" || i.customId == "ladytuna2") {
        await i.update({ embeds: [ladytuna], components: [lt2] });
      } else if (i.customId == "lt3" || i.customId == "ladytuna3") {
        await i.update({ embeds: [ladytuna], components: [lt3] });
      } else if (i.customId == "sy" || i.customId == "schoolyard") {
        await i.update({ embeds: [schoolyard], components: [sy] });
      } else if (i.customId == "sy2" || i.customId == "schoolyard2") {
        await i.update({ embeds: [schoolyard], components: [sy2] });
      } else if (i.customId == "sy3" || i.customId == "schoolyard3") {
        await i.update({ embeds: [schoolyard], components: [sy3] });
      } else if (i.customId == "aaa" || i.customId == "antiagoragor") {
        await i.update({ embeds: [antiagoragor], components: [aaa] });
      } else if (i.customId == "aaa2" || i.customId == "antiagoragor2") {
        await i.update({ embeds: [antiagoragor], components: [aaa2] });
      } else if (i.customId == "aaa3" || i.customId == "antiagoragor3") {
        await i.update({ embeds: [antiagoragor], components: [aaa3] });
      }
      if (i.customId == "sl" || i.customId == "sunlord") {
        await i.update({ embeds: [sunlord], components: [sl] });
      } else if (i.customId == "sl2" || i.customId == "sunlord2") {
        await i.update({ embeds: [sunlord], components: [sl2] });
      } else if (i.customId == "sl3" || i.customId == "sunlord3") {
        await i.update({ embeds: [sunlord], components: [sl3] });
      } else if (i.customId == "sl4" || i.customId == "sunlord4") {
        await i.update({ embeds: [sunlord], components: [sl4] });
      } else if (i.customId == "go" || i.customId == "gomorrah") {
        await i.update({ embeds: [gomorrah], components: [go] });
      } else if (i.customId == "go2" || i.customId == "gomorrah2") {
        await i.update({ embeds: [gomorrah], components: [go2] });
      } else if (i.customId == "go3" || i.customId == "gomorrah3") {
        await i.update({ embeds: [gomorrah], components: [go3] });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helpnt") {
        await i.update({ embeds: [nthelp], components: [row] });
      } else if (i.customId == "select") {
        await HandleSelectMenu(i);
      } else {
        await HandleButtonInteraction(i);
      }
    });
  },
};
