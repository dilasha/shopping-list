import Ember from 'ember';

export default Ember.Component.extend({
    items: null,
    keyword: null,
    init() {
        //initial render        
        this._super(...arguments);
        this.set('keyword', '');
        console.log('init list');
    },
    didReceiveAttrs() {
        //initial render        
        //runs everytime a component property is changed
        this._super(...arguments);
        this.set('keyword', this.get('keyword').toString().toLowerCase());
        console.log('didReceiveAttrs list');
    },
    willRender() {
        //initial render and subsequent re-renders
        this._super(...arguments);

        console.log('willRender list');
    },
    didInsertElement() {
        //initial render and subsequent re-renders
        this._super(...arguments);
        $('#sidebar').animate({ width: 'toggle' }, 500);
        $('#menu-icon').addClass('active');
        //run after all components are rendered to manupulate DOM
        //best for third party library functionalities like jQuery
        //maybe an ad that fades out?
        console.log('didInsertElement list');
    },
    didRender() {
        //initial render and subsequent re-renders
        this._super(...arguments);
        console.log('didRender list');
    },
    didUpdateAttrs() {
        this._super(...arguments);
        console.log('didUpdateAttrs list');
    },
    willUpdate() {
        this._super(...arguments);
        console.log('willUpdate list');
    },
    didUpdate() {
        this._super(...arguments);
        console.log('didUpdate list');
    },
    willDestroyElement() {
        this._super(...arguments);
        console.log('willDestroyElement list');
    },
    willClearRender() {
        this._super(...arguments);
        console.log('willClearRender list');
    },
    didDestroyElement() {
        this._super(...arguments);
        console.log('didDestroyElement list');
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
    },
});
