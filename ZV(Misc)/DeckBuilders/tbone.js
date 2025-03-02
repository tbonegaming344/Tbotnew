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
  name: `tbone`,
  aliases: [`decksmadebytbone`, `tbonedecks`, `tbonehelp`, `helptbone`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Select an option below to view Tbone's decklists")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setValue("competitive")
      .setDescription('Some of the Best Decks in the game')
      .setEmoji("<:compemote:1325461143136764060>"), 
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
      .setLabel("All Decks")
      .setValue("all")
      .setDescription('View all of Tbone\'s decks')
    )
    const tboneDecks = {
      competitiveDecks: ["seacret"], 
      memeDecks: ["huntgargs", "otkswabbie", "whalepharaoh"],
      aggroDecks: ["seacret"],
      comboDecks: ["otkswabbie", "whalepharaoh"],
      controlDecks: ["huntgargs", "whalepharaoh"],
      allDecks: ["huntgargs", "seacret", "otkswabbie", "whalepharaoh"]

    }
    const row = new ActionRowBuilder().addComponents(select);
    const alldecksrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("whalepharaoh")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hgargs")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hgargs = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpall")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sea")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const sea = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("huntgargs")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("os")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const os = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("seacret")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otkswabbie")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("allhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("whalepharaoh2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hgargs2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hgargs2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmeme")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("os2")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const os2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("huntgargs2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wp2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wp2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otkswabbie2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("memehelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let toBuildMeme = "";
    for (let i = 0; i < tboneDecks.memeDecks.length; i++) {
      toBuildMeme += `\n<@1043528908148052089> **${tboneDecks.memeDecks[i]}**`;
    }
    let user = await client.users.fetch("625172218120372225");
    let comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("wp3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("os3")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let os3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcombo")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sea2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let sea2= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("otkswabbie2")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("wp3")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
  );
    let wp3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("seacret2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combohelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let toBuildComb = "";
    for (let i = 0; i < tboneDecks.comboDecks.length; i++) {
      toBuildComb += `\n<@1043528908148052089> **${tboneDecks.comboDecks[i]}**`;
    }
    const controlrow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("whalepharaoh4")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hgargs3")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const hgargs3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcontrol")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wp4")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const wp4 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("huntgargs3")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("controlhelp")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let toBuildControl = "";
    for (let i = 0; i < tboneDecks.controlDecks.length; i++) {
      toBuildControl += `\n<@1043528908148052089> **${tboneDecks.controlDecks[i]}**`;
    }
    let toBuildString = "";
    for (let i = 0; i < tboneDecks.allDecks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${tboneDecks.allDecks[i]}**`;
    }
    let [result] = await db.query(`select huntgargs, seacret, otkswabbie,
whalepharaoh from ebdecks eb 
inner join hgdecks hg
on (eb.deckinfo = hg.deckinfo) 
inner join smdecks sm
on (eb.deckinfo = sm.deckinfo)`);
    let tbone = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below!
Note: ${user.displayName} has ${tboneDecks.allDecks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      const alltbone = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My decks made by ${user.displayName} are ${toBuildString}`
      ) 
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tboneDecks.allDecks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let memetbone = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My Meme decks made by ${user.displayName} are ${toBuildMeme}`
      )
      .setFooter({
        text: `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tboneDecks.memeDecks.length} Meme decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let combotbone = new EmbedBuilder()
      .setTitle(`${user.displayName} Combo Decks`)
      .setDescription(
        `My Combo decks made by ${user.displayName} are ${toBuildComb}`
      )
      .setFooter({
        text: `To view the Combo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tboneDecks.comboDecks.length} Combo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      const controltbone = new EmbedBuilder()
      .setTitle(`${user.displayName} Control Decks`)
      .setDescription(
        `My Control decks made by ${user.displayName} are ${toBuildControl}`
      )
      .setFooter({
        text: `To view the Control Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tboneDecks.controlDecks.length} Control decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      const huntgargs = new EmbedBuilder()
      .setTitle(`${result[5].huntgargs}`)
      .setDescription(`${result[3].huntgargs}`)
      .setFooter({ text: `${result[2].huntgargs}` })
      .addFields({
        name: "Deck Type",
        value: `${result[6].huntgargs}`,
        inline: true
      },{ 
        name: "Archetype", 
        value: `${result[0].huntgargs}`,
        inline: true
      },{ 
        name: "Deck Cost", 
        value: `${result[1].huntgargs}`,
        inline: true
      })
      .setColor("Random")
      .setImage(`${result[4].huntgargs}`);
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
    // Otk Swabbie
    let otks = new EmbedBuilder()
    .setTitle(`${result[5].otkswabbie}`)
    .setDescription(`${result[3].otkswabbie}`)
    .setFooter({text: `${result[2].otkswabbie}`})
          .addFields({
            name: "Deck Type", 
            value: `${result[6].otkswabbie}`,
            inline: true
          },{
            name: "Archetype",
            value: `${result[0].otkswabbie}`,
            inline: true
          },{
            name: "Deck Cost", 
            value:`${result[1].otkswabbie}`,
            inline: true
          })
      .setColor("Random")
  .setImage(`${result[4].otkswabbie}`)

    // Whale Pharaoh
    let wph = new EmbedBuilder()
    .setTitle(`${result[5].whalepharaoh}`)
    .setDescription(`${result[3].whalepharaoh}`)
    .setFooter({text: `${result[2].whalepharaoh}`})
      .setColor("Random")
      .setImage(`${result[4].whalepharaoh}`)
        .addFields({
          name: "Deck Type",
          value: `${result[6].whalepharaoh}`,
          inline: true
        },{
          name: "Archetype",
          value: `${result[0].whalepharaoh}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].whalepharaoh}`,
          inline: true
        })
    const m = await message.channel.send({
      embeds: [tbone],
      components: [row],
    });

    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });

    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "competitive" || value == "aggro"){
          await i.reply({embeds: [seacret], flags: MessageFlags.Ephemeral})
        }
        if(value == "meme"){
          await i.update({embeds: [memetbone], components: [memerow]})
        }
        if(value == "combo"){
          await i.update({embeds: [combotbone], components: [comborow]})
        }
        if(value == "control"){
          await i.update({embeds: [controltbone], components: [controlrow]})
        }
        if(value == "all"){
          await i.update({embeds: [alltbone], components: [alldecksrow]})
        }

      }
    if(i.customId == "os" || i.customId == "otkswabbie") {
      await i.update({embeds: [otks], components: [os]})
    }
    if(i.customId == "wp" || i.customId == "whalepharaoh") {
      await i.update({embeds: [wph], components: [wp]})
    }
    if(i.customId == "wp2" || i.customId == "whalepharaoh2") {
      await i.update({embeds: [wph], components: [wp2]})
    }
    if(i.customId == "wp3" || i.customId == "whalepharaoh3") {
      await i.update({embeds: [wph], components: [wp3]})
    }
    if(i.customId == "wp4" || i.customId == "whalepharaoh4") {
      await i.update({embeds: [wph], components: [wp4]})
    }
    if(i.customId == "helpmeme" || i.customId == "memehelp") {
      await i.update({embeds: [memetbone], components: [memerow]})
    }
    if(i.customId == "sea" || i.customId== "seacret"){
      await i.update({embeds: [seacret], components: [sea]})
    }
    if(i.customId == "sea2" || i.customId == "seacret2") {
      await i.update({embeds: [seacret], components: [sea2]})
    }
    if(i.customId == "helpcombo" || i.customId == "combohelp") {
      await i.update({embeds: [combotbone], components: [comborow]})
    }
    if(i.customId == "os2" || i.customId == "otkswabbie2") {
      await i.update({embeds: [otks], components: [os2]})
    }
    if(i.customId == "os3" || i.customId == "otkswabbie3") {
      await i.update({embeds: [otks], components: [os3]})
    }
    if(i.customId == "helpcontrol" || i.customId == "controlhelp") {
      await i.update({embeds: [controltbone], components: [controlrow]})
    }
    if(i.customId == "hgargs" || i.customId == "huntgargs") {
      await i.update({embeds: [huntgargs], components: [hgargs]})
    }
    if(i.customId == "hgargs2" || i.customId == "huntgargs2") {
      await i.update({embeds: [huntgargs], components: [hgargs2]})
    }
    if(i.customId == "hgargs3" || i.customId == "huntgargs3") {
      await i.update({embeds: [huntgargs], components: [hgargs3]})
    }
    if(i.customId == "allhelp" || i.customId == "allhelp") {
      await i.update({embeds: [alltbone], components: [alldecksrow]})
    }

    });
  },
};
