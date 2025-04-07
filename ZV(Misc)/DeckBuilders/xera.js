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
    .setColor("#e4c1f9");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `xera`,
  aliases: [`xeradecks`, `xerahelp`, `helpxera`, `dekcsmadebyxera`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Please select an option below to view Xera's Decks")
      .addOptions(
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
          .setLabel("All Xera Decks")
          .setDescription("An option to view all decks")
          .setValue("all")
      );
    const xeraDecks = {
      competitiveDecks: ["toyotacontrolla"],
      ladderDecks: ["brady", "gomorrah", "gravepiratestache"],
      memeDecks: [
        "22savage",
        "frozentelimps",
        "funnyflare",
        "healburn",
        "himpter",
        "laserrings",
        "startron",
        "uncrackamech",
        "watersports",
      ],
      aggroDecks: ["gravepiratestache"],
      comboDecks: [
        "22savage",
        "frozentelimps",
        "funnyflare",
        "gravepiratestache",
        "healburn",
        "himpter",
        "laserrings",
        "startron",
        "uncrackamech",
        "watersports",
      ],
      controlDecks: ["frozentelimps", "toyotacontrolla", "uncrackamech"],
      midrangeDecks: [
        "22savage",
        "funnyflare",
        "gomorrah",
        "healburn",
        "himpter",
        "laserrings",
        "startron",
        "watersports",
      ],
      tempoDecks: ["brady"],
      allDecks: [
        "22savage",
        "brady",
        "frozentelimps",
        "funnyflare",
        "gomorrah",
        "gravepiratestache",
        "healburn",
        "himpter",
        "laserrings",
        "startron",
        "toyotacontrolla",
        "uncrackamech",
        "watersports",
      ],
    };
    const row = new ActionRowBuilder().addComponents(select);
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildString = buildDeckString(xeraDecks.allDecks);
    const toBuildLadderString = buildDeckString(xeraDecks.ladderDecks);
    const toBuildMeme = buildDeckString(xeraDecks.memeDecks);
    const toBuildComboString = buildDeckString(xeraDecks.comboDecks);
    const toBuildControlString = buildDeckString(xeraDecks.controlDecks);
    const toBuildMidString = buildDeckString(xeraDecks.midrangeDecks);
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
    const ladderrow = new CreateButtons("gravepiratestache", "br");
    const br = new CreateButtons("helpladder", "go");
    const go = new CreateButtons("brady", "gps");
    const gps = new CreateButtons("gomorrah", "ladderhelp");
    const memerow = new CreateButtons("watersports", "sav");
    const sav = new CreateButtons("helpmeme", "ftimps");
    const ftimps = new CreateButtons("savage", "ff");
    const ff = new CreateButtons("frozentelimps", "hburn");
    const hburn = new CreateButtons("funnyflare", "hi");
    const hi = new CreateButtons("healburn", "lrings");
    const lrings = new CreateButtons("himps", "star");
    const star = new CreateButtons("laserrings", "um");
    const um = new CreateButtons("startron", "ws");
    const ws = new CreateButtons("uncrackamech", "memehelp");
    const comborow = new CreateButtons("watersports2", "sav2");
    const sav2 = new CreateButtons("helpcombo", "ftimps2");
    const ftimps2 = new CreateButtons("savage2", "ff2");
    const ff2 = new CreateButtons("frozentelimps2", "gps2");
    const gps2 = new CreateButtons("funnyflare2", "hburn2");
    const hburn2 = new CreateButtons("gravepiratestace2", "hi2");
    const hi2 = new CreateButtons("healburn2", "lrings2");
    const lrings2 = new CreateButtons("himps2", "star2");
    const star2 = new CreateButtons("laserrings2", "um2");
    const um2 = new CreateButtons("startron2", "ws2");
    const ws2 = new CreateButtons("uncrackamech2", "combohelp");
    const controlrow = new CreateButtons("uncrackmech3", "ftimps3");
    const ftimps3 = new CreateButtons("helpcontrol", "tc");
    const tc = new CreateButtons("frozentelimps3", "um3");
    const um3 = new CreateButtons("toyotacontrolla", "controlhelp");
    const midrangerow = new CreateButtons("watersports3", "sav3");
    const sav3 = new CreateButtons("helpmid", "ff3");
    const ff3 = new CreateButtons("savage3", "go2");
    const go2 = new CreateButtons("funnyflare3", "hburn3");
    const hburn3 = new CreateButtons("gomorrah2", "hi3");
    const hi3 = new CreateButtons("healburn3", "lrings3");
    const lrings3 = new CreateButtons("himps3", "star3");
    const star3 = new CreateButtons("laserrings3", "ws3");
    const ws3 = new CreateButtons("startron3", "midhelp");
    const alldecksrow = new CreateButtons("watersports4", "sav4");
    const sav4 = new CreateButtons("helpall", "br2");
    const br2 = new CreateButtons("savage4", "ftimps4");
    const ftimps4 = new CreateButtons("brady2", "ff4");
    const ff4 = new CreateButtons("frozentelimps4", "go3");
    const go3 = new CreateButtons("funnyflare4", "gps3");
    const gps3 = new CreateButtons("gomorrah3", "hburn4");
    const hburn4 = new CreateButtons("gravepiratestache3", "hi4");
    const hi4 = new CreateButtons("healburn4", "lrings4");
    const lrings4 = new CreateButtons("himps4", "star4");
    const star4 = new CreateButtons("laserrings4", "tc2");
    const tc2 = new CreateButtons("startron4", "um4");
    const um4 = new CreateButtons("toyotacontrolla2", "ws4");
    const ws4 = new CreateButtons("uncrackamech4", "allhelp");
    const [result] = await db.query(`SELECT 
      savage22, frozentelimps, funnyflare, gomorrah, gps, healburn, 
      himps, lasersnap, startron, toyotacontrolla, feastmech, brady, watersports 
            FROM imdecks im
            inner join bfdecks bf on (im.deckinfo = bf.deckinfo) 
            inner join sfdecks sf on (im.deckinfo = sf.deckinfo)
            inner join ctdecks ct on (im.deckinfo = ct.deckinfo)
            inner join ncdecks nc on (im.deckinfo = nc.deckinfo)
            inner join czdecks cz on (im.deckinfo = cz.deckinfo)
            inner join hgdecks hg on (im.deckinfo = hg.deckinfo)
            inner join ntdecks nt on (im.deckinfo = nt.deckinfo)
            inner join zmdecks zm on (im.deckinfo = zm.deckinfo)`);
    const user = await client.users.fetch("742719800395956244");
    const xera = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${xeraDecks.allDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const allxera = new CreateHelpEmbed(
      `All Decks Made By ${user.displayName}`,
      `My commands for decks made by ${user.displayName} are ${toBuildString}`,
      user.displayAvatarURL(),
      `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.allDecks.length} total decks in Tbot`
    );
    const ladderxera = new CreateHelpEmbed(
      `${user.displayName} Ladder Decks`,
      `My Ladder Decks made by ${user.displayName} are ${toBuildLadderString}`,
      user.displayAvatarURL(),
      `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.ladderDecks.length} Ladder decks in tbot`
    );
    const memexera = new CreateHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My Meme Decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.memeDecks.length} Meme decks in tbot`
    );
    const comboxera = new CreateHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My Combo Decks made by ${user.displayName} are ${toBuildComboString}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.comboDecks.length} Combo decks in tbot`
    );
    const controlxera = new CreateHelpEmbed(
      `${user.displayName} Control Decks`,
      `My Control Decks made by ${user.displayName} are ${toBuildControlString}`,
      user.displayAvatarURL(),
      `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.controlDecks.length} Control decks in tbot`
    );
    const midrangexera = new CreateHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My Midrange Decks made by ${user.displayName} are ${toBuildMidString}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${xeraDecks.midrangeDecks.length} Midrange decks in tbot`
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
        .setColor("#e4c1f9");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    const savage22 = new CreateDeckEmbed(result, "savage22");
    const brady = new CreateDeckEmbed(result, "brady");
    const funnyflare = new CreateDeckEmbed(result, "funnyflare");
    const gomorrah = new CreateDeckEmbed(result, "gomorrah");
    const himps = new CreateDeckEmbed(result, "himps");
    const laserrings = new CreateDeckEmbed(result, "lasersnap");
    const startron = new CreateDeckEmbed(result, "startron");
    const toyotacontrolla = new CreateDeckEmbed(result, "toyotacontrolla");
    const healburn = new CreateDeckEmbed(result, "healburn");
    const frozentelimps = new CreateDeckEmbed(result, "frozentelimps");
    const uncrackamech = new CreateDeckEmbed(result, "feastmech");
    const watersports = new CreateDeckEmbed(result, "watersports");
    const gravepiratestache = new CreateDeckEmbed(result, "gps");
    const m = await message.channel.send({ embeds: [xera], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "comp") {
        await i.reply({
          embeds: [toyotacontrolla],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "control") {
        await i.update({ embeds: [controlxera], components: [controlrow] });
      } else if (value == "all") {
        await i.update({ embeds: [allxera], components: [alldecksrow] });
      } else if (value == "meme") {
        await i.update({ embeds: [memexera], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [comboxera], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangexera], components: [midrangerow] });
      } else if (value == "aggro") {
        await i.reply({
          embeds: [gravepiratestache],
          flags: MessageFlags.Ephemeral,
        });
      } else if (value == "ladder") {
        await i.update({ embeds: [ladderxera], components: [ladderrow] });
      } else if (value == "tempo") {
        await i.reply({ embeds: [brady], flags: MessageFlags.Ephemeral });
      }
    }
    async function handleButtonInteraction(i) {
      if (i.customId == "hi" || i.customId == "himps") {
        await i.update({ embeds: [himps], components: [hi] });
      } else if (i.customId == "hi2" || i.customId == "himps2") {
        await i.update({ embeds: [himps], components: [hi2] });
      } else if (i.customId == "hi3" || i.customId == "himps3") {
        await i.update({ embeds: [himps], components: [hi3] });
      } else if (i.customId == "hi4" || i.customId == "himps4") {
        await i.update({ embeds: [himps], components: [hi4] });
      } else if (i.customId == "star" || i.customId == "startron") {
        await i.update({ embeds: [startron], components: [star] });
      } else if (i.customId == "star2" || i.customId == "startron2") {
        await i.update({ embeds: [startron], components: [star2] });
      } else if (i.customId == "star3" || i.customId == "startron3") {
        await i.update({ embeds: [startron], components: [star3] });
      } else if (i.customId == "star4" || i.customId == "startron4") {
        await i.update({ embeds: [startron], components: [star4] });
      } else if (i.customId == "controlhelp" || i.customId == "helpcontrol") {
        await i.update({ embeds: [controlxera], components: [controlrow] });
      } else if (i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memexera], components: [memerow] });
      } else if (i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [comboxera], components: [comborow] });
      } else if (i.customId == "helpmid" || i.customId == "midhelp") {
        await i.update({ embeds: [midrangexera], components: [midrangerow] });
      } else if (i.customId == "ws" || i.customId == "watersports") {
        await i.update({ embeds: [watersports], components: [ws] });
      } else if (i.customId == "ws2" || i.customId == "watersports2") {
        await i.update({ embeds: [watersports], components: [ws2] });
      } else if (i.customId == "ws3" || i.customId == "watersports3") {
        await i.update({ embeds: [watersports], components: [ws3] });
      } else if (i.customId == "ws4" || i.customId == "watersports4") {
        await i.update({ embeds: [watersports], components: [ws4] });
      } else if (i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderxera], components: [ladderrow] });
      } else if (i.customId == "gps" || i.customId == "gravepiratestache") {
        await i.update({ embeds: [gravepiratestache], components: [gps] });
      } else if (i.customId == "gps2" || i.customId == "gravepiratestache2") {
        await i.update({ embeds: [gravepiratestache], components: [gps2] });
      } else if (i.customId == "gps3" || i.customId == "gravepiratestache3") {
        await i.update({ embeds: [gravepiratestache], components: [gps3] });
      } else if (i.customId == "go" || i.customId == "gomorrah") {
        await i.update({ embeds: [gomorrah], components: [go] });
      } else if (i.customId == "go2" || i.customId == "gomorrah2") {
        await i.update({ embeds: [gomorrah], components: [go2] });
      } else if (i.customId == "go3" || i.customId == "gomorrah3") {
        await i.update({ embeds: [gomorrah], components: [go3] });
      } else if (i.customId == "um" || i.customId == "uncrackamech") {
        await i.update({ embeds: [uncrackamech], components: [um] });
      } else if (i.customId == "um2" || i.customId == "uncrackamech2") {
        await i.update({ embeds: [uncrackamech], components: [um2] });
      } else if (i.customId == "um3" || i.customId == "uncrackmech3") {
        await i.update({ embeds: [uncrackamech], components: [um3] });
      } else if (i.customId == "um4" || i.customId == "uncrackamech4") {
        await i.update({ embeds: [uncrackamech], components: [um4] });
      } else if (i.customId == "tc" || i.customId == "toyotacontrolla") {
        await i.update({ embeds: [toyotacontrolla], components: [tc] });
      } else if (i.customId == "tc2" || i.customId == "toyotacontrolla2") {
        await i.update({ embeds: [toyotacontrolla], components: [tc2] });
      } else if (i.customId == "br" || i.customId == "brady") {
        await i.update({ embeds: [brady], components: [br] });
      } else if (i.customId == "br2" || i.customId == "brady2") {
        await i.update({ embeds: [brady], components: [br2] });
      } else if (i.customId == "lrings" || i.customId == "laserrings") {
        await i.update({ embeds: [laserrings], components: [lrings] });
      } else if (i.customId == "lrings2" || i.customId == "laserrings2") {
        await i.update({ embeds: [laserrings], components: [lrings2] });
      } else if (i.customId == "lrings3" || i.customId == "laserrings3") {
        await i.update({ embeds: [laserrings], components: [lrings3] });
      } else if (i.customId == "lrings4" || i.customId == "laserrings4") {
        await i.update({ embeds: [laserrings], components: [lrings4] });
      } else if (i.customId == "helpall" || i.customId == "allhelp") {
        await i.update({ embeds: [allxera], components: [alldecksrow] });
      } else if (i.customId == "sav" || i.customId == "savage") {
        await i.update({ embeds: [savage22], components: [sav] });
      } else if (i.customId == "sav2" || i.customId == "savage2") {
        await i.update({ embeds: [savage22], components: [sav2] });
      } else if (i.customId == "sav3" || i.customId == "savage3") {
        await i.update({ embeds: [savage22], components: [sav3] });
      } else if (i.customId == "sav4" || i.customId == "savage4") {
        await i.update({ embeds: [savage22], components: [sav4] });
      } else if (i.customId == "ff" || i.customId == "funnyflare") {
        await i.update({ embeds: [funnyflare], components: [ff] });
      } else if (i.customId == "ff2" || i.customId == "funnyflare2") {
        await i.update({ embeds: [funnyflare], components: [ff2] });
      } else if (i.customId == "ff3" || i.customId == "funnyflare3") {
        await i.update({ embeds: [funnyflare], components: [ff3] });
      } else if (i.customId == "ff4" || i.customId == "funnyflare4") {
        await i.update({ embeds: [funnyflare], components: [ff4] });
      } else if (i.customId == "ftimps" || i.customId == "frozentelimps") {
        await i.update({ embeds: [frozentelimps], components: [ftimps] });
      } else if (i.customId == "ftimps2" || i.customId == "frozentelimps2") {
        await i.update({ embeds: [frozentelimps], components: [ftimps2] });
      } else if (i.customId == "ftimps3" || i.customId == "frozentelimps3") {
        await i.update({ embeds: [frozentelimps], components: [ftimps3] });
      } else if (i.customId == "ftimps4" || i.customId == "frozentelimps4") {
        await i.update({ embeds: [frozentelimps], components: [ftimps4] });
      } else if (i.customId == "hburn" || i.customId == "healburn") {
        await i.update({ embeds: [healburn], components: [hburn] });
      } else if (i.customId == "hburn2" || i.customId == "healburn2") {
        await i.update({ embeds: [healburn], components: [hburn2] });
      } else if (i.customId == "hburn3" || i.customId == "healburn3") {
        await i.update({ embeds: [healburn], components: [hburn3] });
      } else if (i.customId == "hburn4" || i.customId == "healburn4") {
        await i.update({ embeds: [healburn], components: [hburn4] });
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
