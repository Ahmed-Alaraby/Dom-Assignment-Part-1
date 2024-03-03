//Assignments Part -1  [6]

document.forms[0].onsubmit = function (event) {
  let number = document.querySelector('[type="number"]').value;
  let text = document.querySelector('[type="text"]').value;
  let select = document.querySelector('[name="type"]').value;
  let submit = document.querySelector('[type="submit"]');
  let result = document.querySelector(".results");
  result.innerHTML = '';
  for (let i = 1; i <= number; i++) {
    let element = document.createElement(select);
    let secondText = document.createTextNode(text);
    element.classList = "box";
    element.setAttribute("title", "Element");
    element.id = `id-${i}`;
    result.appendChild(element);
    element.appendChild(secondText);
  }
  event.preventDefault();
};