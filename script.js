"use strict";

const injectNbsp = function ({
  containerSelector = "body",
  howManyLetters = 1,
}) {
  const elements = document.querySelectorAll(containerSelector + " *");

  const elementsWithText = Array.from(elements).filter(
    (el) =>
      el.firstChild &&
      el.firstChild.textContent.trim().length &&
      !el.firstChild.innerHTML &&
      !el.classList.contains("skip-nbsp") &&
      !el.parentElement.classList.contains("skip-nbsp")
  );

  elementsWithText.forEach((el) => {
    const text = el.innerHTML.trim().replace(/\r?\n|\r/g, "");
    const textArr = text.split(" ").filter(function (item) {
      return item.length > 0;
    });
    const textReduced = textArr.reduce((t, i, a) => {
      if (textArr[a - 1].length <= howManyLetters) {
        return t + "&nbsp;" + i;
      }
      return t + " " + i;
    });

    el.innerHTML = textReduced;
  });
};
