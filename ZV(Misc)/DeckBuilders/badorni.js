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
  name: `badorni`,
  aliases: [
    `decksmadebybadorni`,
    `badornihelp`,
    `helpbadorni`,
    `baddecks`,
    `decksmadebybad`,
    `badhelp`,
    `helpbad`,
    `badornidecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Badorni's Decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setDescription('Plant Decks that are built off a weird/fun combo')
      .setValue("meme"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
      .setValue("combo"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
      .setValue("control"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Decks")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      .setValue("midrange"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Decks")
      .setDescription('All of the decks made by Badorni')
      .setValue("all")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const combo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("psy2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("antiagor")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const aa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("combo")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("antiantiagor")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const aanti = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("aa")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("freezeheal")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const freeze = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("aanti")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("frozentelimps")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const ftimps = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("freeze")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("moprbius")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const mopr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ftimps")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("plantmop2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const pmop2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mopr")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("psychosolstice2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    const psy2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pmop2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpcombo")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let combodecks = [
      "antiagor",
      "antiagoragor",
      "freezeheal",
      "frozentelimps",
      "moprbius",
      "plantmop",
      "psychosolstice",
    ]
    let meme = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("psychosolstice")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("aa2")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let aa2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("meme")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("aaa2")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let aaa2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("anti2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("freeze2")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let freeze2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("aaagor2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("fti2")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let fti2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("freezeheal2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mopr2")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let mopr2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ftimps2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("psy3")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let pmop = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mopribus2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("psy")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const psy = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("plantmop")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("meme2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let mdecks = [
      "antiagor",
      "antiagoragor",
      "freezeheal",
      "frozentelimps",
      "moprbius",
      "plantmop",
      "psychosolstice",
    ] 
  
   
    let control = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fti3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("aaa3")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let aaa3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("control")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
    .setCustomId("ftimps3")
   .setEmoji("<:arrowright:1271446796207525898>")
    .setStyle(ButtonStyle.Primary)
    )
    let fti3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("aaagor3")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
    .setCustomId("con")
   .setEmoji("<:arrowright:1271446796207525898>")
    .setStyle(ButtonStyle.Primary)
    )
    let condecks = [
      "antiagoragor",
      "frozentelimps",
    ]
    let midrange = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("psychosolstice3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mopr3")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let mopr3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midrange")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("psy3")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let psy3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mopribus3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("mid")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let middecks = [
      "moprbius",
      "psychosolstice",
    ]
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("psychosolstice4")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aa3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let aa3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aaa4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let aaa4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("antiagor3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("freeze3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let freeze3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("aaagor4")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ftimps4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let fti4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("freezeheal3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mopr4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let mopr4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fti4")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pmop4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let pmop4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mopribus4")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("psy4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let psy4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("plantmop4")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    )
    let decks = [
      "antiagor",
      "antiagoragor",
      "freezeheal",
      "frozentelimps",
      "moprbius",
      "plantmop",
      "psychosolstice",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let toBuildCombo = "";
    for (let i = 0; i < combodecks.length; i++) {
      toBuildCombo += `\n<@1043528908148052089> **${combodecks[i]}**`;
    }
    let toBuildMeme = "";
    for (let i = 0; i < mdecks.length; i++) {
      toBuildMeme += `\n<@1043528908148052089> **${mdecks[i]}**`;
    }
    let toBuildMid = "";
    for (let i = 0; i < middecks.length; i++) {
      toBuildMid += `\n<@1043528908148052089> **${middecks[i]}**`;
    }
    let toBuildCon = "";
    for (let i = 0; i < condecks.length; i++) {
      toBuildCon += `\n<@1043528908148052089> **${condecks[i]}**`;
    }
    let [result] =
      await db.query(`select antiagor, antiagoragor,
	freezeheal, frozentelimps, mopribus, plantmop,
	psychosolstice from ntdecks nt
	inner join ccdecks cc
	on (nt.deckinfo = cc.deckinfo)
	inner join rodecks ro
	on (nt.deckinfo = ro.deckinfo)
	inner join hgdecks hg 
	on (nt.deckinfo = hg.deckinfo)
	inner join sfdecks sf
	on (nt.deckinfo = sf.deckinfo)
	inner join czdecks cz 
	on (nt.deckinfo = cz.deckinfo)
  inner join ctdecks ct 
  on (nt.deckinfo = ct.deckinfo)`);
    const user = await client.users.fetch("749149322561716294");
    let bad = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(`To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${decks.length} decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let allbad = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(`My decks made by ${user.displayName} are ${toBuildString}`)
      .setThumbnail(user.displayAvatarURL())
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${decks.length} decks in Tbot`,
      })
      .setColor("Random");
      let combobad = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo decks made by ${user.displayName} are ${toBuildCombo}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setFooter({
        text: `To view the Combo Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${combodecks.length} combo decks in Tbot`,
      })
      .setColor("Random");
      let memebad = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My Meme decks made by ${user.displayName} are ${toBuildMeme}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setFooter({
        text: `To view the Meme Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${mdecks.length} meme decks in Tbot`,
      })
      let midbad = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My Midrange decks made by ${user.displayName} are ${toBuildMid}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setFooter({
        text: `To view the Midrange Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${middecks.length} midrange decks in Tbot`,
      })
      .setColor("Random");
      let conbad = new EmbedBuilder()
      .setTitle(`${user.displayName} Control Decks`)
      .setDescription(
        `My Control decks made by ${user.displayName} are ${toBuildCon}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setFooter({
        text: `To view the Control Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${condecks.length} control decks in Tbot`,
      })
      .setColor("Random");
    let coloboy = new EmbedBuilder()
    .setTitle(`${result[5].antiagor}`)
		.setDescription(`${result[3].antiagor}`)
		.addFields({
			name: "Deck Type",
			value: `${result[6].antiagor}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].antiagor}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].antiagor}`,
			inline: true
		})
		.setFooter({text: `${result[2].antiagor}`})
		.setColor("Random")
		.setImage(`${result[4].antiagor}`)
    let a = new EmbedBuilder()
    .setTitle(`${result[5].antiagoragor}`)
		.setDescription(`${result[3].antiagoragor}`)
			.setColor("Random")
		.addFields({
			name: "Deck Type",
			value: `${result[6].antiagoragor}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].antiagoragor}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].antiagoragor}`,
			inline: true
		})
		.setFooter({text: `${result[2].antiagoragor}`})
    .setImage(`${result[4].antiagoragor}`);
    let freal = new EmbedBuilder()
    .setTitle(`${result[5].freezeheal}`)
		.setDescription(`${result[3].freezeheal}`)
		.setFooter({text: `${result[2].freezeheal}`})
		.setColor("Random")
		.addFields({
			name: "Deck Type",
			value: `${result[6].freezeheal}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].freezeheal}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].freezeheal}`,
			inline: true
		})
		.setImage(`${result[4].freezeheal}`)
    let fti = new EmbedBuilder()
    .setTitle(`${result[5].frozentelimps}`)
		.setDescription(`${result[3].frozentelimps}`)
	.setColor("Random")
		.setImage(`${result[4].frozentelimps}`)
		.addFields({
			name: "Deck Type",
			value: `${result[6].frozentelimps}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].frozentelimps}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].frozentelimps}`,
			inline: true
		})
		.setFooter({text: `${result[2].frozentelimps}`})
    let mop = new EmbedBuilder()
    .setTitle(`${result[5].mopribus}`)
    .setDescription(`${result[3].mopribus}`)
    .setColor("Random")
    .addFields({
      name: "Deck Type",
      value: `${result[6].mopribus}`,
      inline: true,
    },
    {
      name: "Archetype",
      value: `${result[0].mopribus}`,
      inline: true,
    },{ 
      name: "Deck Cost", 
      value: `${result[1].mopribus}`,
      inline: true
    })
    .setFooter({ text: `${result[2].mopribus}` })
    .setImage(`${result[4].mopribus}`);
    let plantmop = new EmbedBuilder()
    .setTitle(`${result[5].plantmop}`)
    .setDescription(`${result[3].plantmop}`)
    .setFooter({text: `${result[2].plantmop}`})
          .addFields(
            {
            name: "Deck Type",
            value:`${result[6].plantmop}`,
            inline: true
            },
            {
            name: "Archetype",
            value:`${result[0].plantmop}`,
            inline: true
            },
            {
            name: "Deck Cost", 
            value: `${result[1].plantmop}`,
            inline: true
          })
      .setColor("Random")			
      .setImage(`${result[4].plantmop}`)
    let pysol = new EmbedBuilder()
    .setTitle(`${result[5].psychosolstice}`)
    .setDescription(`${result[3].psychosolstice}`)
    .setColor("Random")
    .setFooter({ text: `${result[2].psychosolstice}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].psychosolstice}`,
      inline: true,
    }, {
      name: "Archetype",
      value: `${result[0].psychosolstice}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].psychosolstice}`,
      inline: true
    })
    .setImage(`${result[4].psychosolstice}`);
    const m = await message.channel.send({ embeds: [bad], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "combo"){
          await i.update({embeds: [combobad], components: [combo]});
        }
        if(value == "meme"){
          await i.update({embeds: [memebad], components: [meme]});
        }
        if(value == "midrange"){
          await i.update({embeds: [midbad], components: [midrange]});
        }
        if(value == "control"){
          await i.update({embeds: [conbad], components: [control]});
        }
        if(value == "all"){
          await i.update({embeds: [allbad], components: [alldecksrow]});
        }

      }
        if(i.customId == "pmop" || i.customId == "plantmop"){ 
          await i.update({embeds: [plantmop], components: [pmop]})
        }
        //mopbrius
        if(i.customId == "mopr" || i.customId == "moprbius"){
          await i.update({embeds: [mop], components: [mopr]})
        }
        //psyhco
        if(i.customId == "psy" || i.customId == "psychosolstice"){
          await i.update({embeds: [pysol], components: [psy]})
        }
        if(i.customId == "combo" || i.customId == "helpcombo"){
          await i.update({ embeds: [combobad], components: [combo] });
        }
        if(i.customId == "aa" || i.customId == "antiagor"){
          await i.update({embeds: [coloboy], components: [aa]})
        }
        if(i.customId == "aanti" || i.customId == "antiantiagor"){
          await i.update({embeds: [a], components: [aanti]})
        }
        if(i.customId == "freeze" || i.customId == "freezeheal"){
          await i.update({embeds: [freal], components: [freeze]})
        }
        if(i.customId == "ftimps" || i.customId == "frozentelimps"){
          await i.update({embeds: [fti], components: [ftimps]})
        }
        if(i.customId == "mopr2" || i.customId == "moprbius2"){
          await i.update({embeds: [mop], components: [mopr2]})
        }
        if(i.customId == "pmop2" || i.customId == "plantmop2"){
          await i.update({embeds: [plantmop], components: [pmop2]})
        }
        if(i.customId == "psy2" || i.customId == "psychosolstice2"){
          await i.update({embeds: [pysol], components: [psy2]})
        }
        //Meme Decks
        if(i.customId == "meme" || i.customId == "meme2"){
          await i.update({embeds: [memebad], components: [meme]})
        }
        //Antiagoragor
        if(i.customId == "aa2" || i.customId == "anti2"){
          await i.update({embeds: [coloboy], components: [aa2]})
        }
        if(i.customId == "aa3" || i.customId == "antiagor3"){
          await i.update({embeds: [coloboy], components: [aa3]})
        }
        if(i.customId == "aaa2" || i.customId == "aaagor2"){
          await i.update({embeds: [a], components: [aaa2]})
        }
        if(i.customId == "aaa3" || i.customId == "aaagor3"){
          await i.update({embeds: [a], components: [aaa3]})
        }
        //Freeze Heal
        if(i.customId == "freeze2" || i.customId == "freezeheal2"){
          await i.update({embeds: [freal], components: [freeze2]})
        }
        //Frozen Telimps
        if(i.customId == "fti2" || i.customId == "ftimps2"){
          await i.update({embeds: [fti], components: [fti2]})
        }
        if(i.customId == "fti3" || i.customId == "ftimps3"){
          await i.update({embeds: [fti], components: [fti3]})
        }
        //Midrange Decks
        if(i.customId == "mid" || i.customId == "midrange"){
          await i.update({embeds: [midbad], components: [midrange]})
        }
        if(i.customId == "mopr3" || i.customId == "mopribus3"){
          await i.update({embeds: [mop], components: [mopr3]})
        }
       //Psychosolstice
        if(i.customId == "psy3" || i.customId == "psychosolstice3"){
          await i.update({embeds: [pysol], components: [psy3]})
        }
        //Control Decks 
        if(i.customId == "con" || i.customId == "control"){
          await i.update({embeds: [conbad], components: [control]})
        }
        //Antiagor
        if(i.customId == "aaa4" || i.customId == "aaagor4"){
          await i.update({embeds: [a], components: [aaa4]})
        }
        if(i.customId == "fti4" || i.customId == "ftimps4"){
          await i.update({embeds: [fti], components: [fti4]})
        }
        if(i.customId == "freeze3" || i.customId == "freezeheal3"){
          await i.update({embeds: [freal], components: [freeze3]})
        }
        if(i.customId == "pmop4" || i.customId == "plantmop4"){
          await i.update({embeds: [plantmop], components: [pmop4]})
        }
        if(i.customId == "psy4" || i.customId == "psychosolstice4"){
          await i.update({embeds: [pysol], components: [psy4]})
        }
        if(i.customId == "helpall" || i.customId == "allhelp"){
          await i.update({embeds: [allbad], components: [alldecksrow]})
        }
        if(i.customId == "mopr4" || i.customId == "moprbius4"){
          await i.update({embeds: [mop], components: [mopr4]})
        }
    });
  },
};
