import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        content: this.get('content') ? this.get('content'): "",
        author: this.get('author') ? this.get('content'): "",
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
