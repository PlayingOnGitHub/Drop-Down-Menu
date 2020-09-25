import * as create from "./create";

function changeDisplay() {
  const myId = this;
  const animatedPullUpMenuId = `${myId}drop-down-animate-up`;
  const dropDownWrapper = document.getElementById(animatedPullUpMenuId);
  if (dropDownWrapper) {
    dropDownWrapper.style.display = "none";
  }
}

function animateMenu() {
  const myId = this.id;
  const dropDownMenuId = `${myId}-drop-down`;
  const animatedDropDownMenuId = `${myId}-drop-down-animate-down`;
  const animatedPullUpMenuId = `${myId}-drop-down-animate-up`;

  const dropDownMenu = document.getElementById(dropDownMenuId);
  const animatedDropDownMenu = document.getElementById(animatedDropDownMenuId);
  const animatedPullUpMenu = document.getElementById(animatedPullUpMenuId);
  if (!dropDownMenu) {
    if (!animatedPullUpMenu) {
      animatedDropDownMenu.id = animatedPullUpMenuId;
      animatedDropDownMenu.style.display = "block";
      return;
    }
    animatedPullUpMenu.id = animatedDropDownMenuId;
    animatedPullUpMenu.addEventListener(
      "animationend",
      changeDisplay.bind(myId),
      true
    );
  } else {
    dropDownMenu.id = animatedDropDownMenuId;
    dropDownMenu.style.display = "block";
  }
}

function createInitialHTML(title, id) {
  const startingPoint = document.getElementById(id);
  const menuWrapper = startingPoint.appendChild(
    create.element("nav", "class", "menu-wrapper")
  );
  const parentList = menuWrapper.appendChild(
    create.element("ul", "class", "parent-list")
  );
  const parentText = parentList.appendChild(
    create.element("li", "class", "parent-text")
  );
  parentText.textContent = title;
  const dropDownIconWrapper = parentList.appendChild(
    create.element("div", "class", "drop-down-icon-wrapper", "", "id", title)
  );
  dropDownIconWrapper.addEventListener(
    "click",
    animateMenu.bind(dropDownIconWrapper),
    true
  );
  const dropDownIconLine1 = dropDownIconWrapper.appendChild(
    create.element("div", "class", "drop-down-icon-line-1")
  );
  const dropDownIconLine2 = dropDownIconWrapper.appendChild(
    create.element("div", "class", "drop-down-icon-line-2")
  );
  const dropDownWrapper = menuWrapper.appendChild(
    create.element(
      "div",
      "class",
      "drop-down-wrapper",
      "",
      "id",
      `${title}-drop-down`
    )
  );
  const dropDownList = dropDownWrapper.appendChild(
    create.element(
      "ul",
      "class",
      "drop-down-list",
      "",
      "id",
      `${title}-drop-down-list`
    )
  );
}

function pushMenuItem(id, title, dropDownText, behavior) {
  const startingPoint = document.getElementById(`${title}-drop-down-list`);

  if (behavior === 1) {
    const newMenuItem = startingPoint.appendChild(
      create.element(
        "li",
        "class",
        "drop-down-text first-drop-down-item",
        "",
        "id",
        `${title}-first-drop-down-item`
      )
    );
    newMenuItem.textContent = dropDownText;
  } else if (behavior === 2) {
    const newMenuItem = startingPoint.appendChild(
      create.element(
        "li",
        "class",
        "drop-down-text last-drop-down-item",
        "",
        "id",
        `${title}-last-drop-down-item`
      )
    );
    newMenuItem.textContent = dropDownText;
  } else {
    const newMenuItem = startingPoint.appendChild(
      create.element("li", "class", "drop-down-text", "", "id", dropDownText)
    );
    newMenuItem.textContent = dropDownText;
  }
}

export { createInitialHTML, pushMenuItem };
