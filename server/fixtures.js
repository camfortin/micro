if (Posts.find().count() === 0 ) {
  var now = new Date().getTime();

  //create two users
  var dickId = Meteor.users.insert({
    profile: {name: 'Dick McGee'}
  });

  var dick = Meteor.users.findOne(dickId);

  var timId = Meteor.users.insert({
    profile: {name: 'Tim Bone'}
  })
  var tim = Meteor.users.findOne(timId);

  var steepravineId = Posts.insert({
    title: 'Bay Area Nature Photos',
    userId: dick._id,
    author: dick.profile.name,
    url: 'http://steepravine.com',
    submitted: new Date(now - 7 * 3600 * 1000)
  });

  Comments.insert({
    postId: steepravineId,
    userId: tim._id,
    author: tim.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Love these, can I buy all of them and get you a house in Mill Valley?'
  });

  Comments.insert({
    postId: steepravineId,
    userId: dick._id,
    author: dick.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can!'
  });

  Posts.insert({
    title: 'Wine.com',
    userId: tim._id,
    author: tim.profile.name,
    url: 'http://wine.com',
    submitted: new Date(now - 10 * 3600 * 1000)
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: dick._id,
    author: dick.profile.name,
    url: 'http://themeteorbook.com',
    submitted: new Date(now - 12 * 3600 * 1000)
  });
}