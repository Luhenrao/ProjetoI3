import React from "react";
import './fontes.css';
import Carrossel from '../assets/components/CarrosselHome';


const Home = () => {
return (

    <div>
       
        <div className="content">
        
    <h1 className="Slogan">
      <span className="destaque">Uma</span> comunidade unida<br></br> 
      <span className="destaque"> por uma</span> cidade mais segura
    </h1>
    <h2 className="frase">
    Juntos, cooperando para uma cidade mais segura e tranquila para todos.
    </h2>
    <h1>Meu Carrossel</h1>
      <Carrossel />
  </div>

    </div>
)

}
export default Home;