define(function(require) {

  var View = require('lavaca/mvc/View');
  require('rdust!templates/testdata');
  var Config = require('lavaca/util/Config');
  var Translation = require('lavaca/util/Translation');

/**
 * @class app.ui.views.TestDataView
 * @super lavaca.mvc.View
 * TestDataView view type
 */
  var TestDataView = View.extend(function(){
    View.apply(this, arguments);
    this.bindData({
      title: 'title'
    });
    this.render();
  },{
  /**
   * @field {String} template
  * @default 'testdata'
  * The name of the template used by the view
  */
  template: 'templates/testdata',
  /**
  * @field {String} className
  * @default 'testdata'
  * A class name added to the view container
  */
  className: 'testdata'

  });

  return TestDataView;

});
