Hooks.on("getChatLogEntryContext", (html, options) => {
  const deleteOption = options.find(o => o.name === "CHAT.Delete");

  if (!deleteOption) return;

  // Só GM pode ver/usar excluir
  deleteOption.condition = () => {
    return game.user.isGM;
  };
});
