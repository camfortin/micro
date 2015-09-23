Router.configure({
  layoutTemplate: 'layout',
  waitingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts');}
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
	name: 'postPage',
	data: function() {return Posts.findOne(this.params._id);}

	});









Router.route('/post1', {name: 'post1'});

Router.route('/test', function () {
  this.render('MyTemplate');
});