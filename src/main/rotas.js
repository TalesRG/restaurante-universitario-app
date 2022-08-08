import React from "react";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import RestauranteRecarga from "../views/restaurante-recarga";
import {Route,Switch,HashRouter} from 'react-router-dom'


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path= "/login" component={Login}></Route>
                <Route path= "/cadastro-usuario" component={CadastroUsuario}></Route>
                <Route path= "/ru-recarga" component={RestauranteRecarga}></Route>
            </Switch>
        </HashRouter>
    )
}

export default Rotas