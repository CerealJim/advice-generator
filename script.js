// Global adviceApp object (store all Methods/variables/etc.)
const adviceApp = {};

// HTML elements
adviceApp.textBox = document.querySelector(".text-box");
adviceApp.adviceNum = document.querySelector(".advice-num");
adviceApp.adviceText = document.querySelector(".advice-text");
adviceApp.reset = document.querySelector("button");

// Event listeners
adviceApp.reset.addEventListener("click", (e) => {
  adviceApp.adviceInfo();
});

// app.init
adviceApp.init = () => {
  adviceApp.adviceInfo();
};

// Fetch API data
adviceApp.adviceInfo = () => {
  const apiURL = "https://api.adviceslip.com/advice";
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      adviceApp.adviceDisplay(
        adviceApp.adviceNum,
        adviceApp.adviceText,
        data.slip
      );
    })
    .catch((error) => {
      console.log(error);
      const queryError = document.createElement("h2");
      queryError.textContent = `Sorry! There isn't any advice available at the moment, please try again later.`;
      adviceApp.textBox.appendChild(queryError);
    });
};

// Display advice/text by updating DOM
adviceApp.adviceDisplay = (htmlElementNum, htmlElementText, resultObj) => {
  htmlElementNum.innerText = `Advice #${resultObj.id}`;
  htmlElementText.innerText = `"${resultObj.advice}"`;
};

// Call adviceApp
adviceApp.init();
