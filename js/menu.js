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
  "Single a with Cheese",
  11.99,
  "Basically..A  Mc Qu... With large drink a and Side for this price ",
  "Combo"
);

new MenuItem(
  2,
  "Double with Cheese 2",
  10.99,
  "Juicy Quarter pound USDA Selection Rodeo Winner  With Large Side and Fountain Drink",
  "Combo"
);
new MenuItem(
  3,
  "Grilled or fried Chicken Sandwich with large side and Fountain Drink",
  11.99,
  "This description for combo 3",
  "Combo"
);
new MenuItem(
  4,
  11.99,
  "Fried or grilled chicken sandwich with drink and side Large "
);

new MenuItem(5, "Entree Number 1", 6.99, "DoubleMan", "Entree");
new MenuItem(6, "Entree Number 2", 5.99, "SingleNow", "Entree");
new MenuItem(7, "Entree Number 3", 4.99, "Fish Sandwich", "Entree");
new MenuItem(8, "Entree Number 4", 4.99, "Chicken Sandwich", "Entree");

new MenuItem(
  9,
  "Sides Number 1",
  3.49,
  "A Large basket Panko Onion Rings",
  "Sides"
);
new MenuItem(
  10,
  "Sides Number 2",
  3.49,
  "A Large basket Seasoned Tots ",
  "Sides"
);
new MenuItem(
  11,
  "Sides Number 3",
  3.49,
  "A Large basket Seasoned Fries ",
  "Sides"
);
new MenuItem(
  12,
  "Sides Number 4",
  3.49,
  "A Large basket Seasoned curly Fries ",
  "Sides"
);

new MenuItem(
  13,
  "Extra Number 4",
  3.49,
  " Large Delicious Chocolate shake!",
  "Extra"
);
new MenuItem(
  14,
  "Extra Number 1",
  3.49,
  "This description for Delicious Vanilla shake!",
  "Extra"
);
new MenuItem(
  15,
  "Extra Number 3",
  3.49,
  "A Delicious Large Strawberry shake!",
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

categoryMenu = getMenuItemsByCategory("Extra");
renderMenuItem(categoryMenu, "ExtraMenuItem");


// when row is clicked get data from the row and find item id  
