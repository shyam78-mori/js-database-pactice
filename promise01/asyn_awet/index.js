// async function wether() {
//   let delhiWether = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 Deg");
//     }, 2000);
//   });

//   let bangaloreWether = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("25 Deg");
//     }, 5000);
//   });

//   console.log("fetching delhi wether please waite :- ");
//   let delhiW = await delhiWether;
//   console.log(`fetched delhi wether :- ${delhiW}`);
//   console.log("fetching delhi wether please waite :- ");
//   let bangaloreW = await bangaloreWether;
//   console.log(`fetched bangalore wether :- ${bangaloreW}`);
//   return [delhiW, bangaloreW];
// }

// console.log("welcome to the wether api");

// let a = wether();
// // console.log(a);
// a.then((value) => {
//     console.log(value);
// })



// Function to fetch product data using async/await
async function getProductDetails(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`; 
  
    try {
      const response = await fetch(apiUrl);
    //   console.log(response);
      
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const product = await response.json();
      console.log("Product Name:", product.title);
      console.log("Price: $", product.price);
      console.log("Description:", product.description);
    } catch (error) {
      console.error("Error fetching product:", error.message);
    }
  }
  
  // Example usage
  getProductDetails(1); // gets product with ID = 1
  