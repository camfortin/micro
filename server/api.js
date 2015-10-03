// Create post via API
// curl -X POST http://localhost:3000/api/posts/ -d "title=Hello" -d "author=camfortin" -d "url=https://hello.com/hello"

// Delete post
// curl -X DELETE http://localhost:3000/api/posts/LBZ4Zz2naEKyxL6L5

//Log In
//curl http://localhost:3000/api/login/ -d "username=camfortin&password=password"

if (Meteor.isServer) {

  // Global API configuration
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  // Generates: GET, POST on /api/posts and GET, PUT, DELETE on
  // /api/items/:id for the Items collection
  Api.addCollection(Posts);

  // Generates: POST on /api/users and GET, DELETE /api/users/:id for
  // Meteor.users collection
  Api.addCollection(Meteor.users, {
    excludedEndpoints: ['put'],
    routeOptions: {
      authRequired: false
    },
    endpoints: {
      post: {
        authRequired: false
      },
      delete: {
        roleRequired: 'admin'
      }
    }
  });

}