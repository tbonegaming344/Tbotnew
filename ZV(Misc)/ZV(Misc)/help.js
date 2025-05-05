const {
    EmbedBuilder, 
    ActionRowBuilder,
    StringSelectMenuBuilder,
      ComponentType, 
      MessageFlags
  } = require("discord.js")
  
  
  module.exports = {
      name: "help",
      description: "Help command",
      aliases: ["helpcommand", "decks", "decklists", "commands", "cmds", "deck", "names", "list"],
      category: "Miscellaneous",
      run: async (client, message, args) => {
      const commands = Array.from(client.commands.values())
      const categories = commands.reduce((acc, command) => {
          if (!acc[command.category]) {
              acc[command.category] = [];
          }
          acc[command.category].push(command);
          return acc;
      }, {});     
      const embed = new EmbedBuilder()
          .setColor("Random")
          .setTitle("Select category")
          .setDescription(
              'Please select a category from the select menu given below to view the commands. \n prefix is <@1043528908148052089>'
          )
          .setImage("https://media.discordapp.net/attachments/1044626284346605588/1257720785129312306/all_characters.jpg?ex=66856f42&is=66841dc2&hm=121286e871f2f84b7db1cc561a509a729596e8105b623225d85f3d36cd9b5b43&=&format=webp&width=707&height=614")
          .setFooter({text: `Total Commands: ${commands.length} commands`})
      const cat = Object.keys(categories).map(category => {
          if (!category) category = `Default`;
          return {
              label: category,
              value: 'help_' + category,
          }
      })
  
    const menu = new ActionRowBuilder().addComponents(
         new StringSelectMenuBuilder()
              .setCustomId("help_" + message.author.id)
              .setPlaceholder(
                  "Nothing selected"
              )
              .setOptions(cat)
      )
  
      try {
      
          const msg = await message.reply({
              embeds: [embed],
              components: [menu],
          })
                  const iFilter = i => i.user.id === message.author.id
          const collector = msg.createMessageComponentCollector({
             componentType: ComponentType.StringSelectMenuBuilder, filter: iFilter,
          })
          collector.on('collect', async m  => {
                          if(m.customId == "help_" + message.author.id){
              
           //   console.log(client.slashcommands.values())
  
              const category = m.values[0].split("_")[1];
              const Ccommands = Array.from(client.commands.values())
              const commands = Ccommands.filter((command) => {
                  return command.category === category;
              })
             const embed = new EmbedBuilder()
                  .setColor("Random")
                  .setTitle("Help | " + category)

              let toBuildString = "";
              for (const command of commands) {
                  toBuildString += `**${command.name}** \n`;
              }
              embed.setDescription(toBuildString)
              embed.setFooter({text: `${category} has ${commands.length} commands and ${commands.length - 1 } decks`})
              if(category == "Miscellaneous" || category == "Zombie Cards"|| category == "Tricks Phase" || category == "DeckBuilders" || category == "Plant Cards"){
                embed.setFooter({text: `${category} has ${commands.length} commands`})
              }
              await m.deferUpdate()
              await m.message.edit({
                  embeds: [embed],
              })
                          }
                          else{
                  return m.update({
                      content: "You are not the owner of this help menu.",
                      flags: MessageFlags.Ephemeral,
                  })
                          }
          });
      } catch (e) {
          return console.log(e);
      } 
  }
  } 