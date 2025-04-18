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
    .setColor("#005a6e");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `mono`,
  aliases: [
    `decksmadebymono`,
    `monodecks`,
    `monohelp`,
    `helpmono`,
    `monosexual`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Mono's Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setDescription("Some of the best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>")
          .setValue("comp"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setDescription("Decks that are built off a weird/fun combo")
          .setValue("meme"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
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
          .setLabel("Control Decks")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          )
          .setValue("control"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
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
          .setLabel("All Mono Decks")
          .setDescription("An option to view all decks")
          .setValue("all")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const monoDecks = {
      competitiveDecks: ["kaleidoscope", "nohokaistars", "seacret"],
      memeDecks: ["cancerknight", "coggerazzi", "pbfeast", "rampticia"],
      aggroDecks: ["seacret"],
      comboDecks: ["coggerazzi", "rampticia", "seacret"],
      controlDecks: ["cancerknight", "kaleidoscope", "pbfeast"],
      midrangeDecks: ["nohokaistars"],
      tempoDecks: ["coggerazzi"],
      allDecks: [
        "cancerknight",
        "coggerazzi",
        "kaleidoscope",
        "nohokaistars",
        "pbfeast",
        "rampticia",
        "seacret",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMeme = buildDeckString(monoDecks.memeDecks);
    const toBuildCombo = buildDeckString(monoDecks.comboDecks);
    const toBuildControl = buildDeckString(monoDecks.controlDecks);
    const toBuildCompetitive = buildDeckString(monoDecks.competitiveDecks);
    const toBuildString = buildDeckString(monoDecks.allDecks);

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
    const memerow = new CreateButtons("rampticia", "ck");
    const ck = new CreateButtons("helpmeme", "cog");
    const cog = new CreateButtons("cancerknight", "pbf");
    const pbf = new CreateButtons("coggerazzi", "rticia");
    const rticia = new CreateButtons("pbfeast", "memehelp");
    const controlrow = new CreateButtons("pbfeast2", "ck2");
    const ck2 = new CreateButtons("helpcontrol", "kscope");
    const kscope = new CreateButtons("cancerknight2", "pbf2");
    const pbf2 = new CreateButtons("kaliedoscope", "controlhelp");
    const comborow = new CreateButtons("seacret", "cog2");
    const cog2 = new CreateButtons("helpcombo", "rticia2");
    const rticia2 = new CreateButtons("coggerazzi2", "sea");
    const sea = new CreateButtons("rampticia2", "combohelp");
    const competitiverow = new CreateButtons("seacret2", "kscop2");
    const kscope2 = new CreateButtons("helpcompetitive", "nhks");
    const nhks = new CreateButtons("kaleidoscope2", "sea2");
    const sea2 = new CreateButtons("nohokaistars", "competitivehelp");
    const alldecksrow = new CreateButtons("seacret3", "ck3");
    const ck3 = new CreateButtons("helpall", "cog3");
    const cog3 = new CreateButtons("cancerknight3", "kscope3");
    const kscope3 = new CreateButtons("coggerazzi3", "pbf3");
    const pbf3 = new CreateButtons("kaleidoscope3", "rticia3");
    const rticia3 = new CreateButtons("pbfeast3", "sea3");
    const sea3 = new CreateButtons("rampticia3", "allhelp");
    const [result] =
      await db.query(`select cancerknight, otktrickster, nohokaistars, seacret,
pbfeast, poggerrazzi, rampticia
from wkdecks wk 
inner join ebdecks eb
on (wk.deckinfo = eb.deckinfo)
inner join ifdecks fi 
on (wk.deckinfo = fi.deckinfo)
inner join pbdecks pb 
on (wk.deckinfo = pb.deckinfo)
inner join rbdecks rb 
on (wk.deckinfo = rb.deckinfo)
inner join imdecks im 
on (wk.deckinfo = im.deckinfo)`);
    const user = await client.users.fetch("444700385744257034");
    const mono = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${monoDecks.allDecks.length} total decks in Tbot`,
        user.displayAvatarURL()
    )
    const alldecksEmbed = new CreateButtons(
      `${user.displayName} Decks`,
      `My commands for all decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To view the decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${monoDecks.allDecks.length} decks in Tbot`
    )
    const mememono = new CreateHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My meme decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${monoDecks.memeDecks.length} meme decks in Tbot`
    )
    const controlmono = new CreateHelpEmbed(
      `${user.displayName} Control Decks`,
      `My control decks made by ${user.displayName} are ${toBuildControl}`,
      user.displayAvatarURL(),
      `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${monoDecks.controlDecks.length} control decks in Tbot`
    )
    const combomono = new CreateHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My combo decks made by ${user.displayName} are ${toBuildCombo}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${monoDecks.comboDecks.length} combo decks in Tbot`
    )
    const competitivemono = new CreateHelpEmbed(
      `${user.displayName} Competitive Decks`,
      `My competitive decks made by ${user.displayName} are ${toBuildCompetitive}`,
      user.displayAvatarURL(),
      `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${monoDecks.competitiveDecks.length} competitive decks in Tbot`
    )
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
        .setColor("#005a6e");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const cknight = new CreateDeckEmbed(result, "cancerknight");
    const coggerazzi = new CreateDeckEmbed(result, "poggerrazzi");
    const kaleidoscope = new CreateDeckEmbed(result, "otktrickster");
    const nohonkaistars = new CreateDeckEmbed(result, "nohokaistars");
    const seacret = new CreateDeckEmbed(result, "seacret");
    const pbfeast = new CreateDeckEmbed(result, "pbfeast");
    const rampticia = new CreateDeckEmbed(result, "rampticia");
    const m = await message.channel.send({ embeds: [mono], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i){
      const value = i.values[0];
      if (value == "comp") {
        await i.update({
          embeds: [competitivemono],
          components: [competitiverow],
        });
      } else if (value == "meme") {
        await i.update({ embeds: [mememono], components: [memerow] });
      } else if (value == "midrange") {
        await i.reply({
          embeds: [nohonkaistars],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "tempo") {
        await i.reply({
          embeds: [coggerazzi],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "control") {
        await i.update({ embeds: [controlmono], components: [controlrow] });
      } else if (value == "combo") {
        await i.update({ embeds: [combomono], components: [comborow] });
      } else if (value == "aggro") {
        await i.reply({ embeds: [seacret], flags: MessageFlags.Ephemeral });
      } else if (value == "all") {
        await i.update({
          embeds: [alldecksEmbed],
          components: [alldecksrow],
        });
      }
    }
    async function handleButtonInteraction(i) {
      const buttonActions = {
        competitivehelp: {
          embed: competitivemono,
          component: competitiverow,
        },
        helpcompetitive: {
          embed: competitivemono,
          component: competitiverow,
        },
        helpmeme: { embed: mememono, component: memerow },
        memehelp: { embed: mememono, component: memerow },
        helpcombo: { embed: combomono, component: comborow },
        combohelp: { embed: combomono, component: comborow },
        helpcontrol: { embed: controlmono, component: controlrow },
        controlhelp: { embed: controlmono, component: controlrow },
        helpaggro: { embed: alldecksEmbed, component: agrorow },
        aggrohelp: { embed: alldecksEmbed, component: agrorow },
        helpall: { embed: alldecksEmbed, component: alldecksrow },
        allhelp: { embed: alldecksEmbed, component: alldecksrow },
        ck: { embed: cknight, component: ck },
        cancerknight: { embed: cknight, component: ck },
        ck2: { embed: cknight, component: ck2 },
        cancerknight2: { embed: cknight, component: ck2 },
        ck3: { embed: cknight, component: ck3 },
        cancerknight3: { embed: cknight, component: ck3 },
        cog: { embed: coggerazzi, component: cog },
        coggerazzi: { embed: coggerazzi, component: cog },
        cog2: { embed: coggerazzi, component: cog2 },
        coggerazzi2: { embed: coggerazzi, component: cog2 },
        cog3: { embed: coggerazzi, component: cog3 },
        coggerazzi3: { embed: coggerazzi, component: cog3 },
        kscope: { embed: kaleidoscope, component: kscope },
        kaleidoscope: { embed: kaleidoscope, component: kscope },
        kscope2: { embed: kaleidoscope, component: kscope2 },
        kaleidoscope2: { embed: kaleidoscope, component: kscope2 },
        kscope3: { embed: kaleidoscope, component: kscope3 },
        kaleidoscope3: { embed: kaleidoscope, component: kscope3 },
        nhks: { embed: nohonkaistars, component: nhks },
        nohokaistars: { embed: nohonkaistars, component: nhks },
        pbf: { embed: pbfeast, component: pbf },
        pbfeast: { embed: pbfeast, component: pbf },
        pbf2: { embed: pbfeast, component: pbf2 },
        pbfeast2: { embed: pbfeast, component: pbf2 },
        pbf3: { embed: pbfeast, component: pbf3 },
        pbfeast3: { embed: pbfeast, component: pbf3 },
        rticia: { embed: rampticia, component: rticia },
        rampticia: { embed: rampticia, component: rticia },
        rticia2: { embed: rampticia, component: rticia2 },
        rampticia2: { embed: rampticia, component: rticia2 },
        rticia3: { embed: rampticia, component: rticia3 },
        rampticia3: { embed: rampticia, component: rticia3 },
        sea: { embed: seacret, component: sea },
        seacret: { embed: seacret, component: sea },
        sea2: { embed: seacret, component: sea2 },
        seacret2: { embed: seacret, component: sea2 },
        sea3: { embed: seacret, component: sea3 },
        seacret3: { embed: seacret, component: sea3 },
      }
      const action = buttonActions[i.customId];
      if (action) {
        await i.update({
          embeds: [action.embed],
          components: [action.component],
        });
      } else {
        await i.reply({
          content: "Invalid button interaction",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "select") {
        await handleSelectMenu(i);
      } 
      else{
        await handleButtonInteraction(i);
      }
    });
  },
};
