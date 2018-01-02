import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        triggerSidebarToggle() {
            $('#menu-icon').toggleClass('active');
            $('#sidebar').animate({ width: 'toggle' }, 500);
        }
    }
});
