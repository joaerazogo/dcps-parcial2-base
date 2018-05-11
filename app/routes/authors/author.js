import Route from '@ember/routing/route';

export default Route.extend({
  model({  id }){
    console.log(id);
    const authors = this.modelFor('authors');
    const author = authors.findBy('id', id);
    const posts = author.get('posts');
    return{
        author,
        posts
      };
  }
});
