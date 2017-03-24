import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('updateQuestion', question, params);
    }
  }
});
