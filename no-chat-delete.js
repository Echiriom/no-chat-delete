Hooks.on("getChatLogEntryContext", (html, options) => {
  const deleteOption = options.find(o => o.name === "CHAT.Delete");

  if (deleteOption) {
    deleteOption.condition = () => {
      return game.user.isGM;
    };
  }
});
