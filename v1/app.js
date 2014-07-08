
$(function() {

	drinks = new Drinks();
	drinks.fetch().then(function() {
		drinksList = new DrinksList({collection: drinks});
		drinksList.render();
		document.body.appendChild(drinksList.el);

		drinks.debug();

		drinks.add({name: "Coke"});

		drinks.debug();

		water = new Drink({name: "Water"});
		drinks.add(water);
		drinks.remove(water);

		drinks.debug();

		drinks.save();

	});

});