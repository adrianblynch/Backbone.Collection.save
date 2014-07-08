
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
		this.el.innerHTML = this.model.get("name");
		return this;
	}
});

DrinksList = Backbone.View.extend({
	initialize: function() {
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
	}
});