import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  profilePicture: DS.attr('string'),
  posts: DS.hasMany('blog-post'),
});
