const {
  ActionRowBuilder,
  EmbedBuilder,
  InteractionType,
  ModalBuilder,
  TextInputBuilder,
  ButtonBuilder,
  ButtonStyle,
  TextInputStyle,
  MessageFlags,
} = require("discord.js");
const { ascii, hangmanGuesses } = require("../Utilities/hangman");
const db = require("../index.js");
const FuzzySearch = require("fuzzy-search");
const discord = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setLabel("Discord server")
    .setStyle(ButtonStyle.Link)
    .setURL("https://discord.gg/2NSwt96vmS")
    .setEmoji("<:batman:1373302805326200842>")
);
module.exports = {
  name: "interactionCreate",
  async run(interaction) {
    const client = interaction.client;
    if (interaction.type === InteractionType.ModalSubmit) {
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
          console.error("Error while sending bug report:", e); // Log the error for debugging
          await interaction.followUp({
            content:
              "Oops, something went wrong while sending the bug report. Please try again later.",
            flags: MessageFlags.Ephemeral,
          });
        }
      }
      //Deck Search
      else if (interaction.customId === "Deck-search-modal") {
        await interaction.deferUpdate();
        const reason =
          interaction.fields.getTextInputValue("deck-search-input");
        const Ccommands = Array.from(client.commands.values());
        const commands = Ccommands.filter((command) => {
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
        const decks = [];
        for (const command of commands) {
          decks.push(command.name);
        }
        decks.sort((a, b) => a.localeCompare(b));
        const searcher = new FuzzySearch(decks, {
          caseSensitive: false,
        });
        const result = searcher.search(reason);
        try {
          let toBuildString = "";
          for (const command of result) {
            toBuildString += `\n<@1043528908148052089> **${command}**`;
          }
          const embed = new EmbedBuilder()
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
          return interaction.followUp({
            embeds: [embed],
            flags: MessageFlags.Ephemeral,
          });
        } catch (err) {
          console.error(err);
          const errEmbed = new EmbedBuilder()
            .setTitle("❌ | Error")
            .setColor("Red")
            .setDescription(`Too many search results, please be more specific
              Note: There are ${result.length} total results for ${reason} in Tbot`);
          return interaction.followUp({
            embeds: [errEmbed],
            flags: MessageFlags.Ephemeral,
          });
        }
      }
      //Card Search
      else if (interaction.customId === "Card-search-modal") {
        await interaction.deferUpdate();
        const Ccommands = Array.from(client.commands.values());
        const commands = Ccommands.filter((command) => {
          if (
            command.category == "Zombie Cards" ||
            command.category == "Tricks Phase" ||
            command.category == "Plant Cards"
          ) {
            return command.name;
          }
        });
        const words = [];
        for (const command of commands) {
          words.push(command.name);
        }
        words.sort((a, b) => a.localeCompare(b));
        const searcher = new FuzzySearch(words, {
          caseSensitive: false,
        });
        const reason = await interaction.fields.getTextInputValue(
          "card-search-input"
        );
        const result = searcher.search(reason);
        let toBuildString = "";
        for (const command of result) {
          toBuildString += `\n<@1043528908148052089> **${command}**`;
        }
        try {
          const embed = new EmbedBuilder()
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
          return interaction.followUp({
            embeds: [embed],
            flags: MessageFlags.Ephemeral,
          });
        } catch (e) {
          console.error(e);
          const errEmbed = new EmbedBuilder()
            .setTitle("❌ | Error")
            .setColor("Red")
            .setDescription(`Too many search results, please be more specific`);
          return interaction.followUp({
            embeds: [errEmbed],
            flags: MessageFlags.Ephemeral,
          });
        }
      }
      //8 Ball
      else if (interaction.customId === "8ball-modal") {
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
        const reason = await interaction.fields.getTextInputValue(
          "8ball-input"
        );
        const embed = new EmbedBuilder()
          .setTitle(`:8ball: ${reason}`)
          .setDescription(
            `:8ball: says  ${ball[Math.floor(Math.random() * ball.length)]}`
          )
          .setColor("Random");

        return interaction.followUp({
          embeds: [embed],
          flags: MessageFlags.Ephemeral,
        });
      }
      //Hangman
      else if (interaction.customId.startsWith("hangman-")) {
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
                : (() => {
                    const lettersValue = game.letters.length
                      ? game.letters
                          .map((v) => `\`${v}\``)
                          .sort((a, b) => a.localeCompare(b))
                          .join(", ")
                      : "`N/A`";
                    return lettersValue;
                  })(),
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
                    .sort((a, b) => a.localeCompare(b))
                    .join(", ")
                : (() => {
                    const wordsValue = game.words.length
                      ? game.words.map((v) => `\`${v}\``).join(", ")
                      : "`N/A`";
                    return wordsValue;
                  })(),
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
              ? (() => {
                  const newGuesses = game.word.includes(guess)
                    ? game.guesses
                    : game.guesses + 1;
                  return newGuesses;
                })()
              : game.guesses + 1,

          letters:
            guess.length === 1
              ? [...game.letters, guess].sort((a, b) => a.localeCompare(b))
              : game.letters,
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
      else if (interaction.customId === "random-decks-modal") {
        await interaction.deferUpdate();
        const heroInput = interaction.fields
          .getTextInputValue("random-decks-input")
          .toLowerCase();
        const heroDeckTables = {
          // Beta Carrotina
          bc: "bcdecks",
          betacarrotina: "bcdecks",
          beta: "bcdecks",
          carrotina: "bcdecks",
          carrot: "bcdecks",
          "beta carrotina": "bcdecks",

          // Citron
          ct: "ctdecks",
          citron: "ctdecks",
          tron: "ctdecks",

          // Captain Combustible
          cc: "ccdecks",
          "captain combustible": "ccdecks",
          captain: "ccdecks",
          combustible: "ccdecks",
          captaincombustible: "ccdecks",

          // Chompzilla
          cz: "czdecks",
          chompzilla: "czdecks",
          chomp: "czdecks",
          zilla: "czdecks",

          // Grass Knuckles
          gk: "gkdecks",
          "grass knuckles": "gkdecks",
          grass: "gkdecks",
          knuckles: "gkdecks",

          // Green Shadow
          gs: "gsdecks",
          "green shadow": "gsdecks",
          green: "gsdecks",
          shadow: "gsdecks",

          // Nightcap
          nc: "ncdecks",
          nightcap: "ncdecks",
          cap: "ncdecks",
          night: "ncdecks",
          "night cap": "ncdecks",

          // Rose
          ro: "rodecks",
          rose: "rodecks",

          // Solar Flare
          sf: "sfdecks",
          "solar flare": "sfdecks",
          solar: "sfdecks",
          flare: "sfdecks",
          solarflare: "sfdecks",

          // Spudow
          sp: "spdecks",
          spudow: "spdecks",
          spud: "spdecks",
          dow: "spdecks",

          // Wall-Knight
          wk: "wkdecks",
          "wall-knight": "wkdecks",
          wall: "wkdecks",
          knight: "wkdecks",
          wallknight: "wkdecks",
          "wall knight": "wkdecks",

          // Brain Freeze
          bf: "bfdecks",
          "brain freeze": "bfdecks",
          brain: "bfdecks",
          freeze: "bfdecks",
          brainfreeze: "bfdecks",

          // Electric Boogaloo
          eb: "ebdecks",
          "electric boogaloo": "ebdecks",
          electric: "ebdecks",
          boogaloo: "ebdecks",

          // Huge-Gigantacus
          hg: "hgdecks",
          "huge-giganticus": "hgdecks",
          huge: "hgdecks",
          giganticus: "hgdecks",
          "huge giganticus": "hgdecks",

          // Impfinity
          if: "ifdecks",
          impfinity: "ifdecks",
          imp: "ifdecks",
          finity: "ifdecks",

          // Immorticia
          im: "imdecks",
          immorticia: "imdecks",
          immort: "imdecks",
          ticia: "imdecks",

          // Neptuna
          nt: "ntdecks",
          neptuna: "ntdecks",
          nept: "ntdecks",
          tuna: "ntdecks",

          // Professor Brainstorm
          pb: "pbdecks",
          "professor brainstorm": "pbdecks",
          professor: "pbdecks",
          brainstorm: "pbdecks",

          // Rustbolt
          rb: "rbdecks",
          rustbolt: "rbdecks",
          rust: "rbdecks",
          bolt: "rbdecks",
          rusty: "rbdecks",
          "rust bolt": "rbdecks",

          // The Smash
          sm: "smdecks",
          "the smash": "smdecks",
          smash: "smdecks",
          thesmash: "smdecks",

          // Z-Mech
          zm: "zmdecks",
          "z-mech": "zmdecks",
          zmech: "zmdecks",
          mech: "zmdecks",
        };
        const tableName = heroDeckTables[heroInput];
        if (heroInput == "na") {
          try {
            const [result] = await db.query(`select * from bcdecks bc
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
            const deck = [];
            for (const key in result[0]) {
              const value = result[0][key];
              if (
                (value.includes(".png") ||
                  value.includes(".jpg") ||
                  value.includes(".jpeg") ||
                  value.includes(".webp")) &&
                !value.includes("budget")
              ) {
                deck.push(value);
              }
            }
            const embed = new EmbedBuilder()
              .setTitle("Random Deck")
              .setDescription("Here is your random deck")
              .setColor("Random")
              .setImage(deck[Math.floor(Math.random() * deck.length)]);

            return await interaction.followUp({
              embeds: [embed],
              flags: MessageFlags.Ephemeral,
            });
          } catch (err) {
            console.error(err);
            return interaction.followUp({
              content: "Oops, something went wrong. Please try again later.",
              flags: MessageFlags.Ephemeral,
            });
          }
        } else if (heroInput == "plants") {
          try {
            const [result] = await db.query(`select * from bcdecks bc
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
            const deck = [];
            for (const key in result[0]) {
              const value = result[0][key];
              if (
                (value.includes(".png") ||
                  value.includes(".jpg") ||
                  value.includes(".jpeg") ||
                  value.includes(".webp")) &&
                !value.includes("budget")
              ) {
                deck.push(value);
              }
            }
            const embed = new EmbedBuilder()
              .setTitle("Random Plant Deck")
              .setDescription(`Here is your random plant Deck`)
              .setColor("Random")
              .setImage(deck[Math.floor(Math.random() * deck.length)]);

            return await interaction.followUp({
              embeds: [embed],
              flags: MessageFlags.Ephemeral,
            });
          } catch (err) {
            console.error(err);
            return interaction.followUp({
              content: "Oops, something went wrong. Please try again later.",
              flags: MessageFlags.Ephemeral,
            });
          }
        } else if (heroInput == "zombies") {
          try {
            const [result] = await db.query(`select * from bfdecks bf
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
            const deck = [];
            for (const key in result[0]) {
              const value = result[0][key];
              if (
                (value.includes(".png") ||
                  value.includes(".jpg") ||
                  value.includes(".jpeg") ||
                  value.includes(".webp")) &&
                !value.includes("budget")
              ) {
                deck.push(value);
              }
            }
            const embed = new EmbedBuilder()
              .setTitle("Random Zombie Deck")
              .setDescription(`Here is your random Zombie Deck`)
              .setColor("Random")
              .setImage(deck[Math.floor(Math.random() * deck.length)]);

            return await interaction.followUp({
              embeds: [embed],
              flags: MessageFlags.Ephemeral,
            });
          } catch (err) {
            console.error(err);
            return interaction.followUp({
              content: "Oops, something went wrong. Please try again later.",
              flags: MessageFlags.Ephemeral,
            });
          }
        } else if (!tableName) {
          return interaction.followUp({
            content: "Invalid hero name. Please try again.",
            flags: MessageFlags.Ephemeral,
          });
        }

        try {
          /**
           * The getRandomDeck function gets a random deck for the user to play
           * @param {*} tableName - The name of the table
           * @returns - The users deck
           */
          async function getRandomDeck(tableName) {
            const [result] = await db.query(
              `SELECT * FROM ${tableName} WHERE deckinfo = 'image link:'`
            );
            const deck = [];
            for (const key in result[0]) {
              const value = result[0][key];
              console.log("Checking value:", value);
              if (
                (value.includes(".png") ||
                  value.includes(".jpg") ||
                  value.includes(".jpeg") ||
                  value.includes(".webp")) &&
                !value.includes("budget")
              ) {
                deck.push(value);
              }
            }
            console.log("Filtered Deck Array:", deck);

            if (deck.length === 0) {
              throw new Error("No valid decks found.");
            }

            return deck;
          }

          try {
            const randomDeck = await getRandomDeck(tableName);
            console.log(randomDeck);
            const embed = new EmbedBuilder()
              .setTitle(
                `Random ${
                  heroInput.charAt(0).toUpperCase() + heroInput.slice(1)
                } Deck`
              )
              .setDescription(`Here is your random ${heroInput} deck`)
              .setColor("Random")
              .setImage(
                randomDeck[Math.floor(Math.random() * randomDeck.length)]
              );
            await interaction.followUp({
              embeds: [embed],
              flags: MessageFlags.Ephemeral,
            });
          } catch (err) {
            console.error(err);
            await interaction.followUp({
              content: "No valid decks found. Please try again later.",
              flags: MessageFlags.Ephemeral,
            });
          }
        } catch (err) {
          console.error(err);
          await interaction.followUp({
            content: "Oops, something went wrong. Please try again later.",
            flags: MessageFlags.Ephemeral,
          });
        }
      }
      //wheel modal
      else if (interaction.customId === "wheel-modal") {
        await interaction.deferUpdate();
        const hero = await interaction.fields.getTextInputValue("wheel-input");
        const number = await interaction.fields.getTextInputValue(
          "number-input"
        );
        const gurdianWords = [
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
        const smartyWords = [
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
        const kabloomWords = [
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
        const megaGrowWords = [
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
        const solarWords = [
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
        const sneakyWords = [
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
        const beastlyWords = [
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
        const crazyWords = [
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
        const brainyWords = [
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
        const heartyWords = [
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
        ];
        if (number < 1 || number > 40) {
          return interaction.followUp({
            content: "Please input a number between 1-40",
            flags: MessageFlags.Ephemeral,
          });
        } else if (isNaN(number)) {
          return interaction.followUp({
            content: "please input a number",
            flags: MessageFlags.Ephemeral,
          });
        }
        const heroWordsMap = {
          // Beta Carrotina
          betacarrotina: gurdianWords.concat(smartyWords),
          bc: gurdianWords.concat(smartyWords),
          beta: gurdianWords.concat(smartyWords),
          carrotina: gurdianWords.concat(smartyWords),
          carrot: gurdianWords.concat(smartyWords),
          "beta carrotina": gurdianWords.concat(smartyWords),

          // Citron
          citron: gurdianWords.concat(smartyWords),
          ct: gurdianWords.concat(smartyWords),
          tron: gurdianWords.concat(smartyWords),

          // Captain Combustible
          "captain combustible": kabloomWords.concat(megaGrowWords),
          cc: kabloomWords.concat(megaGrowWords),
          captain: kabloomWords.concat(megaGrowWords),
          combustible: kabloomWords.concat(megaGrowWords),
          captaincombustible: kabloomWords.concat(megaGrowWords),

          // Chompzilla
          chompzilla: megaGrowWords.concat(solarWords),
          cz: megaGrowWords.concat(solarWords),
          chomp: megaGrowWords.concat(solarWords),
          zilla: megaGrowWords.concat(solarWords),

          // Grass Knuckles
          "grass knuckles": gurdianWords.concat(megaGrowWords),
          gk: gurdianWords.concat(megaGrowWords),
          grass: gurdianWords.concat(megaGrowWords),
          knuckles: gurdianWords.concat(megaGrowWords),

          // Green Shadow
          "green shadow": megaGrowWords.concat(smartyWords),
          gs: megaGrowWords.concat(smartyWords),
          green: megaGrowWords.concat(smartyWords),
          shadow: megaGrowWords.concat(smartyWords),

          // Nightcap
          nightcap: kabloomWords.concat(smartyWords),
          nc: kabloomWords.concat(smartyWords),
          cap: kabloomWords.concat(smartyWords),
          night: kabloomWords.concat(smartyWords),
          "night cap": kabloomWords.concat(smartyWords),

          // Rose
          rose: smartyWords.concat(solarWords),
          ro: smartyWords.concat(solarWords),

          // Solar Flare
          "solar flare": kabloomWords.concat(solarWords),
          sf: kabloomWords.concat(solarWords),
          solar: kabloomWords.concat(solarWords),
          flare: kabloomWords.concat(solarWords),
          solarflare: kabloomWords.concat(solarWords),

          // Spudow
          spudow: kabloomWords.concat(gurdianWords),
          sp: kabloomWords.concat(gurdianWords),
          spud: kabloomWords.concat(gurdianWords),
          dow: kabloomWords.concat(gurdianWords),

          // Wall-Knight
          "wall-knight": gurdianWords.concat(solarWords),
          wk: gurdianWords.concat(solarWords),
          wall: gurdianWords.concat(solarWords),
          knight: gurdianWords.concat(solarWords),
          wallknight: gurdianWords.concat(solarWords),
          "wall knight": gurdianWords.concat(solarWords),

          // Brain Freeze
          "brain freeze": sneakyWords.concat(beastlyWords),
          bf: sneakyWords.concat(beastlyWords),
          brain: sneakyWords.concat(beastlyWords),
          freeze: sneakyWords.concat(beastlyWords),
          brainfreeze: sneakyWords.concat(beastlyWords),

          // Electric Boogaloo
          "electric boogaloo": beastlyWords.concat(crazyWords),
          eb: beastlyWords.concat(crazyWords),
          electric: beastlyWords.concat(crazyWords),
          boogaloo: beastlyWords.concat(crazyWords),

          // Huge-Gigantacus
          "huge-giganticus": sneakyWords.concat(brainyWords),
          hg: sneakyWords.concat(brainyWords),
          huge: sneakyWords.concat(brainyWords),
          giganticus: sneakyWords.concat(brainyWords),
          "huge giganticus": sneakyWords.concat(brainyWords),

          // Impfinity
          impfinity: sneakyWords.concat(crazyWords),
          if: sneakyWords.concat(crazyWords),
          imp: sneakyWords.concat(crazyWords),
          finity: sneakyWords.concat(crazyWords),

          // Immorticia
          immorticia: beastlyWords.concat(brainyWords),
          im: beastlyWords.concat(brainyWords),
          immort: beastlyWords.concat(brainyWords),
          ticia: beastlyWords.concat(brainyWords),

          // Neptuna
          neptuna: sneakyWords.concat(heartyWords),
          nt: sneakyWords.concat(heartyWords),
          nept: sneakyWords.concat(heartyWords),
          tuna: sneakyWords.concat(heartyWords),

          // Professor Brainstorm
          "professor brainstorm": crazyWords.concat(brainyWords),
          pb: crazyWords.concat(brainyWords),
          professor: crazyWords.concat(brainyWords),
          brainstorm: crazyWords.concat(brainyWords),

          // Rustbolt
          rustbolt: brainyWords.concat(heartyWords),
          rb: 
brainyWords.concat(heartyWords),
          rust: brainyWords.concat(heartyWords),
          bolt: brainyWords.concat(heartyWords),
          rusty: brainyWords.concat(heartyWords),
          "rust bolt": brainyWords.concat(heartyWords),

          // The Smash
          "the smash": beastlyWords.concat(heartyWords),
          sm: beastlyWords.concat(heartyWords),
          smash: beastlyWords.concat(heartyWords),
          thesmash: beastlyWords.concat(heartyWords),

          // Z-Mech
          "z-mech": heartyWords.concat(crazyWords),
          zm: heartyWords.concat(crazyWords),
          zmech: heartyWords.concat(crazyWords),
          mech: heartyWords.concat(crazyWords),
        };
        const heroinput = hero.toLowerCase();
        const wordsArray = heroWordsMap[heroinput];

        if (!wordsArray) {
          return interaction.followUp({
            content: "Invalid hero name. Please try again.",
            flags: MessageFlags.Ephemeral,
          });
        }

        // Generate random words
        const randomWords = [];
        const remainingWords = [...wordsArray];
        for (let i = 0; i < number; i++) {
          const randomIndex = Math.floor(Math.random() * remainingWords.length);
          const selectedWord = remainingWords.splice(randomIndex, 1)[0];
          randomWords.push(selectedWord);
        }

        // Create and send the embed
        const embed = new EmbedBuilder()
          .setTitle(
            `Wheel ${
              heroinput.charAt(0).toUpperCase() + heroinput.slice(1)
            } Deck`
          )
          .setDescription(
            `Here is your wheel deck for ${heroinput}:\n**${randomWords.join(
              "\n"
            )}**`
          )
          .setColor("Random");

        await interaction.followUp({
          embeds: [embed],
          flags: MessageFlags.Ephemeral,
        });
      }
    } else if (interaction.type === InteractionType.MessageComponent) {
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
      else if (interaction.customId === "deck-search") {
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
      else if (interaction.customId === "card-search") {
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
      else if (interaction.customId === "8-ball") {
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
      else if (interaction.customId === "wheel-spin") {
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
      else if (interaction.customId === "random-deck") {
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
    else if (interaction.type === InteractionType.ApplicationCommand) {
      const command = client.slashCommands.get(interaction.commandName);
      console.log("Received command:", interaction.commandName, "Loaded:", !!command);
      if (!command) return;

      try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
      console.error("Error executing command:", interaction.commandName, error);
		}
	}
    }
  },
};
