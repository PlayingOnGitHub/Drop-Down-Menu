import * as domStuff from "./domStuff";

function createMenu(title, id, dropDownArray) {
  domStuff.createInitialHTML(title, id);
  dropDownArray.forEach((dropDownItem, myIndex) => {
    let behavior = 0;
    if (myIndex === 0) {
      behavior = 1;
    }
    if (dropDownArray.length - 1 === myIndex) {
      behavior = 2;
    }
    domStuff.pushMenuItem(id, title, dropDownItem, behavior);
  });
  const proto = {
    title,
    id,
    dropDownArray,
  };
  return proto;
}

function element(type, idOrClass, name, href, idOrClass2, name2) {
  const newElement = document.createElement(type);
  if (idOrClass === undefined && idOrClass !== "") return newElement;
  if (idOrClass === "id" || idOrClass === "class") {
    idOrClass === "id" ? (newElement.id = name) : (newElement.className = name);
  }
  if (href !== false) {
    if (type === "img") {
      newElement.src = href;
    }
    if (type === "a") {
      newElement.href = href;
    }
  }
  if (idOrClass2 === undefined && idOrClass2 !== "") return newElement;
  if (idOrClass2 === "id" || idOrClass2 === "class") {
    idOrClass2 === "id"
      ? (newElement.id = name2)
      : (newElement.className = name2);
  }
  return newElement;
}

export { createMenu, element };
