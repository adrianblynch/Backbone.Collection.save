
Drink = Backbone.Model.extend({});

Drinks = Backbone.Collection.extend({
	model: Drink,
	url: "../api/drinks"
});

DrinkItem = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},
	tagName: "li",
	render: function() {
		console.log("Rendering child view", this.el);
		this.el.innerHTML = this.model.get("name");
		return this;
	}
});

DrinksList = Backbone.View.extend({
	initialize: function() {
		//this.listenTo(this.collection, "reset", this.render);
		this.childViews = [];
		this.collection.each(function(model) {
			this.childViews.push(new DrinkItem({model: model}));
		}, this);
	},
	tagName: "ul",
	render: function() {

		this.$el.empty();
		
		this.childViews.forEach(function(childView) {
			this.$el.append(childView.render().el);
		}, this);

		/*var items = "";
		this.collection.forEach(function(drink) {
			items += "<li>" + drink.get("name") + "</li>";
		});
		this.el.innerHTML = "<ul>" + items + "</ul>";*/
	}
});

/*DrinksList = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "change:name", _.debounce(this.renderName, 300));
	},
	render: function() {
		this.el.innerHTML = "<input><p>Name: <span class='name'></span></p>";
	},
	renderName: function() {
		this.$el.find(".name").text(this.model.get("name"));
	},
	events: {
		input: "edited"
	},
	edited: function(e) {
		this.model.set("name", e.target.value);
	}
});

drinksList = new DrinksList({model: water});
drinksList.render();
document.body.appendChild(drinksList.el);

drinks.save();*/