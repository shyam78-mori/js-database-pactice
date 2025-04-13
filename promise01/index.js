// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  



function checkUserLogin(userId) {
  return new Promise((resolve, reject) => {
    // Simulate an API/database call with setTimeout
    setTimeout(() => {
      const fakeDatabase = {
        1: "John Doe",
        2: "Jane Smith",
      };

      if (fakeDatabase[userId]) {
        resolve(`User found: ${fakeDatabase[userId]}`);
      } else {
        reject("User not found");
      }
    }, 1000); // Simulate 1 second delay
  });
}

// Using the promise
checkUserLogin(2)
  .then((result) => {
    console.log(result); // "User found: John Doe"
  })
  .catch((error) => {
    console.error(error); // "User not found" if ID doesn't exist
  });



function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    // Simulate API call delay
    setTimeout(() => {
      // Fake user data
      const validUser = {
        email: "user@example.com",
        password: "123456",
      };

      if (email === validUser.email && password === validUser.password) {
        resolve({
          message: "Login successful",
          token: "fake-jwt-token-12345",
        });
      } else {
        reject("Invalid email or password");
      }
    }, 1500); // 1.5 seconds delay
  });
}

// Example usage
loginUser("user@example.com", "123456")
  .then((response) => {
    console.log(response.message); // "Login successful"
    console.log("Token:", response.token); // Save to localStorage etc.
  })
  .catch((error) => {
    console.error("Login failed:", error); // Show error to user
  });
