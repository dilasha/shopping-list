import Ember from 'ember';

export default Ember.Component.extend({
    items: Ember.A([]),
    keyword: '',
    filteredItems: Ember.computed('keyword', function () {
        return this.search(this.get('items'), 'name', this.get('keyword'));
    }),
    search: function (list, property, keyword) {
        keyword = keyword.toLowerCase();
        list = list || Ember.A([]);
        return list.filter(function (item) {
            if (item.get(property))
                return item.get(property).toString().toLowerCase().indexOf(keyword) !== -1;
        });
    }
});
