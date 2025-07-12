export function itemIdent(itemTitle) {
  return itemTitle.replace(/[^a-zA-Z0-9]/g, ''); // Remove all non-alphanumeric characters:
};