import Ember from 'ember';

export default Ember.Component.extend({
    items: null,
    keyword: null,
    init(){
        this._super(...arguments);
        this.set('keyword', '');
    },
    didRecieveAttrs(){
        //runs everytime a component property is changed
        this._super(...arguments);
        this.set('keyword', this.get('keyword').toString().toLowerCase());       
    },
    willRender(){
        this._super(...arguments);

    },
    didInsertElement(){
        this._super(...arguments);
        //run after all components are rendered to manupulate DOM
        //best for third party library functionalities like jQuery
        //maybe an ad that fades out?
    },
    didRender(){
        this._super(...arguments);

    },
    filteredItems: Ember.computed('keyword', function () {
        return this.search(this.get('items'), 'name', this.get('keyword'));
    }),
    search: function (list, property, keyword) {
        keyword = keyword.toLowerCase();
        return list.filter(function (item) {
            if (item.get(property))
                return item.get(property).toString().toLowerCase().indexOf(keyword) !== -1;
        });
    }
});
