const {
  ActionRowBuilder,
  EmbedBuilder,
  InteractionType,
  ModalBuilder,
  TextInputBuilder,
  ButtonBuilder,
  ButtonStyle,
  TextInputStyle,
  MessageFlags
} = require("discord.js");
const { ascii, hangmanGuesses } = require("../Utilities/hangman");
let db = require("../index.js");
const FuzzySearch = require("fuzzy-search");
const discord = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setLabel("Discord server")
    .setStyle(ButtonStyle.Link)
    .setURL("https://discord.gg/2NSwt96vmS")
    .setEmoji("<:thor_swab:1334902821249617991>")
);
module.exports = {
  name: "interactionCreate",
  async run(interaction) {
    let client = interaction.client;
    if (interaction.type === InteractionType.ModalSubmit) {
      if (interaction.customId === "dSugg") {
        await interaction.deferUpdate();

        const dName = interaction.fields.getTextInputValue("deckName");
        const uHero = interaction.fields.getTextInputValue("deckHero");
        const dDesc = interaction.fields.getTextInputValue("deckDesc");
        const dCred = interaction.fields.getTextInputValue("deckCred");
        const dLink = interaction.fields.getTextInputValue("deckLink");
        let dHero = uHero.toLowerCase();

        if (
          dLink.includes(".png") ||
          dLink.includes(".jpg") ||
          dLink.includes(".webp") ||
          dLink.includes(".jpeg")
        ) {
          try {
            const dSuggestion = new EmbedBuilder()
              .setTitle(dName)
              .setDescription(dDesc)
              .setImage(dLink)
              .setFooter({
                text: `Created by ${dCred} & Suggested by ${interaction.user.tag}`,
              });
            const forum = interaction.client.channels.cache.get(
              "1100160031128830104"
            );
            console.log(forum.availableTags);
            if (
              dHero == "nt" ||
              dHero == "neptuna" ||
              dHero == "tuna" ||
              dHero == "np" ||
              dHero == "nept"
            ) {
              dHero = "1100170647050649620";
            } else if (
              dHero == "bf" ||
              dHero == "brain freeze" ||
              dHero == "freeze" ||
              dHero == "bfreeze" ||
              dHero == "brainfreeze"
            ) {
              dHero = "1100170721994477668";
            } else if (
              dHero == "if" ||
              dHero == "impfinity" ||
              dHero == "imp" ||
              dHero == "infinity" ||
              dHero == "impf" ||
              dHero == "impfinty"
            ) {
              dHero = "1100170791594762260";
            } else if (
              dHero == "sb" ||
              dHero == "super brains" ||
              dHero == "super" ||
              dHero == "sbrains" ||
              dHero == "superb" ||
              dHero == "superbrain" ||
              dHero == "superbrainz" ||
              dHero == "super brainz" ||
              dHero == "sbrainz" ||
              dHero == "super" ||
              dHero == "brainz" ||
              dHero == "hg" ||
              dHero == "huge" ||
              dHero == "huge giganticus" ||
              dHero == "hugegiganticus" ||
              dHero == "giganticus" ||
              dHero == "huge-giganticus"
            ) {
              dHero = "1100170925208502282";
            } else if (
              dHero == "zmech" ||
              dHero == "zm" ||
              dHero == "z-mech" ||
              dHero == "mech"
            ) {
              dHero = "1100170981013729410";
            } else if (
              dHero == "eb" ||
              dHero == "electric boogaloo" ||
              dHero == "electric" ||
              dHero == "boogaloo" ||
              dHero == "boog" ||
              dHero == "electricboogaloo"
            ) {
              dHero = "1100171042380578857";
            } else if (
              dHero == "pb" ||
              dHero == "professor" ||
              dHero == "brainstorm" ||
              dHero == "professor brainstorm" ||
              dHero == "professorbrainstorm"
            ) {
              dHero = "1100171115504078901";
            } else if (
              dHero == "sm" ||
              dHero == "tsm" ||
              dHero == "smash" ||
              dHero == "the smash" ||
              dHero == "thesmash"
            ) {
              dHero = "1100171177529446492";
            } else if (
              dHero == "im" ||
              dHero == "immort" ||
              dHero == "ticia" ||
              dHero == "immorticia" ||
              dHero == "iticia"
            ) {
              dHero = "1100171253790285904";
            } else if (
              dHero == "rb" ||
              dHero == "rust" ||
              dHero == "bolt" ||
              dHero == "rust bolt" ||
              dHero == "rusty" ||
              dHero == "rustbolt"
            ) {
              dHero = "1100171459785150585";
            } else if (
              dHero == "bc" ||
              dHero == "ct" ||
              dHero == "beta" ||
              dHero == "carrot" ||
              dHero == "betacarrotina" ||
              dHero == "betacarrot" ||
              dHero == "carrotina" ||
              dHero == "tron" ||
              dHero == "citron" ||
              dHero == "beta carrotina" ||
              dHero == "beta-carrotina"
            ) {
              dHero = "1100171558263193700";
            } else if (
              dHero == "cz" ||
              dHero == "chomp" ||
              dHero == "zilla" ||
              dHero == "chompzilla"
            ) {
              dHero = "1100171601045106819";
            } else if (
              dHero == "sf" ||
              dHero == "solar" ||
              dHero == "flare" ||
              dHero == "solarflare" ||
              dHero == "solar flare"
            ) {
              dHero = "1100171646557491220";
            } else if (
              dHero == "wall" ||
              dHero == "knight" ||
              dHero == "wallknight" ||
              dHero == "wall knight" ||
              dHero == "wk" ||
              dHero == "wall-knight"
            ) {
              dHero = "1100171712391295006";
            } else if (
              dHero == "sp" ||
              dHero == "dow" ||
              dHero == "spudow" ||
              dHero == "spud"
            ) {
              dHero = "1100171758256013412";
            } else if (
              dHero == "gk" ||
              dHero == "grass" ||
              dHero == "knuckles" ||
              dHero == "grass knuckles" ||
              dHero == "grassknuckles"
            ) {
              dHero = "1100171819148906628";
            } else if (dHero == "ro" || dHero == "rose") {
              dHero = "1100171855316406343";
            } else if (
              dHero == "nc" ||
              dHero == "cap" ||
              dHero == "nightcap" ||
              dHero == "night" ||
              dHero == "night cap"
            ) {
              dHero = "1100171997167747172";
            } else if (
              dHero == "cc" ||
              dHero == "captain" ||
              dHero == "combustible" ||
              dHero == "captain combustible" ||
              dHero == "captaincombustible"
            ) {
              dHero = "1100172143603482786";
            } else if (
              dHero == "gs" ||
              dHero == "green" ||
              dHero == "shadow" ||
              dHero == "green shadow" ||
              dHero == "greenshadow" || dHero == "penelopea" || dHero == "green-shadow"
            ) {
              dHero = "1100172254983241820";
            }
            else{
              await interaction.followUp({content: "Please enter a valid hero name", flags: MessageFlags.Ephemeral});
              console.log(dHero);
            }
            // Create a new forum post
            const tester = await forum.threads.create({
              name: dName,
              message: {
                embeds: [dSuggestion],
              },
              reason: "New Deck Suggestion",
              appliedTags: [dHero],
            });

            tester.messages.react(tester.id, "<:upvote:1081953853903220876>");
            tester.messages.react(tester.id, "<:downvote:1081953860534403102>");
            await interaction.followUp({
              content:
                "Your suggestion has been sent!, Please joined the discord linked below to defend and check in on your suggestion",
              components: [discord],
             flags: MessageFlags.Ephemeral,
            });
          } catch (err) {
            await interaction.followUp({
              content:
                "Oops, something went wrong.\nUnable to send suggestion.\n Please contact tbone for help! (PS: Please provide image of what was typed in the fourm)",
             flags: MessageFlags.Ephemeral,
            });
            console.log(err);
          }
        } else {
          await interaction.followUp({
            content:
              "Oops, something went wrong.\nUnable to send suggestion \n incorrect image link please contact tbone for help! \n (PS: the correct link should contain .png, .jpg, .jpeg, or .webp)",
           flags: MessageFlags.Ephemeral,
          });
        }
      }
      if (interaction.customId === "dUps") {
        await interaction.deferUpdate();

        const uName = interaction.fields.getTextInputValue("upName");
        const uHero = interaction.fields.getTextInputValue("upHero");
        const uDesc = interaction.fields.getTextInputValue("upDesc");
        const uLink = interaction.fields.getTextInputValue("upLink");
        const uCreds = interaction.fields.getTextInputValue("upCredits");
        let dHero = uHero.toLowerCase();
        if (
          uLink.includes(".png") ||
          uLink.includes(".jpg") ||
          uLink.includes(".webp") ||
          uLink.includes(".jpeg")
        ) {
          try {
            const uSuggestion = new EmbedBuilder()
              .setTitle(uName)
              .setDescription(uDesc)
              .setImage(uLink)
              .setFooter({
                text: `Created By ${uCreds} & Suggested by ${interaction.user.tag}`,
              });
            const forum = interaction.client.channels.cache.get(
              "1100160031128830104"
            );
            console.log(forum.availableTags);
            if (
              dHero == "nt" ||
              dHero == "neptuna" ||
              dHero == "tuna" ||
              dHero == "np" ||
              dHero == "nept"
            ) {
              dHero = "1100170647050649620";
            } else if (
              dHero == "bf" ||
              dHero == "brain freeze" ||
              dHero == "freeze" ||
              dHero == "bfreeze" ||
              dHero == "brainfreeze"
            ) {
              dHero = "1100170721994477668";
            } else if (
              dHero == "if" ||
              dHero == "impfinity" ||
              dHero == "imp" ||
              dHero == "infinity" ||
              dHero == "impf" ||
              dHero == "impfinty"
            ) {
              dHero = "1100170791594762260";
            } else if (
              dHero == "sb" ||
              dHero == "super brains" ||
              dHero == "super" ||
              dHero == "sbrains" ||
              dHero == "superb" ||
              dHero == "superbrain" ||
              dHero == "superbrainz" ||
              dHero == "super brainz" ||
              dHero == "sbrainz" ||
              dHero == "super" ||
              dHero == "brainz" ||
              dHero == "hg" ||
              dHero == "huge" ||
              dHero == "huge giganticus" ||
              dHero == "hugegiganticus" ||
              dHero == "giganticus" ||
              dHero == "huge-giganticus"
            ) {
              dHero = "1100170925208502282";
            } else if (
              dHero == "zmech" ||
              dHero == "zm" ||
              dHero == "z-mech" ||
              dHero == "mech"
            ) {
              dHero = "1100170981013729410";
            } else if (
              dHero == "eb" ||
              dHero == "electric boogaloo" ||
              dHero == "electric" ||
              dHero == "boogaloo" ||
              dHero == "boog" ||
              dHero == "electricboogaloo"
            ) {
              dHero = "1100171042380578857";
            } else if (
              dHero == "pb" ||
              dHero == "professor" ||
              dHero == "brainstorm" ||
              dHero == "professor brainstorm" ||
              dHero == "professorbrainstorm"
            ) {
              dHero = "1100171115504078901";
            } else if (
              dHero == "sm" ||
              dHero == "tsm" ||
              dHero == "smash" ||
              dHero == "the smash" ||
              dHero == "thesmash"
            ) {
              dHero = "1100171177529446492";
            } else if (
              dHero == "im" ||
              dHero == "immort" ||
              dHero == "ticia" ||
              dHero == "immorticia" ||
              dHero == "iticia"
            ) {
              dHero = "1100171253790285904";
            } else if (
              dHero == "rb" ||
              dHero == "rust" ||
              dHero == "bolt" ||
              dHero == "rust bolt" ||
              dHero == "rusty" ||
              dHero == "rustbolt"
            ) {
              dHero = "1100171459785150585";
            } else if (
              dHero == "bc" ||
              dHero == "ct" ||
              dHero == "beta" ||
              dHero == "carrot" ||
              dHero == "betacarrotina" ||
              dHero == "betacarrot" ||
              dHero == "carrotina" ||
              dHero == "tron" ||
              dHero == "citron" ||
              dHero == "beta carrotina" ||
              dHero == "beta-carrotina"
            ) {
              dHero = "1100171558263193700";
            } else if (
              dHero == "cz" ||
              dHero == "chomp" ||
              dHero == "zilla" ||
              dHero == "chompzilla"
            ) {
              dHero = "1100171601045106819";
            } else if (
              dHero == "sf" ||
              dHero == "solar" ||
              dHero == "flare" ||
              dHero == "solarflare" ||
              dHero == "solar flare"
            ) {
              dHero = "1100171646557491220";
            } else if (
              dHero == "wall" ||
              dHero == "knight" ||
              dHero == "wallknight" ||
              dHero == "wall knight" ||
              dHero == "wk" ||
              dHero == "wall-knight"
            ) {
              dHero = "1100171712391295006";
            } else if (
              dHero == "sp" ||
              dHero == "dow" ||
              dHero == "spudow" ||
              dHero == "spud"
            ) {
              dHero = "1100171758256013412";
            } else if (
              dHero == "gk" ||
              dHero == "grass" ||
              dHero == "knuckles" ||
              dHero == "grass knuckles" ||
              dHero == "grassknuckles"
            ) {
              dHero = "1100171819148906628";
            } else if (dHero == "ro" || dHero == "rose") {
              dHero = "1100171855316406343";
            } else if (
              dHero == "nc" ||
              dHero == "cap" ||
              dHero == "nightcap" ||
              dHero == "night" || 
              dHero == "night cap"
            ) {
              dHero = "1100171997167747172";
            } else if (
              dHero == "cc" ||
              dHero == "captain" ||
              dHero == "combustible" ||
              dHero == "captain combustible" ||
              dHero == "captaincombustible"
            ) {
              dHero = "1100172143603482786";
            } else if (
              dHero == "gs" ||
              dHero == "green" ||
              dHero == "shadow" ||
              dHero == "green shadow" ||
              dHero == "greenshadow" || dHero == "penelopea" || dHero == "green-shadow"
            ) {
              dHero = "1100172254983241820";
            }
            else{
              await interaction.followUp({content: "Please enter a valid hero name",flags: MessageFlags.Ephemeral});
              console.log(dHero);
            }
            // Create a new forum post
            const jerry = await forum.threads.create({
              name: `${uName} needs an update`,
              message: {
                embeds: [uSuggestion],
              },
              reason: "New Deck Update",
              appliedTags: [dHero],
            });

            jerry.messages.react(jerry.id, "<:upvote:1081953853903220876>");
            jerry.messages.react(jerry.id, "<:downvote:1081953860534403102>");
            await interaction.followUp({
              content:
                "Your suggestion has been sent!, Please joined the discord linked below to defend and check in on your suggestion",
              components: [discord],
             flags: MessageFlags.Ephemeral,
            });
          } catch (err) {
            await interaction.followUp({
              content:
                "Oops, something went wrong.\nUnable to send suggestion.\n Please contact tbone for help! (PS: Please provide image of what was typed in the fourm)",
             flags: MessageFlags.Ephemeral,
            });
            console.log(err);
          }
        } else {
          await interaction.followUp({
            content:
              "Oops, something went wrong.\nUnable to send suggestion \n incorrect image link please contact tbone for help! \n (PS: the correct link should contain .png, .jpg, .jpeg, or .webp)",
           flags: MessageFlags.Ephemeral,
          });
        }
      }
      if (interaction.customId === "bug-report-modal") {
        await interaction.deferUpdate();

        const input = interaction.fields.getTextInputValue("bug-report-input");

        const owner = await interaction.client.users.fetch(
          "625172218120372225"
        );

        const embed = new EmbedBuilder()
          .setTitle("Bug Report")
          .setColor("Random")
          .setAuthor({
            name: interaction.user.tag,
            iconURL: interaction.user.avatarURL({
              dynamic: true,
            }),
          })
          .setDescription(input);

        try {
          await owner.send({ embeds: [embed] });
        } catch (e) {
          await interaction.followUp({
            content: "Oops, something went wrong.\nUnable to send bug report",
           flags: MessageFlags.Ephemeral,
          });
        }

        await interaction.followUp({
          content: "Successfully sent the report!",
         flags: MessageFlags.Ephemeral,
        });
      }
      //Deck Search
      if (interaction.customId === "Deck-search-modal") {
        await interaction.deferUpdate();
        const reason =
          interaction.fields.getTextInputValue("deck-search-input");
        let Ccommands = Array.from(client.commands.values());
        let commands = Ccommands.filter((command) => {
          if (
            command.category != "Miscellaneous" &&
            command.category != "DeckBuilders" &&
            command.category != "Zombie Cards" &&
            command.category != "Tricks Phase" &&
            command.category != "Plant Cards" &&
            !command.name.includes("help")
          ) {
            return command.name;
          }
        });
        let decks = [];
        for (let i = 0; i < commands.length; i++) {
          let command = commands[i];
          decks.push(command.name);
        }
        decks.sort();
        const searcher = new FuzzySearch(decks, {
          caseSensitive: false,
        });
        const result = searcher.search(reason);
        try {
          let toBuildString = "";
          for (let i = 0; i < result.length; i++) {
            let command = result[i];
            toBuildString += `\n<@1043528908148052089> **${command}**`;
          }
          let embed = new EmbedBuilder()
            .setTitle(`you searched for ${reason} decks`)
            .setDescription(
              `Your search for ${reason} decks came back with ${toBuildString}
              Note: There are ${result.length} total results for ${reason} in Tbot`
            )
            .setColor("Random");
          if (!toBuildString) {
            embed.setDescription(
              `Your search for ${reason} decks came back blank`
            );
          }
          return interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        } catch (err) {
          const errEmbed = new EmbedBuilder()
            .setTitle("❌ | Error")
            .setColor("Red")
            .setDescription(`Too many search results, please be more specific
              Note: There are ${result.length} total results for ${reason} in Tbot`);
          return interaction.followUp({ embeds: [errEmbed],flags: MessageFlags.Ephemeral });
        }
      }
      //Card Search
      if (interaction.customId === "Card-search-modal") {
        await interaction.deferUpdate();
        let Ccommands = Array.from(client.commands.values());
        let commands = Ccommands.filter((command) => {
          if (
            command.category == "Zombie Cards" ||
            command.category == "Tricks Phase" ||
            command.category == "Plant Cards"
          ) {
            return command.name;
          }
        });
        let words = [];
        for (let i = 0; i < commands.length; i++) {
          let command = commands[i];
          words.push(command.name);
        }
        words.sort();
        const searcher = new FuzzySearch(words, {
          caseSensitive: false,
        });
        let reason = await interaction.fields.getTextInputValue(
          "card-search-input"
        );
        const result = searcher.search(reason);
        let toBuildString = "";
        for (let i = 0; i < result.length; i++) {
          let command = result[i];
          //   console.log(commands[i])
          toBuildString += `\n<@1043528908148052089> **${command}**`;
        }
        try {
          let embed = new EmbedBuilder()
            .setTitle(`you searched for ${reason} cards`)
            .setDescription(
              `Your search for ${reason} cards came back with ${toBuildString}`
            )
            .setColor("Random");

          if (!toBuildString) {
            embed.setDescription(
              `Your search for ${reason} cards came back blank`
            );
          }
          return interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        } catch (e) {
          const errEmbed = new EmbedBuilder()
            .setTitle("❌ | Error")
            .setColor("Red")
            .setDescription(`Too many search results, please be more specific`);
          return interaction.followUp({ embeds: [errEmbed],flags: MessageFlags.Ephemeral });
        }
      }
      //8 Ball
      if (interaction.customId === "8ball-modal") {
        await interaction.deferUpdate();
        const ball = [
          "It is certain",
          "Without a doubt",
          "You may rely on it",
          "Yes definitely",
          "It is decidedly so",
          "As I see it, yes",
          "Most likely",
          "Yes",
          "Outlook good",
          "Signs point to yes",
          "Better not tell you now",
          "Ask again later",
          "Cannot predict now",
          "Don't count on it",
          "Outlook not so good",
          "My sources say no",
          "Very doubtful",
          "no",
          "maybe",
          "never",
        ];
        let reason = await interaction.fields.getTextInputValue("8ball-input");
        let embed = new EmbedBuilder()
          .setTitle(`:8ball: ${reason}`)
          .setDescription(
            `:8ball: says  ${ball[Math.floor(Math.random() * ball.length)]}`
          )
          .setColor("Random");

        return interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
      }
      //Hangman
      if (interaction.customId.startsWith("hangman-")) {
        await interaction.deferUpdate();

        const game = hangmanGuesses.get(interaction.message.id);

        if (!game || game.guesses === 7) {
          return interaction.followUp({
            content: "Sorry, this game is no longer active.",
           flags: MessageFlags.Ephemeral,
          });
        }

        const type = interaction.customId.split("-").at(-1);
        const guess = interaction.fields
          .getTextInputValue(`hangman-${type}-input-field`)
          .toLowerCase();

        if (guess.length === 1 && !guess.match(/[a-z]/i)) {
          return interaction.followUp({
            content: "You can only guess a letter.",
           flags: MessageFlags.Ephemeral,
          });
        }

        if (game.letters.includes(guess)) {
          return interaction.followUp({
            content: "This letter has already been guessed.",
           flags: MessageFlags.Ephemeral,
          });
        }

        if (guess.length > 1 && guess === game.word) {
          const embed = new EmbedBuilder()
            .setTitle("Hangman - Game Over")
            .setColor("Green")
            .setDescription(
              `<@${interaction.user.id}> won!\nThe correct word was: \`${game.word}\``
            );

          interaction.message.edit({
            embeds: [embed],
            components: [],
          });

          return interaction.followUp({
            content: "You win!",
           flags: MessageFlags.Ephemeral,
          });
        }

        if (guess.length > 1) {
          const { embeds } = interaction.message;

          const fields = embeds[0].fields.map(({ name }) => ({
            name,
            value:
              name === "Guessed Words"
                ? [...game.words, guess].map((v) => `\`${v}\``).join(", ")
                : game.letters.length
                ? game.letters
                    .map((v) => `\`${v}\``)
                    .sort()
                    .join(", ")
                : "`N/A`",
          }));

          const embed = EmbedBuilder.from(embeds[0])
            .setDescription(
              `\`\`\`${ascii[game.guesses + 1]}${game.text}\n\`\`\``
            )
            .setFields(fields);

          await interaction.message.edit({ embeds: [embed] });
        }

        if (guess.length === 1) {
          const { embeds } = interaction.message;

          const fields = embeds[0].fields.map(({ name }) => ({
            name,
            value:
              name === "Guessed Letters"
                ? [...game.letters, guess]
                    .map((v) => `\`${v}\``)
                    .sort()
                    .join(", ")
                : game.words.length
                ? game.words.map((v) => `\`${v}\``).join(", ")
                : "`N/A`",
          }));

          game.unguessed.delete(guess);

          if (!game.unguessed.size) {
            const embed = new EmbedBuilder()
              .setTitle("Hangman - Game Over")
              .setColor("Green")
              .setDescription(
                `<@${interaction.user.id}> won!\nThe correct word was: \`${game.word}\``
              );

            interaction.message.edit({
              embeds: [embed],
              components: [],
            });

            return interaction.followUp({
              content: "You win!",
             flags: MessageFlags.Ephemeral,
            });
          }

          const art = game.word.includes(guess)
            ? ascii[game.guesses]
            : ascii[game.guesses + 1];
          const text = [...game.word]
            .map((c) => (game.unguessed.has(c) ? "_" : c))
            .join(" ");

          const embed = EmbedBuilder.from(embeds[0])
            .setDescription(`\`\`\`${art}${text}\n\`\`\``)
            .setFields(fields);

          await interaction.message.edit({ embeds: [embed] });
        }

        if (game.guesses === 6) {
          const embed = new EmbedBuilder()
            .setTitle("Hangman - Game Over")
            .setColor("Red")
            .setDescription(
              `Nobody won this game! \n The correct word was: \`${game.word}\``
            );
          return interaction.message.edit({
            embeds: [embed],
            components: [],
          });
        }

        hangmanGuesses.set(interaction.message.id, {
          word: game.word,
          unguessed: game.unguessed,
          guesses:
            guess.length === 1
              ? game.word.includes(guess)
                ? game.guesses
                : game.guesses + 1
              : game.guesses + 1,

          letters:
            guess.length === 1 ? [...game.letters, guess].sort() : game.letters,
          words: guess.length === 1 ? game.words : [...game.words, guess],
          text:
            guess.length === 1
              ? [...game.word]
                  .map((c) => (game.unguessed.has(c) ? "_" : c))
                  .join(" ")
              : game.text,
        });
      }
      //random deck
      if (interaction.customId === "random-decks-modal") {
        await interaction.deferUpdate();
        const heroinput =
          interaction.fields.getTextInputValue("random-decks-input");
        const hero = heroinput.toLowerCase();
        if (hero == "na") {
          let [result] = await db.query(`select * from bcdecks bc
            inner join bfdecks bf
            on (bc.deckinfo = bf.deckinfo)
            inner join ccdecks cc 
            on (bc.deckinfo = cc.deckinfo)
            inner join ctdecks ct 
            on (bc.deckinfo = ct.deckinfo)
            inner join czdecks cz
            on (bc.deckinfo = cz.deckinfo)
            inner join ebdecks eb 
            on (bc.deckinfo = eb.deckinfo)
            inner join gkdecks gk 
            on (bc.deckinfo = gk.deckinfo)
            inner join gsdecks gs 
            on (bc.deckinfo = gs.deckinfo)
            inner join hgdecks hg
            on (bc.deckinfo = hg.deckinfo)
            inner join ifdecks fi 
            on (bc.deckinfo = fi.deckinfo)
            inner join imdecks im 
            on (bc.deckinfo = im.deckinfo)
            inner join ncdecks nc 
            on (bc.deckinfo = nc.deckinfo)
            inner join ntdecks nt 
            on (bc.deckinfo = nt.deckinfo)
            inner join pbdecks pb 
            on (bc.deckinfo = pb.deckinfo)
            inner join rbdecks rb 
            on (bc.deckinfo = rb.deckinfo)
            inner join rodecks ro 
            on (bc.deckinfo = ro.deckinfo)
            inner join sbdecks sb 
            on (bc.deckinfo = sb.deckinfo)
            inner join sfdecks sf 
            on (bc.deckinfo = sf.deckinfo)
            inner join smdecks sm 
            on (bc.deckinfo = sm.deckinfo)
            inner join spdecks sp 
            on (bc.deckinfo = sp.deckinfo)
            inner join wkdecks wk 
            on (bc.deckinfo = wk.deckinfo)
            inner join zmdecks zm
            on (bc.deckinfo = zm.deckinfo)
            where bc.deckinfo = "image link:"`);
          const deck = [
            //BC Tbot DB
            `${result[0].carroot}`,
            `${result[0].shamcontrol}`,
      
            //CT TBOT DB
            `${result[0].going3nuts}`,
    
            `${result[0].startron}`,
            `${result[0].wateron}`,
            //CC TBOT DB
            `${result[0].lcbd}`,
            `${result[0].mspotk}`,
            `${result[0].plantmop}`,
            `${result[0].yrm}`,
            `${result[0].apotk}`, 
            `${result[0].lasersnap}`,
            `${result[0].midred}`,
            //Mopribus
            `${result[0].mopribus}`,
            //GK TBOT DB
            `${result[0].dinogloves}`,
            `${result[0].healthotk}`, 
            `${result[0].pawntrickstab}`,
            `${result[0].wr100}`,
            `${result[0].abeans}`,
            `${result[0].pbeans}`,
            `${result[0].savagemayflower}`,
            `${result[0].sovietonion}`,
            
            //NC TBOT DB
            `${result[0].cyburn}`,
            `${result[0].toyotacontrolla}`, 
            `${result[0].translattail}`,
            // RO TBOT DB
           
            `${result[0].freezeheal}`,
            `${result[0].frymidrose}`,
            `${result[0].hmr}`,
            //SF TBOT DB
        
            `${result[0].ejection}`,
            `${result[0].funnyflare}`,
            `${result[0].healburn}`,
            `${result[0].healmidflare}`,
           
            `${result[0].physcosolstice}`,
            `${result[0].ramp2seedling}`,
            //SP TBOT DB
            `${result[0].popsicle}`,
            `${result[0].radiotherapy}`,
           `${result[0].nuttin}`,
            //WK TBOT DB
          
            `${result[0].cancerknight}`,
            `${result[0].chemotherapy}`,
            `${result[0].highlander}`,   
            `${result[0].shitknight}`,
            //Zombies

            //BF TBOT DB
            `${result[0].bfmidgargs}`, 
            `${result[0].bfplankcontrol}`,
            `${result[0].garolithtech}`,
            `${result[0].himps}`,
            `${result[0].lockin}`,
            `${result[0].midpets}`,
            `${result[0].petmop}`,
            `${result[0].racism}`,
            `${result[0].raiserpackage}`,
            `${result[0].slavery}`,
            `${result[0].watersports}`,
            //EB TBOT DB
            
            `${result[0].gargstar22}`,
            `${result[0].huntgargs}`,
          
            
            `${result[0].noplayingallowed}`,
        
            `${result[0].seacret}`,
      
            //SB TBOT DB
            `${result[0].telimpssb}`,
            //HG TBOT DB
            `${result[0].blobfishwrappers}`,
            `${result[0].conjureleap}`,
            `${result[0].cyroboy}`,
            `${result[0].frozentelimps}`,
            `${result[0].gravestache}`,
            `${result[0].gravepiratestache}`,
            `${result[0].otkswabbie}`, 
            `${result[0].telimps}`,
            `${result[0].ykm}`,
            //IF TBOT DB
           `${result[0].nohokaistars}`,
            `${result[0].spacestars}`,
            `${result[0].splimps}`,
            //IM TBOT DB
            `${result[0].savage22}`,
            `${result[0].bastet}`,
            `${result[0].otktrickster}`,
            `${result[0].rampticia}`,
            `${result[0].stacheticia}`,
            `${result[0].ycm}`,
            //NT TBOT DB
            `${result[0].agraves}`,
            `${result[0].antiagor}`,
            `${result[0].antiagoragor}`,
            `${result[0].floss}`,
            `${result[0].icebox}`,
            `${result[0].gommorrah}`, 
            `${result[0].schoolyard}`,
            `${result[0].wimps}`,
            //PB TBOT DB
            `${result[0].bonusducks}`,
            `${result[0].congabait}`,
            `${result[0].hibird}`,
            `${result[0].pbfeast}`,
            `${result[0].professorpackage}`,
            `${result[0].trickstache}`,
            `${result[0].valkster}`,
            `${result[0].youngeggmartin}`,

            //RB TBOT DB
            
            `${result[0].boltbolt}`,
          
            `${result[0].bustbolt}`,
            `${result[0].igmablobchum}`,
            
            `${result[0].marxbolt}`,
            `${result[0].pharaohster}`,
            `${result[0].poggerrazzi}`,
            `${result[0].sunbandits}`,
            `${result[0].terrifytrickazzi}`,
  
            //SM TBOT DB
            `${result[0].homophobia}`,
            `${result[0].horts}`,
            `${result[0].pablosyeezys}`,
            `${result[0].whalepharaoh}`,

            //ZM TBOT DB

            `${result[0].binaryflagwar}`,
           `${result[0].brady}`,
            `${result[0].dozzamech}`,
            `${result[0].feastmech}`,
           
            `${result[0].gargburn}`,
            `${result[0].trickmech}`,
            `${result[0].zmoss}`,
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Deck")
            .setDescription(`Here is your random Deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero === "bc" ||
          hero === "betacarrotina" ||
          hero === "beta" ||
          hero === "carrotina" ||
          hero === "carrot" ||
          hero === "beta carrotina"
        ) {
          let [result] = await db.query(
            "SELECT * FROM bcdecks where deckinfo ='image link:'"
          );
          const deck = [
            //BC Tbot DB
            `${result[0].carroot}`,
            `${result[0].shamcontrol}`,
         
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Beta Carrotina Deck")
            .setDescription(`Here is your random Beta Carrotina deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (hero === "citron" || hero === "ct" || hero === "tron") {
          let [result] = await db.query(
            "SELECT * FROM ctdecks WHERE deckinfo = 'image link:'"
          );
          const deck = [
            `${result[0].going3nuts}`,
            `${result[0].startron}`,
            `${result[0].wateron}`,
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Citron(CT) Deck")
            .setDescription(`Here is your random Citron(CT) Deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "captain combustible" ||
          hero == "cc" ||
          hero == "captain" ||
          hero == "combustible" ||
          hero == "captaincombustible"
        ) {
          let [result] = await db.query(
            `SELECT * from ccdecks where deckinfo = 'image link:'`
          );
          const deck = [
          `${result[0].lcbd}`,
            `${result[0].mspotk}`,
            `${result[0].plantmop}`,
            `${result[0].yrm}`
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Deck for Captain Combustible(CC)")
            .setDescription(`Here is your random Captain Combustible(CC) Deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero === "cz" ||
          hero === "chompzilla" ||
          hero === "chomp" ||
          hero === "zilla" ||
          hero === "chompzilla"
        ) {
          let [result] = await db.query(`SELECT * from czdecks
                    where deckinfo = 'image link:'`);
          const deck = [
            `${result[0].apotk}`, 
            `${result[0].lasersnap}`,
            `${result[0].midred}`,
            //Mopribus
            `${result[0].mopribus}`,
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Chompzilla Deck")
            .setDescription(`Here is your random Chompzilla deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero === "gk" ||
          hero === "grass" ||
          hero === "knuckles" ||
          hero === "grassknuckles" ||
          hero === "grass knuckles"
        ) {
          let [result] = await db.query(
            `SELECT * FROM gkdecks where deckinfo = 'image link:'`
          );
          const gk = [
            //GK TBOT DB
            `${result[0].dinogloves}`,
            `${result[0].healthotk}`, 
            `${result[0].pawntrickstab}`,
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Grass Knuckles Deck")
            .setDescription(`Here is your Random Grass Knuckles Deck`)
            .setColor("Random")
            .setImage(gk[Math.floor(Math.random() * gk.length)]);
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "gs" ||
          hero == "green shadow" ||
          hero == "green" ||
          hero == "shadow"
        ) {
          let [result] = await db.query(
            `SELECT * from gsdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //GS TBOT DB
           `${result[0].wr100}`,
            `${result[0].abeans}`,
            `${result[0].pbeans}`,
            `${result[0].savagemayflower}`,
            `${result[0].sovietonion}`,
            
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Green Shadow Deck")
            .setDescription(`Here is your Random Green Shadow(GS) Deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "nightcap" ||
          hero == "nc" ||
          hero == "cap" ||
          hero == "night" || 
          hero== "night cap"
        ) {
          let [result] = await db.query(
            `SELECT * from ncdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //NC TBOT DB
            
            `${result[0].cyburn}`,
            `${result[0].toyotacontrolla}`, 
            `${result[0].translattail}`,
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random NightCap(NC) Deck")
            .setDescription(`Here is your random NightCap(NC) Deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (hero == "rose" || hero == "ro") {
          let [result] = await db.query(
            `SELECT * from rodecks where deckinfo = 'image link:'`
          );
          const deck = [
            // RO TBOT DB
           
            `${result[0].freezeheal}`,
            `${result[0].frymidrose}`,
            `${result[0].hmr}`,
           
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Rose(RO) Deck")
            .setDescription(`Here is your Random Rose(RO) Deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "solar flare" ||
          hero == "sf" ||
          hero == "solar" ||
          hero == "flare" ||
          hero == "solarflare"
        ) {
          let [result] = await db.query(
            `SELECT * from sfdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //SF TBOT DB
        
            `${result[0].ejection}`,
            `${result[0].funnyflare}`,
            `${result[0].healburn}`,
            `${result[0].healmidflare}`,
           
            `${result[0].physcosolstice}`,
            `${result[0].ramp2seedling}`,
          
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Solar Flare Deck")
            .setDescription(`Here is your Random Solar Flare(SF) Deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "spudow" ||
          hero == "sp" ||
          hero == "spud" ||
          hero == "dow"
        ) {
          let [result] = await db.query(`select * from spdecks 
                    where deckinfo = 'image link:'`);
          const deck = [
            //SP TBOT DB
            `${result[0].popsicle}`,
            `${result[0].radiotherapy}`,
           `${result[0].nuttin}`,
           
          
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Spudow(SP) Deck")
            .setDescription(`Here is your Random Spudow(SP) Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "wall-knight" ||
          hero == "wk" ||
          hero == "wall" ||
          hero == "knight" ||
          hero == "wallknight" ||
          hero == "wall knight"
        ) {
          let [result] = await db.query(`select * from wkdecks 
                    where deckinfo = 'image link:'`);
          const deck = [
            //WK TBOT DB
          
            `${result[0].cancerknight}`,
            `${result[0].chemotherapy}`,
            `${result[0].highlander}`,   
            `${result[0].shitknight}`,
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Wall Knight(WK) Deck")
            .setDescription(`Here is your Random Wall Knight Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "bf" ||
          hero == "brain freeze" ||
          hero == "brain" ||
          hero == "freeze" ||
          hero == "brainfreeze"
        ) {
          let [result] = await db.query(
            `SELECT * FROM bfdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //BF TBOT DB
            
            `${result[0].bfmidgargs}`, 
            `${result[0].bfplankcontrol}`,
            `${result[0].garolithtech}`,
            `${result[0].himps}`,
            `${result[0].lockin}`,
            `${result[0].midpets}`,
            `${result[0].petmop}`,
            `${result[0].racism}`,
            `${result[0].raiserpackage}`,
            `${result[0].slavery}`,
            `${result[0].watersports}`,
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Brain Freeze(BF) Deck")
            .setDescription(`Here is your random Brain Freeze(BF) Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "eb" ||
          hero == "electric" ||
          hero == "boogaloo" ||
          hero == "electric boogaloo"
        ) {
          let [result] = await db.query(
            `SELECT * FROM ebdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //EB TBOT DB
            
            `${result[0].gargstar22}`,
            `${result[0].huntgargs}`,
          
            
            `${result[0].noplayingallowed}`,
        
            `${result[0].seacret}`,
      
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Electric Boogaloo(EB) Deck")
            .setDescription(`Here is your random Electric Boogaloo(EB) Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "hg" ||
          hero == "huge" ||
          hero == "huge giganticus" ||
          hero == "giganticus" ||
          hero == "huge-giganticus"
        ) {
          let [result] = await db.query(
            `SELECT * FROM hgdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //HG TBOT DB
            `${result[0].blobfishwrappers}`,
            `${result[0].conjureleap}`,
            `${result[0].cyroboy}`,
            `${result[0].frozentelimps}`,
            `${result[0].gravestache}`,
            `${result[0].gravepiratestache}`,
            `${result[0].otkswabbie}`, 
            `${result[0].telimps}`,
            `${result[0].ykm}`,
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Huge-Gigantacus(HG) Deck")
            .setDescription(`Here is your random Huge-Gigantacus(HG) Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "sb" ||
          heroinput == "super" ||
          heroinput == "brainz" ||
          heroinput == "super brainz" ||
          heroinput == "superbrainz"
        ) {
          let [result] = await db.query(
            `SELECT * FROM sbdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //SB TBOT DB
      
            `${result[0].telimpssb}`,
        
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Super Brains(SB) Deck")
            .setDescription(`Here is your random Super Brains(SB) Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "if" ||
          hero == "impfinity" ||
          hero == "imp" ||
          hero == "finity"
        ) {
          let [result] = await db.query(
            `SELECT * FROM ifdecks WHERE deckinfo = 'image link:'`
          );
          const deck = [
            //IF TBOT DB
           `${result[0].nohokaistars}`,
            `${result[0].spacestars}`,
            `${result[0].splimps}`,         
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Impfinity(IF) Deck")
            .setDescription(`Here is your random Impfinity(IF) Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "immorticia" ||
          hero == "immort" ||
          hero == "immor" ||
          hero == "ticia" ||
          hero == "im"
        ) {
          let [result] = await db.query(
            `SELECT * FROM imdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //IM TBOT DB
            `${result[0].savage22}`,
            `${result[0].bastet}`,
            `${result[0].otktrickster}`,
            `${result[0].rampticia}`,
            `${result[0].stacheticia}`,
            `${result[0].ycm}`,
  
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Immorticia(IM) Deck")
            .setDescription(`Here is your random Immorticia(IM) Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "nt" ||
          hero == "neptuna" ||
          hero == "nept" ||
          hero == "tuna"
        ) {
          let [result] = await db.query(
            `SELECT * FROM ntdecks WHERE deckinfo = 'image link:'`
          );
          const deck = [
            //NT TBOT DB
           `${result[0].agraves}`,
            `${result[0].antiagor}`,
            `${result[0].antiagoragor}`,
            `${result[0].floss}`,
            `${result[0].icebox}`,
            `${result[0].gommorrah}`, 
            `${result[0].schoolyard}`,
            `${result[0].wimps}`,
           
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Neptuna(NT) Deck")
            .setDescription(`Here is your random Neptuna(NT) Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "pb" ||
          hero == "professor" ||
          hero == "brainstorm" ||
          hero == "professor brainstorm" ||
          hero == "professorbrainstorm"
        ) {
          let [result] = await db.query(
            `select * from pbdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //PB TBOT DB
           `${result[0].bonusducks}`,
            `${result[0].congabait}`,
            `${result[0].hibird}`,
            `${result[0].pbfeast}`,
            `${result[0].professorpackage}`,
            `${result[0].trickstache}`,
            `${result[0].valkster}`,
            `${result[0].youngeggmartin}`,
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Professor Brainstorm(PB) Deck")
            .setDescription(
              `Here is your random Professor Brainstorm(PB) Deck `
            )
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "rb" ||
          hero == "rustbolt" ||
          hero == "rust" ||
          hero == "bolt" ||
          hero == "rusty" ||
          hero == "rust bolt"
        ) {
          let [result] = await db.query(
            `SELECT * FROM rbdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //RB TBOT DB
            
           `${result[0].boltbolt}`,
          
            `${result[0].bustbolt}`,
            `${result[0].igmablobchum}`,
            
            `${result[0].marxbolt}`,
            `${result[0].pharaohster}`,
            `${result[0].poggerrazzi}`,
            `${result[0].sunbandits}`,
            `${result[0].terrifytrickazzi}`,
            
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Rustbolt(RB) Deck")
            .setDescription(`Here is your random Rustbolt(RB) Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "sm" ||
          hero == "smash" ||
          hero == "smash" ||
          hero == "the smash" ||
          hero == "thesmash"
        ) {
          let [result] = await db.query(
            `SELECT * FROM smdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //SM TBOT DB
            `${result[0].homophobia}`,
            `${result[0].horts}`,
            `${result[0].pablosyeezys}`,
            `${result[0].whalepharaoh}`,
           
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Smash(SM) Deck")
            .setDescription(`Here is your random Smash(SM) Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          hero == "zm" ||
          hero == "zmech" ||
          hero == "mech" ||
          hero == "z-mech"
        ) {
          let [result] = await db.query(
            `select * from zmdecks where deckinfo = 'image link:'`
          );
          const deck = [
            //ZM TBOT DB
            
            `${result[0].binaryflagwar}`,
           `${result[0].brady}`,
            `${result[0].dozzamech}`,
            `${result[0].feastmech}`,
           
            `${result[0].gargburn}`,
            `${result[0].trickmech}`,
            `${result[0].zmoss}`,
          
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Zmech(ZM) Deck")
            .setDescription(`Here is your Random Zmech Deck `)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (hero == "plants") {
          let [result] = await db.query(`select * from bcdecks bc
                    inner join ccdecks cc 
                    on (bc.deckinfo = cc.deckinfo)
                    inner join ctdecks ct 
                    on (bc.deckinfo = ct.deckinfo)
                    inner join czdecks cz
                    on (bc.deckinfo = cz.deckinfo)
                    inner join gkdecks gk 
                    on (bc.deckinfo = gk.deckinfo)
                    inner join gsdecks gs 
                    on (bc.deckinfo = gs.deckinfo)
                    inner join ncdecks nc 
                    on (bc.deckinfo = nc.deckinfo)
                    inner join rodecks ro 
                    on (bc.deckinfo = ro.deckinfo)
                    inner join sfdecks sf 
                    on (bc.deckinfo = sf.deckinfo)
                    inner join spdecks sp 
                    on (bc.deckinfo = sp.deckinfo)
                    inner join wkdecks wk 
                    on (bc.deckinfo = wk.deckinfo)
                    where bc.deckinfo = "image link:"`);
          const deck = [
              //BC Tbot DB
              `${result[0].carroot}`,
              `${result[0].shamcontrol}`,
        
              //CT TBOT DB
              `${result[0].going3nuts}`,
              `${result[0].startron}`,
              `${result[0].wateron}`,
              //CC TBOT DB
              `${result[0].lcbd}`,
              `${result[0].mspotk}`,
              `${result[0].plantmop}`,
              `${result[0].yrm}`,
              `${result[0].apotk}`, 
              `${result[0].lasersnap}`,
              `${result[0].midred}`,
              //Mopribus
              `${result[0].mopribus}`,
              //GK TBOT DB
              `${result[0].dinogloves}`,
              `${result[0].healthotk}`, 
              `${result[0].pawntrickstab}`,
              `${result[0].wr100}`,
              `${result[0].abeans}`,
              `${result[0].pbeans}`,
              `${result[0].savagemayflower}`,
              `${result[0].sovietonion}`,
              
              //NC TBOT DB
              
              `${result[0].cyburn}`,
              `${result[0].toyotacontrolla}`, 
              `${result[0].translattail}`,
              // RO TBOT DB
             
              `${result[0].freezeheal}`,
              `${result[0].frymidrose}`,
              `${result[0].hmr}`,
              //SF TBOT DB
          
              `${result[0].ejection}`,
              `${result[0].funnyflare}`,
              `${result[0].healburn}`,
              `${result[0].healmidflare}`,
             
              `${result[0].physcosolstice}`,
              `${result[0].ramp2seedling}`,
              //SP TBOT DB
              `${result[0].popsicle}`,
              `${result[0].radiotherapy}`,
             `${result[0].nuttin}`,
              //WK TBOT DB
            
              `${result[0].cancerknight}`,
              `${result[0].chemotherapy}`,
              `${result[0].highlander}`,   
              `${result[0].shitknight}`,
            
          ];
          let embed = new EmbedBuilder()
            .setTitle("Random Plant Deck")
            .setDescription(`Here is your random plant Deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (hero == "zombies") {
          let [result] = await db.query(`select * from bfdecks bf
                    inner join ebdecks eb 
                    on (bf.deckinfo = eb.deckinfo)
                    inner join hgdecks hg
                    on (bf.deckinfo = hg.deckinfo)
                    inner join ifdecks fi 
                    on (bf.deckinfo = fi.deckinfo)
                    inner join imdecks im 
                    on (bf.deckinfo = im.deckinfo)
                    inner join ntdecks nt 
                    on (bf.deckinfo = nt.deckinfo)
                    inner join pbdecks pb 
                    on (bf.deckinfo = pb.deckinfo)
                    inner join rbdecks rb 
                    on (bf.deckinfo = rb.deckinfo)
                    inner join sbdecks sb 
                    on (bf.deckinfo = sb.deckinfo)
                    inner join smdecks sm 
                    on (bf.deckinfo = sm.deckinfo)
                    where bf.deckinfo = "image link:"`);
          const deck = [
            //Zombies

              //BF TBOT DB
              `${result[0].bfmidgargs}`, 
              `${result[0].bfplankcontrol}`,
              `${result[0].garolithtech}`,
              `${result[0].himps}`,
              `${result[0].lockin}`,
              `${result[0].midpets}`,
              `${result[0].petmop}`,
              `${result[0].racism}`,
              `${result[0].raiserpackage}`,
              `${result[0].slavery}`,
              `${result[0].watersports}`,
              //EB TBOT DB
              
              `${result[0].gargstar22}`,
              `${result[0].huntgargs}`,
            
              
              `${result[0].noplayingallowed}`,
          
              `${result[0].seacret}`,
        
              //SB TBOT DB
              `${result[0].telimpssb}`,
              //HG TBOT DB
              `${result[0].blobfishwrappers}`,
              `${result[0].conjureleap}`,
              `${result[0].cyroboy}`,
              `${result[0].frozentelimps}`,
              `${result[0].gravestache}`,
              `${result[0].gravepiratestache}`,
              `${result[0].otkswabbie}`, 
              `${result[0].telimps}`,
              `${result[0].ykm}`,
              //IF TBOT DB
             `${result[0].nohokaistars}`,
              `${result[0].spacestars}`,
              `${result[0].splimps}`,
              //IM TBOT DB
              `${result[0].savage22}`,
              `${result[0].bastet}`,
              `${result[0].otktrickster}`,
              `${result[0].rampticia}`,
              `${result[0].stacheticia}`,
              `${result[0].ycm}`,
              //NT TBOT DB
              `${result[0].agraves}`,
              `${result[0].antiagor}`,
              `${result[0].antiagoragor}`,
              `${result[0].floss}`,
              `${result[0].icebox}`,
              `${result[0].gommorrah}`, 
              `${result[0].schoolyard}`,
              `${result[0].wimps}`,
              //PB TBOT DB
              `${result[0].bonusducks}`,
              `${result[0].congabait}`,
              `${result[0].hibird}`,
              `${result[0].pbfeast}`,
              `${result[0].professorpackage}`,
              `${result[0].trickstache}`,
              `${result[0].valkster}`,
              `${result[0].youngeggmartin}`,
  
              //RB TBOT DB
              
              `${result[0].boltbolt}`,
            
              `${result[0].bustbolt}`,
              `${result[0].igmablobchum}`,
              
              `${result[0].marxbolt}`,
              `${result[0].pharaohster}`,
              `${result[0].poggerrazzi}`,
              `${result[0].sunbandits}`,
              `${result[0].terrifytrickazzi}`,
    
              //SM TBOT DB
              `${result[0].homophobia}`,
              `${result[0].horts}`,
              `${result[0].pablosyeezys}`,
              `${result[0].whalepharaoh}`,
  
              //ZM TBOT DB
              `${result[0].binaryflagwar}`,
             `${result[0].brady}`,
              `${result[0].dozzamech}`,
              `${result[0].feastmech}`,
             
              `${result[0].gargburn}`,
              `${result[0].trickmech}`,
              `${result[0].zmoss}`,
            
          ];

          let embed = new EmbedBuilder()
            .setTitle("Random Zombie Deck")
            .setDescription(`Here is your random Zombie Deck`)
            .setColor("Random")
            .setImage(deck[Math.floor(Math.random() * deck.length)]);

          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
      }
      //wheel modal
      if (interaction.customId === "wheel-modal") {
        await interaction.deferUpdate();
        let hero = await interaction.fields.getTextInputValue("wheel-input");
        let number = await interaction.fields.getTextInputValue("number-input");
        let heroinput = hero.toLowerCase();
        if (number < 1 || number > 40) {
          return interaction.followUp({
            content: "Please input a number between 1-40",
           flags: MessageFlags.Ephemeral,
          });
        }
        if (isNaN(number)) {
          return interaction.followUp({
            content: "please input a number",
           flags: MessageFlags.Ephemeral,
          });
        }
        if (
          heroinput == "betacarrotina" ||
          heroinput == "bc" ||
          heroinput == "beta" ||
          heroinput == "carrotina" ||
          heroinput == "carrot" ||
          heroinput == "beta carrotina"
        ) {
          const wordsArray = [
            //Guardian
            "Small-Nut",
            "Sting Bean",
            "Wall-Nut",
            "Pismashio",
            "Spineapple",
            "Potato Mine",
            "Cactus",
            "Gardening Gloves",
            "Sea-Shroom",
            "Water Chestnut",
            "Pea-Nut",
            "Steel Magnolia",
            "Photosynthesizer",
            "Spikeweed Sector",
            "Plantern",
            "Grape Responsibility",
            "Primal Potato Mine",
            "Grizzly Pear",
            "Grave Buster",
            "Hibernating Beary",
            "Prickly Pear",
            "Smackadamia",
            "Tough Beets",
            "Cosmic Nut",
            "Starch-Lord",
            "Blockbuster",
            "Pumpkin Shell",
            "Jugger-Nut",
            "Mirror-Nut",
            "Guacodile",
            "Doom-Shroom",
            "Galacta-Cactus",
            "Force Field",
            "Gravitree",
            "Three-Nut",
            "Marine Bean",
            "Primal Wall-Nut",
            "Poppin' Poppies",
            "Soul Patch",
            "Wall-Nut Bowling",
            "Body-Gourd",
            "Pecanolith",
            "Tricarrotops",
            "Loco Coco",
            "Forget-Me-Nuts",
            "Garlic",
            "Corn Dog",
            "Hot Date",
            "Health-Nut",
            "Pear Cub",
            "Shamrocket",
            "Red Stinger",
            //Smarty
            "Snowdrop",
            "Weenie Beanie",
            "Snow Pea",
            "Cattail",
            "Smoosh-Shroom",
            "Threepeater",
            "Iceberg Lettuce",
            "Shellery",
            "Rescue Radish",
            "Spring Bean",
            "Vanilla",
            "Carrotillery",
            "Mars Flytrap",
            "Planet of the Grapes",
            "Leaf Blower",
            "Grave Mistake",
            "Pear Pal",
            "Primal Peashooter",
            "Admiral Navy Bean",
            "Lightning Reed",
            "Chilly Pepper",
            "Navy Bean",
            "Jumping Bean",
            "Cosmic Bean",
            "Melon-Pult",
            "Tricorn",
            "Lily Pad",
            "Sow Magic Beans",
            "Bean Counter",
            "Snapdragon",
            "Winter Squash",
            "Laser Cattail",
            "Bog of Enlightenment",
            "Cool Bean",
            "Jelly Bean",
            "Rotobaga",
            "Shrinking Violet",
            "Brainana",
            "Winter Melon",
            "The Great Zucchini",
            "Shooting Starfruit",
            "Dark Matter Dragonfruit",
            "Lima-Pleurodon",
            "Bird of Paradise",
            "Spyris",
            "Go-Nuts",
            "Mayflower",
            "Sportacus",
            "Snake Grass",
            "Witch Hazel",
            "Jolly Holly",
            "Sap-Fling",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel BC Deck`)
            .setDescription(
              `Here is your wheel for bc \n **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (heroinput == "citron" || heroinput == "ct" || heroinput == "tron") {
          const wordsArray = [
            //Guardian
            "Small-Nut",
            "Sting Bean",
            "Wall-Nut",
            "Pismashio",
            "Spineapple",
            "Potato Mine",
            "Cactus",
            "Gardening Gloves",
            "Sea-Shroom",
            "Water Chestnut",
            "Pea-Nut",
            "Steel Magnolia",
            "Photosynthesizer",
            "Spikeweed Sector",
            "Plantern",
            "Grape Responsibility",
            "Primal Potato Mine",
            "Grizzly Pear",
            "Grave Buster",
            "Hibernating Beary",
            "Prickly Pear",
            "Smackadamia",
            "Tough Beets",
            "Cosmic Nut",
            "Starch-Lord",
            "Blockbuster",
            "Pumpkin Shell",
            "Jugger-Nut",
            "Mirror-Nut",
            "Guacodile",
            "Doom-Shroom",
            "Galacta-Cactus",
            "Force Field",
            "Gravitree",
            "Three-Nut",
            "Marine Bean",
            "Primal Wall-Nut",
            "Poppin' Poppies",
            "Soul Patch",
            "Wall-Nut Bowling",
            "Body-Gourd",
            "Pecanolith",
            "Tricarrotops",
            "Loco Coco",
            "Forget-Me-Nuts",
            "Garlic",
            "Corn Dog",
            "Hot Date",
            "Health-Nut",
            "Pear Cub",
            "Shamrocket",
            "Red Stinger",
            //Smarty
            "Snowdrop",
            "Weenie Beanie",
            "Snow Pea",
            "Cattail",
            "Smoosh-Shroom",
            "Threepeater",
            "Iceberg Lettuce",
            "Shellery",
            "Rescue Radish",
            "Spring Bean",
            "Vanilla",
            "Carrotillery",
            "Mars Flytrap",
            "Planet of the Grapes",
            "Leaf Blower",
            "Grave Mistake",
            "Pear Pal",
            "Primal Peashooter",
            "Admiral Navy Bean",
            "Lightning Reed",
            "Chilly Pepper",
            "Navy Bean",
            "Jumping Bean",
            "Cosmic Bean",
            "Melon-Pult",
            "Tricorn",
            "Lily Pad",
            "Sow Magic Beans",
            "Bean Counter",
            "Snapdragon",
            "Winter Squash",
            "Laser Cattail",
            "Bog of Enlightenment",
            "Cool Bean",
            "Jelly Bean",
            "Rotobaga",
            "Shrinking Violet",
            "Brainana",
            "Winter Melon",
            "The Great Zucchini",
            "Shooting Starfruit",
            "Dark Matter Dragonfruit",
            "Lima-Pleurodon",
            "Bird of Paradise",
            "Spyris",
            "Go-Nuts",
            "Mayflower",
            "Sportacus",
            "Snake Grass",
            "Witch Hazel",
            "Jolly Holly",
            "Sap-Fling",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Citron Deck`)
            .setDescription(
              `Here is your wheel for Citron \n **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          return interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "captain combustible" ||
          heroinput == "cc" ||
          heroinput == "captain" ||
          heroinput == "combustible" ||
          heroinput == "captaincombustible"
        ) {
          const wordsArray = [
            //Kabloom
            "Button Mushroom",
            "Berry Blast",
            "Buff-Shroom",
            "Seedling",
            "Zapricot",
            "Poison Mushroom",
            "Berry Angry",
            "Mushroom Ringleader",
            "Poison Ivy",
            "Pair of Pears",
            "Bluesberry",
            "Sizzle",
            "Banana Bomb",
            "Mushroom Grotto",
            "Invasive Species",
            "Puff-Shroom",
            "Veloci-Radish Hatchling",
            "Hot Lava",
            "Shroom for Two",
            "Wild Berry",
            "Petal-Morphosis",
            "Sour Grapes",
            "Poison Oak",
            "Cosmic Mushroom",
            "Lava Guava",
            "Cro-Magnolia",
            "Shelf Mushroom",
            "Punish-Shroom",
            "Sergeant Strongberry",
            "Cherry Bomb",
            "Grapes of Wrath",
            "Astro-Shroom",
            "Banana Launcher",
            "Pair Pearadise",
            "Fireweed",
            "Imitater",
            "Strawberrian",
            "Pineclone",
            "Dandy Lion King",
            "Kernel Corn",
            "Reincarnation",
            "Molekale",
            "Gloom-Shroom",
            "Veloci-Radish Hunter",
            "Blooming Heart",
            "High-Voltage Currant",
            "Sonic Bloom",
            "Transfiguration",
            "Atomic Bombegranate",
            "Electric Blueberry",
            //Mega-Grow
            "Peashooter",
            "Torchwood",
            "Cabbage-Pult",
            "Fertilize",
            "Flourish",
            "Grow-Shroom",
            "Repeater",
            "Bonk Choy",
            "Pea Pod",
            "Sweet Potato",
            "Fire Peashooter",
            "Skyshooter",
            "Coffee Grounds",
            "Sweet Pea",
            "Vegetation Mutation",
            "Umbrella Leaf",
            "Half-Banana",
            "Typical Beanstalk",
            "The Podfather",
            "Plant Food",
            "Re-Peat Moss",
            "Whipvine",
            "Super-Phat Beets",
            "Banana Peel",
            "Cosmic Pea",
            "Bamboozle",
            "Pea Patch",
            "Party Thyme",
            "Black-Eyed Pea",
            "Potted Powerhouse",
            "Espresso Fiesta",
            "Moonbean",
            "Pod Fighter",
            "The Red Plant-It",
            "Split Pea",
            "Grape Power",
            "Savage Spinach",
            "Doubled Mint",
            "Muscle Sprout",
            "Bananasaurus Rex",
            "Captain Cucumber",
            "Onion Rings",
            "Gatling Pea",
            "Apotatosaurus",
            "Clique Peas",
            "Lily of the Valley",
            "Banana Split",
            "Plucky Clover",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Captain Combustible Deck`)
            .setDescription(
              `Here is your wheel for Captain Combustible
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "chompzilla" ||
          heroinput == "cz" ||
          heroinput == "chomp" ||
          heroinput == "zilla"
        ) {
          const wordsArray = [
            //Solar
            "Bellflower",
            "Sunflower",
            "Mixed Nuts",
            "Squash",
            "Smashing Pumpkin",
            "Morning Glory",
            "Fume-Shroom",
            "Pepper M.D.",
            "Water Balloons",
            "Venus Flytrap",
            "Bloomerang",
            "Metal Petal Sunflower",
            "Cosmoss",
            "Apple-Saucer",
            "Venus Flytraplanet",
            "Kernel-Pult",
            "Lil' Buddy",
            "Sunnier-Shroom",
            "Sage Sage",
            "Whack-a-Zombie",
            "Lawnmower",
            "Magnifying Grass",
            "Power Flower",
            "Cosmic Flower",
            "Heartichoke",
            "Elderberry",
            "Eyespore",
            "Twin Sunflower",
            "2nd-Best Taco of All Time",
            "Chomper",
            "Laser Bean",
            "Solar Winds",
            "Wing-Nut",
            "Tactical Cuke",
            "Primal Sunflower",
            "Sunflower Seed",
            "Sun Strike",
            "Briar Rose",
            "Three-Headed Chomper",
            "Cornucopia",
            "Astrocado",
            "Astro Vera",
            "Cob Cannon",
            "Aloesaurus",
            "Haunted Pumpking",
            "Sun-Shroom",
            "Jack O' Lantern",
            "Ketchup Mechanic",
            "Toadstool",
            //Mega-Grow
            "Peashooter",
            "Torchwood",
            "Cabbage-Pult",
            "Fertilize",
            "Flourish",
            "Grow-Shroom",
            "Repeater",
            "Bonk Choy",
            "Pea Pod",
            "Sweet Potato",
            "Fire Peashooter",
            "Skyshooter",
            "Coffee Grounds",
            "Sweet Pea",
            "Vegetation Mutation",
            "Umbrella Leaf",
            "Half-Banana",
            "Typical Beanstalk",
            "The Podfather",
            "Plant Food",
            "Re-Peat Moss",
            "Whipvine",
            "Super-Phat Beets",
            "Banana Peel",
            "Cosmic Pea",
            "Bamboozle",
            "Pea Patch",
            "Party Thyme",
            "Black-Eyed Pea",
            "Potted Powerhouse",
            "Espresso Fiesta",
            "Moonbean",
            "Pod Fighter",
            "The Red Plant-It",
            "Split Pea",
            "Grape Power",
            "Savage Spinach",
            "Doubled Mint",
            "Muscle Sprout",
            "Bananasaurus Rex",
            "Captain Cucumber",
            "Onion Rings",
            "Gatling Pea",
            "Apotatosaurus",
            "Clique Peas",
            "Lily of the Valley",
            "Banana Split",
            "Plucky Clover",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Chompzilla Deck`)
            .setDescription(
              `Here is your wheel for Chompzila
                 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "gk" ||
          heroinput == "grass knuckles" ||
          heroinput == "grass" ||
          heroinput == "knuckles"
        ) {
          const wordsArray = [
            //Gurdian
            "Small-Nut",
            "Sting Bean",
            "Wall-Nut",
            "Pismashio",
            "Spineapple",
            "Potato Mine",
            "Cactus",
            "Gardening Gloves",
            "Sea-Shroom",
            "Water Chestnut",
            "Pea-Nut",
            "Steel Magnolia",
            "Photosynthesizer",
            "Spikeweed Sector",
            "Plantern",
            "Grape Responsibility",
            "Primal Potato Mine",
            "Grizzly Pear",
            "Grave Buster",
            "Hibernating Beary",
            "Prickly Pear",
            "Smackadamia",
            "Tough Beets",
            "Cosmic Nut",
            "Starch-Lord",
            "Blockbuster",
            "Pumpkin Shell",
            "Jugger-Nut",
            "Mirror-Nut",
            "Guacodile",
            "Doom-Shroom",
            "Galacta-Cactus",
            "Force Field",
            "Gravitree",
            "Three-Nut",
            "Marine Bean",
            "Primal Wall-Nut",
            "Poppin' Poppies",
            "Soul Patch",
            "Wall-Nut Bowling",
            "Body-Gourd",
            "Pecanolith",
            "Tricarrotops",
            "Loco Coco",
            "Forget-Me-Nuts",
            "Garlic",
            "Corn Dog",
            "Hot Date",
            "Health-Nut",
            "Pear Cub",
            "Shamrocket",
            "Red Stinger",
            //Mega-Grow
            "Peashooter",
            "Torchwood",
            "Cabbage-Pult",
            "Fertilize",
            "Flourish",
            "Grow-Shroom",
            "Repeater",
            "Bonk Choy",
            "Pea Pod",
            "Sweet Potato",
            "Fire Peashooter",
            "Skyshooter",
            "Coffee Grounds",
            "Sweet Pea",
            "Vegetation Mutation",
            "Umbrella Leaf",
            "Half-Banana",
            "Typical Beanstalk",
            "The Podfather",
            "Plant Food",
            "Re-Peat Moss",
            "Whipvine",
            "Super-Phat Beets",
            "Banana Peel",
            "Cosmic Pea",
            "Bamboozle",
            "Pea Patch",
            "Party Thyme",
            "Black-Eyed Pea",
            "Potted Powerhouse",
            "Espresso Fiesta",
            "Moonbean",
            "Pod Fighter",
            "The Red Plant-It",
            "Split Pea",
            "Grape Power",
            "Savage Spinach",
            "Doubled Mint",
            "Muscle Sprout",
            "Bananasaurus Rex",
            "Captain Cucumber",
            "Onion Rings",
            "Gatling Pea",
            "Apotatosaurus",
            "Clique Peas",
            "Lily of the Valley",
            "Banana Split",
            "Plucky Clover",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Grass Knuckles Deck`)
            .setDescription(
              `Here is your wheel for Grass Knuckles
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "gs" ||
          heroinput == "green shadow" ||
          heroinput == "green" ||
          heroinput == "shadow"
        ) {
          const wordsArray = [
            //Smarty
            "Snowdrop",
            "Weenie Beanie",
            "Snow Pea",
            "Cattail",
            "Smoosh-Shroom",
            "Threepeater",
            "Iceberg Lettuce",
            "Shellery",
            "Rescue Radish",
            "Spring Bean",
            "Vanilla",
            "Carrotillery",
            "Mars Flytrap",
            "Planet of the Grapes",
            "Leaf Blower",
            "Grave Mistake",
            "Pear Pal",
            "Primal Peashooter",
            "Admiral Navy Bean",
            "Lightning Reed",
            "Chilly Pepper",
            "Navy Bean",
            "Jumping Bean",
            "Cosmic Bean",
            "Melon-Pult",
            "Tricorn",
            "Lily Pad",
            "Sow Magic Beans",
            "Bean Counter",
            "Snapdragon",
            "Winter Squash",
            "Laser Cattail",
            "Bog of Enlightenment",
            "Cool Bean",
            "Jelly Bean",
            "Rotobaga",
            "Shrinking Violet",
            "Brainana",
            "Winter Melon",
            "The Great Zucchini",
            "Shooting Starfruit",
            "Dark Matter Dragonfruit",
            "Lima-Pleurodon",
            "Bird of Paradise",
            "Spyris",
            "Go-Nuts",
            "Mayflower",
            "Sportacus",
            "Snake Grass",
            "Witch Hazel",
            "Jolly Holly",
            "Sap-Fling",
            //Mega-Grow
            "Peashooter",
            "Torchwood",
            "Cabbage-Pult",
            "Fertilize",
            "Flourish",
            "Grow-Shroom",
            "Repeater",
            "Bonk Choy",
            "Pea Pod",
            "Sweet Potato",
            "Fire Peashooter",
            "Skyshooter",
            "Coffee Grounds",
            "Sweet Pea",
            "Vegetation Mutation",
            "Umbrella Leaf",
            "Half-Banana",
            "Typical Beanstalk",
            "The Podfather",
            "Plant Food",
            "Re-Peat Moss",
            "Whipvine",
            "Super-Phat Beets",
            "Banana Peel",
            "Cosmic Pea",
            "Bamboozle",
            "Pea Patch",
            "Party Thyme",
            "Black-Eyed Pea",
            "Potted Powerhouse",
            "Espresso Fiesta",
            "Moonbean",
            "Pod Fighter",
            "The Red Plant-It",
            "Split Pea",
            "Grape Power",
            "Savage Spinach",
            "Doubled Mint",
            "Muscle Sprout",
            "Bananasaurus Rex",
            "Captain Cucumber",
            "Onion Rings",
            "Gatling Pea",
            "Apotatosaurus",
            "Clique Peas",
            "Lily of the Valley",
            "Banana Split",
            "Plucky Clover",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Green Shadow Deck`)
            .setDescription(
              `Here is your wheel for Green Shadow
     **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "nightcap" ||
          heroinput == "nc" ||
          heroinput == "cap" ||
          heroinput == "night" || 
          heroinput == "night cap"
        ) {
          const wordsArray = [
            //Smarty
            "Snowdrop",
            "Weenie Beanie",
            "Snow Pea",
            "Cattail",
            "Smoosh-Shroom",
            "Threepeater",
            "Iceberg Lettuce",
            "Shellery",
            "Rescue Radish",
            "Spring Bean",
            "Vanilla",
            "Carrotillery",
            "Mars Flytrap",
            "Planet of the Grapes",
            "Leaf Blower",
            "Grave Mistake",
            "Pear Pal",
            "Primal Peashooter",
            "Admiral Navy Bean",
            "Lightning Reed",
            "Chilly Pepper",
            "Navy Bean",
            "Jumping Bean",
            "Cosmic Bean",
            "Melon-Pult",
            "Tricorn",
            "Lily Pad",
            "Sow Magic Beans",
            "Bean Counter",
            "Snapdragon",
            "Winter Squash",
            "Laser Cattail",
            "Bog of Enlightenment",
            "Cool Bean",
            "Jelly Bean",
            "Rotobaga",
            "Shrinking Violet",
            "Brainana",
            "Winter Melon",
            "The Great Zucchini",
            "Shooting Starfruit",
            "Dark Matter Dragonfruit",
            "Lima-Pleurodon",
            "Bird of Paradise",
            "Spyris",
            "Go-Nuts",
            "Mayflower",
            "Sportacus",
            "Snake Grass",
            "Witch Hazel",
            "Jolly Holly",
            "Sap-Fling",
            //Kabloom
            "Button Mushroom",
            "Berry Blast",
            "Buff-Shroom",
            "Seedling",
            "Zapricot",
            "Poison Mushroom",
            "Berry Angry",
            "Mushroom Ringleader",
            "Poison Ivy",
            "Pair of Pears",
            "Bluesberry",
            "Sizzle",
            "Banana Bomb",
            "Mushroom Grotto",
            "Invasive Species",
            "Puff-Shroom",
            "Veloci-Radish Hatchling",
            "Hot Lava",
            "Shroom for Two",
            "Wild Berry",
            "Petal-Morphosis",
            "Sour Grapes",
            "Poison Oak",
            "Cosmic Mushroom",
            "Lava Guava",
            "Cro-Magnolia",
            "Shelf Mushroom",
            "Punish-Shroom",
            "Sergeant Strongberry",
            "Cherry Bomb",
            "Grapes of Wrath",
            "Astro-Shroom",
            "Banana Launcher",
            "Pair Pearadise",
            "Fireweed",
            "Imitater",
            "Strawberrian",
            "Pineclone",
            "Dandy Lion King",
            "Kernel Corn",
            "Reincarnation",
            "Molekale",
            "Gloom-Shroom",
            "Veloci-Radish Hunter",
            "Blooming Heart",
            "High-Voltage Currant",
            "Sonic Bloom",
            "Transfiguration",
            "Atomic Bombegranate",
            "Electric Blueberry",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Nightcap Deck`)
            .setDescription(
              `Here is your wheel for Nightcap
     **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (heroinput == "rose" || heroinput == "ro") {
          const wordsArray = [
            //Smarty
            "Snowdrop",
            "Weenie Beanie",
            "Snow Pea",
            "Cattail",
            "Smoosh-Shroom",
            "Threepeater",
            "Iceberg Lettuce",
            "Shellery",
            "Rescue Radish",
            "Spring Bean",
            "Vanilla",
            "Carrotillery",
            "Mars Flytrap",
            "Planet of the Grapes",
            "Leaf Blower",
            "Grave Mistake",
            "Pear Pal",
            "Primal Peashooter",
            "Admiral Navy Bean",
            "Lightning Reed",
            "Chilly Pepper",
            "Navy Bean",
            "Jumping Bean",
            "Cosmic Bean",
            "Melon-Pult",
            "Tricorn",
            "Lily Pad",
            "Sow Magic Beans",
            "Bean Counter",
            "Snapdragon",
            "Winter Squash",
            "Laser Cattail",
            "Bog of Enlightenment",
            "Cool Bean",
            "Jelly Bean",
            "Rotobaga",
            "Shrinking Violet",
            "Brainana",
            "Winter Melon",
            "The Great Zucchini",
            "Shooting Starfruit",
            "Dark Matter Dragonfruit",
            "Lima-Pleurodon",
            "Bird of Paradise",
            "Spyris",
            "Go-Nuts",
            "Mayflower",
            "Sportacus",
            "Snake Grass",
            "Witch Hazel",
            "Jolly Holly",
            "Sap-Fling",
            //Solar
            "Bellflower",
            "Sunflower",
            "Mixed Nuts",
            "Squash",
            "Smashing Pumpkin",
            "Morning Glory",
            "Fume-Shroom",
            "Pepper M.D.",
            "Water Balloons",
            "Venus Flytrap",
            "Bloomerang",
            "Metal Petal Sunflower",
            "Cosmoss",
            "Apple-Saucer",
            "Venus Flytraplanet",
            "Kernel-Pult",
            "Lil' Buddy",
            "Sunnier-Shroom",
            "Sage Sage",
            "Whack-a-Zombie",
            "Lawnmower",
            "Magnifying Grass",
            "Power Flower",
            "Cosmic Flower",
            "Heartichoke",
            "Elderberry",
            "Eyespore",
            "Twin Sunflower",
            "2nd-Best Taco of All Time",
            "Chomper",
            "Laser Bean",
            "Solar Winds",
            "Wing-Nut",
            "Tactical Cuke",
            "Primal Sunflower",
            "Sunflower Seed",
            "Sun Strike",
            "Briar Rose",
            "Three-Headed Chomper",
            "Cornucopia",
            "Astrocado",
            "Astro Vera",
            "Cob Cannon",
            "Aloesaurus",
            "Haunted Pumpking",
            "Sun-Shroom",
            "Jack O' Lantern",
            "Ketchup Mechanic",
            "Toadstool",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Rose Deck`)
            .setDescription(
              `Here is your wheel for Rose
     **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "solar flare" ||
          heroinput == "sf" ||
          heroinput == "solar" ||
          heroinput == "flare" ||
          heroinput == "solarflare"
        ) {
          const wordsArray = [
            //Kabloom
            "Button Mushroom",
            "Berry Blast",
            "Buff-Shroom",
            "Seedling",
            "Zapricot",
            "Poison Mushroom",
            "Berry Angry",
            "Mushroom Ringleader",
            "Poison Ivy",
            "Pair of Pears",
            "Bluesberry",
            "Sizzle",
            "Banana Bomb",
            "Mushroom Grotto",
            "Invasive Species",
            "Puff-Shroom",
            "Veloci-Radish Hatchling",
            "Hot Lava",
            "Shroom for Two",
            "Wild Berry",
            "Petal-Morphosis",
            "Sour Grapes",
            "Poison Oak",
            "Cosmic Mushroom",
            "Lava Guava",
            "Cro-Magnolia",
            "Shelf Mushroom",
            "Punish-Shroom",
            "Sergeant Strongberry",
            "Cherry Bomb",
            "Grapes of Wrath",
            "Astro-Shroom",
            "Banana Launcher",
            "Pair Pearadise",
            "Fireweed",
            "Imitater",
            "Strawberrian",
            "Pineclone",
            "Dandy Lion King",
            "Kernel Corn",
            "Reincarnation",
            "Molekale",
            "Gloom-Shroom",
            "Veloci-Radish Hunter",
            "Blooming Heart",
            "High-Voltage Currant",
            "Sonic Bloom",
            "Transfiguration",
            "Atomic Bombegranate",
            "Electric Blueberry",
            //Solar
            "Bellflower",
            "Sunflower",
            "Mixed Nuts",
            "Squash",
            "Smashing Pumpkin",
            "Morning Glory",
            "Fume-Shroom",
            "Pepper M.D.",
            "Water Balloons",
            "Venus Flytrap",
            "Bloomerang",
            "Metal Petal Sunflower",
            "Cosmoss",
            "Apple-Saucer",
            "Venus Flytraplanet",
            "Kernel-Pult",
            "Lil' Buddy",
            "Sunnier-Shroom",
            "Sage Sage",
            "Whack-a-Zombie",
            "Lawnmower",
            "Magnifying Grass",
            "Power Flower",
            "Cosmic Flower",
            "Heartichoke",
            "Elderberry",
            "Eyespore",
            "Twin Sunflower",
            "2nd-Best Taco of All Time",
            "Chomper",
            "Laser Bean",
            "Solar Winds",
            "Wing-Nut",
            "Tactical Cuke",
            "Primal Sunflower",
            "Sunflower Seed",
            "Sun Strike",
            "Briar Rose",
            "Three-Headed Chomper",
            "Cornucopia",
            "Astrocado",
            "Astro Vera",
            "Cob Cannon",
            "Aloesaurus",
            "Haunted Pumpking",
            "Sun-Shroom",
            "Jack O' Lantern",
            "Ketchup Mechanic",
            "Toadstool",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Solar Flare Deck`)
            .setDescription(
              `Here is your wheel for Solar Flare
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "spudow" ||
          heroinput == "sp" ||
          heroinput == "spud" ||
          heroinput == "dow"
        ) {
          const wordsArray = [
            //Kabloom
            "Button Mushroom",
            "Berry Blast",
            "Buff-Shroom",
            "Seedling",
            "Zapricot",
            "Poison Mushroom",
            "Berry Angry",
            "Mushroom Ringleader",
            "Poison Ivy",
            "Pair of Pears",
            "Bluesberry",
            "Sizzle",
            "t Bomb",
            "Mushroom Grotto",
            "Invasive Species",
            "Puff-Shroom",
            "Veloci-Radish Hatchling",
            "Hot Lava",
            "Shroom for Two",
            "Wild Berry",
            "Petal-Morphosis",
            "Sour Grapes",
            "Poison Oak",
            "Cosmic Mushroom",
            "Lava Guava",
            "Cro-Magnolia",
            "Shelf Mushroom",
            "Punish-Shroom",
            "Sergeant Strongberry",
            "Cherry Bomb",
            "Grapes of Wrath",
            "Astro-Shroom",
            "Banana Launcher",
            "Pair Pearadise",
            "Fireweed",
            "Imitater",
            "Strawberrian",
            "Pineclone",
            "Dandy Lion King",
            "Kernel Corn",
            "Reincarnation",
            "Molekale",
            "Gloom-Shroom",
            "Veloci-Radish Hunter",
            "Blooming Heart",
            "High-Voltage Currant",
            "Sonic Bloom",
            "Transfiguration",
            "Atomic Bombegranate",
            "Electric Blueberry",
            //Gurdian
            "Small-Nut",
            "Sting Bean",
            "Wall-Nut",
            "Pismashio",
            "Spineapple",
            "Potato Mine",
            "Cactus",
            "Gardening Gloves",
            "Sea-Shroom",
            "Water Chestnut",
            "Pea-Nut",
            "Steel Magnolia",
            "Photosynthesizer",
            "Spikeweed Sector",
            "Plantern",
            "Grape Responsibility",
            "Primal Potato Mine",
            "Grizzly Pear",
            "Grave Buster",
            "Hibernating Beary",
            "Prickly Pear",
            "Smackadamia",
            "Tough Beets",
            "Cosmic Nut",
            "Starch-Lord",
            "Blockbuster",
            "Pumpkin Shell",
            "Jugger-Nut",
            "Mirror-Nut",
            "Guacodile",
            "Doom-Shroom",
            "Galacta-Cactus",
            "Force Field",
            "Gravitree",
            "Three-Nut",
            "Marine Bean",
            "Primal Wall-Nut",
            "Poppin' Poppies",
            "Soul Patch",
            "Wall-Nut Bowling",
            "Body-Gourd",
            "Pecanolith",
            "Tricarrotops",
            "Loco Coco",
            "Forget-Me-Nuts",
            "Garlic",
            "Corn Dog",
            "Hot Date",
            "Health-Nut",
            "Pear Cub",
            "Shamrocket",
            "Red Stinger",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Spudow Deck`)
            .setDescription(
              `Here is your wheel for Spudow 
        **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "wall-knight" ||
          heroinput == "wk" ||
          heroinput == "wall" ||
          heroinput == "knight" ||
          heroinput == "wallknight" ||
          heroinput == "wall knight"
        ) {
          const wordsArray = [
            //Solar
            "Bellflower",
            "Sunflower",
            "Mixed Nuts",
            "Squash",
            "Smashing Pumpkin",
            "Morning Glory",
            "Fume-Shroom",
            "Pepper M.D.",
            "Water Balloons",
            "Venus Flytrap",
            "Bloomerang",
            "Metal Petal Sunflower",
            "Cosmoss",
            "Apple-Saucer",
            "Venus Flytraplanet",
            "Kernel-Pult",
            "Lil' Buddy",
            "Sunnier-Shroom",
            "Sage Sage",
            "Whack-a-Zombie",
            "Lawnmower",
            "Magnifying Grass",
            "Power Flower",
            "Cosmic Flower",
            "Heartichoke",
            "Elderberry",
            "Eyespore",
            "Twin Sunflower",
            "2nd-Best Taco of All Time",
            "Chomper",
            "Laser Bean",
            "Solar Winds",
            "Wing-Nut",
            "Tactical Cuke",
            "Primal Sunflower",
            "Sunflower Seed",
            "Sun Strike",
            "Briar Rose",
            "Three-Headed Chomper",
            "Cornucopia",
            "Astrocado",
            "Astro Vera",
            "Cob Cannon",
            "Aloesaurus",
            "Haunted Pumpking",
            "Sun-Shroom",
            "Jack O' Lantern",
            "Ketchup Mechanic",
            "Toadstool",
            //Gurdian
            "Small-Nut",
            "Sting Bean",
            "Wall-Nut",
            "Pismashio",
            "Spineapple",
            "Potato Mine",
            "Cactus",
            "Gardening Gloves",
            "Sea-Shroom",
            "Water Chestnut",
            "Pea-Nut",
            "Steel Magnolia",
            "Photosynthesizer",
            "Spikeweed Sector",
            "Plantern",
            "Grape Responsibility",
            "Primal Potato Mine",
            "Grizzly Pear",
            "Grave Buster",
            "Hibernating Beary",
            "Prickly Pear",
            "Smackadamia",
            "Tough Beets",
            "Cosmic Nut",
            "Starch-Lord",
            "Blockbuster",
            "Pumpkin Shell",
            "Jugger-Nut",
            "Mirror-Nut",
            "Guacodile",
            "Doom-Shroom",
            "Galacta-Cactus",
            "Force Field",
            "Gravitree",
            "Three-Nut",
            "Marine Bean",
            "Primal Wall-Nut",
            "Poppin' Poppies",
            "Soul Patch",
            "Wall-Nut Bowling",
            "Body-Gourd",
            "Pecanolith",
            "Tricarrotops",
            "Loco Coco",
            "Forget-Me-Nuts",
            "Garlic",
            "Corn Dog",
            "Hot Date",
            "Health-Nut",
            "Pear Cub",
            "Shamrocket",
            "Red Stinger",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Wall-Knight Deck`)
            .setDescription(
              `Here is your wheel for Wall-Knight
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "bf" ||
          heroinput == "brain freeze" ||
          heroinput == "brain" ||
          heroinput == "freeze" ||
          heroinput == "brainfreeze"
        ) {
          const wordsArray = [
            //Sneaky
            "Imp",
            "Mini-Ninja",
            "Smoke Bomb",
            "Fishy Imp",
            "Smelly Zombie",
            "Headstone Carver",
            "Zombie Chicken",
            "Hot Dog Imp",
            "Swashbuckler Zombie",
            "Backyard Bounce",
            "Stealthy Imp",
            "Firefighter",
            "Graveyard",
            "Ice Pirate",
            "Frosty Mustache",
            "Swabbie",
            "Barrel of Barrels",
            "Monkey Smuggler",
            "Imp Commander",
            "Barrel Roller Zombie",
            "Surprise Gargantuar",
            "Walrus Rider",
            "Zombot Stomp",
            "Cosmic Imp",
            "Space Pirate",
            "Blowgun Imp",
            "Buried Treasure",
            "Toxic Waste Imp",
            "Line Dancing Zombie",
            "Pogo Bouncer",
            "Tomb Raiser Zombie",
            "Ducky Tube Zombie",
            "Dr. Spacetime",
            "Laser Base Alpha",
            "Cursed Gargolith",
            "Excavator Zombie",
            "Unthawed Viking",
            "Mixed-Up Gravedigger",
            "Zombot Sharktronic Sub",
            "Zombot Plank Walker",
            "Space Cowboy",
            "Cryo-Yeti",
            "Zombot Aerostatic Gondola",
            "Raiding Raptor",
            "Imposter",
            "Fire Rooster",
            "Imp-Throwing Imp",
            "Captain Flameface",
            "Zombie High Diver",
            "Trapper Zombie",
            //Beastly
            "Skunk Punk",
            "Pied Piper",
            "Zookeeper",
            "Dolphin Rider",
            "Locust Swarm",
            "Dog Walker",
            "Nibble",
            "Snorkel Zombie",
            "Yeti Lunchbox",
            "Haunting Zombie",
            "Loudmouth",
            "B-flat",
            "Total Eclipse",
            "Alien Ooze",
            "Surfer Zombie",
            "Haunting Ghost",
            "Goat",
            "Vengeful Cyborg",
            "Squirrel Herder",
            "Vimpire",
            "Vitamin Z",
            "Kangaroo Rider",
            "Smashing Gargantuar",
            "Biodome Botanist",
            "Cosmic Yeti",
            "Primordial Cheese Shover",
            "Killer Whale",
            "Cat Lady",
            "Zombie Yeti",
            "Deep Sea Gargantuar",
            "Maniacal Laugh",
            "Cheese Cutter",
            "Cyborg Zombie",
            "Area 22",
            "Extinction Event",
            "Ancient Vimpire",
            "Hunting Grounds",
            "Nurse Gargantuar",
            "Octo Zombie",
            "Zombot 1000",
            "Interstellar Bounty Hunter",
            "Supernova Gargantuar",
            "Mondo Bronto",
            "Gargantuar-Throwing Gargantuar",
            "Fraidy Cat",
            "Secret Agent",
            "Energy Drink Zombie",
            "Synchronized Swimmer",
            "Hover-Goat 3000",
            "Overstuffed Zombie",
            "Sneezing Zombie",
            "King of the Grill",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Brain Freeze Deck`)
            .setDescription(
              `Here is your wheel for Brain Freeze
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "eb" ||
          heroinput == "electric" ||
          heroinput == "boogaloo" ||
          heroinput == "electric boogaloo"
        ) {
          const wordsArray = [
            //Crazy
            "Backup Dancer",
            "Bungee Plumber",
            "Cuckoo Zombie",
            "Disco Zombie",
            "Flamenco Zombie",
            "Tennis Champ",
            "Unlife of the Party",
            "Conga Zombie",
            "Newspaper Zombie",
            "Cakesplosion",
            "Orchestra Conductor",
            "Foot Soldier Zombie",
            "Loose Cannon",
            "Meteor Z",
            "Space Ninja",
            "Mystery Egg",
            "Sugary Treat",
            "Trapper Territory",
            "Exploding Imp",
            "Jester",
            "Zombot's Wrath",
            "The Chickening",
            "Imp-Throwing Gargantuar",
            "Final Mission",
            "Cosmic Dancer",
            "Gizzard Lizard",
            "Disco Dance Floor",
            "Aerobics Instructor",
            "Abracadaver",
            "Fireworks Zombie",
            "Disco-Tron 3000",
            "Disco-Naut",
            "Moon Base Z",
            "Gas Giant",
            "Quickdraw Con Man",
            "Grave Robber",
            "Zombie's Best Friend",
            "Barrel of Deadbeards",
            "Valkyrie",
            "Gargantuars' Feast",
            "Quasar Wizard",
            "Binary Stars",
            "Tankylosaurus",
            "Headhunter",
            "Exploding Fruitcake",
            "Unexpected Gifts",
            "Stupid Cupid",
            "Frankentuar",
            "Gargantuar-Throwing Imp",
            "Hippity Hop Gargantuar",
            //Beastly
            "Skunk Punk",
            "Pied Piper",
            "Zookeeper",
            "Dolphin Rider",
            "Locust Swarm",
            "Dog Walker",
            "Nibble",
            "Snorkel Zombie",
            "Yeti Lunchbox",
            "Haunting Zombie",
            "Loudmouth",
            "B-flat",
            "Total Eclipse",
            "Alien Ooze",
            "Surfer Zombie",
            "Haunting Ghost",
            "Goat",
            "Vengeful Cyborg",
            "Squirrel Herder",
            "Vimpire",
            "Vitamin Z",
            "Kangaroo Rider",
            "Smashing Gargantuar",
            "Biodome Botanist",
            "Cosmic Yeti",
            "Primordial Cheese Shover",
            "Killer Whale",
            "Cat Lady",
            "Zombie Yeti",
            "Deep Sea Gargantuar",
            "Maniacal Laugh",
            "Cheese Cutter",
            "Cyborg Zombie",
            "Area 22",
            "Extinction Event",
            "Ancient Vimpire",
            "Hunting Grounds",
            "Nurse Gargantuar",
            "Octo Zombie",
            "Zombot 1000",
            "Interstellar Bounty Hunter",
            "Supernova Gargantuar",
            "Mondo Bronto",
            "Gargantuar-Throwing Gargantuar",
            "Fraidy Cat",
            "Secret Agent",
            "Energy Drink Zombie",
            "Synchronized Swimmer",
            "Hover-Goat 3000",
            "Overstuffed Zombie",
            "Sneezing Zombie",
            "King of the Grill",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Electric Boogaloo(EB) Deck`)
            .setDescription(
              `Here is your wheel for Electric Boogaloo(EB)
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "hg" ||
          heroinput == "huge" ||
          heroinput == "huge giganticus" ||
          heroinput == "giganticus" ||
          heroinput == "huge-giganticus"
        ) {
          const wordsArray = [
            //Brainy
            "Cardboard Robot Zombie",
            "Paparazzi Zombie",
            "Lurch for Lunch",
            "Fun-Dead Raiser",
            "Drum Major",
            "Chimney Sweep",
            "Beam Me Up",
            "Cell Phone Zombie",
            "Pool Shark",
            "Zombot Drone Engineer",
            "Brain Vendor",
            "Mountain Climber",
            "Cryo-Brain",
            "Medulla Nebula",
            "Moonwalker",
            "Copter Commando",
            "Mustache Waxer",
            "Pirate's Booty",
            "Gentleman Zombie",
            "Kite Flyer",
            "Gadget Scientist",
            "Hail-a-Copter",
            "Wizard Gargantuar",
            "Cosmic Scientist",
            "Triplication",
            "Zom-Blob",
            "Mustache Monument",
            "Electrician",
            "Rocket Science",
            "Mad Chemist",
            "Portal Technician",
            "Neutron Imp",
            "Transformation Station",
            "Wormhole Gatekeeper",
            "Evolutionary Leap",
            "Parasol Zombie",
            "Duckstache",
            "Teleport",
            "Shieldcrusher Viking",
            "Trickster",
            "Interdimensional Zombie",
            "Teleportation Zombie",
            "Gargantuar Mime",
            "Zombot Dinotronic Mechasaur",
            "Leprechaun Imp",
            "Regifting Zombie",
            "Trick-or-Treater",
            "Thinking Cap",
            "Kitchen Sink Zombie",
            "Bad Moon Rising",
            //Sneaky
            "Imp",
            "Mini-Ninja",
            "Smoke Bomb",
            "Fishy Imp",
            "Smelly Zombie",
            "Headstone Carver",
            "Zombie Chicken",
            "Hot Dog Imp",
            "Swashbuckler Zombie",
            "Backyard Bounce",
            "Stealthy Imp",
            "Firefighter",
            "Graveyard",
            "Ice Pirate",
            "Frosty Mustache",
            "Swabbie",
            "Barrel of Barrels",
            "Monkey Smuggler",
            "Imp Commander",
            "Barrel Roller Zombie",
            "Surprise Gargantuar",
            "Walrus Rider",
            "Zombot Stomp",
            "Cosmic Imp",
            "Space Pirate",
            "Blowgun Imp",
            "Buried Treasure",
            "Toxic Waste Imp",
            "Line Dancing Zombie",
            "Pogo Bouncer",
            "Tomb Raiser Zombie",
            "Ducky Tube Zombie",
            "Dr. Spacetime",
            "Laser Base Alpha",
            "Cursed Gargolith",
            "Excavator Zombie",
            "Unthawed Viking",
            "Mixed-Up Gravedigger",
            "Zombot Sharktronic Sub",
            "Zombot Plank Walker",
            "Space Cowboy",
            "Cryo-Yeti",
            "Zombot Aerostatic Gondola",
            "Raiding Raptor",
            "Imposter",
            "Fire Rooster",
            "Imp-Throwing Imp",
            "Captain Flameface",
            "Zombie High Diver",
            "Trapper Zombie",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Huge-Gigantacus(HG) Deck`)
            .setDescription(
              `Here is your wheel for Huge-Gigantacus(HG)
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "sb" ||
          heroinput == "super" ||
          heroinput == "brainz" ||
          heroinput == "super brainz" ||
          heroinput == "superbrainz"
        ) {
          const wordsArray = [
            //Brainy
            "Cardboard Robot Zombie",
            "Paparazzi Zombie",
            "Lurch for Lunch",
            "Fun-Dead Raiser",
            "Drum Major",
            "Chimney Sweep",
            "Beam Me Up",
            "Cell Phone Zombie",
            "Pool Shark",
            "Zombot Drone Engineer",
            "Brain Vendor",
            "Mountain Climber",
            "Cryo-Brain",
            "Medulla Nebula",
            "Moonwalker",
            "Copter Commando",
            "Mustache Waxer",
            "Pirate's Booty",
            "Gentleman Zombie",
            "Kite Flyer",
            "Gadget Scientist",
            "Hail-a-Copter",
            "Wizard Gargantuar",
            "Cosmic Scientist",
            "Triplication",
            "Zom-Blob",
            "Mustache Monument",
            "Electrician",
            "Rocket Science",
            "Mad Chemist",
            "Portal Technician",
            "Neutron Imp",
            "Transformation Station",
            "Wormhole Gatekeeper",
            "Evolutionary Leap",
            "Parasol Zombie",
            "Duckstache",
            "Teleport",
            "Shieldcrusher Viking",
            "Trickster",
            "Interdimensional Zombie",
            "Teleportation Zombie",
            "Gargantuar Mime",
            "Zombot Dinotronic Mechasaur",
            "Leprechaun Imp",
            "Regifting Zombie",
            "Trick-or-Treater",
            "Thinking Cap",
            "Kitchen Sink Zombie",
            "Bad Moon Rising",
            //Sneaky
            "Imp",
            "Mini-Ninja",
            "Smoke Bomb",
            "Fishy Imp",
            "Smelly Zombie",
            "Headstone Carver",
            "Zombie Chicken",
            "Hot Dog Imp",
            "Swashbuckler Zombie",
            "Backyard Bounce",
            "Stealthy Imp",
            "Firefighter",
            "Graveyard",
            "Ice Pirate",
            "Frosty Mustache",
            "Swabbie",
            "Barrel of Barrels",
            "Monkey Smuggler",
            "Imp Commander",
            "Barrel Roller Zombie",
            "Surprise Gargantuar",
            "Walrus Rider",
            "Zombot Stomp",
            "Cosmic Imp",
            "Space Pirate",
            "Blowgun Imp",
            "Buried Treasure",
            "Toxic Waste Imp",
            "Line Dancing Zombie",
            "Pogo Bouncer",
            "Tomb Raiser Zombie",
            "Ducky Tube Zombie",
            "Dr. Spacetime",
            "Laser Base Alpha",
            "Cursed Gargolith",
            "Excavator Zombie",
            "Unthawed Viking",
            "Mixed-Up Gravedigger",
            "Zombot Sharktronic Sub",
            "Zombot Plank Walker",
            "Space Cowboy",
            "Cryo-Yeti",
            "Zombot Aerostatic Gondola",
            "Raiding Raptor",
            "Imposter",
            "Fire Rooster",
            "Imp-Throwing Imp",
            "Captain Flameface",
            "Zombie High Diver",
            "Trapper Zombie",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Super Brainz Deck`)
            .setDescription(
              `Here is your wheel for Super Brainz
     **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "if" ||
          heroinput == "impfinity" ||
          heroinput == "imp" ||
          heroinput == "finity"
        ) {
          const wordsArray = [
            //crazy
            "Backup Dancer",
            "Bungee Plumber",
            "Cuckoo Zombie",
            "Disco Zombie",
            "Flamenco Zombie",
            "Tennis Champ",
            "Unlife of the Party",
            "Conga Zombie",
            "Newspaper Zombie",
            "Cakesplosion",
            "Orchestra Conductor",
            "Foot Soldier Zombie",
            "Loose Cannon",
            "Meteor Z",
            "Space Ninja",
            "Mystery Egg",
            "Sugary Treat",
            "Trapper Territory",
            "Exploding Imp",
            "Jester",
            "Zombot's Wrath",
            "The Chickening",
            "Imp-Throwing Gargantuar",
            "Final Mission",
            "Cosmic Dancer",
            "Gizzard Lizard",
            "Disco Dance Floor",
            "Aerobics Instructor",
            "Abracadaver",
            "Fireworks Zombie",
            "Disco-Tron 3000",
            "Disco-Naut",
            "Moon Base Z",
            "Gas Giant",
            "Quickdraw Con Man",
            "Grave Robber",
            "Zombie's Best Friend",
            "Barrel of Deadbeards",
            "Valkyrie",
            "Gargantuars' Feast",
            "Quasar Wizard",
            "Binary Stars",
            "Tankylosaurus",
            "Headhunter",
            "Exploding Fruitcake",
            "Unexpected Gifts",
            "Stupid Cupid",
            "Frankentuar",
            "Gargantuar-Throwing Imp",
            "Hippity Hop Gargantuar",
            //Sneaky
            "Imp",
            "Mini-Ninja",
            "Smoke Bomb",
            "Fishy Imp",
            "Smelly Zombie",
            "Headstone Carver",
            "Zombie Chicken",
            "Hot Dog Imp",
            "Swashbuckler Zombie",
            "Backyard Bounce",
            "Stealthy Imp",
            "Firefighter",
            "Graveyard",
            "Ice Pirate",
            "Frosty Mustache",
            "Swabbie",
            "Barrel of Barrels",
            "Monkey Smuggler",
            "Imp Commander",
            "Barrel Roller Zombie",
            "Surprise Gargantuar",
            "Walrus Rider",
            "Zombot Stomp",
            "Cosmic Imp",
            "Space Pirate",
            "Blowgun Imp",
            "Buried Treasure",
            "Toxic Waste Imp",
            "Line Dancing Zombie",
            "Pogo Bouncer",
            "Tomb Raiser Zombie",
            "Ducky Tube Zombie",
            "Dr. Spacetime",
            "Laser Base Alpha",
            "Cursed Gargolith",
            "Excavator Zombie",
            "Unthawed Viking",
            "Mixed-Up Gravedigger",
            "Zombot Sharktronic Sub",
            "Zombot Plank Walker",
            "Space Cowboy",
            "Cryo-Yeti",
            "Zombot Aerostatic Gondola",
            "Raiding Raptor",
            "Imposter",
            "Fire Rooster",
            "Imp-Throwing Imp",
            "Captain Flameface",
            "Zombie High Diver",
            "Trapper Zombie",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Impfinity Deck`)
            .setDescription(
              `Here is your wheel for Impfinity
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "immorticia" ||
          heroinput == "immort" ||
          heroinput == "immor" ||
          heroinput == "ticia" ||
          heroinput == "im"
        ) {
          const wordsArray = [
            //Beastly
            "Skunk Punk",
            "Pied Piper",
            "Zookeeper",
            "Dolphin Rider",
            "Locust Swarm",
            "Dog Walker",
            "Nibble",
            "Snorkel Zombie",
            "Yeti Lunchbox",
            "Haunting Zombie",
            "Loudmouth",
            "B-flat",
            "Total Eclipse",
            "Alien Ooze",
            "Surfer Zombie",
            "Haunting Ghost",
            "Goat",
            "Vengeful Cyborg",
            "Squirrel Herder",
            "Vimpire",
            "Vitamin Z",
            "Kangaroo Rider",
            "Smashing Gargantuar",
            "Biodome Botanist",
            "Cosmic Yeti",
            "Primordial Cheese Shover",
            "Killer Whale",
            "Cat Lady",
            "Zombie Yeti",
            "Deep Sea Gargantuar",
            "Maniacal Laugh",
            "Cheese Cutter",
            "Cyborg Zombie",
            "Area 22",
            "Extinction Event",
            "Ancient Vimpire",
            "Hunting Grounds",
            "Nurse Gargantuar",
            "Octo Zombie",
            "Zombot 1000",
            "Interstellar Bounty Hunter",
            "Supernova Gargantuar",
            "Mondo Bronto",
            "Gargantuar-Throwing Gargantuar",
            "Fraidy Cat",
            "Secret Agent",
            "Energy Drink Zombie",
            "Synchronized Swimmer",
            "Hover-Goat 3000",
            "Overstuffed Zombie",
            "Sneezing Zombie",
            "King of the Grill",
            //Brainy
            "Cardboard Robot Zombie",
            "Paparazzi Zombie",
            "Lurch for Lunch",
            "Fun-Dead Raiser",
            "Drum Major",
            "Chimney Sweep",
            "Beam Me Up",
            "Cell Phone Zombie",
            "Pool Shark",
            "Zombot Drone Engineer",
            "Brain Vendor",
            "Mountain Climber",
            "Cryo-Brain",
            "Medulla Nebula",
            "Moonwalker",
            "Copter Commando",
            "Mustache Waxer",
            "Pirate's Booty",
            "Gentleman Zombie",
            "Kite Flyer",
            "Gadget Scientist",
            "Hail-a-Copter",
            "Wizard Gargantuar",
            "Cosmic Scientist",
            "Triplication",
            "Zom-Blob",
            "Mustache Monument",
            "Electrician",
            "Rocket Science",
            "Mad Chemist",
            "Portal Technician",
            "Neutron Imp",
            "Transformation Station",
            "Wormhole Gatekeeper",
            "Evolutionary Leap",
            "Parasol Zombie",
            "Duckstache",
            "Teleport",
            "Shieldcrusher Viking",
            "Trickster",
            "Interdimensional Zombie",
            "Teleportation Zombie",
            "Gargantuar Mime",
            "Zombot Dinotronic Mechasaur",
            "Leprechaun Imp",
            "Regifting Zombie",
            "Trick-or-Treater",
            "Thinking Cap",
            "Kitchen Sink Zombie",
            "Bad Moon Rising",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Immorticia Deck`)
            .setDescription(
              `Here is your wheel for Immorticia
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "nt" ||
          heroinput == "neptuna" ||
          heroinput == "nept" ||
          heroinput == "tuna"
        ) {
          const wordsArray = [
            //Hearty
            "Baseball Zombie",
            "Rolling Stone",
            "Conehead",
            "Team Mascot",
            "Medic",
            "Arm Wrestler",
            "Camel Crossing",
            "Flag Zombie",
            "Terrify",
            "Trash Can Zombie",
            "Buckethead",
            "Ra Zombie",
            "Cone Zone",
            "Celestial Custodian",
            "Screen Door Zombie",
            "Healthy Treat",
            "Zombie Middle Manager",
            "Leftovers",
            "Sumo Wrestler",
            "Zombie Coach",
            "Monster Mash",
            "Knight of the Living Dead",
            "Rodeo Gargantuar",
            "Escape through Time",
            "Cosmic Sports Star",
            "Primeval Yeti",
            "Lost Colosseum",
            "Landscaper",
            "Weed Spray",
            "All-Star Zombie",
            "Coffee Zombie",
            "Black Hole",
            "Genetic Experiment",
            "Planetary Gladiator",
            "Jurassic Fossilhead",
            "Knockout",
            "Turquoise Skull Zombie",
            "Zombie King",
            "Undying Pharaoh",
            "Wannabe hero",
            "Intergalactic Warlord",
            "Zombot Battlecruiser 5000",
            "Stompadon",
            "Chum Champion",
            "Zombology Teacher",
            "Gargologist",
            "Turkey Rider",
            "Going Viral",
            "Bonus Track Buckethead",
            "Defensive End",
            //Sneaky
            "Imp",
            "Mini-Ninja",
            "Smoke Bomb",
            "Fishy Imp",
            "Smelly Zombie",
            "Headstone Carver",
            "Zombie Chicken",
            "Hot Dog Imp",
            "Swashbuckler Zombie",
            "Backyard Bounce",
            "Stealthy Imp",
            "Firefighter",
            "Graveyard",
            "Ice Pirate",
            "Frosty Mustache",
            "Swabbie",
            "Barrel of Barrels",
            "Monkey Smuggler",
            "Imp Commander",
            "Barrel Roller Zombie",
            "Surprise Gargantuar",
            "Walrus Rider",
            "Zombot Stomp",
            "Cosmic Imp",
            "Space Pirate",
            "Blowgun Imp",
            "Buried Treasure",
            "Toxic Waste Imp",
            "Line Dancing Zombie",
            "Pogo Bouncer",
            "Tomb Raiser Zombie",
            "Ducky Tube Zombie",
            "Dr. Spacetime",
            "Laser Base Alpha",
            "Cursed Gargolith",
            "Excavator Zombie",
            "Unthawed Viking",
            "Mixed-Up Gravedigger",
            "Zombot Sharktronic Sub",
            "Zombot Plank Walker",
            "Space Cowboy",
            "Cryo-Yeti",
            "Zombot Aerostatic Gondola",
            "Raiding Raptor",
            "Imposter",
            "Fire Rooster",
            "Imp-Throwing Imp",
            "Captain Flameface",
            "Zombie High Diver",
            "Trapper Zombie",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`WheelNeptuna Deck`)
            .setDescription(
              `Here is your wheel for Neptuna
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "pb" ||
          heroinput == "professor" ||
          heroinput == "brainstorm" ||
          heroinput == "professor brainstorm" ||
          heroinput == "professorbrainstorm"
        ) {
          const wordsArray = [
            //Crazy
            "Backup Dancer",
            "Bungee Plumber",
            "Cuckoo Zombie",
            "Disco Zombie",
            "Flamenco Zombie",
            "Tennis Champ",
            "Unlife of the Party",
            "Conga Zombie",
            "Newspaper Zombie",
            "Cakesplosion",
            "Orchestra Conductor",
            "Foot Soldier Zombie",
            "Loose Cannon",
            "Meteor Z",
            "Space Ninja",
            "Mystery Egg",
            "Sugary Treat",
            "Trapper Territory",
            "Exploding Imp",
            "Jester",
            "Zombot's Wrath",
            "The Chickening",
            "Imp-Throwing Gargantuar",
            "Final Mission",
            "Cosmic Dancer",
            "Gizzard Lizard",
            "Disco Dance Floor",
            "Aerobics Instructor",
            "Abracadaver",
            "Fireworks Zombie",
            "Disco-Tron 3000",
            "Disco-Naut",
            "Moon Base Z",
            "Gas Giant",
            "Quickdraw Con Man",
            "Grave Robber",
            "Zombie's Best Friend",
            "Barrel of Deadbeards",
            "Valkyrie",
            "Gargantuars' Feast",
            "Quasar Wizard",
            "Binary Stars",
            "Tankylosaurus",
            "Headhunter",
            "Exploding Fruitcake",
            "Unexpected Gifts",
            "Stupid Cupid",
            "Frankentuar",
            "Gargantuar-Throwing Imp",
            "Hippity Hop Gargantuar",
            //Brainy
            "Cardboard Robot Zombie",
            "Paparazzi Zombie",
            "Lurch for Lunch",
            "Fun-Dead Raiser",
            "Drum Major",
            "Chimney Sweep",
            "Beam Me Up",
            "Cell Phone Zombie",
            "Pool Shark",
            "Zombot Drone Engineer",
            "Brain Vendor",
            "Mountain Climber",
            "Cryo-Brain",
            "Medulla Nebula",
            "Moonwalker",
            "Copter Commando",
            "Mustache Waxer",
            "Pirate's Booty",
            "Gentleman Zombie",
            "Kite Flyer",
            "Gadget Scientist",
            "Hail-a-Copter",
            "Wizard Gargantuar",
            "Cosmic Scientist",
            "Triplication",
            "Zom-Blob",
            "Mustache Monument",
            "Electrician",
            "Rocket Science",
            "Mad Chemist",
            "Portal Technician",
            "Neutron Imp",
            "Transformation Station",
            "Wormhole Gatekeeper",
            "Evolutionary Leap",
            "Parasol Zombie",
            "Duckstache",
            "Teleport",
            "Shieldcrusher Viking",
            "Trickster",
            "Interdimensional Zombie",
            "Teleportation Zombie",
            "Gargantuar Mime",
            "Zombot Dinotronic Mechasaur",
            "Leprechaun Imp",
            "Regifting Zombie",
            "Trick-or-Treater",
            "Thinking Cap",
            "Kitchen Sink Zombie",
            "Bad Moon Rising",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Professor Brainstorm Deck`)
            .setDescription(
              `Here is your wheel for Professor Brainstorm
 **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "rb" ||
          heroinput == "rustbolt" ||
          heroinput == "rust" ||
          heroinput == "bolt" ||
          heroinput == "rusty" ||
          heroinput == "rust bolt"
        ) {
          const wordsArray = [
            //Hearty
            "Baseball Zombie",
            "Rolling Stone",
            "Conehead",
            "Team Mascot",
            "Medic",
            "Arm Wrestler",
            "Camel Crossing",
            "Flag Zombie",
            "Terrify",
            "Trash Can Zombie",
            "Buckethead",
            "Ra Zombie",
            "Cone Zone",
            "Celestial Custodian",
            "Screen Door Zombie",
            "Healthy Treat",
            "Zombie Middle Manager",
            "Leftovers",
            "Sumo Wrestler",
            "Zombie Coach",
            "Monster Mash",
            "Knight of the Living Dead",
            "Rodeo Gargantuar",
            "Escape through Time",
            "Cosmic Sports Star",
            "Primeval Yeti",
            "Lost Colosseum",
            "Landscaper",
            "Weed Spray",
            "All-Star Zombie",
            "Coffee Zombie",
            "Black Hole",
            "Genetic Experiment",
            "Planetary Gladiator",
            "Jurassic Fossilhead",
            "Knockout",
            "Turquoise Skull Zombie",
            "Zombie King",
            "Undying Pharaoh",
            "Wannabe hero",
            "Intergalactic Warlord",
            "Zombot Battlecruiser 5000",
            "Stompadon",
            "Chum Champion",
            "Zombology Teacher",
            "Gargologist",
            "Turkey Rider",
            "Going Viral",
            "Bonus Track Buckethead",
            "Defensive End",
            //Brainy
            "Cardboard Robot Zombie",
            "Paparazzi Zombie",
            "Lurch for Lunch",
            "Fun-Dead Raiser",
            "Drum Major",
            "Chimney Sweep",
            "Beam Me Up",
            "Cell Phone Zombie",
            "Pool Shark",
            "Zombot Drone Engineer",
            "Brain Vendor",
            "Mountain Climber",
            "Cryo-Brain",
            "Medulla Nebula",
            "Moonwalker",
            "Copter Commando",
            "Mustache Waxer",
            "Pirate's Booty",
            "Gentleman Zombie",
            "Kite Flyer",
            "Gadget Scientist",
            "Hail-a-Copter",
            "Wizard Gargantuar",
            "Cosmic Scientist",
            "Triplication",
            "Zom-Blob",
            "Mustache Monument",
            "Electrician",
            "Rocket Science",
            "Mad Chemist",
            "Portal Technician",
            "Neutron Imp",
            "Transformation Station",
            "Wormhole Gatekeeper",
            "Evolutionary Leap",
            "Parasol Zombie",
            "Duckstache",
            "Teleport",
            "Shieldcrusher Viking",
            "Trickster",
            "Interdimensional Zombie",
            "Teleportation Zombie",
            "Gargantuar Mime",
            "Zombot Dinotronic Mechasaur",
            "Leprechaun Imp",
            "Regifting Zombie",
            "Trick-or-Treater",
            "Thinking Cap",
            "Kitchen Sink Zombie",
            "Bad Moon Rising",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Rustbolt Deck`)
            .setDescription(
              `Here is your wheel for Rustbolt
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "sm" ||
          heroinput == "smash" ||
          heroinput == "smash" ||
          heroinput == "the smash" ||
          heroinput == "thesmash"
        ) {
          const wordsArray = [
            //Hearty
            "Baseball Zombie",
            "Rolling Stone",
            "Conehead",
            "Team Mascot",
            "Medic",
            "Arm Wrestler",
            "Camel Crossing",
            "Flag Zombie",
            "Terrify",
            "Trash Can Zombie",
            "Buckethead",
            "Ra Zombie",
            "Cone Zone",
            "Celestial Custodian",
            "Screen Door Zombie",
            "Healthy Treat",
            "Zombie Middle Manager",
            "Leftovers",
            "Sumo Wrestler",
            "Zombie Coach",
            "Monster Mash",
            "Knight of the Living Dead",
            "Rodeo Gargantuar",
            "Escape through Time",
            "Cosmic Sports Star",
            "Primeval Yeti",
            "Lost Colosseum",
            "Landscaper",
            "Weed Spray",
            "All-Star Zombie",
            "Coffee Zombie",
            "Black Hole",
            "Genetic Experiment",
            "Planetary Gladiator",
            "Jurassic Fossilhead",
            "Knockout",
            "Turquoise Skull Zombie",
            "Zombie King",
            "Undying Pharaoh",
            "Wannabe hero",
            "Intergalactic Warlord",
            "Zombot Battlecruiser 5000",
            "Stompadon",
            "Chum Champion",
            "Zombology Teacher",
            "Gargologist",
            "Turkey Rider",
            "Going Viral",
            "Bonus Track Buckethead",
            "Defensive End",
            //Beastly
            "Skunk Punk",
            "Pied Piper",
            "Zookeeper",
            "Dolphin Rider",
            "Locust Swarm",
            "Dog Walker",
            "Nibble",
            "Snorkel Zombie",
            "Yeti Lunchbox",
            "Haunting Zombie",
            "Loudmouth",
            "B-flat",
            "Total Eclipse",
            "Alien Ooze",
            "Surfer Zombie",
            "Haunting Ghost",
            "Goat",
            "Vengeful Cyborg",
            "Squirrel Herder",
            "Vimpire",
            "Vitamin Z",
            "Kangaroo Rider",
            "Smashing Gargantuar",
            "Biodome Botanist",
            "Cosmic Yeti",
            "Primordial Cheese Shover",
            "Killer Whale",
            "Cat Lady",
            "Zombie Yeti",
            "Deep Sea Gargantuar",
            "Maniacal Laugh",
            "Cheese Cutter",
            "Cyborg Zombie",
            "Area 22",
            "Extinction Event",
            "Ancient Vimpire",
            "Hunting Grounds",
            "Nurse Gargantuar",
            "Octo Zombie",
            "Zombot 1000",
            "Interstellar Bounty Hunter",
            "Supernova Gargantuar",
            "Mondo Bronto",
            "Gargantuar-Throwing Gargantuar",
            "Fraidy Cat",
            "Secret Agent",
            "Energy Drink Zombie",
            "Synchronized Swimmer",
            "Hover-Goat 3000",
            "Overstuffed Zombie",
            "Sneezing Zombie",
            "King of the Grill",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Smash Deck`)
            .setDescription(
              `Here is your wheel for Smash
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
        if (
          heroinput == "zm" ||
          heroinput == "zmech" ||
          heroinput == "mech" ||
          heroinput == "z-mech"
        ) {
          const wordsArray = [
            //Hearty
            "Baseball Zombie",
            "Rolling Stone",
            "Conehead",
            "Team Mascot",
            "Medic",
            "Arm Wrestler",
            "Camel Crossing",
            "Flag Zombie",
            "Terrify",
            "Trash Can Zombie",
            "Buckethead",
            "Ra Zombie",
            "Cone Zone",
            "Celestial Custodian",
            "Screen Door Zombie",
            "Healthy Treat",
            "Zombie Middle Manager",
            "Leftovers",
            "Sumo Wrestler",
            "Zombie Coach",
            "Monster Mash",
            "Knight of the Living Dead",
            "Rodeo Gargantuar",
            "Escape through Time",
            "Cosmic Sports Star",
            "Primeval Yeti",
            "Lost Colosseum",
            "Landscaper",
            "Weed Spray",
            "All-Star Zombie",
            "Coffee Zombie",
            "Black Hole",
            "Genetic Experiment",
            "Planetary Gladiator",
            "Jurassic Fossilhead",
            "Knockout",
            "Turquoise Skull Zombie",
            "Zombie King",
            "Undying Pharaoh",
            "Wannabe Hero",
            "Intergalactic Warlord",
            "Zombot Battlecruiser 5000",
            "Stompadon",
            "Chum Champion",
            "Zombology Teacher",
            "Gargologist",
            "Turkey Rider",
            "Going Viral",
            "Bonus Track Buckethead",
            "Defensive End",
            //Crazy
            "Backup Dancer",
            "Bungee Plumber",
            "Cuckoo Zombie",
            "Disco Zombie",
            "Flamenco Zombie",
            "Tennis Champ",
            "Unlife of the Party",
            "Conga Zombie",
            "Newspaper Zombie",
            "Cakesplosion",
            "Orchestra Conductor",
            "Foot Soldier Zombie",
            "Loose Cannon",
            "Meteor Z",
            "Space Ninja",
            "Mystery Egg",
            "Sugary Treat",
            "Trapper Territory",
            "Exploding Imp",
            "Jester",
            "Zombot's Wrath",
            "The Chickening",
            "Imp-Throwing Gargantuar",
            "Final Mission",
            "Cosmic Dancer",
            "Gizzard Lizard",
            "Disco Dance Floor",
            "Aerobics Instructor",
            "Abracadaver",
            "Fireworks Zombie",
            "Disco-Tron 3000",
            "Disco-Naut",
            "Moon Base Z",
            "Gas Giant",
            "Quickdraw Con Man",
            "Grave Robber",
            "Zombie's Best Friend",
            "Barrel of Deadbeards",
            "Valkyrie",
            "Gargantuars' Feast",
            "Quasar Wizard",
            "Binary Stars",
            "Tankylosaurus",
            "Headhunter",
            "Exploding Fruitcake",
            "Unexpected Gifts",
            "Stupid Cupid",
            "Frankentuar",
            "Gargantuar-Throwing Imp",
            "Hippity Hop Gargantuar",
          ];
          let randomWords = [];
          let remainingWords = [...wordsArray];
          for (let i = 0; i != number; i++) {
            const randomIndex = Math.floor(
              Math.random() * remainingWords.length
            );
            const selectedWord = remainingWords.splice(randomIndex, 1)[0]; // Remove the word from the remainingWords array
            randomWords.push(selectedWord);
          }
          let embed = new EmbedBuilder()
            .setTitle(`Wheel Zmech Deck`)
            .setDescription(
              `Here is your wheel for Zmech
         **${randomWords.join("\n")}**`
            )
            .setColor("Random");
          await interaction.followUp({ embeds: [embed],flags: MessageFlags.Ephemeral });
        }
      }
    }

    if (interaction.type === InteractionType.MessageComponent) {
      if (interaction.customId === "bug-report") {
        const modalInput = new TextInputBuilder()
          .setCustomId("bug-report-input")
          .setLabel("Describe the bug")
          .setStyle(TextInputStyle.Paragraph);

        const row = new ActionRowBuilder({
          components: [modalInput],
        });

        const modal = new ModalBuilder()
          .setTitle("Bug Report")
          .setCustomId("bug-report-modal")
          .addComponents(row);

        await interaction.showModal(modal);
      }
      //Deck Search
      if (interaction.customId === "deck-search") {
        const modalInput = new TextInputBuilder()
          .setCustomId("deck-search-input")
          .setLabel("input search term")
          .setStyle(TextInputStyle.Short);

        const row = new ActionRowBuilder({
          components: [modalInput],
        });
        const modal = new ModalBuilder()
          .setTitle("Deck Search")
          .setCustomId("Deck-search-modal")
          .addComponents(row);
        await interaction.showModal(modal);
      }
      //Card Search
      if (interaction.customId === "card-search") {
        const modalInput = new TextInputBuilder()
          .setCustomId("card-search-input")
          .setLabel("input search term")
          .setStyle(TextInputStyle.Short);

        const row = new ActionRowBuilder({
          components: [modalInput],
        });
        const modal = new ModalBuilder()
          .setTitle("Card Search")
          .setCustomId("Card-search-modal")
          .addComponents(row);
        await interaction.showModal(modal);
      }
      //8 Ball
      if (interaction.customId === "8-ball") {
        const modalInput = new TextInputBuilder()
          .setCustomId("8ball-input")
          .setLabel("input question")
          .setStyle(TextInputStyle.Short);

        const row = new ActionRowBuilder({
          components: [modalInput],
        });
        const modal = new ModalBuilder()
          .setTitle("8 Ball")
          .setCustomId("8ball-modal")
          .addComponents(row);
        await interaction.showModal(modal);
      }
      //Wheel
      if (interaction.customId === "wheel-spin") {
        const modalInput = new TextInputBuilder()
          .setCustomId("wheel-input")
          .setLabel("input Hero")
          .setStyle(TextInputStyle.Short);
        const wheelInput = new TextInputBuilder()
          .setCustomId("number-input")
          .setLabel("input number in range 1-40")
          .setStyle(TextInputStyle.Short);
        const row = new ActionRowBuilder({
          components: [modalInput],
        });
        const row2 = new ActionRowBuilder({
          components: [wheelInput],
        });
        const modal = new ModalBuilder()
          .setTitle("Wheel Spin")
          .setCustomId("wheel-modal")
          .addComponents(row, row2);
        await interaction.showModal(modal);
      }
      //Random Deck
      if (interaction.customId === "random-deck") {
        const modalInput = new TextInputBuilder()
          .setCustomId("random-decks-input")
          .setLabel("input hero NA for none")
          .setStyle(TextInputStyle.Short);
        const hero = new ActionRowBuilder({
          components: [modalInput],
        });
        const modal = new ModalBuilder()
          .setTitle("Random Decks")
          .setCustomId("random-decks-modal")
          .addComponents(hero);
        await interaction.showModal(modal);
      }
      if (interaction.customId === "suggestnew") {
        const deckName = new TextInputBuilder()
          .setCustomId("deckName")
          .setLabel("Deck name")
          .setStyle(TextInputStyle.Short);
        const deckHero = new TextInputBuilder()
          .setCustomId("deckHero")
          .setLabel("Deck hero")
          .setStyle(TextInputStyle.Short);
        const deckDesc = new TextInputBuilder()
          .setCustomId("deckDesc")
          .setLabel("Deck Description")
          .setPlaceholder(`Description:
Aliases: 
Cost:
Type:
Archetype:`)
          .setStyle(TextInputStyle.Paragraph);
        const deckCred = new TextInputBuilder()
          .setCustomId("deckCred")
          .setLabel("Creators Name: Put Names Only")
          .setStyle(TextInputStyle.Short);
        const deckLink = new TextInputBuilder()
          .setCustomId("deckLink")
          .setLabel("Deck Image Please Input a link/url")
          .setPlaceholder("should contain .png, .jpg, .wepb, or .jpeg")
          .setStyle(TextInputStyle.Short);
        const dNames = new ActionRowBuilder({
          components: [deckName],
        });
        const dHeroes = new ActionRowBuilder({
          components: [deckHero],
        });
        const dDescs = new ActionRowBuilder({
          components: [deckDesc],
        });
        const dCreds = new ActionRowBuilder({
          components: [deckCred],
        });
        const dLinks = new ActionRowBuilder({
          components: [deckLink],
        });
        const deckSuggest = new ModalBuilder()
          .setTitle("Deck Suggestions")
          .setCustomId("dSugg")
          .addComponents(dNames, dHeroes, dDescs, dCreds, dLinks);

        await interaction.showModal(deckSuggest);
      }
      if (interaction.customId === "suggestup") {
        const upName = new TextInputBuilder()
          .setCustomId("upName")
          .setLabel("Deck name")
          .setStyle(TextInputStyle.Short);
        const upHero = new TextInputBuilder()
          .setCustomId("upHero")
          .setLabel("Deck hero")
          .setStyle(TextInputStyle.Short);
        const upDesc = new TextInputBuilder()
          .setCustomId("upDesc")
          .setLabel("Deck Description and Updated Deck Cost")
          .setStyle(TextInputStyle.Paragraph);
        const upCreds = new TextInputBuilder()
          .setCustomId("upCredits")
          .setLabel("Deck Creator Name")
          .setStyle(TextInputStyle.Short);
        const upLink = new TextInputBuilder()
          .setCustomId("upLink")
          .setLabel("Deck Image Please Input a link/url")
          .setStyle(TextInputStyle.Short);
        const upNames = new ActionRowBuilder({
          components: [upName],
        });
        const upHeroes = new ActionRowBuilder({
          components: [upHero],
        });
        const upDescs = new ActionRowBuilder({
          components: [upDesc],
        });
        const upLinks = new ActionRowBuilder({
          components: [upLink],
        });
        const upCredits = new ActionRowBuilder({
          components: [upCreds],
        });
        const upSugg = new ModalBuilder()
          .setTitle("Deck Updates")
          .setCustomId("dUps")
          .addComponents(upNames, upHeroes, upDescs, upCredits, upLinks);

        await interaction.showModal(upSugg);
      }

      if (!interaction.customId.startsWith("hangman-")) return;

      const type = interaction.customId.split("-").at(-1);

      const modal = new ModalBuilder()
        .setTitle(`Guess a ${type}`)
        .setCustomId(`hangman-guess-modal-${type}`);

      const modalInput = new TextInputBuilder()
        .setCustomId(`hangman-${type}-input-field`)
        .setLabel(`What ${type} would you like to guess?`)
        .setMinLength(type === "letter" ? 1 : 2)
        .setMaxLength(type === "letter" ? 1 : 25)
        .setStyle(TextInputStyle.Short);

      const row = new ActionRowBuilder({
        components: [modalInput],
      });

      modal.addComponents(row);

      await interaction.showModal(modal);
    }
  },
};
