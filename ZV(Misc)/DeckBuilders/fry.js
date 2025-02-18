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
  name: `fryemup`,
  aliases: [
    `fryemupdecks`,
    `decksmadebyfry`,
    `frydecks`,
    `fry`,
    `fryemupdecks`,
    `helpfry`,
    `fryhelp`,
    `fryemuphelp`,
    `helpfryemup`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select  = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Fry's Decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
        .setLabel("Ladder Decks")
        .setValue("ladder")
        .setDescription('Decks that mostly only good for ranked games')
        .setEmoji("<:ladder:1271503994857979964>"), 
      new StringSelectMenuOptionBuilder()
        .setLabel("Meme Decks")
        .setValue("meme")
        .setDescription('Plant Decks that are built off a weird/fun combo'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Aggro Decks")
        .setValue("aggro")
        .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Combo Decks")
        .setValue("combo")
        .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
        new StringSelectMenuOptionBuilder()
        .setLabel("Midrange Decks")
        .setValue("midrange")
        .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
        new StringSelectMenuOptionBuilder()  
        .setLabel("Tempo Decks")
        .setValue("tempo")
        .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.') , 
        new StringSelectMenuOptionBuilder()
        .setLabel("All Decks")
        .setValue("all")
        .setDescription('All of Fryemup Decks')
      );
    const row = new ActionRowBuilder().addComponents(select);
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bc")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const bc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ladderhelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fm")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const fm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("brainclones")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("frymidrose")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const frymidrose = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frymech")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pclones")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const pclones = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fmr")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("raiserpackage")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const raiserpackage = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyschopineclones")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("swe")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const swe = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rpackage")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("valk")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const valk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sweap")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpladder")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let ladderdecks = [
      "brainclones",
      "frymech",
      "frymidrose",
      "pyschopineclones",
      "raiserpackage",
      "sweap",
      "valkster",
    ]
    let toBuildLaderString = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      toBuildLaderString+= `\n<@1043528908148052089> **${ladderdecks[i]}**`;
    }
    const temporow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sweap2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bc2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const bc2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tempohelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("conjureleap")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const conjureleap = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("brainclones2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("raiserpackage2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const raiserpackage2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cleap")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("swe2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const swe2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rpackage2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helptempo")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let tempodecks = [
      "brainclones",
      "conjureleap",
      "raiserpackage",
      "sweap",
    ]
    let toBuildTempoString = "";
    for (let i = 0; i < tempodecks.length; i++) {
      toBuildTempoString += `\n<@1043528908148052089> **${tempodecks[i]}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gparadise")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const gparadise = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("combohelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pclones2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const pclones2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gangstaparadise")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("valk2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const valk2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyschopineclones2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpcombo")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let combodecks = [
      "gangstaparadise",
      "pyschopineclones",
      "valkster",
    ]
    let toBuildComboString = "";
    for (let i = 0; i < combodecks.length; i++) {
       toBuildComboString += `\n<@1043528908148052089> **${combodecks[i]}**`;
    }
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tricksmash2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("frymech2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const frymech2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpaggro")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tsmash2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const tsmash2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fm2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aggrohelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let aggrodecks = [
      "frymech",
      "tricksmash",
    ]
    let toBuildAggroString = "";
    for (let i = 0; i < aggrodecks.length; i++) {
      toBuildAggroString += `\n<@1043528908148052089> **${aggrodecks[i]}**`;
    }
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gangstaparadise2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("conjureleap2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const conjureleap2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("memehelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gparadise2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const gparadise2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cleap2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpmeme")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let memedecks = [
      "conjureleap",
      "gangstaparadise",
    ]
    let toBuildMemeString = "";
    for (let i = 0; i < memedecks.length; i++) {
      toBuildMemeString += `\n<@1043528908148052089> **${memedecks[i]}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fmr2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const fmr2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmid")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gparadise3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const gparadise3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frymidrose2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pclones3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const pclones3= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gangstaparadise3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("valk3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    const valk3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyschopineclones3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpmidrange")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    );
    let midrangedecks = [
      "frymidrose",
      "gangstaparadise",
      "pyschopineclones",
      "valkster",
    ]
    let toBuildMid = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      toBuildMid += `\n<@1043528908148052089> **${midrangedecks[i]}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valkster4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bc3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const bc3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("conjureleap3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const conjureleap3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("brainclones3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("frymech3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const frymech3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cleap3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fmr3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const fmr3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fm3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gparadise4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const gparadise4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frymidrose3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pclones4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const pclones4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gangstaparadise4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("raiserpackage3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const raiserpackage3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyschopineclones4")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("swe3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const swe3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rpackage3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("valk4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    const valk4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sweap3")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpall")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary),
    )
    let decks = [
      "brainclones",
      "conjureleap",
      "frymech",
      "frymidrose",
      "gangstaparadise",
      "pyschopineclones",
      "raiserpackage",
      "sweap",
      "valkster",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select brainclones, conjureleap, frymech, frymidrose, 
gangstaparadise, psychopineclones, raiserpackage, sweap, valkster
from ncdecks nc 
inner join gkdecks gk 
on (nc.deckinfo = gk.deckinfo)
inner join zmdecks zm 
on (nc.deckinfo = zm.deckinfo)
inner join rodecks ro 
on (nc.deckinfo = ro.deckinfo)
inner join bfdecks bf
on (nc.deckinfo = bf.deckinfo)
inner join wkdecks wk 
on (nc.deckinfo = wk.deckinfo)
inner join sfdecks sf 
on (nc.deckinfo = sf.deckinfo)
inner join hgdecks hg
on (nc.deckinfo = hg.deckinfo)
inner join pbdecks pb 
on (nc.deckinfo = pb.deckinfo)`);
    let user = await client.users.fetch("291752823891427329");
    let fry = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let combofry = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo decks made by ${user.displayName} are ${toBuildComboString}`
      )
      .setFooter({
        text: `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${combodecks.length} Combo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let aggrofry = new EmbedBuilder()
      .setTitle(`${user.displayName} Aggro Decks`)
      .setDescription(
        `My Aggro decks made by ${user.displayName} are ${toBuildAggroString}`
      )
      .setFooter({
        text: `To view the Aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${aggrodecks.length} Aggro decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let memefry = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My Meme decks made by ${user.displayName} are ${toBuildMemeString}`
      )
      .setFooter({
        text: `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${memedecks.length} Meme decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let midrangefry = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(
        `My Midrange decks made by ${user.displayName} are ${toBuildMid}`
      )
      .setFooter({
        text: `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${midrangedecks.length} Midrange decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let tempofry = new EmbedBuilder()
      .setTitle(`${user.displayName} Tempo Decks`)
      .setDescription(
        `My Tempo decks made by ${user.displayName} are ${toBuildTempoString}`
      )
      .setFooter({
        text: `To view the Tempo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${tempodecks.length} Tempo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let ladderfry = new EmbedBuilder()
      .setTitle(`${user.displayName} Ladder Decks`)
      .setDescription(
        `My Ladder decks made by ${user.displayName} are ${toBuildLaderString}`
      )
      .setFooter({
        text: `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${ladderdecks.length} Ladder decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let allfry = new EmbedBuilder()
      .setTitle(`All ${user.displayName}Decks`)
      .setDescription(
        `My All decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the All Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    	let brainclones = new EmbedBuilder()
		.setTitle(`${result[5].brainclones}`)
		.setDescription(`${result[3].brainclones}`)
		.setColor("Random")
		.setFooter({text: `${result[2].brainclones}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].brainclones}`,
			inline: true
		},
		{
			name: "Archetype",
			value: `${result[0].brainclones}`,
			inline: true
		},
		{
			name: "Deck Cost", 
			value: `${result[1].brainclones}`,
			inline: true})
.setImage(`${result[4].brainclones}`)
    let cleap = new EmbedBuilder()
    .setTitle(`${result[5].conjureleap}`)	
    .setDescription(`${result[3].conjureleap}`)
.setFooter({text: `${result[2].conjureleap}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].conjureleap}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].conjureleap}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].conjureleap}`,
      inline: true
    })
  .setColor("Random")			
  .setImage(`${result[4].conjureleap}`)
    let fmech = new EmbedBuilder()
    .setTitle(`${result[5].frymech}`)
	.setDescription(`${result[3].frymech}`)
	.setFooter({text: `${result[2].frymech}`})
			.addFields({
				name: "Deck Type", 
				value: `${result[6].frymech}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].frymech}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].frymech}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].frymech}`)
    let frymid = new EmbedBuilder()
    .setTitle(`${result[5].frymidrose}`)
    .setDescription(`${result[3].frymidrose}`)
    .setFooter({text: `${result[2].frymidrose}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].frymidrose}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].frymidrose}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].frymidrose}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].frymidrose}`)
    let gang = new EmbedBuilder()
  	.setTitle(`${result[5].gangstaparadise}`)
		.setDescription(`${result[3].gangstaparadise}`)
	.setColor("Random")
	.addFields({
		name: "Deck Type",
		value: `${result[6].gangstaparadise}`,
		inline: true
	},{
		name: "Archetype",
		value: `${result[0].gangstaparadise}`,
		inline: true
	},{
		name: "Deck Cost", 
		value: `${result[1].gangstaparadise}`,
		inline: true})	
	.setImage(`${result[4].gangstaparadise}`)
	.setFooter({text: `${result[2].gangstaparadise}`});
    let rpack = new EmbedBuilder()
    .setTitle(`${result[5].raiserpackage}`)	
    .setDescription(`${result[3].raiserpackage}`)
.setFooter({text: `${result[2].raiserpackage}`})
    .addFields({
      name: "Deck Type", 
      value: `${result[6].raiserpackage}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].raiserpackage}`,
      inline: true
    },{
      name: "Deck Cost", 
      value:`${result[1].raiserpackage}`,
      inline: true
    })
  .setColor("Random")			
  .setImage(`${result[4].raiserpackage}`)

      let pyschopineclones= new EmbedBuilder()
      .setTitle(`${result[5].psychopineclones}`)
      .setDescription(`${result[3].psychopineclones}`)
      .setFooter({text: `${result[2].psychopineclones}`})
            .addFields({
              name: "Deck Type",
              value: `${result[6].psychopineclones}`,
              inline: true
            },
            {
              name: "Archetype",
              value: `${result[0].psychopineclones}`,
              inline: true
            },{
              name: "Deck Cost", 
              value: `${result[1].psychopineclones}`,
              inline: true
            })
        .setColor("Random")
        .setImage(`${result[4].psychopineclones}`)
    let sweap = new EmbedBuilder()
    .setTitle(`${result[5].sweap}`)	
    .setDescription(`${result[3].sweap}`)
.setFooter({text: `${result[2].sweap}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].sweap}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].sweap}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].sweap}`,
      inline: true
    })
  .setColor("Random")			
  .setImage(`${result[4].sweap}`)
    let valkster = new EmbedBuilder()
    .setTitle(`${result[5].valkster}`)
	.setDescription(`${result[3].valkster}`)
	.setFooter({text: `${result[2].valkster}`})
			.addFields({
				name: "Deck Type",
				value: `${result[6].valkster}`,
				inline: true
			},{
				name: "Archetype",
				value: `${result[0].valkster}`,
				inline: true
			},{
				name: "Deck Cost", 
				value: `${result[1].valkster}`,
				inline: true
			})
		.setColor("Random")
		.setImage(`${result[4].valkster}`)
    const t = await message.channel.send({ embeds: [fry], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = t.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
     if(i.customId == "select"){
      const value = i.values[0];
      if(value == "combo"){
        await i.update({ embeds: [combofry], components: [comborow] });
      }
      if(value == "aggro"){
        await i.update({ embeds: [aggrofry], components: [aggrorow] });
      }
      if(value == "meme"){
        await i.update({ embeds: [memefry], components: [memerow] });
      }
      if(value == "midrange"){
        await i.update({ embeds: [midrangefry], components: [midrangerow] });
      }
      if(value == "tempo"){
        await i.update({ embeds: [tempofry], components: [temporow] });
      }
      if(value == "ladder"){
        await i.update({ embeds: [ladderfry], components: [ladderrow] });
      }
      if(value == "all"){
        await i.update({ embeds: [allfry], components: [alldecksrow] });
      }
     }
      if (i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderfry], components: [ladderrow] });
      }
      if(i.customId == "bc"|| i.customId == "brainclones"){
        await i.update({embeds: [brainclones], components: [bc]})
      }
      if(i.customId == "bc2"|| i.customId == "brainclones2"){
        await i.update({embeds: [brainclones], components: [bc2]})
      }
      if(i.customId == "bc3"|| i.customId == "brainclones3"){
        await i.update({embeds: [brainclones], components: [bc3]})
      }
      if(i.customId == "fm" || i.customId == "frymech"){
        await i.update({ embeds: [fmech], components: [fm] });
      }
      if(i.customId == "fmr" || i.customId == "frymidrose"){
        await i.update({ embeds: [frymid], components: [frymidrose] });
      }
      if(i.customId == "rpackage" || i.customId == "raiserpackage"){
        await i.update({ embeds: [rpack], components: [raiserpackage] });
      }
      if(i.customId == "valk" || i.customId == "valkster"){
        await i.update({ embeds: [valkster], components: [valk] });
      }
      if (i.customId == "tempohelp" || i.customId == "helptempo") {
        await i.update({ embeds: [tempofry], components: [temporow] });
      }
      if(i.customId == "cleap" || i.customId == "conjureleap"){
        await i.update({ embeds: [cleap], components: [conjureleap] });
      }
      if(i.customId == "rpackage2" || i.customId == "raiserpackage2"){
        await i.update({ embeds: [rpack], components: [raiserpackage2] });
      }
      if(i.customId == "rpackage3" || i.customId == "raiserpackage3"){
        await i.update({ embeds: [rpack], components: [raiserpackage3] });
      }
      if(i.customId == "swe" || i.customId == "sweap"){
        await i.update({ embeds: [sweap], components: [swe] });
      }
      if(i.customId == "swe2" || i.customId == "sweap2"){
        await i.update({ embeds: [sweap], components: [swe2] });
      }
      if(i.customId == "swe3" || i.customId == "sweap3"){
        await i.update({ embeds: [sweap], components: [swe3] });
      }
      if (i.customId == "combohelp" || i.customId == "helpcombo") {
        await i.update({ embeds: [combofry], components: [comborow] });
      }
      if(i.customId == "gparadise" || i.customId == "gangstaparadise"){
        await i.update({ embeds: [gang], components: [gparadise] });
      }
      if(i.customId == "valk2" || i.customId == "valkster2"){
        await i.update({ embeds: [valkster], components: [valk2] });
      }
      if (i.customId == "aggrohelp" || i.customId == "helpaggro") {
        await i.update({ embeds: [aggrofry], components: [aggrorow] });
      }
      if(i.customId == "fm2" || i.customId == "frymech2"){
        await i.update({ embeds: [fmech], components: [frymech2] });
      }
      if(i.customId == "fm3" || i.customId == "frymech3"){
        await i.update({ embeds: [fmech], components: [frymech3] });
      }
      if (i.customId == "memehelp" || i.customId == "helpmeme") {
        await i.update({ embeds: [memefry], components: [memerow] });
      }
      if(i.customId == "cleap2" || i.customId == "conjureleap2"){
        await i.update({ embeds: [cleap], components: [conjureleap2] });
      }
      if(i.customId == "cleap3" || i.customId == "conjureleap3"){
        await i.update({ embeds: [cleap], components: [conjureleap3] });
      }
      if(i.customId == "gparadise2" || i.customId == "gangstaparadise2"){
        await i.update({ embeds: [gang], components: [gparadise2] });
      }
      if (i.customId == "helpmid" || i.customId == "helpmidrange") {
        await i.update({ embeds: [midrangefry], components: [midrangerow] });
      }
      if(i.customId == "fmr2" || i.customId == "frymidrose2"){
        await i.update({ embeds: [frymid], components: [fmr2] });
      }
      if(i.customId == "fmr3" || i.customId == "frymidrose3"){
        await i.update({ embeds: [frymid], components: [fmr3] });
      }
      if(i.customId == "gparadise3" || i.customId == "gangstaparadise3"){
        await i.update({ embeds: [gang], components: [gparadise3] });
      }
      if(i.customId == "gparadise4" || i.customId == "gangstaparadise4"){
        await i.update({ embeds: [gang], components: [gparadise4] });
      }
      if(i.customId == "valk3" || i.customId == "valkster3"){
        await i.update({ embeds: [valkster], components: [valk3] });
      }
      if(i.customId == "valk4" || i.customId == "valkster4"){
        await i.update({ embeds: [valkster], components: [valk4] });
      }
      if(i.customId == "pclones" || i.customId == "pyschopineclones"){
        await i.update({embeds: [pyschopineclones], components: [pclones]})
      }
      if(i.customId == "pclones2" || i.customId == "pyschopineclones2"){
        await i.update({embeds: [pyschopineclones], components: [pclones2]})
      }
      if(i.customId == "pclones3" || i.customId == "pyschopineclones3"){
        await i.update({embeds: [pyschopineclones], components: [pclones3]})
      }
      if(i.customId == "pclones4" || i.customId == "pyschopineclones4"){
        await i.update({embeds: [pyschopineclones], components: [pclones4]})
      }
      if(i.customId == "helpall" || i.customId == "allhelp"){
        await i.update({embeds: [allfry], components: [alldecksrow]})
      }
      
    });
  },
};
