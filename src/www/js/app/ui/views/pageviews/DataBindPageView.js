define(function(require) {

  var BaseView = require('app/ui/views/BaseView');
  require('rdust!templates/databind');
  var Config = require('lavaca/util/Config');
  var Translation = require('lavaca/util/Translation');

/**
 * @class app.ui.views.pageviews.DataBindPageView
 * @super app.ui.views.BaseView
 * DataBindPageView view type
 */
  var DataBindPageView = BaseView.extend(function(){
    BaseView.apply(this, arguments);

    this.mapEvent({
      model: {
        'fetchSuccess': 'onModelFetch'
      }
    });

    this.bindData({
      '.book-title': 'title',
      '.book-author': 'author',
      '.book-published': 'published'
    });
  },{
  /**
   * @field {String} template
  * @default 'databind'
  * The name of the template used by the view
  */
  template: 'templates/databind',
  /**
  * @field {String} className
  * @default 'databind'
  * A class name added to the view container
  */
  className: 'databind',

  onModelFetch: function(e) {
    this.redraw();
    console.log(this.model);
  }

  });

  return DataBindPageView;

});
