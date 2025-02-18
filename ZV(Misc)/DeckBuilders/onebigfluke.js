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
  name: `onebigfluke`,
  aliases: [
    `onebigflukehelp`,
    `helponebigfluke`,
    `onebigflukedecks`,
    `decksmadebyonebigfluke`,
    `fluke`,
    `helpfluke`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view One Big Fluke's decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setValue("meme")
      .setDescription('Decks that are built off a weird/fun combo'), 
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
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
    )
    const row = new ActionRowBuilder().addComponents(select);
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("slavery")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("conga")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const conga = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("homo")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const homop = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("congabait")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("rac")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const rac = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("homop")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("r2seed")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const r2seed = new ActionRowBuilder().addComponents(
       new ButtonBuilder()
      .setCustomId("racism")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("slave")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
      )
      const slave= new ActionRowBuilder().addComponents(
        new ButtonBuilder()
       .setCustomId("r2s")
       .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
       .setStyle(ButtonStyle.Primary),
       new ButtonBuilder()
       .setCustomId("memehelp")
       .setEmoji("<:arrowright:1271446796207525898>")
       .setStyle(ButtonStyle.Primary)
       )
    let memedecks = [
      "congabait",
      "homophobia",
      "racism",
      "ramp2seedling",
      "slavery",
    ]
    let toBuildMeme = "";
    for (let i = 0; i < memedecks.length; i++) {
      toBuildMeme += `\n<@1043528908148052089> **${memedecks[i]}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("r2seed2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("conga2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const conga2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("r2s2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const r2s2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("congabait2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    let combodecks = [
      "congabait",
      "ramp2seedling",
    ]
    let toBuildCombo = "";
    for (let i = 0; i < combodecks.length; i++) {
      toBuildCombo += `\n<@1043528908148052089> **${combodecks[i]}**`;
    }
    const midrangerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("r2seed3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("conga3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    );
    const conga3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmidrange")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("r2s3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const r2s3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("congabait3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("midrangehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )

    let midrangedecks = [
      "congabait",
      "ramp2seedling",
    ]
    let toBuildMidrange = "";
    for (let i = 0; i < midrangedecks.length; i++) {
      toBuildMidrange += `\n<@1043528908148052089> **${midrangedecks[i]}**`;
    }
    const aggrorow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("slavery2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("homop2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const homop2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpaggro")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("slave2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )
    const slave2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("homophobia2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("aggrohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
    )

    let aggrodecks = [
      "homophobia",
      "slavery",
    ]
    let toBuildAggro = "";
    for (let i = 0; i < aggrodecks.length; i++) {
      toBuildAggro += `\n<@1043528908148052089> **${aggrodecks[i]}**`;
    }
    let tempodecks = [
      "racism",
    ]
    let decks = [
      "congabait",
      "homophobia",
      "racism",
      "ramp2seedling",
      "slavery",
    ];
    let [result] = await db.query(`select congabait, homophobia, racism,
ramp2seedling, slavery 
from pbdecks pb 
inner join smdecks sm 
on (pb.deckinfo = sm.deckinfo)
inner join bfdecks bf 
on (pb.deckinfo = bf.deckinfo)
inner join sfdecks sf
on (pb.deckinfo = sf.deckinfo)`);
    let user = await client.users.fetch("756689141416198215");
    let fluke = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below! click on meme decks if you want to see all decks
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let memefluke = new EmbedBuilder() 
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(`My meme decks made by ${user.displayName} are ${toBuildMeme}`)
      .setFooter({text: `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${memedecks.length} meme decks in Tbot`})
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random")
      let combofluke = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(`My combo decks made by ${user.displayName} are ${toBuildCombo}`)
      .setFooter({text: `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${combodecks.length} combo decks in Tbot`})
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random")
      let midrangefluke = new EmbedBuilder()
      .setTitle(`${user.displayName} Midrange Decks`)
      .setDescription(`My midrange decks made by ${user.displayName} are ${toBuildMidrange}`)
      .setFooter({text: `To view the Midrange Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${midrangedecks.length} midrange decks in Tbot`})
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random")
      let aggrofluke = new EmbedBuilder()
      .setTitle(`${user.displayName} Aggro Decks`)
      .setDescription(`My aggro decks made by ${user.displayName} are ${toBuildAggro}`)
      .setFooter({text: `To view the Aggro Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${aggrodecks.length} aggro decks in Tbot`})
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random")
    let cbait = new EmbedBuilder()
    .setTitle(`${result[5].congabait}`)
		.setDescription(`${result[3].congabait}`)
		.setColor("Random")
		.setFooter({text: `${result[2].congabait}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].congabait}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].congabait}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].congabait}`,
			inline: true
		})
		.setImage(`${result[4].congabait}`)
    let homo = new EmbedBuilder()
    .setTitle(`${result[5].homophobia}`)
		.setDescription(`${result[3].homophobia}`)
		.setColor("Random")
		.setFooter({text: `${result[2].homophobia}`})
		.setImage(`${result[4].homophobia}`)
		.addFields({
			name: "Deck Type",
			value: `${result[6].homophobia}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].homophobia}`,
			inline: true
		},{
			name: "Deck Cost",
			value:`${result[1].homophobia}`,
			inline: true
		})
    let ism = new EmbedBuilder()
    .setTitle(`${result[5].racism}`)
		.setDescription(`${result[3].racism}`)
		.setColor("Random")
		.addFields({
			name: "Deck Type", 
			value: `${result[6].racism}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].racism}`,
			inline: true
		},{
			name: "Deck Cost", 
			value:`${result[1].racism}`,
			inline: true
		})
		.setFooter({text: `${result[2].racism}`})
.setImage(`${result[4].racism}`)
    let r2s = new EmbedBuilder()
    .setTitle(`${result[5].ramp2seedling}`)
    .setDescription(`${result[3].ramp2seedling}`)
    .setFooter({text: `${result[2].ramp2seedling}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].ramp2seedling}`,
          inline: true
        },
        {
          name: "Archetype",
          value: `${result[0].ramp2seedling}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].ramp2seedling}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].ramp2seedling}`)
    let spirates = new EmbedBuilder()
    .setTitle(`${result[5].slavery}`)
		.setDescription(`${result[3].slavery}`)
		.setColor("Random")
		.setFooter({text: `${result[2].slavery}`})
		.addFields({
			name: "Deck Type", 
			value: `${result[6].slavery}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].slavery}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].slavery}`,
			inline: true
		})
		.setImage(`${result[4].slavery}`)
    const m = await message.channel.send({
      embeds: [fluke],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value === "meme"){
          await i.update({embeds: [memefluke], components: [memerow]})
        }
        if(value === "aggro"){
          await i.update({embeds: [aggrofluke], components: [aggrorow]})
        }
        if(value === "combo"){
          await i.update({embeds: [combofluke], components: [comborow]})
        }
        if(value === "midrange"){
          await i.update({embeds: [midrangefluke], components: [midrangerow]})
        }
        if(value === "tempo"){
          await i.reply({embeds: [ism],flags: MessageFlags.Ephemeral})
        }
      }
      if(i.customId == "conga" || i.customId == "congabait"){
        await i.update({embeds: [cbait], components: [conga]})
      }
      if(i.customId == "helpmeme" || i.customId == "memehelp"){
        await i.update({embeds: [memefluke], components: [memerow]})
      }
      if(i.customId == "homo" || i.customId == "homop"){
        await i.update({embeds: [homo], components: [homop]})
      }
      if(i.customId == "r2s" || i.customId == "r2seed"){
        await i.update({embeds: [r2s], components: [r2seed]})
      }
      if(i.customId == "slave" || i.customId == "slavery"){
        await i.update({embeds: [spirates], components: [slave]})
      }
    
      if(i.customId == "combohelp" || i.customId == "helpcombo"){
        await i.update({embeds: [combofluke], components: [comborow]})
      }
      if(i.customId == "conga2" || i.customId =="congabait2"){
        await i.update({embeds: [cbait], components: [conga2]})
      }
      if(i.customId == "r2s2" || i.customId == "r2seed2"){
        await i.update({embeds: [r2s], components: [r2s2]})
      }
      if(i.customId == "midrangehelp" || i.customId == "helpmidrange"){
        await i.update({embeds: [midrangefluke], components: [midrangerow]})
      }
      if(i.customId == "conga3" || i.customId == "congabait3"){
        await i.update({embeds: [cbait], components: [conga3]})
      }
      if(i.customId == "r2s3" || i.customId === "r2seed3"){
        await i.update({embeds: [r2s], components: [r2s3]})
      }
      if(i.customId == "aggrohelp" || i.customId == "helpaggro"){
        await i.update({embeds: [aggrofluke], components: [aggrorow]})
      }
      if(i.customId == "homop2" || i.customId == "homophobia2"){
        await i.update({embeds: [homo], components: [homop2]})
      }
      if(i.customId == "slave2" || i.customId == "slavery2"){
        await i.update({embeds: [spirates], components: [slave2]})
      }
      if(i.customId == "rac" || i.customId == "racism"){
        await i.update({embeds: [ism], components:[rac]})
      }
    });
  },
};
