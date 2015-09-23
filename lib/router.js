Router.configure({
  layoutTemplate: 'layout',
  waitingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts');}
});

Router.route('/', {name: 'postsList'});

/*
Router.route('/posts/:_id', {
	name: 'postPage',
	data: function() {return Posts.findOne(this.params._id);}
	});
*/

Router.route('/posts/:_id/:title', {
	name: 'postPage',
	data: function() {return Posts.findOne(this.params._id);}
	});

//Router.go('postPage', {_id: id}, {query: 'q=s', hash: 'hashFrag'});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});


Router.route('/post1', {name: 'post1'});

Router.route('/test', function () {
  this.render('MyTemplate');
});