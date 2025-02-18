const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags
} = require("discord.js");
let db = require("../../index.js");
const e = require("express");
module.exports = {
  name: `non`,
  aliases: [`nondecks`, `nonhelp`, `nonsequitur`, `nonsequiturhelp`, `nonsequiturdecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("zm")
  .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("floss")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const flo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("helpn")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
        .setCustomId("zmoss")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const zm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
      .setCustomId("flo")
      .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
        .setCustomId("helpnon")
        .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["floss", "zmoss"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select floss, zmoss
		from ntdecks nt
		inner join zmdecks zm 
		on (nt.deckinfo = zm.deckinfo);`);
    let user = await client.users.fetch("761810528606617602");
    let non = new EmbedBuilder()
    .setTitle(`Non Decks`)
    .setDescription(
      `My commands for decks made by Non are ${toBuildString}`
    )
    .setFooter({
      text: `To view the Decks Made By Non please use the commands listed above or click on the buttons below!
Note: Non has ${decks.length} total decks in Tbot`,
    })
    .setThumbnail(user.displayAvatarURL())
    .setColor("Random");
    let floss = new EmbedBuilder()
    .setTitle(`${result[5].floss}`)
    .setDescription(`${result[3].floss}`)
    .setColor('Random')
    .addFields({
        name: 'Deck Type',
        value: `${result[6].floss}`,
        inline: true
    },{
        name: 'archtype',
        value: `${result[0].floss}`,
        inline: true
    },{
        name: 'Deck Cost', 
        value: `${result[1].floss}`,
        inline: true
    })
    .setFooter({text: `${result[2].floss}`})
    .setImage(`${result[4].floss}`)
    let zmoss = new EmbedBuilder()
    .setTitle(`${result[5].zmoss}`)
        .setDescription(`${result[3].zmoss}`)
        .setColor("Random")
        .setFooter({text: `${result[2].zmoss}`})
        .addFields({
            name: "Deck Type",
            value:`${result[6].zmoss}`,
            inline: true
        },{
            name: "Archetype",
            value:`${result[0].zmoss}`,
            inline: true
        },{
            name: "Deck Cost", 
            value:`${result[1].zmoss}`,
            inline: true
        })
        .setImage(`${result[4].zmoss}`)
    const m = await message.channel.send({ embeds: [non], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId === "flo" || i.customId === "floss") {
        await i.update({ embeds: [floss], components: [flo] });
      }
      if (i.customId === "zm" || i.customId === "zmoss") {
        await i.update({ embeds: [zmoss], components: [zm] });
      }
      if(i.customId == "helpn" || i.customId == "help"){
        await i.update({embeds: [non], components: [row]});
      }
    });
  },
};
