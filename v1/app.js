drinks = new Drinks();
drinks.fetch();

drinksList = new DrinksList({collection: drinks});
drinksList.render();
document.body.appendChild(drinksList.el);