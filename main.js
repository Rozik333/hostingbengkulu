const panorama = new PANOLENS.ImagePanorama( 'asset/textures/equirectangular/field.jpg' );
let imageContainer = document.querySelector ('.image.container')
const viewer = new PANOLENS.Viewer();
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed:0.3,
    controlBar:true,

viewer.add( panorama );