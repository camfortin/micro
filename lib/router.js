Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return[ Meteor.subscribe('posts'), Meteor.subscribe('comments')]; }
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id/:title', {
	name: 'postPage',
	data: function() {return Posts.findOne(this.params._id);}
	});

Router.route('/posts/:_id/:title/edit', {
	name: 'postEdit',
	data: function() { return Posts.findOne(this.params._id);}
});

var requireLogin = function() {
 if (! Meteor.user()) {
 	if (Meteor.loggingIn()) {
 		this.render(this.loadingTemplate);
 	}
 	else {
 		this.render('accessDenied');
 	} 
 } else {
 this.next();
 }
}

Router.route('/submit', {name: 'postSubmit'});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'})


Router.route('/test', function () {
  this.render('MyTemplate');
});

checkSessionVar = function(variable) {
	var value = Session.get(variable);
	if (value) {
		alert(value);
	} else {
		alert("No session variable named " + variable);
	}
};