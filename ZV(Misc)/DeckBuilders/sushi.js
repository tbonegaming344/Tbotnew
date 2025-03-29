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
  name: `sushi`,
  aliases: [
    `decksmadebysushi`,
    `sushihelp`,
    `helpsushi`,
    `sushidecks`,
    `sushidecklists`,
    `decklistsmadebysushi`,
    `ikurasushi`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Sushi's decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Decks")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
      .setEmoji("<:compemote:1325461143136764060>"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Decks")
      .setValue("ladder")
      .setDescription('Decks that mostly only good for ranked games')
			.setEmoji("<:ladder:1271503994857979964>"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Deck")
      .setValue("meme")
      .setDescription('Plant Decks that are built off a weird/fun combo'), 
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
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Decks")
      .setValue("tempo")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Decks")
      .setValue("all")
      .setDescription("View all of Sushi's decks")
    );
    const row = new ActionRowBuilder().addComponents(select);
    const ladderrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("trickmech")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("propack")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const propack =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpladder")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tisb3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const tisb3 =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("professorpackage")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tmech")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const tmech =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("telimpssb3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ladderhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    let ladderdecks = [
      "professorpackage",
      "telimpssb",
      "trickmech",
    ]
    let toBuildLadder = "";
    for (let i = 0; i < ladderdecks.length; i++) {
      let deck = ladderdecks[i];
      toBuildLadder += `\n<@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("telimpssb")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sb")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const sb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ti")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const ti = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunbandits")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tisb")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const tisb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("telimps")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    let combodecks = [
      "sunbandits",
      "telimps",
      "telimpssb"
    ]
    let toBuildCombo = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildCombo += `\n<@1043528908148052089> **${deck}**`;
    }
    let aggrodecks = [
      "trickmech"
    ]
    const competitiverow =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("telimps2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("hmrose2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const hmrose2 =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcomp")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ti2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const ti2 =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("healmidrose2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("comphelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    let competitivedecks = [
      "healmidrose",
      "telimps",
    ]
    let toBuildCompetitive = "";
    for (let i = 0; i < competitivedecks.length; i++) {
      let deck = competitivedecks[i];
      toBuildCompetitive += `\n<@1043528908148052089> **${deck}**`;
    }
    const controlrow =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("telimpssb2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ti3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const ti3 =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcontrol")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tisb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const tisb2 =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("telimps3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("controlhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    let controldecks = [
      "telimps",
      "telimpssb",
    ]
    let toBuildControl = "";
    for (let i = 0; i < controldecks.length; i++) {
      let deck = controldecks[i];
      toBuildControl += `\n<@1043528908148052089> **${deck}**`;
    }
    const temporow =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunbandits2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("propack2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const propack2 =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helptempo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sb2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
const sb2 =  new ActionRowBuilder().addComponents(
  new ButtonBuilder()
  .setCustomId("professorpackage2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
  .setStyle(ButtonStyle.Primary),
  new ButtonBuilder()
  .setCustomId("tempohelp")
  .setEmoji("<:arrowright:1271446796207525898>")
  .setStyle(ButtonStyle.Primary),
);
    let tempodecks = [
      "professorpackage",
      "sunbandits",
    ]
    let toBuildTempo = "";
    for (let i = 0; i < tempodecks.length; i++) {
      let deck = tempodecks[i];
      toBuildTempo += `\n<@1043528908148052089> **${deck}**`;
    }
    let memedecks = [
      "sunbandits"
    ]
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("trickmech2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("hmrose3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const hmrose3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("propack3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const propack3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("healmidrose3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sb4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const sb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("professorpackage3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ti4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const ti4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("sunbandits4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tisb4")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const tisb4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("telimps4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("tmech2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const tmech2 =  new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("telimpssb4")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    let decks = [
      "healmidrose",
      "professorpackage", 
      "sunbandits",
      "telimps",
      "telimpssb",
      "trickmech",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] =
      await db.query(`select hmr, professorpackage, sunbandits, telimps, telimpssb,trickmech
from rodecks ro
inner join pbdecks pb 
on (ro.deckinfo = pb.deckinfo)
inner join rbdecks rb 
on (ro.deckinfo = rb.deckinfo)
inner join hgdecks hg
on (ro.deckinfo = hg.deckinfo)
inner join sbdecks sb
on (ro.deckinfo = sb.deckinfo)
inner join zmdecks zm
on (ro.deckinfo = zm.deckinfo)`);
    let user = await client.users.fetch("198942472565555200");
    let sushi = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let alldecksEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let combosushi = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo decks made by ${user.displayName} are ${toBuildCombo}`
      )
      .setFooter({
        text: `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${combodecks.length} Combo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let controlsushi = new EmbedBuilder()
      .setTitle(`${user.displayName} Control Decks`)
      .setDescription(
        `My Control decks made by ${user.displayName} are ${toBuildControl}`
      )
      .setFooter({
        text: `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${controldecks.length} Control decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let competitivesushi = new EmbedBuilder()
      .setTitle(`${user.displayName} Competitive Decks`)
      .setDescription(
        `My Competitive decks made by ${user.displayName} are ${toBuildCompetitive}`
      )
      .setFooter({
        text: `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${competitivedecks.length} Competitive decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let laddersushi = new EmbedBuilder()
      .setTitle(`${user.displayName} Ladder Decks`)
      .setDescription(
        `My Ladder decks made by ${user.displayName} are ${toBuildLadder}`
      )
      .setFooter({
        text: `To view the Ladder Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${ladderdecks.length} Ladder decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let temposushi = new EmbedBuilder()
      .setTitle(`${user.displayName} Tempo Decks`)
      .setDescription(
        `My Tempo decks made by ${user.displayName} are ${toBuildTempo}`
      )
      .setFooter({
        text: `To view the Tempo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tempodecks.length} Tempo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let hmr = new EmbedBuilder()
    .setTitle(`${result[5].hmr}`)
    .setDescription(`${result[3].hmr}`)
    .setFooter({ text: `${result[2].hmr}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].hmr}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].hmr}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].hmr}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].hmr}`);
    let professorpackage= new EmbedBuilder()
    .setTitle(`${result[5].professorpackage}`)
    .setDescription(`${result[3].professorpackage}`)
    .setFooter({ text: `${result[2].professorpackage}` })
    .setColor("Random")
    .setImage(`${result[4].professorpackage}`)
    .addFields({
      name: "Deck Type",
      value: `${result[6].professorpackage}`,
      inline: true
    },{ 
      name: "Archetype",
      value: `${result[0].professorpackage}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].professorpackage}`,
      inline: true
    });
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
    let timps = new EmbedBuilder()
    .setTitle(`${result[5].telimps}`)
    .setDescription(`${result[3].telimps}`)
    .setFooter({ text: `${result[2].telimps}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].telimps}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].telimps}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].telimps}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].telimps}`);
    let trickmech = new EmbedBuilder()
    .setTitle(`${result[5].trickmech}`)
    .setDescription(`${result[3].trickmech}`)
    .setFooter({ text: `${result[2].trickmech}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].trickmech}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].trickmech}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].trickmech}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].trickmech}`);
    let timpsb = new EmbedBuilder()
    .setTitle(`${result[5].telimpssb}`)
      .setDescription(`${result[3].telimpssb}`)
      .setFooter({ text: `	${result[2].telimpssb}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].telimpssb}`,
        inline: true,
      },{
        name: "Archetype",
        value: `${result[0].telimpssb}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].telimpssb}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].telimpssb}`);
    const m = await message.channel.send({
      embeds: [sushi],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "comp"){
          await i.update({embeds: [competitivesushi], components: [competitiverow]})
        }
        if(value == "aggro"){
          await i.update({embeds: [aggrosushi], components: [aggrorow]})
        }
        if(value == "combo"){
          await i.update({embeds: [combosushi], components: [comborow]})
        }
        if(value == "control"){
          await i.update({embeds: [controlsushi], components: [controlrow]})
        }
        if(value == "midrange"){
          await i.update({embeds: [midrangesushi], components: [midrangerow]})
        }
        if(value == "tempo"){
          await i.update({embeds: [temposushi], components: [temporow]})
        }
        if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
        }
        if(value == "ladder"){
          await i.update({embeds: [laddersushi], components: [ladderrow]})
        }
        if(value == "meme"){
          await i.reply({embeds: [sband], flags: MessageFlags.Ephemeral})
        }
      }
      if(i.customId == "helpcomp" || i.customId === "comphelp"){
        await i.update({embeds: [competitivesushi], components: [competitiverow]})
      }
      if(i.customId == "combohelp" || i.customId == "helpcombo"){
        await i.update({embeds: [combosushi], components: [comborow]})
      }
      if(i.customId == "helpcontrol" || i.customId == "controlhelp"){
        await i.update({embeds: [controlsushi], components: [controlrow]})
      }
      if(i.customId == "helpmidrange" || i.customId == "midrangehelp"){
        await i.update({embeds: [midrangesushi], components: [midrangerow]})
      }
      if(i.customId === "helptempo" || i.customId === "tempohelp"){
        await i.update({embeds: [temposushi], components: [temporow]})
      }
      //Sun Bandits
      if(i.customId == "sb" || i.customId == "sunbandits"){
        await i.update({embeds: [sband], components: [sb]})
      }
      if(i.customId == "sb2" || i.customId == "sunbandits2"){
        await i.update({embeds: [sband], components: [sb2]})
      }
      if(i.customId == "sb3" || i.customId == "sunbandits3"){
        await i.update({embeds: [sband], components: [sb3]})
      }
      if(i.customId == "sb4" || i.customId == "sunbandits4"){
        await i.update({embeds: [sband], components: [sb4]})
      }
      //Telimps 
      if(i.customId == "ti" || i.customId == "telimps"){
        await i.update({embeds: [timps], components: [ti]})
      }
      if(i.customId == "ti2"  || i.customId == "telimps2"){
        await i.update({embeds: [timps], components: [ti2]})
      }
      if(i.customId == "ti3" || i.customId == "telimps3"){
        await i.update({embeds: [timps], components: [ti3]})
      }
      if(i.customId == "ti4" || i.customId == "telimps4"){
        await i.update({embeds: [timps], components: [ti4]})
      }
      //Telimps sb 
      if(i.customId == "tisb" || i.customId == "telimpssb"){
        await i.update({embeds: [timpsb], components: [tisb]})
      }
      if(i.customId == "tisb2" || i.customId == "telimpssb2"){
        await i.update({embeds: [timpsb], components: [tisb2]})
      }
      if(i.customId == "tisb3" || i.customId == "telimpssb3"){
        await i.update({embeds: [timpsb], components: [tisb3]})
      }
      if(i.customId == "tisb4" || i.customId == "telimpssb4"){
        await i.update({embeds: [timpsb], components: [tisb4]})
      }
      // Heal Mid Rose
      if(i.customId == "hmrose" || i.customId == "healmidrose"){
        await i.update({embeds: [hmr], components: [hmrose]})
      }
      if(i.customId == "hmrose2" || i.customId == "healmidrose2"){
        await i.update({embeds: [hmr], components: [hmrose2]})
      }
      if(i.customId == "hmrose3" || i.customId == "healmidrose3"){
        await i.update({embeds: [hmr], components: [hmrose3]})
      }
      if(i.customId == "helpall" || i.customId == "allhelp"){
        await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
      }
      if(i.customId == "ladderhelp" || i.customId == "helpladder"){
        await i.update({embeds: [laddersushi], components: [ladderrow]})
      }
      if(i.customId == "helpmeme" || i.customId == "memehelp"){
        await i.update({embeds: [memesushi], components: [memerow]})
      }
      if(i.customId == "propack" || i.customId == "professorpackage"){
        await i.update({embeds: [professorpackage], components: [propack]})
      }
      if(i.customId == "propack2" || i.customId == "professorpackage2"){
        await i.update({embeds: [professorpackage], components: [propack2]})
      }
      if(i.customId == "propack3" || i.customId == "professorpackage3"){
        await i.update({embeds: [professorpackage], components: [propack3]})
      }
      if(i.customId == "tmech" || i.customId == "trickmech"){
        await i.update({embeds: [trickmech], components: [tmech]})
      }
      if(i.customId == "tmech2" || i.customId == "trickmech2"){
        await i.update({embeds: [trickmech], components: [tmech2]})
      }
      if(i.customId == "tmech3" || i.customId == "trickmech3"){
        await i.update({embeds: [trickmech], components: [tmech3]})
      }
      if(i.customId == "aggrohelp" || i.customId == "helpaggro"){
        await i.update({embeds: [aggrosushi], components: [aggrorow]})
      }
    });
  },
};
