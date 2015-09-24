Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var thisemail = "";

		if (Meteor.user()) {thisemail = Meteor.user().emails[0].address} 

		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			email: thisemail
		};

		post._id = Posts.insert(post);
		Router.go('postPage', post);
	}

});