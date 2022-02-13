/**
 * app.js
 * Carousel 
 */

 document.getElementById('carousel').addEventListener('click', () => {

    /**
     * @getAttribute
     * Récupère la valeur d'une attribue.
     */
    let src = document.getElementById('carousel').getAttribute('src');
  
    switch(src)
    {
      case 'img/Shoto.png':
          document.getElementById('carousel').src = 'img/Dabi.png'
          break;
      case 'img/Dabi.png':
        document.getElementById('carousel').src = 'img/Deku.png'
        break;
      case 'img/Deku.png':
        document.getElementById('carousel').src = 'img/Katchan.png'
        break;
      default: 
        document.getElementById('carousel').src = 'img/Shoto.png'
        break;
    }
  })
  
  