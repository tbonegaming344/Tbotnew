const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports = {
	name: `nutsignal`,
	aliases: [`signal`, `nutsig`, `ns`],
	category: `Tricks Phase`,
	run: async(client, message, args)=> {
			const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('nut')
                    .setLabel('Wallnut')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:HD_Wallnut:1089674209443205192>')
            );
		const ns = new EmbedBuilder()
		.setThumbnail("https://images-ext-2.discordapp.net/external/LFthbRUEDsQ-dijeCQ0doJHdU-kbB2Y1KRBLkvwB_X4/%3Fcb%3D20180206061932/https/static.wikia.nocookie.net/plantsvszombies/images/e/e8/NutSignalCardImage.png/revision/latest")
		.setTitle("Nut Signal | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Nut Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Make a __Wall-Nut__. \nDraw a card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Call on Wall-Nut any time. His schedule is wide open."
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
						const m = await	message.channel.send({embeds: [ns], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'nut')  {
				await i.reply({embeds: [nut], flags: MessageFlags.Ephemeral})
			}
			})
	}
}