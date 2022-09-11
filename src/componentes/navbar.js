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
            <a className="nav-link" href="#/login" style={{position:'relative' , left: '650px'}}>Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/cadastro-usuario" style={{position:'relative' , left: '655px'}} >Cadastrar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/extrato" style={{position:'relative' , left: '660px'}} >Extrato</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/avaliacao" style={{position:'relative' , left: '665px'}} >Avaliações</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/sobre-o-ru" style={{position:'relative' , left: '670px'}} >Sobre o RU</a>
          </li>
        </ul>

        </div>
      </div>
    </div>
    )
}

export default NavBar