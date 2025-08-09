const {
  ContainerBuilder,
  SectionBuilder,
  TextDisplayBuilder,
  ThumbnailBuilder,
  MessageFlags,
  SeparatorSpacingSize
} = require("discord.js");
const { sep } = require("path");
module.exports = {
    name: `plantkeeporscrap`, 
    aliases: [`plantkeep`, `plantscrap`, `plantcraft`, `plantkos`, `zombierecycle`], 
    category: `Miscellaneous`,
    run: async (client, message, args) => {
        const container = new ContainerBuilder();
        const tierText1 = new TextDisplayBuilder().setContent([
          "# Keep or Scrap August 2025 Created By <@256910306003910658>.",
          "You can comment on [the reddit post](https://www.reddit.com/r/PvZHeroes/comments/1mkf38s/keep_or_scrap_august_2025_explanation_below/#lightbox)"
        ].join("\n"));
        const user = await client.users.fetch("256910306003910658");
        const authorImage = new ThumbnailBuilder().setURL(user.displayAvatarURL());
        const authorSection = new SectionBuilder()
          .addTextDisplayComponents(tierText1)
          .setThumbnailAccessory(authorImage);
        container.addSectionComponents(authorSection);
            container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
        const tierText2 = new TextDisplayBuilder().setContent([
          "### Template", 
          "- **TIERS ARE UNORDERED**",
          "- **Craft** is a tier I'm bringing back, since it's now a lot more clear which cards are worth putting sparks towards", 
          "- **Keep** is now two tiers; **Use** and **Keep**. **Use** means that a card is immediately helpful for budget decks while also being valuable to keep for later. **Keep** meanwhile means a card is worth keeping for decks that you'll make later once you own enough higher rarity cards", 
          "- [tier list templates](https://www.reddit.com/r/PvZHeroes/comments/1lrx6l6/i_made_updated_tier_lists_for_every_class/)"
        ].join("\n"));
        container.addTextDisplayComponents(tierText2);
        container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
        const tierText3 = new TextDisplayBuilder().setContent([
          "# Guardian",
          "- **Pecanolith** is now Scrap. It's usually been Keepable since Guardian always wanted it for a finisher, but Gravitree is just better top-end that ends up being more lethal without backfiring in the same ways as it. It was still Keepable in February as tech for Quarterly, but now it's just not worth taking", 
          "- **Hot Date** is Keep tier. It was put into Keepable before since it wasn't useful on a budget, but Keep tier is now a lot more descriptive of the card's limits", 
          "- **Body-Gourd** and **Soul Patch** are Keepable now. They both got buffs that made the a lot more runnable. Soul Patch is still just a weaker Poppies, but that's not saying it's bad", 
          "- **Pear Cub** and **Red Stinger** are Use. Again, they got some significant buffs that have made them much more ideal to use"
        ].join("\n"));
        const guardianImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1403342148597715056/guardiankeep.webp?ex=689733b9&is=6895e239&hm=5ce35684b0948ec1da3e2d88e07e2ce55ecb6905fc9925ac1eab639c941541f3&=&format=webp")
        const guardianSection = new SectionBuilder()
          .addTextDisplayComponents(tierText3)
          .setThumbnailAccessory(guardianImage);
          container.addSectionComponents(guardianSection);
       container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
        const tierText4 = new TextDisplayBuilder().setContent([
          "# Kabloom",
          "- A lot of cards are Scrap now; specifically **Banana Launcher**, **Reincarnation**, **Pineclone**, and **Gloom-Shroom**. **Gloom** and **Pineclone** were already bad cards that stopped being useful as budget options due to power-creep. **Blauncher** and **Rein** meanwhile are just too niche to keep on a budget. You typically either want better aggro options or more sparks to put towards **Fig**", 
          "- **Astro-Shroom** is just Keepable now. It's still a fine budget option and you still want it for Cycle Cap, but Nightcap at max is a lot more flexible and other heroes just don't bother with this card"
        ].join("\n"));
        const kabloomImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1403343799068921957/kabloomkeep.webp?ex=68973542&is=6895e3c2&hm=6aadf5f0b2df73487976346bb871bcad24fed79b3ea65f717e15ca5cb4d9bfda&=&format=webp&width=991&height=873")
        const kabloomSection = new SectionBuilder()
          .addTextDisplayComponents(tierText4)
          .setThumbnailAccessory(kabloomImage);
        container.addSectionComponents(kabloomSection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText5 = new TextDisplayBuilder().setContent([
        "# Mega-Grow", 
        "- Most obviously, **Espresso Fiesta** is craft now. The card is genuinely broken on some heroes, and it's generally really good now", 
        "- **Lily of the Valley** and **Apotatosaurus** are now Keep and Use respectively. **Apotato** is good top-end that can help finish games, while **Lily** is more consistently good in decks 10k sparks and up after its buff", 
        "- **Black-Eyed Pea** is Scrap now. Card is genuinely not good anymore ever since Cabbage got its buff. Pea Patch also takes its spot in decks, and Umbrella being more playable means BEP isn't necessary for trick tech", 
        "-  **Spinach** is Keepable now, since a lot of Leafy cards got buffs. It's like a more versatile Onion Rings with weaker effects"
      ].join("\n"));
      const megaGrowImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1403345073915301958/megagrowkeep.webp?ex=68973672&is=6895e4f2&hm=bdbb4568d2d8a4dbd48bb62430cb9903331fa719d2f8ec39e79cc7a5155246b0&=&format=webp")
      const megaGrowSection = new SectionBuilder()
        .addTextDisplayComponents(tierText5)
        .setThumbnailAccessory(megaGrowImage);
      container.addSectionComponents(megaGrowSection);
   container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText6 = new TextDisplayBuilder().setContent([
        "# Smarty", 
        "- Many of the Amphibious cards are Keepable or Scrap now, including **Laser Cattail**, **Bog of Enlightenment**, and **Spyris**. They're used far more rarely at maximum and Smarty in general is very rarely played aggressively", 
        "- **Sportacus** was moved down and **Dark Matter Dragonfruit** was moved up for similar reasons, as Smarty has more of a focus on midrange and control than before", 
        "- **Winter Melon** also got moved to Keepable for those reasons"
      ].join("\n"));
      const smartyImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1403346012537356420/smartykeep.webp?ex=68973752&is=6895e5d2&hm=d03651539aca5b8b2a5995b484449463d03b95fe3fabfac265a9b724a8f91827&=&format=webp&width=991&height=873")
      const smartySection = new SectionBuilder()
        .addTextDisplayComponents(tierText6)
        .setThumbnailAccessory(smartyImage);
      container.addSectionComponents(smartySection);
      container.addSeparatorComponents(separator => separator.setSpacing(SeparatorSpacingSize.Large));
      const tierText7 = new TextDisplayBuilder().setContent([
        "# Solar", 
        "- **Sun-Shroom is craft**. I feel like this doesn't need an explanation; card's busted", 
        "- **Aloesaurus** and **Wing-Nut** are Scrap. Similar to Pecan, they were really only recommended for the meta at that time. Aloe made up for the lack of lethality Solar had, while Wing-Nut was a simple answer to Quarterly. Both cards are completely unnecessary to keep now, however", 
        "- **Cross-Pollination** is Keepable now. It's a decent sustain option with highroll, and wasn't initially recommended due to it seeming underwhelming"
      ].join("\n"));
      const solarImage = new ThumbnailBuilder().setURL("https://media.discordapp.net/attachments/1044626284346605588/1403346860780945428/solarkeep.webp?ex=6897381c&is=6895e69c&hm=1bd7e9c3cec58676da49b72cd68921c61c9794a17171d792580c6126d4b7d414&=&format=webp&width=991&height=873")
      const solarSection = new SectionBuilder()
        .addTextDisplayComponents(tierText7)
        .setThumbnailAccessory(solarImage);
      container.addSectionComponents(solarSection);
      container.setAccentColor(65280);
      await message.channel.send({
      components: [container],
      flags: MessageFlags.IsComponentsV2,
      allowedMentions: { 
        users: []
      }
    });
    }
  }