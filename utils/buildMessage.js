function buildMessage(entity, action) {
  if (action === 'list') {
    return `${entity}s listed`;
  }
  return `${entity} ${action}d`;
}

module.exports = buildMessage;
