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
  name: `franinja`,
  aliases: [`franinjadecks`, `franinjahelp`, `helpfraninja`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Franinja's Deck")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Decks")
      .setValue("comp")
      .setDescription('Some of the Best Decks in the game')
			.setEmoji("<:compemote:1325461143136764060>"),
      new  StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setValue("ladder")
      .setEmoji("<:ladder:1271503994857979964>")
      .setDescription('Decks that mostly only good for ranked games'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Aggro Decks")
      .setValue("aggro")    
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("Midrange Deck")
      .setValue("midrange")
      .setDescription('Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game'), 
      new StringSelectMenuOptionBuilder()
      .setLabel("All Decks")
      .setValue("all")
      .setDescription("All decks made by Franinja")
    )
    const row = new ActionRowBuilder().addComponents(select);
    const comp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyromania")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcomp")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyro")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pyro = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfwrappers")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("comphelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let compdecks = ["blobfishwrappers", "pyromania"];
    let toBuildComp = "";
    for (let i = 0; i < compdecks.length; i++) {
      let deck = compdecks[i];
      toBuildComp += `\n<@1043528908148052089> **${deck}**`;
    }
    const combo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyromania2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcombo")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyro2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pyro2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfwrappers2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combohelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let combodecks = ["blobfishwrappers", "pyromania"]
    let toBuildCombo = "";
    for (let i = 0; i < combodecks.length; i++) {
      let deck = combodecks[i];
      toBuildCombo += `\n<@1043528908148052089> **${deck}**`;
    }
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyromania3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw3")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mbolt")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const mbolt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfwrappers3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyro3")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const pyro3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("marxbolt")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["blobfishwrappers", "marxbolt", "pyromania"];
    let toBuildString = ""; 
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] =
      await db.query(`select blobfishwrappers, marxbolt, pyromania
		from hgdecks as hg inner join 
		rbdecks as rb on (hg.deckinfo = rb.deckinfo)
		inner join gkdecks as gk 
		on (hg.deckinfo = gk.deckinfo)
		inner join zmdecks as zm
		on (hg.deckinfo = zm.deckinfo);`);
    let user = await client.users.fetch("488426862058405899");
    let fran = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please selectan option from the select menu below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let comppfran = new EmbedBuilder()
      .setTitle(`${user.displayName} Competitive Decks`)
      .setDescription(
        `My Competitive decks made by ${user.displayName} are ${toBuildComp}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${compdecks.length} Competitive decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let combofran = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo decks made by ${user.displayName} are ${toBuildCombo}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${combodecks.length} Combo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let alldecksEmbed = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let bwrappers = new EmbedBuilder()
    .setTitle(`${result[5].blobfishwrappers}`)
    .setDescription(`${result[3].blobfishwrappers}`)
    .setFooter({ text: `${result[2].blobfishwrappers}` })
    .addFields({
      name: "Deck Type",
      value: `${result[6].blobfishwrappers}`,
      inline: true,
    },{
      name: "Archetype",
      value: `${result[0].blobfishwrappers}`,
      inline: true
    },{ 
      name: "Deck Cost", 
      value: `${result[1].blobfishwrappers}`,
      inline: true 
    })
    .setColor("Random")
    .setImage(`${result[4].blobfishwrappers}`);
    let pyromania = new EmbedBuilder()
    .setTitle(`${result[5].pyromania}`)
    .setDescription(`${result[3].pyromania}`)
    .setColor("Random")
    .setFooter({text: `${result[2].pyromania}`})
    .addFields({
        name: "Deck Type",
        value: `${result[6].pyromania}`,
        inline: true
    },{
        name: "Archetype",
        value: `${result[0].pyromania}`,
        inline: true
    },{
        name: "Deck Cost", 
        value: `${result[1].pyromania}`,
        inline: true
    })
    .setImage(`${result[4].pyromania}`)
    let marxbolt = new EmbedBuilder()
    .setTitle(`${result[5].marxbolt}`)
		.setDescription(`${result[3].marxbolt}`)
		.setFooter({text: `${result[2].marxbolt}`})
		.addFields({
			name: "Deck Type",
			value: `${result[6].marxbolt}`,
			inline: true
		},{
			name: "Archetype",
			value: `${result[0].marxbolt}`,
			inline: true
		},{
			name: "Deck Cost", 
			value: `${result[1].marxbolt}`,
			inline: true
		})
		.setColor("Random")
		.setImage(`${result[4].marxbolt}`)
    const m = await message.channel.send({ embeds: [fran], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "comp"){
          await i.update({embeds: [comppfran], components: [comp]});
        }
        if(value =="aggro" || value == "ladder"){
          await i.reply({embeds: [marxbolt], flags: MessageFlags.Ephemeral});
        }
        if(value == "control"){
          await i.reply({embeds: [bwrappers], flags: MessageFlags.Ephemeral});
        }
        if(value == "combo"){
          await i.update({embeds: [combofran], components: [combo]});
        }
        if(value == "midrange"){
          await i.reply({embeds: [pyromania], flags: MessageFlags.Ephemeral});
        }
        if(value == "all"){
          await i.update({embeds: [alldecksEmbed], components: [alldecksrow]});
        }
      }
      if(i.customId =="bfw" || i.customId == "bfwrappers"){
        await i.update({embeds: [bwrappers], components: [bfw]});
      }
      if(i.customId == "helpcomp" || i.customId == "comphelp"){
        await i.update({embeds: [comppfran], components: [comp]});
      }
      if(i.customId == "pyro" || i.customId == "pyromania"){
        await i.update({embeds: [pyromania], components: [pyro]});
      }
      if(i.customId == "mbolt" || i.customId == "marxbolt"){
        await i.update({embeds: [marxbolt], components: [mbolt]})
      }
      // Combo Decks
      if(i.customId =="bfw2" || i.customId == "bfwrappers2") {
        await i.update({embeds: [bwrappers], components: [bfw2]});
      }
      if(i.customId =="bfw3" || i.customId == "bfwrappers3") {
        await i.update({embeds: [bwrappers], components: [bfw3]});
      }
      if(i.customId == "helpcombo" || i.customId == "combohelp") {
        await i.update({embeds: [combofran], components: [combo]});
      }
      if(i.customId == "pyro2" || i.customId == "pyromanaia2") {
        await i.update({embeds: [pyromania], components: [pyro2]});
      }
      if(i.customId == "pyro3" || i.customId == "pyromanaia3") {
        await i.update({embeds: [pyromania], components: [pyro3]});
      }
      if(i.customId == "helpall" || i.customId == "allhelp"){
        await i.update({embeds: [alldecksEmbed], components: [alldecksrow]})
      }
    });
  },
};
