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
    .setColor("Green");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `kingfishcommander`,
  aliases: [
    `kingfishcommanderdecks`,
    `kingfishcommanderhelp`,
    `helpkingfishcommander`,
    `decksmadebykingfishcommander`,
    `kingfish`,
    `kfc`,
    `kingfish_commander`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder(
        "Select an option below to view KingFish Commander's Decklists"
      )
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
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
          )
      );
    const row = new ActionRowBuilder().addComponents(select);
    const kingFishCommanderDecks = {
      memeDecks: ["lunchtime", "petmop", "savagemayflower", "sunlord"],
      comboDecks: ["lunchtime", "petmop", "sunlord"],
      midrangeDecks: ["lunchtime", "petmop", "sunlord"],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildMeme = buildDeckString(kingFishCommanderDecks.memeDecks);
    const toBuildCombo = buildDeckString(kingFishCommanderDecks.comboDecks);
    const toBuildMidrange = buildDeckString(
      kingFishCommanderDecks.midrangeDecks
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
    const memerow = new CreateButtons("sunlord", "lt");
    const lt = new CreateButtons("helpmeme", "pm");
    const pm = new CreateButtons("lunchtime", "smf");
    const smf = new CreateButtons("petmop", "sl");
    const sl = new CreateButtons("petmop", "memehelp");
    const midrangerow = new CreateButtons("sunlord2", "lt2");
    const lt2 = new CreateButtons("helpmidrange", "pm2");
    const pm2 = new CreateButtons("lunchtime2", "sl2");
    const sl2 = new CreateButtons("petmop2", "midrangehelp");
    const comborow = new CreateButtons("sunlord3", "lt3");
    const lt3 = new CreateButtons("helpcombo", "pm3");
    const pm3 = new CreateButtons("lunchtime3", "sl3");
    const sl3 = new CreateButtons("petmop3", "combohelp");
    const user = await client.users.fetch("1160392548423061516");
    const kfish = new CreateHelpEmbed(
      `${user.displayName} Decks`,
      `To view the Decks Made By ${user.displayName} please select an option from the select menu below! 
      Select meme to view all the decks made by ${user.displayName} or select combo to view all the combo decks made by ${user.displayName}
Note: ${user.displayName} has ${kingFishCommanderDecks.memeDecks.length} total decks in Tbot`,
      user.displayAvatarURL()
    );
    const memekfish = new CreateHelpEmbed(
      `${user.displayName} Meme Decks`,
      `My Meme decks made by ${user.displayName} are ${toBuildMeme}`,
      user.displayAvatarURL(),
      `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${kingFishCommanderDecks.memeDecks.length} Meme decks in Tbot`
    );
    const combookfish = new CreateHelpEmbed(
      `${user.displayName} Combo Decks`,
      `My Combo decks made by ${user.displayName} are ${toBuildCombo}`,
      user.displayAvatarURL(),
      `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${kingFishCommanderDecks.comboDecks.length} Combo decks in Tbot`
    );
    const midrangekfish = new CreateHelpEmbed(
      `${user.displayName} Midrange Decks`,
      `My Midrange decks made by ${user.displayName} are ${toBuildMidrange}`,
      user.displayAvatarURL(),
      `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${kingFishCommanderDecks.midrangeDecks.length} Midrange decks in Tbot`
    );
    const [result] =
      await db.query(`select petmop, midpets, savagemayflower, wimps
		from gsdecks gs 
    inner join bfdecks bf 
		on (gs.deckinfo = bf.deckinfo)
    inner join ntdecks nt
    on (gs.deckinfo = nt.deckinfo)`);
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
    const lunchtime = new CreateDeckEmbed(result, "midpets");
    const savagemayflower = new CreateDeckEmbed(result, "savagemayflower");
    const pmop = new CreateDeckEmbed(result, "petmop");
    const sunlord = new CreateDeckEmbed(result, "wimps");
    const m = await message.channel.send({
      embeds: [kfish],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function handleSelectMenu(i) {
      const value = i.values[0];
      if (value == "meme") {
        await i.update({ embeds: [memekfish], components: [memerow] });
      } else if (value == "combo") {
        await i.update({ embeds: [combookfish], components: [comborow] });
      } else if (value == "midrange") {
        await i.update({ embeds: [midrangekfish], components: [midrangerow] });
      }
    }
    async function handleButtonInteraction(i) {
      const buttonActions = {
        helpmeme: { embed: memekfish, component: memerow },
        memehelp: { embed: memekfish, component: memerow },
        helpmidrange: { embed: midrangekfish, component: midrangerow },
        midrangehelp: { embed: midrangekfish, component: midrangerow },
        helpcombo: { embed: combookfish, component: comborow },
        combohelp: { embed: combookfish, component: comborow },
        sl: { embed: sunlord, component: sl },
        sunlord: { embed: sunlord, component: sl },
        sl2: { embed: sunlord, component: sl2 },
        sunlord2: { embed: sunlord, component: sl2 },
        sl3: { embed: sunlord, component: sl3 },
        sunlord3: { embed: sunlord, component: sl3 },
        smf: { embed: savagemayflower, component: smf },
        savagemayflower: { embed: savagemayflower, component: smf },
        pm: { embed: pmop, component: pm },
        petmop: { embed: pmop, component: pm },
        pm2: { embed: pmop, component: pm2 },
        petmop2: { embed: pmop, component: pm2 },
        pm3: { embed: pmop, component: pm3 },
        petmop3: { embed: pmop, component: pm3 },
        lt: { embed: lunchtime, component: lt },
        lunchtime: { embed: lunchtime, component: lt },
        lt2: { embed: lunchtime, component: lt2 },
        lunchtime2: { embed: lunchtime, component: lt2 },
        lt3: { embed: lunchtime, component: lt3 },
        lunchtime3: { embed: lunchtime, component: lt3 },
      };
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
      } else {
        await handleButtonInteraction(i);
      }
    });
  },
};
