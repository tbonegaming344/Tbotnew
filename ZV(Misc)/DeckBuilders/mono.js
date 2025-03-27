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
  name: `mono`,
  aliases: [`decksmadebymono`, `monodecks`, `monohelp`, `helpmono`, `monosexual`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Mono's Decks")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setDescription('Some of the best Decks in the game')
      .setEmoji("<:compemote:1325461143136764060>")
      .setValue("comp"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Meme Decks")
      .setDescription("Decks that are built off a weird/fun combo")
      .setValue("meme"), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Deck")
      .setDescription("attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.")
      .setValue("aggro"),  
      new StringSelectMenuOptionBuilder()
      .setLabel('Control Decks')
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
      .setValue('control'),
      new StringSelectMenuOptionBuilder()
      .setLabel('Combo Decks')
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).')
      .setValue('combo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel('Midrange Deck')
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game')
      .setValue('midrange'),  
      new StringSelectMenuOptionBuilder()
      .setLabel('Tempo Deck')
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
      .setValue('tempo'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Mono Decks")
      .setDescription("An option to view all decks")
      .setValue("all")
    )
    const row = new ActionRowBuilder()
                .addComponents(select);
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("rampticia")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ck")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const ck = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpmeme")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("cog")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const cog = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cancerknight")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pbfeast")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const pbfeas = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("coggerazzi")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("rticia")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const rampticia = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pbfeas")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("memehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
   let memedecks = [
    "cancerknight",
    "coggerazzi",
    "pbfeast",
    "rampticia",
   ] 
   let toBuildMeme = "";
    for (let i = 0; i < memedecks.length; i++) {
      let deck = memedecks[i];
      toBuildMeme += `\n <@1043528908148052089> **${deck}**`;
    }
   const controlrow = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setCustomId("pbfeast2")
    .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
    .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
    .setCustomId("ck2")
    .setEmoji("<:arrowright:1271446796207525898>")
    .setStyle(ButtonStyle.Primary),
  );
  const ck2 = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setCustomId("helpcontrol")
    .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
    .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
    .setCustomId("kscope2")
    .setEmoji("<:arrowright:1271446796207525898>")
    .setStyle(ButtonStyle.Primary),
  );
  const kscope2 = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setCustomId("cancerknight2")
    .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
    .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
    .setCustomId("pbfeas2")
    .setEmoji("<:arrowright:1271446796207525898>")
    .setStyle(ButtonStyle.Primary),
  );
  const pbfeas2 = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
    .setCustomId("kaliedoscope2")
    .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
    .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
    .setCustomId("controlhelp")
    .setEmoji("<:arrowright:1271446796207525898>")
    .setStyle(ButtonStyle.Primary),
  );
    let controldecks = [
      "cancerknight",
      "kaleidoscope",
      "pbfeast",
    ]
    let toBuildControl = "";
    for (let i = 0; i < controldecks.length; i++) {
      let deck = controldecks[i];
      toBuildControl += `\n <@1043528908148052089> **${deck}**`;
    }
    const comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("seacret2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("cog2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const cog2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcombo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("rticia2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const rticia2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("coggerazzi2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sea2")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const sea2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("rampticia2")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("combohelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )

    let combodecks= [
      "coggerazzi",
      "rampticia",
      "seacret"
    ]
    let toBuildCombo = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildCombo += `\n <@1043528908148052089> **${deck}**`;
    }
    const competitiverow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("seacret")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("kscope")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const kscope = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpcompetitive")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("nhks")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const nhks = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("kaleidoscope")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sea")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const sea = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("nohokaistars")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("competitivehelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    let competitivedecks = [
      "kaleidoscope",
      "nohokaistars",
      "seacret",
    ]
    let toBuildCompetitive = "";
    for (let i = 0; i < competitivedecks.length; i++) {
      let deck = competitivedecks[i];
      toBuildCompetitive += `\n <@1043528908148052089> **${deck}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("seacret3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("ck3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    );
    const ck3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpall")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("cog3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const cog3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("cancerknight3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("kscope3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const kscope3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("coggerazzi3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("pbfeas3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const pbfeas3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("kaleidoscope3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("rticia3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const rticia3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("pbfeast3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("sea3")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    const sea3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("rampticia3")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
      .setCustomId("allhelp")
      .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary),
    )
    let decks = [
      "cancerknight",
      "coggerazzi",
      "kaleidoscope",
      "pbfeast",
      "rampticia",
      "seacret"
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n <@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select cancerknight, otktrickster, nohokaistars, seacret,
pbfeast, poggerrazzi, rampticia
from wkdecks wk 
inner join ebdecks eb
on (wk.deckinfo = eb.deckinfo)
inner join ifdecks fi 
on (wk.deckinfo = fi.deckinfo)
inner join pbdecks pb 
on (wk.deckinfo = pb.deckinfo)
inner join rbdecks rb 
on (wk.deckinfo = rb.deckinfo)
inner join imdecks im 
on (wk.deckinfo = im.deckinfo)`);
    // fetch user mono
    let user = await client.users.fetch("444700385744257034");
    let mono = new EmbedBuilder()
      .setTitle(`${user.displayName}  Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let alldecksEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName}  Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let mememono = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My commands for meme decks made by ${user.displayName} are ${toBuildMeme}`
      )
      .setFooter({
        text: `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${memedecks.length} meme decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");

      let controlmono = new EmbedBuilder()
      .setTitle(`${user.displayName} Control Decks`)
      .setDescription(
        `My commands for control decks made by ${user.displayName} are ${toBuildControl}`
      )
      .setFooter({
        text: `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${controldecks.length} control decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let combomono = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My commands for combo decks made by ${user.displayName} are ${toBuildCombo}`
      )
      .setFooter({
        text: `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${combodecks.length} combo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let competitivemono = new EmbedBuilder()
      .setTitle(`${user.displayName} Competitive Decks`)
      .setDescription(
        `My commands for competitive decks made by ${user.displayName} are ${toBuildCompetitive}`
      )
      .setFooter({
        text: `To view the Competitive Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${competitivedecks.length} competitive decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let cknight = new EmbedBuilder()
  	.setTitle(`${result[5].cancerknight}`)
		.setDescription(`${result[3].cancerknight}`)
		.setColor("Random")
		.addFields({
			name: "Deck Type",
			value: `${result[6].cancerknight}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].cancerknight}`,
			inline: true
		},{
			name: "Deck Cost",
			value: `${result[1].cancerknight}`,
			inline: true
		})
		.setImage(`${result[4].cancerknight}`)
		.setFooter({text: `${result[2].cancerknight}`})
    let coggerazzi = new EmbedBuilder()
    .setTitle(`${result[5].poggerrazzi}`)
    .setDescription(`${result[3].poggerrazzi}`)
    .setFooter({ text: `${result[2].poggerrazzi}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].poggerrazzi}`,
      inline: true,
    },{
      name: "Archetype",
      value: `${result[0].poggerrazzi}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].poggerrazzi}`,
      inline: true
    })
    .setColor("Random")
    .setImage(`${result[4].poggerrazzi}`);
    let kaleidoscope = new EmbedBuilder()
    .setTitle(`${result[5].otktrickster}`)
    .setDescription(`${result[3].otktrickster}`)
    .setFooter({ text: `${result[2].otktrickster}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].otktrickster}`,
      inline: true,
    },{
      name: "Archetype", 
      value: `${result[0].otktrickster}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].otktrickster}`,
      inline: true  
    })
    .setColor("Random")
    .setImage(`${result[4].otktrickster}`);
    const nohonkaistars = new EmbedBuilder()
    .setTitle(`${result[5].nohokaistars}`)
    .setDescription(`${result[3].nohokaistars}`)
    .setFooter({ text: `${result[2].nohokaistars}` })
    .addFields(
      {
        name: "Deck Type",
        value: `${result[6].nohokaistars}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].nohokaistars}`,
        inline: true,
      },
      {
        name: "Deck Cost",
        value: `${result[1].nohokaistars}`,
        inline: true,
      }
    )
    .setColor("Random")
    .setImage(`${result[4].nohokaistars}`);
    let seacret = new EmbedBuilder()
    .setTitle(`${result[5].seacret}`)
    .setDescription(`${result[3].seacret}`)
    .setColor("Random")
    .setFooter({ text: `${result[2].seacret}` })
    .addFields(
      {
        name: "Deck Type",
        value: `${result[6].seacret}`,
        inline: true,
      },
      {
        name: "Archetype",
        value: `${result[0].seacret}`,
        inline: true,
      },
      {
        name: "Deck Cost",
        value: `${result[1].seacret}`,
        inline: true,
      }
    )
    .setImage(`${result[4].seacret}`);
    //pb feast
    let pbfeast = new EmbedBuilder()
    .setTitle(`${result[5].pbfeast}`)
    .setDescription(`${result[3].pbfeast}`)
    .setFooter({text: `${result[2].pbfeast}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].pbfeast}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].pbfeast}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].pbfeast}`,
          inline: true
        })
      .setColor("Random")		
      .setImage(`${result[4].pbfeast}`)
    let rticia = new EmbedBuilder()
    .setTitle(`${result[5].rampticia}`)
    .setDescription(`${result[3].rampticia}`)
    .setFooter({text:`${result[2].rampticia}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].rampticia}`,
          inline: true
        },{
          name: "Archetype", 
          value: `${result[0].rampticia}`,
          inline: true
        },{
          name: "Deck Cost", 
          value:`${result[1].rampticia}`,
          inline: true
        })
      .setColor("Random")		
      .setImage(`${result[4].rampticia}`)
    const m = await message.channel.send({ embeds: [mono], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "comp"){
          await i.update({embeds: [competitivemono], components: [competitiverow]});
        }
        else if(value == "meme"){
          await i.update({embeds: [mememono], components: [memerow]});
        }
        else if(value == "midrange"){
          await i.reply({embeds: [nohonkaistars], flags: MessageFlags.Ephemeral})
        }
        else if(value == "tempo"){
          await i.reply({embeds: [coggerazzi], flags: MessageFlags.Ephemeral})
        }
        else if(value == "control"){
          await i.update({embeds: [controlmono], components: [controlrow]});
        }
        else if(value == "combo"){
          await i.update({embeds: [combomono], components: [comborow]});
        }
        else if(value == "aggro"){
          await i.reply({embeds: [seacret], flags: MessageFlags.Ephemeral})
        }
        else if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
        }
      }
     else if(i.customId == "sea" || i.customId == "seacret"){
        await i.update({embeds: [seacret], components: [sea]});
      }
     else if(i.customId === "competitivehelp" || i.customId === "helpcompetitive"){
        await i.update({embeds: [competitivemono], components: [competitiverow]});
      }
      //Meme Decks
     else if(i.customId == "ck" || i.customId == "cancerknight"){
        await i.update({embeds: [cknight], components: [ck]});
      }
     else if(i.customId == "ck3" || i.customId == "cancerknight3"){
        await i.update({embeds: [cknight], components: [ck3]});
      }
     else if(i.customId == "pbfeas" || i.customId == "pbfeast"){
        await i.update({embeds: [pbfeast], components: [pbfeas]});
      }
     else if(i.customId == "pbfeas3" || i.customId == "pbfeast3"){
        await i.update({embeds: [pbfeast], components: [pbfeas3]});
      }
     else if(i.customId == "rticia" || i.customId == "rampticia"){
        await i.update({embeds: [rticia], components: [rampticia]});
      }
     else if(i.customId == "rticia3" || i.customId == "rampticia3"){
        await i.update({embeds: [rticia], components: [rticia3]});
      }
     else if(i.customId == "memehelp"  || i.customId == "helpmeme"){
        await i.update({embeds: [mememono], components: [memerow]});
      }
      // Control Decks
     
     else if(i.customId == "ck2" || i.customId == "cancerknight2"){
        await i.update({embeds: [cknight], components: [ck2]});
      }
     else if(i.customId == "pbfeas2"|| i.customId == "pbfeast2"){
        await i.update({embeds: [pbfeast], components: [pbfeas2]});
      }
     else if(i.customId == "controlhelp" || i.customId =="helpcontrol"){
        await i.update({embeds: [controlmono], components: [controlrow]});
      }
      // Combo Decks
     else if(i.customId == "rticia2" || i.customId == "rampticia2"){
        await i.update({embeds: [rticia], components: [rticia2]});
      }
     else if(i.customId === "helpcombo" || i.customId === "combohelp"){
        await i.update({embeds: [combomono], components: [comborow]});
      }
      // Aggro Decks
     else if(i.customId == "helpaggro" || i.customId == "aggrohelp"){
        await i.update({embeds: [aggromono], components: [agrorow]});
      }
     else if(i.customId == "sea2" || i.customId == "seacret2"){
        await i.update({embeds: [seacret], components: [sea2]});
      }
     else if(i.customId == "cog" || i.customId == "coggerazzi"){
        await i.update({embeds: [coggerazzi], components: [cog]})
      }
     else if(i.customId == "cog2" || i.customId == "coggerazzi2"){
        await i.update({embeds: [coggerazzi], components: [cog2]})
      }
     else if(i.customId == "cog3" || i.customId == "coggerazzi3"){
        await i.update({embeds: [coggerazzi], components: [cog3]})
      }
     else if(i.customId == "sea3" || i.customId == "seacret3"){
        await i.update({embeds: [seacret], components: [sea3]});
      }
     else if(i.customId == "kscope" || i.customId == "kaleidoscope"){
        await i.update({embeds: [kaleidoscope], components: [kscope]})
      }
     else if(i.customId == "kscope2" || i.customId == "kaleidoscope2"){
        await i.update({embeds: [kaleidoscope], components: [kscope2]})
      }
     else if(i.customId == "kscope3" || i.customId == "kaleidoscope3"){
        await i.update({embeds: [kaleidoscope], components: [kscope3]})
      }
     else if(i.customId == "allhelp" || i.customId == "helpall"){
        await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
      }
     else if(i.customId == "nhks" || i.customId == "nohokaistars"){
        await i.update({embeds: [nohonkaistars], components: [nhks]})
      }
     else if(i.customId == "nhks2" || i.customId == "nohokaistars2"){
        await i.update({embeds: [nohonkaistars], components: [nhks2]})
      }
    });
  },
};