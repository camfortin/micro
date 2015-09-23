Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});

Template.post1.helpers({
  posts: function() {
    return Posts.find({}, {sort: { title: -1 }} )
  }
});