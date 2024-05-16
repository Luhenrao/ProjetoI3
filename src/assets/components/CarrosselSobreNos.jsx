import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import alysson from '../../img/Alysson.jpeg'
import gabriel from '../../img/gabriel.jpeg'
import luiz from '../../img/luiz.jpeg'
import carlos from '../../img/carlos.jpeg'
import giullia from '../../img/giullia.jpeg'




 
class CarrosselSobreNos extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            
             <img src={alysson}></img>

             <h3>Alysson</h3>

          </div>
          <div>

          <img src={gabriel}></img>

            <h3>Gabriel</h3>
            
          </div>
          <div>

          <img src={luiz}></img>

            <h3>Luiz</h3>
          </div>
          <div>

          <img src={carlos}></img>
            <h3>Carlos</h3>
          </div>
          <div>
          <img src={giullia}></img>

            <h3>Giullia</h3>
          </div>
        </Slider>
      );
    }
  }
  
  export default CarrosselSobreNos;