//Assignments Part -1  [6]

document.forms[0].onsubmit = function (event) {
  let number = document.querySelector('[type="number"]').value;
  let text = document.querySelector('[type="text"]').value;
  let select = document.querySelector('[name="type"]').value;
  let submit = document.querySelector('[type="submit"]');
  let result = document.querySelector(".results");
  result.innerHTML = "";
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

//Assignments Part -2  [challenge]

// start Container
let Container = document.createElement("div");
Container.className = "container";
Container.style.cssText = "background-color: #dddddd;";
document.body.appendChild(Container);

// start header
let Header = document.createElement("div");
let TextHeader = document.createElement("p");
TextHeader.textContent = "Elaraby";
TextHeader.style.cssText = "color: #257525;font-size: 20px;font-weight: bold;";
Header.className = "Header";
Header.style.cssText =
  "display:flex;align-items: center;justify-content: space-between;background-color: white;";
Container.appendChild(Header);
Header.appendChild(TextHeader);
let ArrLinks = document.createElement("div");
ArrLinks.className = "Arrlinks";
Header.appendChild(ArrLinks);
let Arr = ["Home", "About", "service", "Contact"];
for (let i = 0; i < Arr.length; i++) {
  let link = document.createElement("a");
  ArrLinks.appendChild(link);
  link.textContent = Arr[i];
  link.style.cssText = "padding: 5px 10px;";
}
/////////////////////////////////////////////////////////////////
// start Content
let Content = document.createElement("div");
Content.className = "Content";
Content.style.cssText =
  "display: flex;flex-wrap: wrap;justify-content: space-around;text-align: center;row-gap: 10px;padding: 10px 5px;";
Container.appendChild(Content);

for (let i = 1; i <= 15; i++) {
  let ContentItem = document.createElement("div");
  ContentItem.style.cssText = "width: 32.8%; background-color: white; ";
  Content.appendChild(ContentItem);
  let number = document.createElement("h3");
  number.textContent = [i];
  ContentItem.appendChild(number);
  let span = document.createElement("p");
  span.textContent = "Product";
  ContentItem.appendChild(span);
  ContentItem.onclick = function () {
    ContentItem.style.cssText = "width: 33%; background-color: yellow; ";
  };
}

// start Footer
let footer = document.createElement("div");
footer.className = "footer";
Container.appendChild(footer);
footer.textContent = "Copyrigt 2021";
footer.style.cssText =
  "text-align: center;background-color: green;padding: 20px;color: wheat;font-weight: bold;";
