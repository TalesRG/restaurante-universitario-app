import React from "react";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import Extrato from "../views/extrato";
import RestauranteRecarga from "../views/restaurante-recarga";
import Avaliacao from "../views/avaliacao";
import Enviado from "../views/enviado";
import {Route,Switch,HashRouter} from 'react-router-dom'
import Sobreoru from "../views/sobreoru"


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path= "/login" component={Login}></Route>
                <Route path= "/home" component={Home}></Route>
                <Route path= "/cadastro-usuario" component={CadastroUsuario}></Route>
                <Route path= "/ru-recarga" component={RestauranteRecarga}></Route>
                <Route path= "/extrato" component={Extrato}></Route>
                <Route path= "/avaliacao" component={Avaliacao}></Route>
                <Route path= "/enviado" component={Enviado}></Route>
                <Route path= "/sobre-o-ru" component={Sobreoru}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas