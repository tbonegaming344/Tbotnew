const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `deepseagarg`,
	aliases: [`deepseagargantuar`, `dsg`, `seagarg`, `deepsea`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const embed = new EmbedBuilder()
			.setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11c1d4dc-5483-433e-a5e6-d51a36c6ca1d/deneq38-7877cec2-6c67-4c15-9137-cdceb4a78c74.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExYzFkNGRjLTU0ODMtNDMzZS1hNWU2LWQ1MWEzNmM2Y2ExZFwvZGVuZXEzOC03ODc3Y2VjMi02YzY3LTRjMTUtOTEzNy1jZGNlYjRhNzhjNzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X9nAWErs97baiwAhgyIo0pkGEa0IZEan_BxQ4zfvPaM")
			.setTitle("Deep Sea Gargantuar | <:Beastly:1062500894744264714>")
			.setDescription("**\\- Gargantuar Monster Zombie  -**")
			.addFields({name: "Stats", 
									value: "7 <:Strength:1062501774612779039>, 8 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits",  
									value: "__Amphibious__, __Hunt__" 
								 },
								 {
									 name: "Ability",  
									 value: "When any zombie enters any lane, that Zombie gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Has every single issue of Deep Sea Quarterly, but rarely has time to read them. "
								 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}