
$(function() {

	drinks = new Drinks();
	drinks.fetch().then(function() {
		drinksList = new DrinksList({collection: drinks});
		drinksList.render();
		document.body.appendChild(drinksList.el);
	});

});