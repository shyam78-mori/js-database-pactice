const loadingScreen = document.getElementById("loading");
const loadingMessage = document.getElementById("loading-message");
const mainContent = document.getElementById("content");


function showLoading(message) {
  loadingMessage.textContent = message;
  loadingScreen.style.display = "flex";
  mainContent.style.display = "none";
}

function showContent() {
  loadingScreen.style.display = "none";
  mainContent.style.display = "block";


  runMainApp();
}


function runMainApp() {
  console.log("✅ App is now running!");

}


function checkInternetAndRun() {
  if (navigator.onLine) {
    showLoading("Connecting...");
    setTimeout(() => {
      showContent();
    }, 1000); 
  } else {
    showLoading("No internet. Waiting for connection...");
  }
}


window.addEventListener("load", () => {
  checkInternetAndRun();
});


window.addEventListener("offline", () => {
  showLoading("Connection lost. Waiting...");
});


window.addEventListener("online", () => {
  showLoading("Internet is back! Starting app...");
  setTimeout(() => {
    showContent();
  }, 1000);
});
