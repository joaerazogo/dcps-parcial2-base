import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    deletePosts:function(title){
      console.log(title);
       this.get('store').findRecord('author', title, { backgroundReload: false }).then(function(post) {
           post.destroyRecord();
           post.get('isDeleted'); // => true
           post.save(); // => DELETE to /posts/1
       });
        //let post = this.get('model.authors').findBy('title', title);
        //post.destroyRecord();
    }
  },
});
