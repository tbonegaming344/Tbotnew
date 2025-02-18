const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `zombieking`,
	aliases: [`zk`, `king`],
	category: `Zombie Cards`,
		run: async(client, message, args) => {
		let embed = new EmbedBuilder()
      .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11c1d4dc-5483-433e-a5e6-d51a36c6ca1d/dexgont-0945222a-48a0-4834-ad4d-981b95ac5a6c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExYzFkNGRjLTU0ODMtNDMzZS1hNWU2LWQ1MWEzNmM2Y2ExZFwvZGV4Z29udC0wOTQ1MjIyYS00OGEwLTQ4MzQtYWQ0ZC05ODFiOTVhYzVhNmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B0PdE8Xcy7XP5dlMN1qp6wtg3OeM0UixdbfLbkXdAuw")
			.setTitle("Zombie King | <:Hearty:1062501636557242429>")
			.setDescription("**\\- Mustache History Zombie   -**")
			.addFields({name: "Stats", 
                  value: "3 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "**End of Turn**: Transform another random Zombie into a 5<:Strength:1062501774612779039>/5<:Health:1062515540712751184> Knight of the Living Dead with <:Armored:1062502392005922919>__Armored 2__."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Legendary**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Contrary to popular opinion, it's just OK to be king.`
                 })
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}