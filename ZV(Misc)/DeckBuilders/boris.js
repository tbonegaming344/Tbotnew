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
  name: `boris`,
  aliases: [`borishelp`, `borisdecks`, `decksmadebyboris`, `helpboris`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("select an option below to view Boris's decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comp"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          )
          .setValue("combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Decks")
          .setDescription(
            "Focuses on slowly building a big board, winning trades and overwhelming the opponent."
          )
          .setValue("tempo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setDescription("All the decks made by Boris")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const borisDecks = {
      competitiveDecks: ["lockthebathroom"],
      memeDecks: ["lifecouldbedream", "mspotk"],
      comboDeck: ["mspotk"],
      tempoDecks: ["lifecouldbedream", "lockthebathroom"],
      allDecks: ["lifecouldbedream", "lockthebathroom", "mspotk"],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(borisDecks.allDecks);
    const toBuildTempo = buildDeckString(borisDecks.tempoDecks);
    const toBuildMeme = buildDeckString(borisDecks.memeDecks);
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
    const tempo = new CreateButtons("lockthebathroom", "lcbd");
    const lcbd = new CreateButtons("helptempo", "ltbr");
    const ltbr = new CreateButtons("lifecouldbedream", "tempohelp");
    const alldecksrow = new CreateButtons("mspotk", "lcbd2");
    const lcbd2 = new CreateButtons("helpall", "ltbr2");
    const ltbr2 = new CreateButtons("lifecouldbedream2", "msp");
    const msp = new CreateButtons("lockthebathroom2", "allhelp");
    const memerow = new CreateButtons("mspotk2", "lcbd3");
    const lcbd3 = new CreateButtons("helpmeme", "msp2");
    const msp2 = new CreateButtons("lifecouldbedream3", "memehelp");
    let [result] = await db.query(`SELECT lockin, lcbd, mspotk FROM bfdecks bf
      inner join ccdecks cc on (bf.deckinfo = cc.deckinfo)`);
    let user = await client.users.fetch("705167235429433435");
    let boris = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To find out more about the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${borisDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    let tempbor = new CreateHelpEmbed(
      `${user.displayName} Tempo Decks`,
      `My tempo decks made by ${user.displayName} are ${toBuildTempo}`,
      user.displayAvatarURL(),
      `To view the tempo Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${borisDecks.tempoDecks.length} tempo decks in Tbot`
    );
    let memebor = new CreateHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My Meme decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the meme Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${borisDecks.memeDecks.length} meme decks in Tbot`
    );
    let allbor = new CreateHelpEmbed(
      `${user.displayName} All Decks`,
      `My decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${borisDecks.allDecks.length} total decks in Tbot`
    );
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
    let lockin = new CreateDeckEmbed(result, "lockin");
    let lcbdream = new CreateDeckEmbed(result, "lcbd");
    let mspotk = new CreateDeckEmbed(result, "mspotk");
    const m = await message.channel.send({
      embeds: [boris],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "comp") {
        await i.reply({ embeds: [lockin], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.update({ embeds: [memebor], components: [memerow] });
      } else if (value == "combo") {
        await i.reply({ embeds: [mspotk], flags: MessageFlags.Ephemeral });
      } else if (value == "tempo") {
        await i.update({ embeds: [tempbor], components: [tempo] });
      } else if (value == "all") {
        await i.update({ embeds: [allbor], components: [alldecksrow] });
      }
    }
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpmeme: { embed: memebor, component: memerow },
        memehelp: { embed: memebor, component: memerow },
        ltbr: { embed: lockin, component: ltbr },
        lockthebathroom: { embed: lockin, component: ltbr },
        ltbr2: { embed: lockin, component: ltbr2 },
        lockthebathroom2: { embed: lockin, component: ltbr2 },
        lcbd: { embed: lcbdream, component: lcbd },
        lifecouldbedream: { embed: lcbdream, component: lcbd },
        lcbd2: { embed: lcbdream, component: lcbd2 },
        lifecouldbedream2: { embed: lcbdream, component: lcbd2 },
        lcbd3: { embed: lcbdream, component: lcbd3 },
        lifecouldbedream3: { embed: lcbdream, component: lcbd3 },
        msp: { embed: mspotk, component: msp },
        mspotk: { embed: mspotk, component: msp },
        msp2: { embed: mspotk, component: msp2 },
        mspotk2: { embed: mspotk, component: msp2 },
        allhelp: { embed: allbor, component: alldecksrow },
        helpall: { embed: allbor, component: alldecksrow },
        tempohelp: { embed: tempbor, component: tempo },
        helptempo: { embed: tempbor, component: tempo },
      };
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Unkown Button Interaction",
          flags: MessageFlags.Ephemeral,
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
