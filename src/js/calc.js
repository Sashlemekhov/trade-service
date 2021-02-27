import resultsTemplate from '../template/results.hbs';

const inputPriceRef = document.querySelectorAll(".input-price-js");
const resultsCardOneRef = document.querySelector(".results-card-one-js");
const resultsCardTwoRef = document.querySelector(".results-card-two-js");
const resultsCardThreeRef = document.querySelector(".results-card-three-js");
const resultsCardFourRef = document.querySelector(".results-card-four-js");
const resetBtnRef = document.querySelectorAll(".reset-btn-js");

inputPriceRef.forEach(inputPriceRef => {
  inputPriceRef.addEventListener('input', e => {
    const price = inputPriceRef.value;
    let data = {};

    const numberOfCard = e.target.id;
    const profitPrice1Percent = (price * 1.01).toFixed(5);
    const profitPrice2Percent = (price * 1.02).toFixed(5);
    const profitPrice5Percent = (price * 1.05).toFixed(5);
    const profitPrice15Percent = (price * 1.15).toFixed(5);
    const lossPrice1Percent = (price * 0.99).toFixed(5);
    const lossPrice2Percent = (price * 0.98).toFixed(5);
    const lossPrice5Percent = (price * 0.95).toFixed(5);
    const lossPrice15Percent = (price * 0.85).toFixed(5);

    data = {
      "profitPrice1Percent": profitPrice1Percent,
      "profitPrice2Percent": profitPrice2Percent,
      "profitPrice5Percent": profitPrice5Percent,
      "profitPrice15Percent": profitPrice15Percent,
      "lossPrice1Percent": lossPrice1Percent,
      "lossPrice2Percent": lossPrice2Percent,
      "lossPrice5Percent": lossPrice5Percent,
      "lossPrice15Percent": lossPrice15Percent,
    };

    if (numberOfCard === "one") {
      const markup = resultsTemplate(data);
      resultsCardOneRef.innerHTML = "";
      resultsCardOneRef.insertAdjacentHTML('beforeend', markup);
      localStorage.setItem('card1', price);
    };


    if (numberOfCard === "two") {
      const markup = resultsTemplate(data);
      resultsCardTwoRef.innerHTML = "";
      resultsCardTwoRef.insertAdjacentHTML('beforeend', markup);
    };

    if (numberOfCard === "three") {
      const markup = resultsTemplate(data);
      resultsCardThreeRef.innerHTML = "";
      resultsCardThreeRef.insertAdjacentHTML('beforeend', markup);
    };

   if (numberOfCard === "four") {
      const markup = resultsTemplate(data);
      resultsCardFourRef.innerHTML = "";
      resultsCardFourRef.insertAdjacentHTML('beforeend', markup);
    };
    
  });

});

function resetHandler() {
  resetBtnRef.forEach(resetBtnRef => {
    resetBtnRef.addEventListener('click', e => {
      const btnId = e.target.id;

      if (btnId === "one") { 
        resultsCardOneRef.innerHTML = "";
        resultsCardOneRef.insertAdjacentHTML('beforeend', '<span class="default-text">Enter data</span>');
      };

      if (btnId === "two") { 
        resultsCardTwoRef.innerHTML = "";
        resultsCardTwoRef.insertAdjacentHTML('beforeend', '<span class="default-text">Enter data</span>');
      };

      if (btnId === "three") { 
        resultsCardThreeRef.innerHTML = "";
        resultsCardThreeRef.insertAdjacentHTML('beforeend', '<span class="default-text">Enter data</span>');
      };

      if (btnId === "four") { 
        resultsCardFourRef.innerHTML = "";
        resultsCardFourRef.insertAdjacentHTML('beforeend', '<span class="default-text">Enter data</span>');
      };

    });
  });
};

resetHandler();
