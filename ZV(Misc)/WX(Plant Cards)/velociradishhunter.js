const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: `velociradishpackmate`,
  aliases: [
    `vrh`,
    `raptors`,
    `hunter`,
    `hunters`,
    `vrh2`,
    `velociradishhunter`,
    `packmate`,
	  `vrp`,
	  `velociradishs`,
  ],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const vrh = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/3/37/Veloci-Radish_card_face.png/revision/latest?cb=20170717214410"
      )
      .setTitle("Veloci-Radish Packmate | <:Kabloom:1062502137826910268>")
      .setDescription("**\\- Root Animal Plant -**")
      .setColor("Random")

      .addFields(
        {
          name: "Stats",
          value:
            "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>",
        },
        {
          name: "Ability",
          value:
            "**When played:** Make a copy of this with __Team-Up__ here. \n **__Dino-Roar__:** This gets +1<:Strength:1062501774612779039>.",
        },
        {
          name: "Set-Rarity",
          value: "**Triassic - Legendary**",
        },
        {
          name: "Flavor Text",
          value:
            "Dedicated pack hunters, one roars a distraction while the other strikes from the side.",
        }
      );
    message.channel.send({ embeds: [vrh] });
  },
};
