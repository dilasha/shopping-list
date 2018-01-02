import Ember from 'ember';

export default Ember.Component.extend({
    name: null,
    quantity: null,
    init() {
        //initial render        
        this._super(...arguments);
        this.set('keyword', '');
        console.log('init add');
    },
    didReceiveAttrs() {
        //initial render        
        //runs everytime a component property is changed
        this._super(...arguments);
        this.set('keyword', this.get('keyword').toString().toLowerCase());
        console.log('didReceiveAttrs add');
    },
    willRender() {
        this._super(...arguments);
        console.log('willRender add');
    },
    didInsertElement() {
        this._super(...arguments);
        console.log('didInsertElement add');
    },
    didRender() {
        //initial render and subsequent re-renders
        this._super(...arguments);
        console.log('didRender add');
    },
    didUpdateAttrs() {
        this._super(...arguments);
        console.log('didUpdateAttrs add');
    },
    willUpdate() {
        this._super(...arguments);
        console.log('willUpdate add');
    },
    didUpdate() {
        this._super(...arguments);
        console.log('didUpdate add');
    },
    willDestroyElement() {
        this._super(...arguments);
        console.log('willDestroyElement add');
    },
    willClearRender() {
        this._super(...arguments);
        console.log('willClearRender add');
    },
    didDestroyElement() {
        this._super(...arguments);
        console.log('didDestroyElement add');
    },
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
