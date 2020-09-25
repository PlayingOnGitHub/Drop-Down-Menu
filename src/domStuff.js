import * as create from "./create";

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
    create.element("div", "class", "drop-down-icon-wrapper", "", "id", id)
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

function pushMenuItem(id, title, dropDownText) {
  const startingPoint = document.getElementById(`${title}-drop-down-list`);
  const firstItem = document.getElementById(`${title}-first-drop-down-item`);
  const lastItem = document.getElementById(`${title}-last-drop-down-item`);

  if (!firstItem) {
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
    return;
  }
  if (!lastItem) {
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
    return;
  }
  const newMenuItem = lastItem.prepend(
    create.element("li", "class", "drop-down-text", "", "id", dropDownText)
  );
  newMenuItem.textContent = dropDownText;
}

/* <nav class="menu-wrapper">
                <ul class="parent-list">
                    <li class="parent-text">MOVIES</li>
                    <div class="drop-down-icon-wrapper" id="MOVIES">
                        <div class="drop-down-icon-line-1"></div>
                        <div class="drop-down-icon-line-2"></div>
                    </div>
                </ul>
                <div class="drop-down-wrapper" id="MOVIES-drop-down">
                    <ul class="drop-down-list">
                        <li class="drop-down-text first-drop-down-item">
                            Family Guy Movie
                        </li>
                    </ul>
                </div>
            </nav> */

export { createInitialHTML, pushMenuItem };
