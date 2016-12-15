(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
    define(['randomImage'], factory);
  } else if (typeof exports === 'object') {
      // CommonJS
    module.exports = factory(require('randomImage'));
  } else {
    // Browser globals (Note: root is window)
    root.returnExports = factory(root.randomImage);
  }
}(this, function (randomImage) {
  // Methods
  function getUrl(){
    var url;
    var jqxhr = $.getJSON('data.json').done(function(data) {
      url = data[Math.floor(Math.random() * data.length)];
    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }).always(function() {});
    return url;
  };

  // Exposed public methods
  return {
      getUrl: getUrl
  }
}));
