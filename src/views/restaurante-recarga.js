import React from "react";
import {withRouter} from 'react-router-dom'
import CardRecarga from "../componentes/cardRecarga";
import "../cardRecarga.css";

class RestauranteRecarga extends React.Component{
    render(){
        return(
            <div>
                <h1>Faça já sua recarga!</h1>
                <br></br>
                <br></br>
                <CardRecarga>

                </CardRecarga>
            </div>
        )
    }


}

export default withRouter(RestauranteRecarga)