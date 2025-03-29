const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
let db = require("../../index.js");
function CreateHelpEmbed(title, description, thumbnail, footer) {
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setColor("Blue");
  if (footer) {
    embed.setFooter({ text: `${footer}` });
  }
  return embed;
}
module.exports = {
  name: `electricboogaloo`,
  aliases: [`eb`, `boog`, `electric`, `boogaloo`, `loo`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("Electric Boogaloo decks")
        .setEmoji("<:electricsleeper:1100169044440645776>")
        .setStyle(ButtonStyle.Primary)
    );
    const select = new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder(
        "Select an option below to view electric boogaloo's decklists"
      )
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Budget Deck")
          .setValue("budget")
          .setDescription("Decks that are cheap for new players")
          .setEmoji("💰"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Competitive Deck")
          .setValue("comp")
          .setDescription("Some of the Best Decks in the game")
          .setEmoji("<:compemote:1325461143136764060>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Ladder Deck")
          .setValue("ladder")
          .setDescription("Decks that mostly only good for ranked games")
          .setEmoji("<:ladder:1271503994857979964>"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Meme Decks")
          .setValue("meme")
          .setDescription("Decks that are built off a weird/fun combo"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Aggro Decks")
          .setValue("aggro")
          .setDescription(
            "Attempts to kill the opponent as soon as possible, usually winning the game by turn 4-7."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Combo Deck")
          .setValue("combo")
          .setDescription(
            "Uses a specific card synergy to do massive damage to the opponent(OTK or One Turn Kill decks)."
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Control Decks")
          .setValue("control")
          .setDescription(
            'Tries to remove/stall anything the opponent plays and win in the "lategame" with expensive cards.'
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("Midrange Deck")
          .setValue("midrange")
          .setDescription(
            "Slower than aggro, usually likes to set up earlygame boards into mid-cost cards to win the game"
          ),
        new StringSelectMenuOptionBuilder()
          .setLabel("All Electric Boogaloo Decks")
          .setValue("all")
          .setDescription("View all of Electric Boogaloo's decks")
          .setEmoji("<:electricsleeper:1100169044440645776>")
      );
    const row = new ActionRowBuilder().addComponents(select);
    const electricBoogalooDecks = {
      budgetDecks: ["budgetburn"],
      competitiveDecks: ["seacret"],
      ladderDecks: ["gargstar22"],
      memeDecks: ["huntgargs", "noplayingallowed"],
      aggroDecks: ["budgetburn", "seacret"],
      comboDecks: ["seacret"],
      controlDecks: ["huntgargs", "noplayingallowed"],
      midrangeDecks: ["gargstar22"],
      allDecks: [
        "budgetburn",
        "gargstar22",
        "huntgargs",
        "noplayingallowed",
        "seacret",
      ],
    };
    function buildDeckString(decks) {
      return decks
        .map((deck) => `\n<@1043528908148052089> **${deck}**`)
        .join("");
    }
    const toBuildAggroString = buildDeckString(
      electricBoogalooDecks.aggroDecks
    );
    const toBuildControlString = buildDeckString(
      electricBoogalooDecks.controlDecks
    );
    const toBuildMemeString = buildDeckString(electricBoogalooDecks.memeDecks);
    const toBuildString = buildDeckString(electricBoogalooDecks.allDecks);
    function CreateButtons(leftButtonId, rightButtonId) {
      return new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(leftButtonId)
          .setEmoji("<:arrowbackremovebgpreview:1271448914733568133>")
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId(rightButtonId)
          .setEmoji("<:arrowright:1271446796207525898>")
          .setStyle(ButtonStyle.Primary)
      );
    }

    const alldecksrow = new CreateButtons("seacret", "budeb");
    const budeb = new new CreateButtons("helpall", "gstar22")();
    const gstar22 = new CreateButtons("budgeteb", "hgargs");
    const hgargs = new CreateButtons("gargstar22", "npa");
    const npa = new CreateButtons("huntgargs", "sea");
    const sea = new CreateButtons("noplayingallowed2", "allhelp");
    const memerow = new CreateButtons("noplayingallowed3", "hgargs2");
    const hgargs2 = new CreateButtons("helpmeme", "npa2");
    const npa2 = new CreateButtons("huntgargs2", "memehelp");
    const aggrorow = new CreateButtons("seacret2", "bburn");
    const bburn = new CreateButtons("helpaggro", "sea2");
    const sea2 = new CreateButtons("budgetburn", "aggrohelp");
    const controlrow = new CreateButtons("noplayingallowed3", "hgargs3");
    const hgargs3 = new CreateButtons("helpcontrol", "npa3");
    const npa3 = new CreateButtons("huntgargs3", "controlhelp");
    let embed = new EmbedBuilder()
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle(
        "Electric Boogaloo | <:Beastly:1062500894744264714><:Crazy:1062502046474973224>"
      )
      .setDescription("- **Dancing Hero** -")
      .setColor("Blue")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Dance Off <:Crazy:1062502046474973224> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Backup Dancers in a lne of your choice. Then another appears in a random lanes. \n Evaporate <:Beastly:1062500894744264714> \n Destroy a damaged Plant. \n Draw a card. \n Electrobolt <:Crazy:1062502046474973224> \n Do 3 damage to a Plant. \n Stayin' Alive <:Beastly:1062500894744264714><:Crazy:1062502046474973224> \n Do 3 damage to a Plant. \n Heal your Hero for 3. ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "They say that disco is dead, but he's down with the dead.",
        }
      );
    const [result] = await db.query("select * from ebdecks");
    let helpeb = new CreateHelpEmbed(
      "Electric Boogaloo Decks",
      `To view the Electric Boogaloo decks please select an option from the select menu below!
   Note: Electric Boogaloo has ${electricBoogalooDecks.allDecks.length} total decks in Tbot`,
      "https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png"
    );
    let allEmbed = new CreateHelpEmbed(
      "Electric Boogaloo Decks",
      `My Decks for Electric Boogaloo(EB) are ${toBuildString}`
    )
      .setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
      .setTitle("Electric Boogaloo Decks")
      .setDescription(`My Decks for Electric Boogaloo(EB) are ${toBuildString}`)
      .setFooter({
        text: `To view the Electric Boogaloo decks please use the commands listed above or navigate through all of the decks using the buttons below!
   Note: Electric Boogaloo has ${electricBoogalooDecks.allDecks.length} total decks in Tbot`,
      })
      .setColor("Random");
    const memeEmbed = new CreateHelpEmbed(
      "Electric Boogaloo Meme Decks",
      `My Meme Decks for Electric Boogaloo(EB) are ${toBuildMemeString}`,
      "https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png",
      `To view the Meme Electric Boogaloo decks please use the commands listed above or navigate through all of the Meme decks using the buttons below!
   Note: Electric Boogaloo has ${electricBoogalooDecks.memeDecks.length} Meme decks in Tbot`
    );
    let aggroEmbed = new CreateHelpEmbed(
      "Electric Boogaloo Aggro Decks",
      `My Aggro Decks for Electric Boogaloo(EB) are ${toBuildAggroString}`,
      "https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png",
      `To view the Aggro Electric Boogaloo decks please use the commands listed above or navigate through all of the Aggro decks using the buttons below!
   Note: Electric Boogaloo has ${electricBoogalooDecks.aggroDecks.length} Aggro decks in Tbot`
    );
    const controlEmbed = new CreateHelpEmbed(
      "Electric Boogaloo Control Decks",
      `My Control Decks for Electric Boogaloo(EB) are ${toBuildControlString}`,
      "https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png",
      `To view the Control Electric Boogaloo decks please use the commands listed above or navigate through all of the Control decks using the buttons below!
   Note: Electric Boogaloo has ${electricBoogalooDecks.controlDecks.length} Control decks in Tbot`
    );
    function CreateDeckEmbed(result, deckName) {
      const embed = new EmbedBuilder()
        .setTitle(`${result[5][deckName]}`)
        .setDescription(`${result[3][deckName]}`)
        .setFooter({ text: `${result[2][deckName]}` })
        .addFields(
          { name: "Deck Type", value: `${result[6][deckName]}`, inline: true },
          { name: "Archetype", value: `${result[0][deckName]}`, inline: true },
          { name: "Deck Cost", value: `${result[1][deckName]}`, inline: true }
        )
        .setColor("Blue");
      const imageUrl = result[4][deckName];
      if (imageUrl) {
        embed.setImage(imageUrl);
      }
      return embed;
    }
    //Deck Embeds
    let budgetburn = new CreateDeckEmbed(result, "budgetburn");
    let gargstar22 = new CreateDeckEmbed(result, "gargstar22");
    const huntgargs = new CreateDeckEmbed(result, "huntgargs");
    let noplayingallowed = new CreateDeckEmbed(result, "noplayingallowed");
    let seacret = new CreateDeckEmbed(result, "seacret");
    const m = await message.channel.send({
      embeds: [embed],
      components: [cmd],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    async function HandleSelectMenu(i) {
      const value = i.values[0];
      if (value == "budget") {
        await i.reply({ embeds: [budgetburn], flags: MessageFlags.Ephemeral });
      } else if (value == "comp" || value == "combo") {
        await i.reply({ embeds: [seacret], flags: MessageFlags.Ephemeral });
      } else if (value == "ladder" || value == "midrange") {
        await i.reply({ embeds: [gargstar22], flags: MessageFlags.Ephemeral });
      } else if (value == "meme") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (value == "aggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (value == "control") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (value == "all") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      }
    }
    async function HandleButtonInteraction(i) {
      if (i.customId == "allhelp" || i.customId == "helpall") {
        await i.update({ embeds: [allEmbed], components: [alldecksrow] });
      } else if (i.customId == "helpmeme" || i.customId == "memehelp") {
        await i.update({ embeds: [memeEmbed], components: [memerow] });
      } else if (i.customId == "aggrohelp" || i.customId == "helpaggro") {
        await i.update({ embeds: [aggroEmbed], components: [aggrorow] });
      } else if (i.customId == "controlhelp" || i.customId == "helpcontrol") {
        await i.update({ embeds: [controlEmbed], components: [controlrow] });
      } else if (i.customId == "ladderhelp" || i.customId == "helpladder") {
        await i.update({ embeds: [ladderEmbed], components: [ladderrow] });
      }
      //Budget Burn
      else if (i.customId == "bburn" || i.customId == "budgetburn") {
        await i.update({ embeds: [budgetburn], components: [bburn] });
      }
      //Seacret
      else if (i.customId == "sea" || i.customId == "seacret") {
        await i.update({ embeds: [seacret], components: [sea] });
      } else if (i.customId == "sea2" || i.customId == "seacret2") {
        await i.update({ embeds: [seacret], components: [sea2] });
      }
      //No Playing Allowed
      else if (i.customId == "npa" || i.customId == "noplayingallowed") {
        await i.update({ embeds: [noplayingallowed], components: [npa] });
      } else if (i.customId == "npa2" || i.customId == "noplayingallowed2") {
        await i.update({ embeds: [noplayingallowed], components: [npa2] });
      } else if (i.customId == "npa3" || i.customId == "noplayingallowed3") {
        await i.update({ embeds: [noplayingallowed], components: [npa3] });
      } else if (i.customId == "gstar22" || i.customId == "gargstar22") {
        await i.update({ embeds: [gargstar22], components: [gstar22] });
      } else if (i.customId == "gstar222" || i.customId == "gargstar222") {
        await i.update({ embeds: [gargstar22], components: [gstar222] });
      } else if (i.customId == "hgargs" || i.customId == "huntgargs") {
        await i.update({ embeds: [huntgargs], components: [hgargs] });
      } else if (i.customId == "hgargs2" || i.customId == "huntgargs2") {
        await i.update({ embeds: [huntgargs], components: [hgargs2] });
      } else if (i.customId == "hgargs3" || i.customId == "huntgargs3") {
        await i.update({ embeds: [huntgargs], components: [hgargs3] });
      } else if (i.customId == "budeb" || i.customId == "budgeteb") {
        await i.update({ embeds: [budgetburn], components: [budeb] });
      }
    }
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cmd") {
        await i.update({ embeds: [helpeb], components: [row] });
      } else if (i.customId == "select") {
        await HandleSelectMenu(i);
      } else {
        HandleButtonInteraction(i);
      }
    });
  },
};
