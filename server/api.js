Articles = new Mongo.Collection('articles');

if (Articles.find().count() === 0) {
  Articles.insert({
    title: 'Article 1',
    url: 'http://sachagreif.com/introducing-telescope/',
    _id: '01'
  });
  Articles.insert({
    title: 'Article 2',
    url: 'http://sachagreif.com/introducing-telescope/',
    _id: '02'
  });
  Articles.insert({
    title: 'Article 3',
    url: 'http://sachagreif.com/introducing-telescope/',
    _id: '03'
  });
  
}

if (Meteor.isServer) {

  // Global API configuration
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  // Generates: GET, POST on /api/items and GET, PUT, DELETE on
  // /api/items/:id for the Items collection
  Api.addCollection(Articles);
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