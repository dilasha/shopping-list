import Ember from 'ember';

export default Ember.Component.extend({
    items: [
        {name:'milk', quantity: 2}, 
        {name:'butter', quantity: 1},
        {name:'eggs', quantity: 6},
        {name:'cheese', quantity: 1},
        {name:'tomatoes', quantity: 12},
    ],
    keyword: null,
    filteredItems: Ember.computed('keyword', 'items', function(){
        return this.get('items').filterBy('name', this.get('keyword'))
    })
});
