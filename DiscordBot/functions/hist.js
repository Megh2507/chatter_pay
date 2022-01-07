import { paymentHistoryEmbed } from "./getEmbeds.js";

const hist = async (interaction) => {
    interaction.reply({
        embeds: [paymentHistoryEmbed()],
    });
}

export { hist };