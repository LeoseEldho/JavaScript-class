const cart = ["shoe", "pant", "shirt"];
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    if (!validateCate(cart)) {
      reject("Error");
      }
      const orderId = '1234'
      if (orderId) {
          setTimeout(() => {
              resolve(orderId)
            },5000)
      }
  });
  return promise;
}
function validateCate(cart) {
    return true
}

const promise = createOrder(cart)
console.log(promise)

promise.then(function (orderId) {
    console.log(orderId)
})