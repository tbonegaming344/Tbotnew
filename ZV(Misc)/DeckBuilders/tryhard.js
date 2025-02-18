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
  name: `tryhard`,
  aliases: [
    `tryharddecks`,
    `tryhardhelp`,
    `helptryhard`,
    `decksmadebytryhard`,
    `trydecks`,
    `helptry`,
    `tryhelp`,
    `try`,
    `decksmadebytry`,
    `trycommands`,
    `commandstry`,
    `pvztryhardhelp`,
    `pvztryhard`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view Tryhards decklists")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Decks")
          .setValue("ladder")
          .setDescription('Decks that mostly only good for ranked games')
					.setEmoji("<:ladder:1271503994857979964>"), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription('Decks that are built off a weird/fun combo'),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setValue("aggro")
          .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Decks")
          .setValue("combo")
          .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Decks")
          .setValue("control")
          .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Decks")
          .setValue("midrange")
          .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Deck")
          .setValue("tempo")
          .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
          new StringSelectMenuOptionBuilder()
          .setLabel("All Decks")
          .setValue("all")
          .setDescription('View all the decks made by Tryhard')
      )
    const row = new ActionRowBuilder().addComponents(select);
    const ladderow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngcatmartin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("one")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const one = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpladder")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agr")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const agraves = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("oneone")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("an")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const an = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("agraves")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ej")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const ej = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("anti")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hb")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const hb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ejection")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sd")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const sd= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hibird")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ycm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const youngcatmartin= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("speeddemon")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ladderhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let ladderdecks = [
      "101",
      "agraves",
      "anti",
      "ejection",
      "hibird",
      "speeddemon",
      "ycm",
    ]
    let toBuildLadder = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadder += `\n<@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("one2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const one2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcombo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hb2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const hb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("oneone")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sd2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const sd2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hibird2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sb")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const sb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("speeddemon2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ycm2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const youngcatmartin2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunbandits")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const youngkenmartin= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngcatmartin2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combohelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let combodecks = [
      "101",
      "hibird",
      "speeddemon",
      "sunbandits",
      "ycm",
      "ykm",
    ]
    let toBuildCombo = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildCombo += `\n<@1043528908148052089> **${deck}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hb3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const hb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midrangehelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ycm3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const ycm3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hibird3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykm2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const youngkenmartin2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngcatmartin3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpmidrange")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let midrangedecks = [
      "hibird",
      "ycm",
      "ykm",
    ]
    let toBuildMidrange = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      let deck = midrangedecks[i];
      toBuildMidrange += `\n<@1043528908148052089> **${deck}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sb3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const sb3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmeme")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykm3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const youngkenmartin3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunbandits3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("memehelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let memedecks = [
      "sunbandits",
      "ykm",
    ]
    let toBuildMeme = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMeme += `\n<@1043528908148052089> **${deck}**`;
    }
    const controlrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunbandits2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ej2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const ej2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcontrol")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sb2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const sb2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ejection2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("controlhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let controldecks = [
      "ejection", 
      "sunbandits",
    ]
    let toBuildControl = "";
    for (let i = 0; i < controldecks.length; i++) {
      let deck = controldecks[i];
      toBuildControl += `\n<@1043528908148052089> **${deck}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngkenmartin4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("one3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const one3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("agr2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const agr2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("oneone3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("an2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const an2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("agraves2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ej3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const ej3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("anti2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hb4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const hb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ejection3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sd3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const sd3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hibird4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sb4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const sb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("speeddemon3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ycm4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const ycm4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunbandits4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykm4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const youngkenmartin4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngcatmartin4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    let decks = [
      "101",
      "agraves",
      "anti",
      "ejection",
      "hibird",
      "speeddemon",
      "sunbandits",
      "ycm",
      "ykm",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select oneone, agraves, anti,
ejection, hibird,  sunbandits, speeddemon, ycm, ykm 
from sfdecks sf inner join ntdecks nt 
on (sf.deckinfo = nt.deckinfo)
inner join bcdecks bc
on (sf.deckinfo = bc.deckinfo)
inner join wkdecks wk 
on (sf.deckinfo = wk.deckinfo)
inner join pbdecks pb 
on (sf.deckinfo = pb.deckinfo)
inner join czdecks cz 
on (sf.deckinfo = cz.deckinfo)
inner join ncdecks nc 
on (sf.deckinfo = nc.deckinfo)
inner join rbdecks rb 
on (sf.deckinfo = rb.deckinfo)
inner join gkdecks gk 
on (sf.deckinfo = gk.deckinfo)
inner join imdecks im 
on (sf.deckinfo = im.deckinfo)
inner join hgdecks hg
on (sf.deckinfo = hg.deckinfo)`);
    let user = await client.users.fetch("265754905828917259");
    let tryhard = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let ladderhard = new EmbedBuilder()
      .setTitle(`${user.displayName} Ladder Decks`)
      .setDescription(
        `My Ladder Decks made by ${user.displayName} are ${toBuildLadder}`
      )
      .setFooter({
        text: `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${ladderdecks.length} Ladder decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let memehard = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My Meme Decks made by ${user.displayName} are ${toBuildMeme}`
      )
      .setFooter({
        text: `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${memedecks.length} Meme decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let combohard = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo Decks made by ${user.displayName} are ${toBuildCombo}`
      )
      .setFooter({
        text: `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${combodecks.length} Combo decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let midrangehard = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My Midrange Decks made by ${user.displayName} are ${toBuildMidrange}`
      )
      .setFooter({
        text: `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${midrangedecks.length} Midrange decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let controlhard = new EmbedBuilder()
      .setTitle(`${user.displayName} Control Decks`)
      .setDescription(
        `My Control Decks made by ${user.displayName} are ${toBuildControl}`
      )
      .setFooter({
        text: `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${controldecks.length} Control decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let allhard = new EmbedBuilder()  
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My Decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let oneone = new EmbedBuilder()
      .setTitle(`${result[5].oneone}`)
      .setDescription(`${result[3].oneone}`)
      .setFooter({ text: `${result[2].oneone}` })
      .setColor("Random")
      .setImage(`${result[4].oneone}`)
      .addFields({
        name: "Deck Type",
        value: `${result[6].oneone}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].oneone}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].oneone}`,
        inline: true
      });
    let agr = new EmbedBuilder()
    .setTitle(`${result[5].agraves}`)
    .setDescription(`${result[3].agraves}`)
    .setFooter({text: `${result[2].agraves}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].agraves}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].agraves}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].agraves}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].agraves}`)
    let anti = new EmbedBuilder()
    .setTitle(`${result[5].anti}`)
		  .setDescription(`${result[3].anti}`)
		  .setFooter({text: `${result[2].anti}`})
				  .addFields({
					name: "Deck Type", 
					value: `${result[6].anti}`,
					inline: true
				  },
				  {
					name: "Archetype",
					value: `${result[0].anti}`,
					inline: true
				  },
				  {
					name: "Deck Cost", 
					value: `${result[1].anti}`,
					inline: true
				})
			  .setColor("Random")
			  .setImage(result[4].anti)
    let eject = new EmbedBuilder()
    .setTitle(`${result[5].ejection}`)
    .setDescription(`${result[3].ejection}`)
    .setFooter({text: `${result[2].ejection}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].ejection}`,
          inline: true
        },
        {
          name: "Archetype",
          value: `${result[0].ejection}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].ejection}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].ejection}`)
    let hbird = new EmbedBuilder()
    .setTitle(`${result[5].hibird}`)
    .setDescription(`${result[3].hibird}`)
    .setFooter({text: `${result[2].hibird}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].hibird}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].hibird}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].hibird}`,
          inline: true
        })
      .setColor("Random")
      .setImage(`${result[4].hibird}`)
      let speeddemon = new EmbedBuilder()
	.setTitle(`${result[5].speeddemon}`)
	.setDescription(`${result[3].speeddemon}`)
	.setFooter({text:`${result[2].speeddemon}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].speeddemon}`,
				inline: true
			},
			{
				name: "Archetype",
				value: `${result[0].speeddemon}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].speeddemon}`,
				inline: true
			})
		.setColor("Random")		
	.setImage(`${result[4].speeddemon}`)
    let sband = new EmbedBuilder()
    .setTitle(`${result[5].sunbandits}`)
    .setDescription(`${result[3].sunbandits}`)
    .setFooter({ text: `${result[2].sunbandits}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].sunbandits}`,
      inline: true,
    },{
      name: "Archetype",
      value: `${result[0].sunbandits}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].sunbandits}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].sunbandits}`);
    let ycm = new EmbedBuilder()
    .setTitle(`${result[5].ycm}`)
      .setDescription(`${result[3].ycm}`)
      .setFooter({ text: `${result[2].ycm}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].ycm}`,
        inline: true,
      },{
        name: "Archetype", 
        value: `${result[0].ycm}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].ycm}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].ycm}`);
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
    const m = await message.channel.send({
      embeds: [tryhard],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "ladder"){
          await i.update({embeds: [ladderhard], components: [ladderow]});
        }
        if(value == "meme"){
          await i.update({embeds: [memehard], components: [memerow]});
        }
        if(value == "combo"){
          await i.update({embeds: [combohard], components: [comborow]});
        }
        if(value == "midrange"){
          await i.update({embeds: [midrangehard], components: [midrangerow]});
        }
        if(value == "control"){
          await i.update({embeds: [controlhard], components: [controlrow]});
        }
        if(value == "all"){
          await i.update({embeds: [allhard], components: [alldecksrow]});
        }
        if(value == "aggro"){
          await i.reply({embeds: [agr], flags: MessageFlags.Ephemeral})
        }
        if(value =="tempo"){
          await i.reply({embeds: [anti], flags: MessageFlags.Ephemeral})
        }
      }
      if (i.customId =="ladderhelp" || i.customId == "helpladder") {
        await i.update({
          embeds: [ladderhard],
          components: [ladderow],
        });
      }
      if(i.customId == "an" || i.customId == "anti"){
        await i.update({embeds: [anti], components: [an]});
      }
      if (i.customId == "agr" || i.customId == "agraves") {
        await i.update({
          embeds: [agr],
          components: [agraves],
        });
      }
      if (i.customId == "ej" || i.customId == "ejection") {
        await i.update({
          embeds: [eject],
          components: [ej],
        });
      }
      if (i.customId == "hb" || i.customId == "hibird") {
        await i.update({
          embeds: [hbird],
          components: [hb],
        });
      }
      if (i.customId == "ycm" || i.customId == "youngcatmartin") {
        await i.update({
          embeds: [ycm],
          components: [youngcatmartin],
        });
      }
      if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({
          embeds: [combohard],
          components: [comborow],
        });
      }
      if (i.customId == "hb2" || i.customId == "hibird2") {
        await i.update({
          embeds: [hbird],
          components: [hb2],
        });
      }
      if (i.customId == "sb" || i.customId == "sunbandits") {
        await i.update({
          embeds: [sband],
          components: [sb],
        });
      }
      if (i.customId == "ycm2" || i.customId == "youngcatmartin2") {
        await i.update({
          embeds: [ycm],
          components: [youngcatmartin2],
        });
      }
      if (i.customId == "ykm" || i.customId == "youngkenmartin") {
        await i.update({
          embeds: [ykm],
          components: [youngkenmartin],
        });
      }
      if (i.customId == "helpmidrange" || i.customId == "midrangehelp") {
        await i.update({
          embeds: [midrangehard],
          components: [midrangerow],
        });
      }
      if (i.customId == "hb3" || i.customId == "hibird3") {
        await i.update({
          embeds: [hbird],
          components: [hb3],
        });
      }
      if (i.customId =="ycm3" || i.customId == "youngcatmartin3") {
        await i.update({
          embeds: [ycm],
          components: [ycm3],
        });
      }
      if(i.customId == "ykm2" || i.customId == "youngkenmartin2"){
        await i.update({
          embeds: [ykm],
          components: [youngkenmartin2],
        });
      }
      if (i.customId == "memehelp" || i.customId == "helpmeme") {
        await i.update({
          embeds: [memehard],
          components: [memerow],
        });
      }
      if (i.customId == "sb3" || i.customId == "sunbandits3") {
        await i.update({
          embeds: [sband],
          components: [sb3],
        });
      }
      if(i.customId == "sd" || i.customId == "speeddemon"){
        await i.update({embeds: [speeddemon], components: [sd]})
      }
      if(i.customId == "sd2" || i.customId == "speeddemon2"){
        await i.update({embeds: [speeddemon], components: [sd2]})
      }
      if (i.customId == "ykm3" || i.customId == "youngkenmartin3") {
        await i.update({
          embeds: [ykm],
          components: [youngkenmartin3],
        });
      }
      if (i.customId == "controlhelp" || i.customId == "helpcontrol") {
        await i.update({
          embeds: [controlhard],
          components: [controlrow],
        });
      }
      if (i.customId == "ej2" || i.customId == "ejection2") {
        await i.update({
          embeds: [eject],
          components: [ej2],
        });
      }
      if (i.customId == "sb2" || i.customId == "sunbandits2") {
        await i.update({
          embeds: [sband],
          components: [sb2],
        });
      }
      if(i.customId == "one" || i.customId == "oneone"){
        await i.update({embeds: [oneone], components: [one]})
      }
      if(i.customId == "one2" || i.customId == "oneone2"){
        await i.update({embeds: [oneone], components: [one2]})
      }
      if(i.customId == "helpall" || i.customId == "allhelp"){
        await i.update({embeds: [allhard], components: [alldecksrow]})
      }
      if(i.customId == "agr2" || i.customId == "agraves2"){
        await i.update({embeds: [agr], components: [agr2]})
      }
      if(i.customId == "an2" || i.customId == "anti2"){
        await i.update({embeds: [anti], components: [an2]})
      }
      if(i.customId == "ej3" || i.customId == "ejection3"){
        await i.update({embeds: [eject], components: [ej3]})
      }
      if(i.customId == "hb4" || i.customId == "hibird4"){
        await i.update({embeds: [hbird], components: [hb4]})
      }
      if(i.customId == "sd3" || i.customId == "speeddemon3"){
        await i.update({embeds: [speeddemon], components: [sd3]})
      }
      if(i.customId == "sb4" || i.customId == "sunbandits4"){
        await i.update({embeds: [sband], components: [sb4]})
      }
      if(i.customId == "ycm4" || i.customId == "youngcatmartin4"){
        await i.update({embeds: [ycm], components: [ycm4]})
      }
      if(i.customId == "ykm4" || i.customId == "youngkenmartin4"){
        await i.update({embeds: [ykm], components: [youngkenmartin4]})
      }
      if(i.customId == "one3" || i.customId == "oneone3"){
        await i.update({embeds: [oneone], components: [one3]})
      }
    });
  },
};
