// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;

//   // some code (try to change x to 5)

//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });

// example first

function checkUserLogin(userId) {
  return new Promise((resolve, reject) => {
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
    }, 1000);
  });
}

checkUserLogin(2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// example second
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
    }, 1500);
  });
}

loginUser("user@example.com", "123456")
  .then((response) => {
    console.log(response.message);
    console.log("Token:", response.token);
  })
  .catch((error) => {
    console.error("Login failed:", error);
  });

// example third
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 resolved");
    reject(new Error("p2 rejected"));
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 resolved");
  }, 3000);
});

// let promise_all = Promise.all([p1, p2, p3]);
let promise_all = Promise.allSettled([p1, p2, p3]);
promise_all.then((value) => {
  console.log(value);
});
 