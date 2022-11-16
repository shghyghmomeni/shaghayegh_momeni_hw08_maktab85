let container = document.getElementById("container");

function elemCreator(elementType, Func) {
  let element = document.createElement(`${elementType}`);
  Func(element);
}
const showElement = function (elem) {
  container.append(elem);
  elem.innerHTML = `hello , element inserted!`;
  elem.style.backgroundColor = "blue";
  elem.style.color = "white";
  elem.style.textAlign = "center";
  elem.style.fontSize = "20pt";
};

elemCreator("p", showElement);
