Posts = new Mongo.Collection('posts');

Meteor.methods({
 postInsert: function(postAttributes) {
		check(Meteor.userId(), String);
		check(postAttributes, {
			title: String,
			url: String
		});	

	var postWithSameLink = Posts.findOne({url: postAttributes.url});

	if (postWithSameLink) {
		return {
			postExists: true,
			_id: postWithSameLink._id,
			title: postWithSameLink.title
		}
	}

	var user = Meteor.user();
	var post = _.extend(postAttributes, {
		userId: user._id,
		author: user.username,
		email: user.emails[0],
		submitted: new Date()
	});

	var postId = Posts.insert(post);
	
	return {
		_id: postId
	};
 }
});