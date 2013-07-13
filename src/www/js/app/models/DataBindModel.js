define(function(require) {

  var Model = require('lavaca/mvc/Model');
  var Config = require('lavaca/util/Config');

  /**
   * @class app.models.DataBindModel
   * @super lavaca.mvc.Model
   * DataBindModel model type
   */
  var DataBindModel = Model.extend(function(){
    Model.apply(this, arguments);

    this.fetch({
      dataType: 'json',
      url: '/mock/book.json'
    });

  },{

  });

  return DataBindModel;

});
