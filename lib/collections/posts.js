Posts = new Mongo.Collection('posts');

Meteor.methods({
 postInsert: function(postAttributes) {
		check(Meteor.userId(), String);
		check(postAttributes, {
			title: String,
			url: String
		});	

/*
	if (Meteor.isServer) {
		postAttributes.title += "(server version)";
		// wait for 5 seconds
		Meteor._sleepForMs(5000);
	} else {
		postAttributes.title += "(client version)";
	}
*/

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
		submitted: new Date()
	});

	var postId = Posts.insert(post);
	var title = postAttributes.title;
	
	return {
		_id: postId,
		'title': title
	};
 }
});