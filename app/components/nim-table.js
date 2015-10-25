import Ember from "ember";

export default Ember.Component.extend({
	classNameBindings: [":nim-table-container"],
	packages: Ember.A(),
	sortingOrder: Ember.computed.alias("sortedPackages.sortAscending"),
	sortingProperty: Ember.computed.alias("sortedPackages.sortProperties.firstObject"),
	sortedPackages: Ember.computed("packages", function() {
		return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
			sortProperties: ["name"],
			sortAscending: false,
			content: this.get("packages")
		});
	}),
	onSort: null,
	actions: {
		/**
		 * Sort the list of packages by a given property
		 *
		 * @param property {String} the name of the property to sort by
		 */
		sortBy: function(property) {
			this.get("sortedPackages").toggleProperty("sortAscending");
			this.set("sortedPackages.sortProperties", [property]);
		}
	}
});
