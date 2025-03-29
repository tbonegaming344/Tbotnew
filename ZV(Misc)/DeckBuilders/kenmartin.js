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
  name: `kenmartin`,
  aliases: [
    `helpkenmartin`,
    `kenmartindecks`,
    `kenmartinhelp`,
    `decksmadebykenmartin`,
    `martin`
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Ken Martin Decks")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription('Decks that mostly only good for ranked games')
					.setEmoji("<:ladder:1271503994857979964>"), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription('Decks that are built off a weird/fun combo'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription('View all the decks made by Ken Martin')
      );
    const row = new ActionRowBuilder().addComponents(select);
    let ladderdecks = [
      "boltbolt",
    ]
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("yongkenmartin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bb2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcombo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yem")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const yem = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("boltbolt2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykmartin")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ykmartin = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("yemartin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combohelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let combodecks = [
      "boltbolt",
      "youngeggmartin",
      "ykm",
    ]
    let toBuildCombo = "";
    for (let i = 0; i < combodecks.length; i++) {
      toBuildCombo += `\n<@1043528908148052089> **${combodecks[i]}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yem2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const yem2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmeme")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykm2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ykm2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("yemartin2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("memehelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let memedecks = [
      "youngeggmartin",
      "ykm",
    ]
    let toBuildMeme = "";
    for (let i = 0; i < memedecks.length; i++) {
      toBuildMeme += `\n<@1043528908148052089> **${memedecks[i]}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bb3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmidrange")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykm3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const ykm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("boltbolt3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midrangehelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let midrangedecks = [
      "boltbolt",
      "ykm",
    ]
    let toBuildMidrange = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      toBuildMidrange += `\n<@1043528908148052089> **${midrangedecks[i]}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bb4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const bb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yem3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const yem3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("boltbolt4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykm4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const ykm4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("yemartin3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let decks = [
      "boltbolt",
      "youngeggmartin",
      "ykm",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select boltbolt,
youngeggmartin, ykm 
from rbdecks rb 
inner join pbdecks pb 
on (rb.deckinfo = pb.deckinfo)
inner join hgdecks hg
on (rb.deckinfo = hg.deckinfo)`);
    let ken = new EmbedBuilder()
      .setTitle("Ken Martin Decks")
      .setDescription(
        `To view the Decks Made By Ken Martin please select an option from the select menu below!
Note: Ken Martin has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(
        "https://media.discordapp.net/attachments/1044626284346605588/1111011436223803473/ken.jpg?width=604&height=604"
      )
      .setColor("Random");
      let comboken = new EmbedBuilder()
      .setTitle("Combo Decks Made By Ken Martin")
      .setDescription(
        `My combo decks made by Ken Martin are ${toBuildCombo}`
      )
      .setFooter({
        text: `To view the Combo Decks Made By Ken Martin please use the commands listed above or click on the buttons below!
Note: Ken Martin has ${combodecks.length} combo decks in Tbot`,
      })
      .setThumbnail(
        "https://media.discordapp.net/attachments/1044626284346605588/1111011436223803473/ken.jpg?width=604&height=604"
      )
      .setColor("Random");
      let midrangeken = new EmbedBuilder()
      .setTitle("Midrange Decks Made By Ken Martin")
      .setDescription(
        `My midrange decks made by Ken Martin are ${toBuildMidrange}`
      )
      .setFooter({
        text: `To view the Midrange Decks Made By Ken Martin please use the commands listed above or click on the buttons below!
Note: Ken Martin has ${midrangedecks.length} midrange decks in Tbot`,
      })
      .setThumbnail(
        "https://media.discordapp.net/attachments/1044626284346605588/1111011436223803473/ken.jpg?width=604&height=604"
      )
      .setColor("Random");
      let memeken = new EmbedBuilder()
      .setTitle("Meme Decks Made By Ken Martin")
      .setDescription(
        `My meme decks made by Ken Martin are ${toBuildMeme}`
      )
      .setFooter({
        text: `To view the Meme Decks Made By Ken Martin please use the commands listed above or click on the buttons below!
Note: Ken Martin has ${memedecks.length} meme decks in Tbot`,
      })
      .setThumbnail(
        "https://media.discordapp.net/attachments/1044626284346605588/1111011436223803473/ken.jpg?width=604&height=604"
      )
      .setColor("Random");
      let allken = new EmbedBuilder()
      .setTitle("All Decks Made By Ken Martin")
      .setDescription(
        `My decks made by Ken Martin are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By Ken Martin please use the commands listed above or click on the buttons below!
Note: Ken Martin has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(
        "https://media.discordapp.net/attachments/1044626284346605588/1111011436223803473/ken.jpg?width=604&height=604"
      )
      .setColor("Random");
    let bbolt = new EmbedBuilder()
    .setTitle(`${result[5].boltbolt}`)
    .setDescription(`${result[3].boltbolt}`)
    .setFooter({ text: `${result[2].boltbolt}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].boltbolt}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].boltbolt}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].boltbolt}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].boltbolt}`);
    //Young Egg Martin
    let youngeggmartin = new EmbedBuilder()
    .setTitle(`${result[5].youngeggmartin}`)
    .setDescription(`${result[3].youngeggmartin}`)
    .setColor("Random")
    .setFooter({ text: `${result[2].youngeggmartin}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].youngeggmartin}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].youngeggmartin}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].youngeggmartin}`,
      inline: true
    })
    .setImage(`${result[4].youngeggmartin}`);
    let ykm = new EmbedBuilder()
    .setTitle(`${result[5].ykm}`)
    .setDescription(`${result[3].ykm}`)
    .setFooter({ text: `${result[2].ykm}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].ykm}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].ykm}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].ykm}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].ykm}`);
    const m = await message.channel.send({ embeds: [ken], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
     if(i.customId == "select"){
      const value = i.values[0];
      if(value == "ladder"){
        await i.reply({ embeds: [bbolt], flags: MessageFlags.Ephemeral });
      }
      if(value == "meme"){
        await i.update({ embeds: [memeken], components: [memerow] });
      }
      if(value == "combo"){
        await i.update({ embeds: [comboken], components: [comborow] });
      }
      if(value == "midrange"){
        await i.update({ embeds: [midrangeken], components: [midrangerow] });
      }
      if(value == "all"){
        await i.update({ embeds: [allken], components: [alldecksrow] });
      }
     }
      if (i.customId == "ykmartin" || i.customId == "ykmartin") {
        await i.update({ embeds: [ykm], components: [ykmartin] });
      }
      if (i.customId == "bb2" || i.customId == "boltbolt2") {
        await i.update({ embeds: [bbolt], components: [bb2] });
      }
      if(i.customId == "yem" || i.customId == "yemartin"){
        await i.update({ embeds: [youngeggmartin], components: [yem] });
      }
      if (i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({ embeds: [comboken], components: [comborow] });
      }
      if (i.customId == "ykm3" || i.customId == "youngkenmartin3") {
        await i.update({ embeds: [ykm], components: [ykm3] });
      }
      if (i.customId == "bb3" || i.customId == "boltbolt3") {
        await i.update({ embeds: [bbolt], components: [bb3] });
      }
      if (i.customId == "helpmidrange" || i.customId == "midrangehelp") {
        await i.update({ embeds: [midrangeken], components: [midrangerow] });
      }
      if (i.customId == "ykm2" || i.customId == "youngkenmartin2") {
        await i.update({ embeds: [ykm], components: [ykm2] });
      }
      if(i.customId == "yem2" || i.customId == "yemartin2"){
        await i.update({ embeds: [youngeggmartin], components: [yem2] });
      }
      if(i.customId == "helpmeme" || i.customId == "memehelp"){
        await i.update({ embeds: [memeken], components: [memerow] });
      }
      if(i.customId == "yem3" || i.customId == "yemartin3"){
        await i.update({ embeds: [youngeggmartin], components: [yem3] });
      }
      if(i.customId == "allhelp" || i.customId == "allhelp"){
        await i.update({ embeds: [allken], components: [alldecksrow] });
      }
      if(i.customId == "ykm4" || i.customId == "youngkenmartin4"){
        await i.update({ embeds: [ykm], components: [ykm4] });
      }
      // Ladder Decks
      if (i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderken], components: [ladderrow] });
      }
      if(i.customId == "bb" || i.customId == "boltbolt"){
        await i.update({ embeds: [bbolt], components: [bb] });
      }
      if(i.customId == "bb4" || i.customId == "boltbolt4"){
        await i.update({ embeds: [bbolt], components: [bb4] });
      }
    });
  },
};
