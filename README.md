# random-image

Returns a random image from a predefined url list.

## Usage

You can use it through https://jacbmelo.github.io/random-image/ or you can use it from JavaScript:

    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
    <script src="https://jacbmelo.github.io/random-image/random-image.js"></script>
    <script>
      RandomImage.getUrl(function(url){
        if (typeof url === 'undefined') {
          console.log('Unable to get random image URL!');
        } else {
          console.log('Random image URL: ' + url);
        }
      });
    </script>
    
## Copyright and license

Code and documentation copyright 2016 [jacbmelo](https://github.com/jacbmelo). Code released under [the MIT license](LICENSE.txt). 
