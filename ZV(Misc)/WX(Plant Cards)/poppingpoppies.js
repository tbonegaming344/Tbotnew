const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, MessageFlags } = require('discord.js');
module.exports= {
	name: `poppinpoppies`,
	aliases: [`poppin`, `poppies`, `poppingpoppies`, `pp3`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('pop')
                    .setLabel('Lil Buddy')
                    .setStyle(ButtonStyle.Success)
										.setEmoji('<:LilBuddyHD:1089676851653394463>')
            );
		const pp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/30/HD_Poppin%27_Poppies.png/revision/latest/scale-to-width-down/250?cb=20160619021325")
		.setTitle("Poppin' Poppies | <:Guardian:1062501130501885973>")
		.setDescription("**\\- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make __Lil' Buddies__ here and next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Makes friends wherever she goes."
							 })
		const buddy = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/16/LilBuddyHD.png/revision/latest/scale-to-width-down/250?cb=20220402085330")
		.setTitle("Lil' Buddy | <:Solar:1062502678384607262>")
		.setDescription("**\\- Flower Seed Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 0 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** Heal your Hero for 2. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Wait, you want me to go in *front*?!?"
							 })
			const m = await	message.channel.send({embeds: [ pp ], components: [row] } )
			const collector = m.createMessageComponentCollector()
		collector.on('collect', async i  => {
			if (i.customId == 'pop')  {
				await i.reply({embeds: [buddy], flags: MessageFlags.Ephemeral} )
			}
		})
	}
}