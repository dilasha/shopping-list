import Ember from 'ember';

export default Ember.Component.extend({
    name: null,
    quantity: null,
    buildRecord() {
        return {
            id: Math.random(),
            name: this.get('name'),
            quantity: this.get('quantity')
        };
    },
    resetForm() {
        this.setProperties({
            name: '',
            quantity: null
        });
    },
    triggerAddToList: 'triggerAddToList',
    actions: {
        triggerAddToList() {
            this.sendAction('triggerAddToList', this.buildRecord());
            this.resetForm();
            alert('added!');
        }
    }
});
