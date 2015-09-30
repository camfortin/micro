Template.postEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		currentPostId = this._id;

		var postProperties = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			//email: Meteor.user().emails[0].address
		};

		Posts.update(currentPostId, {$set: postProperties}, function(error) {
			if (error)
				{return alert(error.reason);}
			else {
				Router.go('postPage', {_id:currentPostId});
			}
		});
	
	},

 'click .delete': function(e) {
	 e.preventDefault();
		 if (confirm("Delete this post?")) {
			 var currentPostId = this._id;
			 Posts.remove(currentPostId);
			 Router.go('postsList');
		 }
	 }
});