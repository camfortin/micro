Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: { submitted: -1}} );
  }
});

Template.post1.helpers({
  posts: function() {
    return Posts.find({}, {sort: { title: -1 }} );
  }
});