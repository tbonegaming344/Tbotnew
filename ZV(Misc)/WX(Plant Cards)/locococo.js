const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `locococo`,
	aliases: [`loco`, `coco`,`lc2`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
			const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('nut')
                    .setLabel('Wallnut')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:HD_Wallnut:1089674209443205192>')
            );
		const loco = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/33/LocoCoco.png/revision/latest/scale-to-width-down/250?cb=20180212025014")
		.setTitle("Loco Coco | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Fruit Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make __Wall-Nuts__ next door. \n **__Nut Evolution__:** Plants with no <:Strength:1062501774612779039> get +3<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He crowned himself King of All Hollow Earth. No one had the heart to tell him it was actually a parliamentary democracy."
							 })
			const nut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/67/HD_Wall-nut.png/revision/latest?cb=20220414061652")
		.setTitle("Wall-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Works well with others. Says so, right there on his resume."
							 })
		const m = await	message.channel.send({embeds: [ loco ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'nut')  	{
				await i.reply({embeds: [nut], flags: MessageFlags.Ephemeral } )
			}
		})
	}
}