import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var self = this;
		Ember.run.later(function() {
			self.store.createRecord('post', {
				title: 'Create Record',
				body: 'You can store and sync data in realtime without a backend.'
			});
			var np2 = self.store.push({
				data: {
					id: '1sdfsd',
					type: 'post',
					attributes: {
						title: 'push',
						body: 'You can store and sync data in realtime without a backend.'
					}
				}
			});
			//np2.reload();
		}, 5000);

		//newPost.save();
		//this.store.push
		return this.store.query('post', {});
		//return this.store.findAll('post');
	}

});