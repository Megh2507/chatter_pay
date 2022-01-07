const initializeCommands = (commands, Discord) => {
  commands.create({
    name: "pay",
    description: "Pay someone",
    options: [
      {
        name: "payee",
        description: "The person you are paying",
        required: true,
        type: Discord.Constants.ApplicationCommandOptionTypes.USER,
      },
      {
        name: "amount",
        description: "The amount you are paying",
        required: true,
        type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER,
      },
    ],
  });

  commands.create({
    name: "hist",
    description: "View your payment history",
  })
};

export { initializeCommands };
