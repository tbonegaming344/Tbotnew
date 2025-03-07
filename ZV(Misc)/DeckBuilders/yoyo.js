const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder, 
  StringSelectMenuOptionBuilder
} = require("discord.js");
let db = require("../../index.js");

module.exports = {
  name: `yoyo`,
  aliases: [
    `yoyodecks`,
    `helpyoyo`,
    `helpyoyo`,
    `decksmadebyyoyo`,
    `yoyodecklists`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view YoYo's Deck")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Decks")
          .setValue("competitive")
          .setDescription('Some of the Best Decks in the game')
					.setEmoji("<:compemote:1325461143136764060>"), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setValue("combo")
          .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      )
    const row = new ActionRowBuilder().addComponents(select);
    let combodecks = ["trickstache"];
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickstache")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rfl2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const rfl2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmidrange")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ts")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const ts = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("reflourished2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midrangehelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let midrangdecks = ["reflourished", "trickstache"];
    let toBuildMid = "";
    for (let i = 0; i < midrangdecks.length; i++) {
      toBuildMid += `\n<@1043528908148052089> **${midrangdecks[i]}**`;
    }
    const comprow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trickstache2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rfl")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const rfl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcompetitive")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ts2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const ts2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("reflourished")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("competitivehelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )

    let competitivedecks = ["reflourished", "trickstache"];
    let toBuildCompString = ""
    for (let i = 0; i < competitivedecks.length; i++) {
      toBuildCompString += `\n<@1043528908148052089> **${competitivedecks[i]}**`;
    }
    let [result] = await db.query(`select reflourished, trickstache
from ccdecks cc
inner join pbdecks pb 
on (cc.deckinfo = pb.deckinfo)`);
    let yoyo = new EmbedBuilder()
      .setTitle("Yoyo Decks")
      .setDescription(
        `To view the Decks Made By Yoyo please select an option from the select menu below! To view all of Yoyo decks select either competitive or midrange
Note: Yoyo has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(
        "https://media.discordapp.net/attachments/832984002633269258/1159176803122946129/D85BDC68-3C9B-4F69-93B0-34BE08842E28.png?ex=651eef06&is=651d9d86&hm=635d383184d2aa08482b520b&=&width=492&height=580"
      )
      .setColor("Random");
      let compyoyo = new EmbedBuilder()
      .setTitle("Competitive Decks Made By Yoyo")
      .setDescription(`My Competitive Decks made by Yoyo are ${toBuildCompString}`)
      .setFooter({
        text: `To view the Competitive Decks Made By Yoyo please use the commands listed above or click on the buttons below!
Note: Yoyo has ${competitivedecks.length} Competitive decks in Tbot`,
      })
      .setThumbnail(
        "https://media.discordapp.net/attachments/832984002633269258/1159176803122946129/D85BDC68-3C9B-4F69-93B0-34BE08842E28.png?ex=651eef06&is=651d9d86&hm=635d383184d2aa08482b520b&=&width=492&height=580"
      )
      .setColor("Random");
    let midrangeyoyo = new EmbedBuilder()
      .setTitle("Midrange Decks Made By Yoyo")
      .setDescription(`My Midrange Decks made by Yoyo are ${toBuildMid}`)
      .setFooter({
        text: `To view the Midrange Decks Made By Yoyo please use the commands listed above or click on the buttons below!
Note: Yoyo has ${midrangdecks.length} Midrange decks in Tbot`,
      })
      .setThumbnail(
        "https://media.discordapp.net/attachments/832984002633269258/1159176803122946129/D85BDC68-3C9B-4F69-93B0-34BE08842E28.png?ex=651eef06&is=651d9d86&hm=635d383184d2aa08482b520b&=&width=492&height=580"
      )
      .setColor("Random");
      let reflourished = new EmbedBuilder()
        .setTitle(`${result[5].reflourished}`)
        .setDescription(`${result[3].reflourished}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].reflourished}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].reflourished}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].reflourished}`,
        inline: true
      },
        {
        name: "Deck Cost",
        value: `${result[1].reflourished}`,
        inline: true
      })
      .setImage(`${result[4].reflourished}`);
    let tstache = new EmbedBuilder()
      .setTitle(`${result[5].trickstache}`)
      .setDescription(`${result[3].trickstache}`)
      .setFooter({ text: `${result[2].trickstache}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].trickstache}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].trickstache}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].trickstache}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].trickstache}`);
    const m = await message.channel.send({
      embeds: [yoyo],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0]; 
        if(value == "combo"){
          await i.reply({embeds: [tstache], flags: MessageFlags.Ephemeral})
        }
        if(value == "midrange"){
          await i.update({ embeds: [midrangeyoyo], components: [midrangerow] });
        }
        if(value == "competitive"){
          await i.update({ embeds: [compyoyo], components: [comprow] });
        }
      }
      if (i.customId === "ts" || i.customId == "trickstache") {
        await i.update({ embeds: [tstache], components: [ts] });
      }
      if (i.customId == "ts2" || i.customId == "trickstache2") {
        await i.update({ embeds: [tstache], components: [ts2] });
      }
      if (i.customId == "helpmidrange" || i.customId == "midrangehelp") {
        await i.update({ embeds: [midrangeyoyo], components: [midrangerow] });
      }
      if(i.customId == "rfl" || i.customId == "reflourished"){
        await i.update({ embeds: [reflourished], components: [rfl] });
      }
      if(i.customId == "rfl2" || i.customId == "reflourished2"){
        await i.update({ embeds: [reflourished], components: [rfl2] });
      }
      if(i.customId == "rfl3" || i.customId == "reflourished3"){
        await i.update({ embeds: [reflourished], components: [rfl3] });
      }
      
      
    });
  },
};
