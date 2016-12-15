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
    getUrl:function(callback) {
      var jqxhr = $.getJSON('data.json').done(function(data) {
        var url = data[Math.floor(Math.random() * data.length)];
        console.log('url: ' + url);
        callback(url);
      }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      }).always(function() {});
    }
  }

  // Exposed object
  return RandomImage;
}));
