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
    .setColor("Red");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `captaincombustible`,
  aliases: [`cc`, `captain`, `combustible`, `combust`, `stumpy`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Captain Combustible Decks")
        .setEmoji("<a:aCombustible:1100168807391166525>")
        .setStyle(ButtonStyle.Primary)
    );
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
    aggroDecks: ["logbait"],
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
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMemeString = buildDeckString(
      captainCombustibleDecks.memeDecks
    );
    const toBuildComboString = buildDeckString(
      captainCombustibleDecks.comboDecks
    );
    const toBuildString = buildDeckString(captainCombustibleDecks.allDecks);
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
    const comborow = new CreateButtons("reflourished2", "bpm");
    const bpm = new CreateButtons("helpcombo", "msp2");
    const msp2 = new CreateButtons("budgetplantmop", "pm2");
    const pm2 = new CreateButtons("mspotk2", "rfl2");
    const rfl2 = new CreateButtons("plantmop2", "combohelp");
    const alldecksrow = new CreateButtons("reflourished3", "bpm2");
    const bpm2 = new CreateButtons("helpall", "lcbd2");
    const lcbd2 = new CreateButtons("budgetplantmop2", "lbait");
    const lbait = new CreateButtons("lifecouldbedream2", "msp3");
    const msp3 = new CreateButtons("logbait", "pm3");
    const pm3 = new CreateButtons("mspotk3", "rfl3");
    const rfl3 = new CreateButtons("plantmop3", "allhelp");
    let cc = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212"
      )
      .setTitle(
        "Captain Combustible | <:Kabloom:1062502137826910268><:MegaGrow:1062501412992458802>"
      )
      .setDescription("**\\- Tree Hero  -**")
      .setColor("Red")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Meteor Strike <:Kabloom:1062502137826910268> \n Do 3 damage to a Zombie. \nEmbiggen <:MegaGrow:1062501412992458802> \n A Plants gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \nTime To Shine <:MegaGrow:1062501412992458802> \n A Plant does a Bonus Attack. \nBlazing Bark <:Kabloom:1062502137826910268><:MegaGrow:1062501412992458802> \n A Plant gets +4<:Strength:1062501774612779039>.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: `If you want to see him blow his top, try calling him "Stumpy". Go on. Try it.`,
        }
      );
    let embed = new CreateHelpEmbed(
      "Captain Combustible Decks",
      `To view the Captain Combustible decks please select an option from the select menu below!
  Note: Captain Combustible has ${captainCombustibleDecks.allDecks.length} total decks in Tbot`,
      "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212"
    );
    let allEmbed = new CreateHelpEmbed(
      "Captain Combustible Decks",
      `My Decks for Captain Combustible(CC) are ${toBuildString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212",
      `To view the Decks for Captain Combustible decks please use the commands listed above or click on the buttons below!
  Note: Captain Combustible has ${captainCombustibleDecks.allDecks.length} total Decks in Tbot`
    );
    let memeEmbed = new CreateHelpEmbed(
      "Captain Combustible Meme Decks",
      `My Meme Decks for Captain Combustible(CC) are ${toBuildMemeString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212",
      `To view the Meme Decks for Captain Combustible decks please use the commands listed above or click on the buttons below!
  Note: Captain Combustible has ${captainCombustibleDecks.memeDecks.length} Meme Decks in Tbot`
    );
    let comboEmbed = new CreateHelpEmbed(
      "Captain Combustible Combo Decks",
      `My Combo Decks for Captain Combustible(CC) are ${toBuildComboString}`,
      "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212",
      `To view the Combo Decks for Captain Combustible decks please use the commands listed above or click on the buttons below!
  Note: Captain Combustible has ${captainCombustibleDecks.comboDecks.length} Combo Decks in Tbot`
    );
    let [result] = await db.query(`SELECT * from ccdecks`);

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
    const m = await message.channel.send({ embeds: [cc], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget") {
        await i.reply({
          embeds: [budetplantmop],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "comp" || value == "aggro") {
        await i.reply({
          embeds: [logbait],
          flags: MessageFlags.Ephemeral,
        });
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
    async function HandleButtonInteraction(i) {
      const buttonActions = {
        helpall: {embed: allEmbed, component: alldecksrow}, 
        allhelp: {embed: allEmbed, component: alldecksrow},
        helpmeme: {embed: memeEmbed, component: memerow},
        memehelp: {embed: memeEmbed, component: memerow},
        helpcombo: {embed: comboEmbed, component: comborow},
        combohelp: {embed: comboEmbed, component: comborow},
        pm: {embed: plantmop, component: pm},
        plantmop: {embed: plantmop, component: pm},
        pm2: {embed: plantmop, component: pm2},
        plantmop2: {embed: plantmop, component: pm2},
        pm3: {embed: plantmop, component: pm3},
        plantmop3: {embed: plantmop, component: pm3},
        lcbd: {embed: lcbdream, component: lcbd},
        lifecouldbedream: {embed: lcbdream, component: lcbd},
        lcbd2: {embed: lcbdream, component: lcbd2},
        lifecouldbedream2: {embed: lcbdream, component: lcbd2},
        msp: {embed: mspotk, component: msp},
        mspotk: {embed: mspotk, component: msp},
        msp2: {embed: mspotk, component: msp2},
        mspotk2: {embed: mspotk, component: msp2},
        msp3: {embed: mspotk, component: msp3},
        mspotk3: {embed: mspotk, component: msp3},
        bpm: {embed: budetplantmop, component: bpm},
        budgetplantmop: {embed: budetplantmop, component: bpm},
        bpm2: {embed: budetplantmop, component: bpm2},
        budgetplantmop2: {embed: budetplantmop, component: bpm2},
        rfl: {embed: reflourished, component: rfl},
        reflourished: {embed: reflourished, component: rfl},
        rfl2: {embed: reflourished, component: rfl2},
        reflourished2: {embed: reflourished, component: rfl2},
        rfl3: {embed: reflourished, component: rfl3},
        reflourished3: {embed: reflourished, component: rfl3},
        lbait: {embed: logbait, component: lbait},
        logbait: {embed: logbait, component: lbait},
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({ embeds: [action.embed], components: [action.component] });
      } else {
        await i.reply({ content: "Unknown button action", flags: MessageFlags.Ephemeral });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
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
