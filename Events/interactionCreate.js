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
module.exports = {
  name: "interactionCreate",
  async run(interaction) {
    const client = interaction.client;
    if (interaction.type === InteractionType.ModalSubmit) {
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
