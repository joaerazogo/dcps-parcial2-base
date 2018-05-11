import Route from '@ember/routing/route';

export default Route.extend({
  model({  id }){
    console.log(id);
    return this.store.query('author', {
      orderBy: 'id',
      equalTo: id,
      limitToFirst: 1,
    }).then((author) => {
      return author.get('firstObject');
    });
  }
});
