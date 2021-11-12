let Menu = [];

function MenuItem(id, name, price, description, category) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.description = description;
  this.category = category;
  Menu.push(this);
}

let categoriesMenu = ["Entree", "Combo", "Sides", "Extra"];

new MenuItem(
  1,
  "Combo Number 1",
  9.99,
  "This description for combo 1",
  "Combo"
);

new MenuItem(
  2,
  "Combo Number 2",
  10.99,
  "This description for combo 2",
  "Combo"
);
new MenuItem(
  3,
  "Combo Number 3",
  11.99,
  "This description for combo 3",
  "Combo"
);
new MenuItem(
  4,
  "Combo Number 4",
  12.99,
  "This description for combo 4",
  "Combo"
);

new MenuItem(5, "Entree Number 1", 9.99, "This description for  1", "Entree");
new MenuItem(6, "Entree Number 2", 10.99, "This description for  2", "Entree");
new MenuItem(7, "Entree Number 3", 11.99, "This description for  3", "Entree");
new MenuItem(8, "Entree Number 4", 12.99, "This description for  4", "Entree");

new MenuItem(
  9,
  "Sides Number 1",
  9.99,
  "This description for combo 1",
  "Sides"
);
new MenuItem(
  10,
  "Sides Number 2",
  10.99,
  "This description for combo 2",
  "Sides"
);
new MenuItem(
  11,
  "Sides Number 3",
  11.99,
  "This description for combo 3",
  "Sides"
);
new MenuItem(
  12,
  "Sides Number 4",
  12.99,
  "This description for combo 4",
  "Sides"
);

new MenuItem(
  13,
  "Extra Number 1",
  9.99,
  "This description for combo 1",
  "Extra"
);
new MenuItem(
  14,
  "Extra Number 2",
  10.99,
  "This description for combo 2",
  "Extra"
);
new MenuItem(
  15,
  "Extra Number 3",
  11.99,
  "This description for combo 3",
  "Extra"
);
new MenuItem(
  16,
  "Extra Number 4",
  12.99,
  "This description for combo 4",
  "Extra"
);

function getMenuItemsByCategory(category) {
  let filteredMenu = Menu.filter(function (menuItem) {
    return menuItem.category == category;
  });
  return filteredMenu;
}
// let categoryMenu = getMenuItemsByCategory("Combo");

// alert(theList.length);

function renderMenuItem(theList, tableToUpDate) {
  let table = document.getElementById(tableToUpDate);

  //   let entreeList = getMenuItemsByCategory.s

  //loop through and append child
  for (menuItem of theList) {
    // Create an empty <tr> element and add it to the 1st position of the table:
    let row = table.insertRow();
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    // Add some text to the new cells:
    cell1.innerHTML = menuItem.id;
    cell2.innerHTML = menuItem.name;
    cell3.innerHTML = menuItem.description;
    cell4.innerHTML = menuItem.price;
  }
}

let categoryMenu = getMenuItemsByCategory("Combo");
renderMenuItem(categoryMenu, "ComboMenuItem");

categoryMenu = getMenuItemsByCategory("Entree");
renderMenuItem(categoryMenu, "EntreeMenuItem");

categoryMenu = getMenuItemsByCategory("Sides");
renderMenuItem(categoryMenu, "SideMenuItem");

categoryMenu = getMenuItemsByCategory("Extras");
renderMenuItem(categoryMenu, "ExtrasMenuItem");
