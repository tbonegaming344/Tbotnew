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
  name: `cgp23`,
  aliases: [
    `cgp23decks`,
    `cgp23help`,
    `helpcgp23`,
    `cgpdecks`,
    `cgphelp`,
    `cgp`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view cgp's decks")
    .addOptions(
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
      .setDescription('View all of cgp23\'s decks')
    );

    const row = new ActionRowBuilder().addComponents(select);
    let combo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watersports2")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sun")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const sun = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("combohelp")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ws2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const ws2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunlord")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcombo")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let comdecks = [
      "sunlord",
      "watersports"
    ]
    let toBuildComb = "";
    for (let i = 0; i < comdecks.length; i++) {
      let deck = comdecks[i];
      toBuildComb += `\n<@1043528908148052089> **${deck}**`;
    }
    const meme = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watersports")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sun3")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const sun3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("memehelp")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ws")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const ws = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunlord3")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmeme")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let memedecks = [
      "sunlord",
      "watersports"
    ]
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMemeString += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrange = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watersports3")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sun2")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const sun2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("midhelp")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ws3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const ws3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunlord2")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpmid")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let middecks = [
      "sunlord",
      "watersports"
    ]
    let toBuildmid = "";
    for (let i = 0; i < middecks.length; i++) {
      let deck = middecks[i];
      toBuildmid += `\n<@1043528908148052089> **${deck}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("watersports3")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sun4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const sun4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("allhelp")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ws4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const ws4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunlord4")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let decks = [
      "sunlord",
      "watersports"
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select watersports, wimps 
from bfdecks bf
inner join ntdecks nt
on (bf.deckinfo = nt.deckinfo)`);
    let user = await client.users.fetch("1044624858933383209");
    let cgp = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks made by ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let memecgp = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My Meme decks made by ${user.displayName} are ${toBuildMemeString}`
      )
      .setFooter({
        text: `To view the MemeDecks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${memedecks.length} Meme decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let combocgp = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo decks made by ${user.displayName} are ${toBuildComb}`
      )
      .setFooter({
        text: `To view the Combo Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${comdecks.length} Combo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let midcgp = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My Midrange decks made by ${user.displayName} are ${toBuildmid}`
      )
      .setFooter({
        text: `To view the Midrange Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${middecks.length} Midrange decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let allcgp = new EmbedBuilder()
      .setTitle(`${user.displayName} All Decks`)
      .setDescription(
        `My Decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
  let watersports = new EmbedBuilder()
  .setTitle(`${result[5].watersports}`)
  .setDescription(`${result[3].watersports}`)
  .setColor("Random")
  .setFooter({text: `${result[2].watersports}`})
  .addFields({
    name: "Deck Type", 
    value: `${result[6].watersports}`,
    inline: true
  },{
    name: "Archetype",
    value: `${result[0].watersports}`,
    inline: true
  },{
    name: "Deck Cost", 
    value: `${result[1].watersports}`,
    inline: true
  })
  .setImage(`${result[4].watersports}`)
  let sunlord = new EmbedBuilder()
	.setTitle(`${result[5].wimps}`)	
			.setDescription(`${result[3].wimps}`)
	.setFooter({text: `${result[2].wimps}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].wimps}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].wimps}`,
				inline: true
			},{
				name: "Deck Cost", 
				value:`${result[1].wimps}`,
				inline: true
			})
		.setColor("Random")					
		.setImage(`${result[4].wimps}`)
    const m = await message.channel.send({ embeds: [cgp], 
      components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "meme"){
          await i.update({embeds: [memecgp], components: [meme]});
        }
        if(value == "combo"){
          await i.update({embeds: [combocgp], components: [combo]});
        }
        if(value == "midrange"){
          await i.update({embeds: [midcgp], components: [midrange]});
        }
        if(value == "all"){
          await i.update({embeds: [allcgp], components: [alldecksrow]});
        }
      }
// Combo Decks
    if( i.customId == "combohelp" || i.customId == "helpcombo"){
      await i.update({embeds: [combocgp], components: [combo]});
    }
    if(i.customId == "sun" || i.customId == "sunlord"){
      await i.update({embeds: [sunlord], components: [sun]});
    }
    if(i.customId == "sun4" || i.customId == "sunlord4"){
      await i.update({embeds: [sunlord], components: [sun4]});
    }
    // Midrange Decks
    if( i.customId == "midhelp" || i.customId == "helpmid"){
      await i.update({embeds: [midcgp], components: [midrange]});
    }
    if(i.customId == "sun2" || i.customId == "sunlord2"){
      await i.update({embeds: [sunlord], components: [sun2]});
    }
    if( i.customId == "memehelp" || i.customId == "helpmeme"){
      await i.update({embeds: [memecgp], components: [meme]});
    }
    if(i.customId == "watersports" || i.customId == "ws"){
      await i.update({embeds: [watersports], components: [ws]});
    }
    if(i.customId == "watersports4" || i.customId == "ws4"){
      await i.update({embeds: [watersports], components: [ws4]});
    }
    if(i.customId == "sun3" || i.customId == "sunlord3"){
      await i.update({embeds: [sunlord], components: [sun3]});
    }
    if(i.customId == "ws2" || i.customId == "watersports2"){
      await i.update({embeds: [watersports], components: [ws2]});
    }
    if(i.customId == "ws3" || i.customId == "watersports3"){
      await i.update({embeds: [watersports], components: [ws3]});
    }
    if(i.customId == "helpall" || i.customId == "allhelp"){
      await i.update({embeds: [allcgp], components: [alldecksrow]});
    }
  });
  },
};
