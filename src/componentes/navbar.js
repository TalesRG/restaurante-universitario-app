import React from "react";
import NavBarItem from "./navBar-item";
function NavBar(){
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="https://bootswatch.com/" className="navbar-brand">Restaurante Universitario</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
          <NavBarItem href="#/home" label ="Home"></NavBarItem>
          <li className="nav-item" >
            <a className="nav-link" href="#/login" style={{position:'relative' , left: '595px'}}>Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/cadastro-usuario" style={{position:'relative' , left: '600px'}} >Cadastrar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/ru-recarga" style={{position:'relative' , left: '605px'}} >Recarregar</a>
          </li>
        </ul>

        </div>
      </div>
    </div>
    )
}

export default NavBar