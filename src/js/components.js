import '../css/styles.css';
/*import webpacklogo from '../assets/img/webpack-logo.png';*/
  
export const gretting = (name) => {
  console.log('Creating tag H1');
  const h1 = document.createElement('h1');
  h1.innerText = `Hola, ${name}`;
  document.body.append(h1);

  /* Control image webpack
  const image = document.createElement('image');
  image.src = webpacklogo
  document.body.append( image );
  */
}