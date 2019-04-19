export const setGeneratedCartId = (cartId) => {
  const generatedId = localStorage.setItem('accessCartToken', cartId);
  return generatedId;
}

export const getGeneratedCartId = () => {
  const accessCartToken = localStorage.getItem('accessCartToken');
  return accessCartToken;
}
