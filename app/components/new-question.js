import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        content: this.get('content') ? this.get('content'): "",
        author: this.get('author') ? this.get('author'): "",
        notes: this.get('notes') ? this.get('notes'): ""
      };
      this.sendAction('saveQuestion', params);
      this.set('content', '');
      this.set('author', '');
      this.set('notes', '');
    }
  }
});
