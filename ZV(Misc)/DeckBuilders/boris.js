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
const e = require("express");
module.exports = {
  name: `boris`,
  aliases: [`borishelp`, `borisdecks`, `decksmadebyboris`, `helpboris`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setDescription('Some of the Best Decks in the game')
      .setEmoji("<:compemote:1325461143136764060>")
      .setValue("comp"), 
      new  StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setDescription('Decks that are built off a weird/fun combo')
      .setValue("meme"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Deck")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
      .setValue("combo"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Decks")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
      .setValue("tempo"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Decks")
      .setDescription('All the decks made by Boris')
      .setValue("all")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const tempo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lcbd")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lcbd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helptemp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lockbr")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const lo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lbcdream")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mspotk2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lcbd3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lcbd3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ltbr")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const ltbr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lcbdream3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("msp2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const msp2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lockthebathroom")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
      

    let decks = ["lifecouldbedream", "lockthebathroom", "mspotk"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let tempodecks = ["lifecouldbedream", "lockthebathroom"];
    let toBuildtempo = "";
    for (let i = 0; i < tempodecks.length; i++) {
      let deck = tempodecks[i];
      toBuildtempo += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("mspotk")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("lcbd2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const lcbd2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("msp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const msp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("lbcdream2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let memedecks = ["lifecouldbedream", "mspotk"]
    let toBuildMeme = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMeme += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`SELECT lockin, lcbd, mspotk FROM bfdecks bf
      inner join ccdecks cc on (bf.deckinfo = cc.deckinfo)`);
    let user = await client.users.fetch("705167235429433435");
    let boris = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To find out more about the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let tempbor = new EmbedBuilder()
      .setTitle(`${user.displayName} tempo Decks`)
      .setDescription(
        `My tempo decks made by ${user.displayName} are ${toBuildtempo}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setFooter({
        text: `To view the tempo Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${tempodecks.length} tempo decks in Tbot`,
      })
      .setColor("Random");
      let memebor = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My Meme decks made by ${user.displayName} are ${toBuildMeme}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setFooter({
        text: `To view the meme Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${memedecks.length} meme decks in Tbot`,
      })
      .setColor("Random");
      let allbor = new EmbedBuilder()
      .setTitle(`${user.displayName} All Decks`)
      .setDescription(
        `My Decks made by ${user.displayName} are ${toBuildString}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random");
    let lockin = new EmbedBuilder()
    .setTitle(`${result[5].lockin}`)	
    .setDescription(`${result[3].lockin}`)
.setFooter({text: `${result[2].lockin}`})
    .addFields({
      name: "Deck Type", 
      value: `${result[6].lockin}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].lockin}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].lockin}`,
      inline: true
    })
  .setColor("Random")			
  .setImage(`${result[4].lockin}`)
      let lcbdream = new EmbedBuilder()
      .setTitle(`${result[5].lcbd}`)
      .setDescription(`${result[3].lcbd}`)
      .setColor("Random")
      .setFooter({ text: `${result[2].lcbd}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].lcbd}`,
        inline: true
      },
      {
        name: "Archetype",
        value: `${result[0].lcbd}`,
        inline: true
      },
        {
        name: "Deck Cost",
        value: `${result[1].lcbd}`,
        inline: true
      })
      .setImage(`${result[4].lcbd}`);
      let mspotk = new EmbedBuilder()
      .setTitle(`${result[5].mspotk}`)
      .setDescription(`${result[3].mspotk}`)
    .setColor("Random")
    .setFooter({ text: `${result[2].mspotk}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].mspotk}`,
      inline: true
    },
    {
      name: "Archetype",
      value: `${result[0].mspotk}`,
      inline: true
    },
      {
      name: "Deck Cost",
      value: `${result[1].mspotk}`,
      inline: true
    })
    .setImage(`${result[4].mspotk}`);
    const m = await message.channel.send({
      embeds: [boris],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
   if(i.customId == "select"){
    const value = i.values[0];
    if(value == "comp"){
      await i.reply({embeds: [lockin], flags: MessageFlags.Ephemeral})
    }
    if(value == "meme"){
      await i.update({embeds: [memebor], components: [memerow]})
    }
    if(value == "combo"){
      await i.reply({embeds: [mspotk], flags: MessageFlags.Ephemeral})
    }
    if(value == "tempo"){
      await i.update({embeds: [tempbor], components: [tempo]})
    }
    if(value == "all"){
      await i.update({embeds: [allbor], components: [alldecksrow]})
    }
   }
      if(i.customId == "helpmeme" || i.customId == "memehelp"){
        await i.update({embeds: [memebor], components: [memerow]})
      }
      if (i.customId == "lo" || i.customId == "lockbr") {
        await i.update({ embeds: [lockin], components: [lo] });
      }
      if (i.customId == "helptemp" || i.customId == "help") {
        await i.update({ embeds: [tempbor], components: [tempo] });
      }
      if (i.customId == "lcbd" || i.customId == "lbcdream") {
        await i.update({ embeds: [lcbdream], components: [lcbd] });
      }
      if (i.customId == "lcbd2" || i.customId == "lbcdream2") {
        await i.update({ embeds: [lcbdream], components: [lcbd2] });
      }
  if(i.customId == "msp" || i.customId == "mspotk"){
    await i.update({embeds: [mspotk], components: [msp]})
  }
  if(i.customId == "lcbd3" || i.customId == "lcbdream3"){
    await i.update({embeds: [lcbdream], components: [lcbd3]})
  }
  if(i.customId == "msp2" || i.customId == "mspotk2"){
    await i.update({embeds: [mspotk], components: [msp2]})
  }
  if(i.customId == "ltbr" || i.customId == "lockthebathroom"){
    await i.update({embeds: [lockin], components: [ltbr]})
  }
  if(i.customId == "helpall" || i.customId == "allhelp"){
    await i.update({embeds: [allbor], components: [alldecksrow]})
  }
  });
  },
};
