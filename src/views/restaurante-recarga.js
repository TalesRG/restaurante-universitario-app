import React from "react";
import {withRouter} from 'react-router-dom'
import NavBar from "../componentes/navbar";

class RestauranteRecarga extends React.Component{
    render(){
        return(

            <div>
                <NavBar></NavBar>
                <p>Sera adicionado futuramente</p>
            </div>
        )
    }


}

export default withRouter(RestauranteRecarga)