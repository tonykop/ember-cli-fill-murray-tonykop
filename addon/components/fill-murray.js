import Ember from 'ember';
import layout from '../templates/components/fill-murray';

export default Ember.Component.extend({
  layout: layout,
  height:100,
  width:100,
  src:Ember.computed('height','width'{
    get(){
      var base='http://www.fillmurray.com/';
      return '${base}${this.get('width')}/${this.get('height')}';
    }
  })

});
