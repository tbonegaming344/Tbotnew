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
  name: `justeenilingueeni`,
  aliases: [
    `justeenilingueenihelp`,
    `helpjusteenilingueeni`,
    `justeenilingueenidecks`,
    `decksmadebyjusteenilingueeni`,
    `justeeni`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Select an option below to view the decks made by Justeeni")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Decks")
          .setValue("budget")
          .setDescription('Decks that are cheap for new players')
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Deck")
          .setValue("aggro")
          .setDescription('Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7.'), 
        new StringSelectMenuOptionBuilder()
          .setLabel("Tempo Decks")
          .setValue("tempo")
          .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
      )
      const row = new ActionRowBuilder().addComponents(select);
    const budgetRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sfb")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgs")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bgs = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpj")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("brb")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const brb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gsb")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsf")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rbb")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("helpbudget")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const budgetDecks = [
      "budgetgs",
      "budgetrb",
      "budgetsf",
    ];
    let toBuildBudgetString = "";
    for (let i = 0; i < budgetDecks.length; i++) {
      let deck = budgetDecks[i];
      toBuildBudgetString += `\n<@1043528908148052089> **${deck}**`;
    }
    const tempoRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sfb2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgs2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bgs2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helptempo")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsf2")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const bsf2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gsb2")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tempohelp")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const tempoDecks = [
      "budgetgs",
      "budgetrb",
      "budgetsf",
    ];
    let toBuildTempoString = "";
    for (let i = 0; i < tempoDecks.length; i++) {
      let deck = tempoDecks[i];
      toBuildTempoString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] =
      await db.query(`select budgetgs, budgetrb,
budgetswarmsf,
from gsdecks gs
inner join rbdecks rb 
on (gs.deckinfo = rb.deckinfo)
inner join sfdecks sf
on (gs.deckinfo = sf.deckinfo)`);
    let user = await client.users.fetch("685927469462716424");
    let jeet = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `To view the Decks Made By ${user.displayName} please select an option from the select menu below! Select budget if you would wish to view all decks
Note: ${user.displayName} has ${decks.length} total decks in Tbot`
      )
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
      let budgetjust = new EmbedBuilder()
      .setTitle(`${user.displayName} Budget Decks`)
      .setDescription(
        `My Budget decks made by ${user.displayName} are ${toBuildBudgetString}`
      )
      .setFooter({
        text: `To view the Budget Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${budgetDecks.length} Budget decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
      let tempojust = new EmbedBuilder()
      .setTitle(`${user.displayName} Tempo Decks`)
      .setDescription(
        `My Tempo decks made by ${user.displayName} are ${toBuildTempoString}`
      )
      .setFooter({
        text: `To view the Tempo Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${tempoDecks.length} Tempo decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    //Budget Mop Shadow
    let budgetgs = new EmbedBuilder()
    .setTitle(`${result[5].budgetgs}`)
    .setDescription(`${result[3].budgetgs}`)
    .setFooter({text:`${result[2].budgetgs}`})
        .addFields({
        name: "Deck Type",
        value: `${result[6].budgetgs}`,
        inline: true
        },
        {
        name: "Archetype",
        value: `${result[0].budgetgs}`,
        inline: true
        },{
          name: "Deck Cost", 
          value:`${result[1].budgetgs}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].budgetgs}`);
    //Budget Rustbolt
    let budgetrb = new EmbedBuilder()
    .setTitle(`${result[5].budgetrb}`)	
    .setDescription(`${result[3].budgetrb}`)
.setFooter({text: `${result[2].budgetrb}`})
    .addFields({
      name: "Deck Type",
      value: `${result[6].budgetrb}`,
      inline: true
    },{
      name: "Archetype",
      value: `${result[0].budgetrb}`,
      inline: true
    },{
      name: "Deck Cost", 
      value: `${result[1].budgetrb}`,
      inline: true
    })	
    .setImage(`${result[4].budgetrb}`)
  .setColor("Random")			
    //Budget Swarm SF
    let budgetswarm = new EmbedBuilder()
    .setTitle(`${result[5].budgetswarmsf}`)
    .setDescription(`${result[3].budgetswarmsf}`)
    .setFooter({text: `${result[2].budgetswarmsf}`})
        .addFields({
          name: "Deck Type",
          value: `${result[6].budgetswarmsf}`,
          inline: true
        },
        {
          name: "Archetype",
          value: `${result[0].budgetswarmsf}`,
          inline: true
        },{
          name: "Deck Cost", 
          value: `${result[1].budgetswarmsf}`,
          inline: true
        })
      .setColor("Random")
  .setImage(`${result[4].budgetswarmsf}`)
    const m = await message.channel.send({ embeds: [jeet], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "budget"){
          await i.update({ embeds: [budgetjust], components: [budgetRow] });
        }
        if(value == "aggro"){
          await i.reply({embeds: [budgetrb], flags: MessageFlags.Ephemeral})
        }
        if(value == "tempo"){
          await i.update({ embeds: [tempojust], components: [tempoRow] });
        }
      }
      //Budget Mop Shadow
      if (i.customId == "bgs") {
        await i.update({ embeds: [budgetgs], components: [bgs] });
      }
      if (i.customId == "gsb") {
        await i.update({ embeds: [budgetgs], components: [bgs] });
      }
      //Budget Rustbolt
      if (i.customId == "brb") {
        await i.update({ embeds: [budgetrb], components: [brb] });
      }
      if (i.customId == "rbb") {
        await i.update({ embeds: [budgetrb], components: [brb] });
      }
      //Budget Swarm SF
      if (i.customId == "bsf") {
        await i.update({ embeds: [budgetswarm], components: [bsf] });
      }
      if (i.customId == "sfb") {
        await i.update({ embeds: [budgetswarm], components: [bsf] });
      }

      //Budget Mop Shadow
      if (i.customId == "bgs2") {
        await i.update({ embeds: [budgetgs], components: [bgs2] });
      }
      if (i.customId == "gsb2") {
        await i.update({ embeds: [budgetgs], components: [bgs2] });
      }
      //Budget Swarm SF
      if (i.customId == "bsf2") {
        await i.update({ embeds: [budgetswarm], components: [bsf2] });
      }
      if (i.customId == "sfb2") {
        await i.update({ embeds: [budgetswarm], components: [bsf2] });
      }
      if (i.customId == "helpbudget" || i.customId == "budgethelp") {
        await i.update({ embeds: [budgetjust], components: [budgetRow] });
      }
      if (i.customId == "helptempo" || i.customId == "tempohelp") {
        await i.update({ embeds: [tempojust], components: [tempoRow] });
      }
    });
  },
};
