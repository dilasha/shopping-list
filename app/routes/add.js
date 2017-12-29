import Ember from 'ember';

export default Ember.Route.extend({
    store: Ember.inject.service(),
    addToList(params) {
        this.store.pushPayload('item', { items: [params] });
    },
    actions: {
        triggerAddToList(params) {
            this.addToList(params)
        }
    }
});
