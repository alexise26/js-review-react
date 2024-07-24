
const getImage = async() =>{
   
   try {
      const apiKey = 'jvpNGEnchy1VGGO05KAqNDYdVpv1pW7y';
      const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
      //const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=$jvpNGEnchy1VGGO05KAqNDYdVpv1pW7y`);
      const { data } = await resp.json();

      const { url }  = data.images.original;
      const img = document.createElement('img');
      img.src = url;
      document.body.append( img );
   } catch (error) {
      //manejo del error
   }



};

getImage();