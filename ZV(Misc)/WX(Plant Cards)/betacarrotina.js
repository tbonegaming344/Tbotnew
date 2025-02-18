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
  name: `betacarrotina`,
  aliases: [`bc`, `beta`, `carrotina`, `carrot`, `tina`, `beta-carrotina`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Beta Carrotina Decks")
        .setEmoji("<:BetaJerratina:908525918174199900>")
        .setStyle(ButtonStyle.Primary)
    );
 const select = new StringSelectMenuBuilder()
    .setCustomId("select")
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel("Competitive Deck")
      .setDescription('Some of the Best Plant Decks in the game')
      .setEmoji("<:compemote:1325461143136764060>")
      .setValue("competitive"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Ladder Deck")
      .setDescription('Decks that mostly only good for ranked games')
      .setEmoji("<:ladder:1271503994857979964>")
      .setValue("ladder"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Control Deck")
      .setDescription('Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.')
      .setValue("control"),
      new StringSelectMenuOptionBuilder()
      .setLabel("Tempo Deck")
      .setDescription('Focuses on slowly building a big board, winning trades and overwhelming the opponent.')
      .setValue("tempo")
    )
    const row = new ActionRowBuilder().addComponents(select);
    let bc = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist"
      )
      .setTitle(
        "Beta-Carrotina | <:Guardian:1062501130501885973><:Smarty:1062502890448638022>"
      )
      .setDescription("**\\- Root Hero  -**")
      .setColor("Random")

      .addFields(
        {
          name: "Superpowers",
          value:
`Ensign Uproot <:Guardian:1062501130501885973> 
**When played:** Move another Plant or Zombie. 
Lieutenant Carrotron <:Smarty:1062502890448638022> 
**When played:** __Conjure__ a Root.
Lightspeed Seed <:Smarty:1062502890448638022> 
__Conjure__ two Tricks. 
Genetic Amplification <:Guardian:1062501130501885973><:Smarty:1062502890448638022> 
__Conjure__ a Plant that costs 2<:Sun:1062501177679413409>. 
It gets +2<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>, __Amphibious__, and __Team-Up__.`,
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value:
            "As leader of the Plant-etary Guard, she's ready to root out Zombies wherever they crop up.",
        }
      );
    let decks = ["anti", "shamcontrolbc"];
    let [result] = await db.query("SELECT * FROM bcdecks");
    let embed = new EmbedBuilder()
    .setThumbnail(
      "https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist"
    )
    .setTitle("BC Commands")
    .setDescription(
      `To view the Beta Carrotina decks please click on the buttons below!
Note: Beta Carrotina has ${decks.length} total decks in Tbot`
    )
    .setColor("Random")
    let anti = new EmbedBuilder()
      .setTitle(`${result[5].anti}`)
      .setDescription(`${result[3].anti}`)
      .setFooter({ text: `${result[2].anti}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].anti}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].anti}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].anti}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(result[4].anti);
    let shamcontrol = new EmbedBuilder()
      .setTitle(`${result[5].shamcontrol}`)
      .setDescription(`${result[3].shamcontrol}`)
      .setFooter({ text: `${result[2].shamcontrol}` })
      .addFields(
        {
          name: "Deck Type",
          value: `${result[6].shamcontrol}`,
          inline: true,
        },
        {
          name: "Archetype",
          value: `${result[0].shamcontrol}`,
          inline: true,
        },
        {
          name: "Deck Cost",
          value: `${result[1].shamcontrol}`,
          inline: true,
        }
      )
      .setColor("Random")
      .setImage(`${result[4].shamcontrol}`);
    const m = await message.channel.send({ embeds: [bc], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({
      filter: iFilter
    });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if(i.customId == "select"){
        const value = i.values[0];
        if(value == "ladder" || value == "tempo"){
          await i.reply({embeds: [anti], flags: MessageFlags.Ephemeral})
        }
        if(value == "control" || value == "competitive"){
          await i.reply({embeds: [shamcontrol], flags: MessageFlags.Ephemeral})
        }
      }
    });
  },
};
