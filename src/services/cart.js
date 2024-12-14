// Adiciona um item
async function addItem(userCart, item) {
  userCart.push(item);
}

// Calcula o total do carrinho
async function calculateTotal(userCart) {
  console.log('\n🛒 Shoppe cart total is:');
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: ${result}`);
}

// Remove o item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// Lista os itens do carrinho
async function displayCart(userCart) {
  console.log('\n Shopee cart list:');
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} x ${
        item.quantity
      } = R$ ${item.subtotal()}`
    );
  });
}

// Remove um item by index
async function removeItemByIndex(userCart, index) {
  const deleteIndex = index - 1;

  if (index > 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

async function removeItemByName(userCart, name) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound == -1) {
    console.log('Item não encontrado');
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
  }
}

export {
  addItem,
  calculateTotal,
  displayCart,
  deleteItem,
  removeItemByIndex,
  removeItemByName,
};
