import Ember from "ember";
import ajax from "ic-ajax";

export default Ember.Route.extend({
	model: function() {
		return ajax({
			type: "GET",
			url: "http://github-raw-cors-proxy.herokuapp.com/nim-lang/packages/master/packages.json",
			dataType: "json"
		});
	}
});
