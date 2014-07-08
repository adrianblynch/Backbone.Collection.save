
Drink = Backbone.Model.extend({});

Drinks = Backbone.Collection.extend({
	model: Drink,
	url: "../api/drinks",
	initialize: function() {

		// Listen to oneself and track models when added, removed and changed
		this.addedModels = [];
		this.changedModels = [];
		this.removedModels = [];

		this.listenTo(this, "remove", function(model) {
			this.track(model, "removed");
		});
		this.listenTo(this, "change", function(model) {
			this.track(model, "changed");
		});
		this.listenTo(this, "add", function(model) {
			this.track(model, "added");
		});

	},
	track: function(model, event) {
		this[event + "Models"].push(model);
	},
	debug: function() {
		console.log(this.addedModels);
		console.log(this.changedModels);
		console.log(this.removedModels);
	}
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