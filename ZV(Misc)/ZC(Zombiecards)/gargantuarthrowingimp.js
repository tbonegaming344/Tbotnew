const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: `gargantuarthrowingimp`,
  aliases: [`gti`, `gargthrowingimp`, `garg-throwing-imp`, `gargantuar-throwingimp`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/7/71/Large.png/revision/latest/scale-to-width-down/250?cb=20170505020050"
      )
      .setTitle("Gargantuar-Throwing Imp | <:Crazy:1062502046474973224>")
      .setDescription("**\\- Imp Zombie -**")
      .addFields(
        {
          name: "Stats",
          value:
            "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>",
        },
        {
          name: "Ability",
          value:
            "**When hurt:** Make a random Gargantuar that costs 5<:Brainz:1062503146745774183> in a random lane.",
        },
        {
          name: "Set-Rarity",
          value: "**Event**",
        },
        {
          name: "Flavor Text",
          value:
            "When lifting a Gargantuar, always bend at the knees. He learned this the hard way.",
        }
      )
      .setColor("Random");

    message.channel.send({ embeds: [embed] });
  },
};
