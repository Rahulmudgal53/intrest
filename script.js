// script.js
document.addEventListener('DOMContentLoaded', function() {
    var menuItems = [
        { name: "Pizza", price: "$8" },
        { name: "Burger", price: "$5" },
        { name: "Pasta", price: "$7" },
        // Add more items as needed
    ];

    var itemsContainer = document.getElementById('items');
    menuItems.forEach(function(item) {
        var div = document.createElement('div');
        div.innerHTML = '<h3>' + item.name + '</h3><p>' + item.price + '</p>';
        itemsContainer.appendChild(div);
    });
});
