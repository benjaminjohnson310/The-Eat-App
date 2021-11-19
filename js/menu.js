let Menu = [];

function MenuItem(id, name, price, description, category) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.description = description;
  this.category = category;
  this.quantity = 0;
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
  "The Which ChickaWhich Spot",
  11.99,
  "Grilled or fried Chicken Sandwich with large side and Fountain Drink",
  "Combo"
);
new MenuItem(
  4,
  "Super catch Wildcatch ",
  11.99,
  "Wild Caught Alaskan tippet filet With with super wild fries and Drink ",
  "Combo"
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

function renderMenuItem(theList, tableToUpdate) {
  let table = document.getElementById(tableToUpdate);

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
    let cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell1.innerHTML = menuItem.id;
    cell2.innerHTML = menuItem.name;
    cell3.innerHTML = menuItem.description;
    cell4.innerHTML = menuItem.price;
    // cell5.innerHTML = qty;
    // Create an input element for Full Name
    let qty = document.createElement("div");
    qty.id = "item" + menuItem.id;
    qty.innerHTML = 0;
    let addBtn = document.createElement("button");
    let rmvBtn = document.createElement("button");
    addBtn.innerHTML = "+";
    rmvBtn.innerHTML = "-";
    addBtn.id = "addBtn" + menuItem.id;
    rmvBtn.id = "rmvBtn" + menuItem.id;

    cell5.appendChild(qty);
    cell5.appendChild(addBtn);
    cell5.appendChild(rmvBtn);

    addBtn.addEventListener("click", addItemClickHandler);
    rmvBtn.addEventListener("click", rmvItemClickHandler);
  }
}

function addItemClickHandler(event) {
  let addBtnClickedId = event.target.id;
  let itemId = addBtnClickedId.slice(6);
  let item = "item" + itemId;

  let itemAddedId = document.getElementById(item);
  let quantity = itemAddedId.innerHTML;

  quantity = parseInt(quantity) + 1;
  itemAddedId.innerHTML = quantity;
  event.preventDefault();
}

function rmvItemClickHandler(event) {
  let rmvBtnClickedId = event.target.id;
  let itemId = rmvBtnClickedId.slice(6);
  let item = "item" + itemId;

  let itemrmvId = document.getElementById(item);
  let quantity = itemrmvId.innerHTML;
  if (parseInt(quantity) > 0) {
    quantity = parseInt(quantity) - 1;
    itemrmvId.innerHTML = quantity;
  }

  event.preventDefault();
}

let categoryMenu = getMenuItemsByCategory("Combo");
renderMenuItem(categoryMenu, "ComboMenuItem");
//
categoryMenu = getMenuItemsByCategory("Entree");
renderMenuItem(categoryMenu, "EntreeMenuItem");
//
categoryMenu = getMenuItemsByCategory("Sides");
renderMenuItem(categoryMenu, "SideMenuItem");

categoryMenu = getMenuItemsByCategory("Extra");
renderMenuItem(categoryMenu, "ExtraMenuItem");

// when row is clicked get data from the row and find item id
//which id have non 0 quantity
//add to order

let ItemsOrdered = [];



function getElementNotZero(category) {
  let itemId = null;
  let quantitySelected = 0;
  let table = document.getElementById(category);
  for (var r = 0, n = table.rows.length; r < n; r++) {
    for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
      if (c == 0) {
        itemId = table.rows[r].cells[c].innerHTML;
      }
      if (c == 4) {
        itemId = table.rows[r].cells[c].innerHTML;
      }
    }
  }
}

let order;

function createOrder(emailAddress, name) {
  order = new OrderItem(id, Quantity);
}
function Order(emailAddress, name) {
  (this.emailAddress = emailAddress),
    (this.name = name),
    this.itemsOrdered,
    (this.setItemsOrdered = function (ItemsOrdered) {});
}
function OrderItem(itemId, quantityOrdered) {
  (this.itemId = itemId),
    (this.quantityOrdered = quantityOrdered),
    ItemsOrdered.push(this);
}
 function Order (emailAddress, name){

   this.emailAddress = emailAddress,
   this.name = name,
   this.itemsOrdered,
   this.setItemsOrdered = function (itemsOrdered){
      this.itemsOrdered=itemsOrdered;
   }
 }
function OrderItem (itemId, quantityOrdered) {
  this.itemId = itemId,
  this.quantityOrdered = quantityOrdered,
  ItemsOrdered.push(this)
} 


/* can grab the item added when added when odered
name them empty array car then loop through it 
if check when plus butt
//prototype add order 
*/

function findItemsOrdered() {
  let order1 = new OrderItem(2, 4);

  for (let i = 0; i < OrderItem.length; i++) {   
    console.log(order1);
  }

  //new order item then loop through it
  //loop through each submenu and find non zero items
  //i.e. get by id find the already know and quantity then create  new order  loop values to set
  //save it to local storage
}
findItemsOrdered();
getElementNotZero("ComboMenuItem");
// alert(ItemsOrdered);
