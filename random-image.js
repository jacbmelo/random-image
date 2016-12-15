(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
      // CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals (Note: root is window)
    root.RandomImage = factory(root.$);
  }
}(this, function ($) {
  
  // Methods
  var RandomImage = {
    getUrl:function() {
      var url;
      var jqxhr = $.getJSON('data.json').done(function(data) {
        this.url = data[Math.floor(Math.random() * data.length)];
      }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      }).always(function() {});
      return url;
    }
  }

  // Exposed object
  return RandomImage;
}));
