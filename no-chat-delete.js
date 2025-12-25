Hooks.on("renderChatMessage", (message, html) => {
  const user = game.users.get(message.user);

  // Se NÃO for GM, remove o botão de deletar
  if (!user?.isGM) {
    html.find(".message-delete").remove();
  }
});
