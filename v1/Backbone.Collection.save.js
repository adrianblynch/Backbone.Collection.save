Backbone.Collection.prototype.save = function() {

	console.log("Saving collection");

	/*
		Possibilities:
		1. Send newly added models, updated models and deleted models in different requests
			- Requires tracking of deleted models
		2. Send all models but separate them into new, updated, deleted
		3. Send the whole collection as-is and let the server decide what to do
			- How would we deal with knowing what ones to delete?
	*/

	var models = {added: [], updated: [], removed: []};

	this.models.forEach(function(model) {

		if (model.isNew()) {

			models.added.push(model);

		} else if (model.hasChanged()) {

			models.updated.push(model);

		}

	});

	/*} else if (model.hasChanged()) {

			models.removed.push(model);*/

};

/*Backbone.Collection.extend({
	remove: function(models, options) {
		console.log("Removed:", models);
		Backbone.Collection.prototype.remove.call(this, models, options);
	}
});*/