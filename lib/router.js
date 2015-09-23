Router.configure({
  layoutTemplate: 'layout',
  waitingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts');}
});

Router.route('/', {name: 'postsList'});

Router.route('/post1', {name: 'post1'});

Router.route('/test', function () {
  this.render('MyTemplate');
});

