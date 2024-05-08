
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.css"

const Header = () => {
    return(
      
            <div>
        <nav>
            <Link to = "/"> Home </Link>
            <Link to="/Desafio">Desafio</Link>
            <Link to="/Solucao">Solução</Link>
            <Link to="/Sobrenos">Sobre Nós</Link>
        </nav>
        </div>
  
    );
};

export default Header;
