const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags, 
} = require("discord.js");
const db = require("../../index.js");
module.exports = {
  name: `lgtyqz`,
  aliases: [
    `lgdecks`,
    `lgtyqzdecks`,
    `lgty`,
    `lghelp`,
    `helplg`,
    `decksmadebylg`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("noplayingallowed")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("npa")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const npa= new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helplg")
        .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
       .setEmoji("<:arrowright:1271446796207525898>")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = [
      "noplayingallowed",
    ]
     let toBuildString = "";
    for (const deck of decks) {
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    const [result] =
      await db.query(`select 
noplayingallowed from ebdecks`);
    const user = await client.users.fetch("321772369125572608");
    const lgtqyz = new EmbedBuilder()
    .setTitle(`${user.displayName} Decks`)
    .setDescription(
      `My commands for decks made by ${user.displayName} are ${toBuildString}`
    )
    .setFooter({
      text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
    })
    .setThumbnail(user.displayAvatarURL())
    .setColor("#C4A484");
    const noplayingallowed= new EmbedBuilder()
    .setTitle(`${result[5].noplayingallowed}`)
	.setDescription(`${result[3].noplayingallowed}`)
	.setFooter({text: `${result[2].noplayingallowed}`})
				.addFields({
					name: "Deck Type",
					value: `${result[6].noplayingallowed}`,
					inline: true
				},{
					name: "Archetype",
					value: `${result[0].noplayingallowed}`,
					inline: true
				},{
					name: "Deck Cost", 
					value: `${result[1].noplayingallowed}`,
					inline: true
				})
		.setColor("#C4A484")
		.setImage(`${result[4].noplayingallowed}`)
    const m = await message.channel.send({
      embeds: [lgtqyz],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
        if(i.customId == "npa" || i.customId == "noplayingallowed") {
          await i.update({
            embeds: [noplayingallowed],
            components: [npa],
          });
        }
          else if(i.customId == "helplg" || i.customId == "help") {
            await i.update({
              embeds: [lgtqyz],
              components: [row],
            });
          }
    });
  },
};
