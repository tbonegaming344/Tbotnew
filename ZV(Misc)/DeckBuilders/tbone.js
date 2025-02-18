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
      .setLabel("Aggro Decks")
      .setValue("aggro")
      .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Combo Decks")
      .setValue("combo")
      .setDescription('Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks).'),
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Decks")
      .setValue("control")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
    )
    const row = new ActionRowBuilder().addComponents(select);
    const memerow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("wpharoah")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("os")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const os = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpmeme")
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
        .setCustomId("memehelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let user = await client.users.fetch("625172218120372225");
    let comborow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("wp2")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("os2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let os2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcombo")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sea")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let sea= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("otkswabbie2")
.setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("wph2")
     .setEmoji("<:arrowright:1271446796207525898>")
      .setStyle(ButtonStyle.Primary)
  );
    let wph2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("seacret")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("combohelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let combodecks = ["otkswabbie", "seacret", "whalepharaoh"];
    let toBuildComb = "";
    for (let i = 0; i < combodecks.length; i++) {
      toBuildComb += `\n<@1043528908148052089> **${combodecks[i]}**`;
    }
    let memedecks = ["otkswabbie", "whalepharaoh"];
    let toBuildMeme = "";
    for (let i = 0; i < memedecks.length; i++) {
      toBuildMeme += `\n<@1043528908148052089> **${memedecks[i]}**`;
    }
    let controldecks = [ "whalepharaoh"];
    let decks = [ "otkswabbie", "whalepharaoh"];
    let [result] = await db.query(`select seacret, otkswabbie,
whalepharaoh from ebdecks eb 
inner join hgdecks hg
on (eb.deckinfo = hg.deckinfo) 
inner join smdecks sm
on (eb.deckinfo = sm.deckinfo)`);
    let tbone = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below! Select Combo to view all
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let memetbone = new EmbedBuilder()
      .setTitle(`${user.displayName} Meme Decks`)
      .setDescription(
        `My Meme decks made by ${user.displayName} are ${toBuildMeme}`
      )
      .setFooter({
        text: `To view the Meme Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${memedecks.length} Meme decks in Tbot`,
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
Note: ${user.displayName} has ${combodecks.length} Combo decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
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
          await i.reply({embeds: [wph], flags: MessageFlags.Ephemeral})
        }

      }
    if(i.customId == "os" || i.customId == "otkswabbie") {
      await i.update({embeds: [otks], components: [os]})
    }
    if(i.customId == "wp" || i.customId == "wpharoah") {
      await i.update({embeds: [wph], components: [wp]})
    }
    if(i.customId == "helpmeme" || i.customId == "memehelp") {
      await i.update({embeds: [memetbone], components: [memerow]})
    }
    if(i.customId == "sea" || i.customId== "seacret"){
      await i.update({embeds: [seacret], components: [sea]})
    }
    if(i.customId == "wp2" || i.customId == "wph2") {
     await i.update({embeds: [wph], components: [wph2]})
    }
    if(i.customId == "helpcombo" || i.customId == "combohelp") {
      await i.update({embeds: [combotbone], components: [comborow]})
    }
    if(i.customId == "os2" || i.customId == "otkswabbie2") {
      await i.update({embeds: [otks], components: [os2]})
    }
    });
  },
};
