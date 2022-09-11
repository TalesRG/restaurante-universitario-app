import React from "react";
import {withRouter} from 'react-router-dom'
import Card from '../componentes/card';
class Sobreoru extends React.Component{
    render(){
        const data ="https://i.imgur.com/4NGFdgv.jpg"
        return(
            <div>
                <Card title="Sobre o RU">
                    <p>
                    Inaugurado em março de 2014, o RU do Câmpus Gama funciona no prédio do MESP (Módulo de Equipamento e Serviços Poliesportivos) e ocupa uma área de cerca de 200 m².
O RU do FGA foi projetado para que os estudantes possam tem o direito de uma alimentação de qualidade com um preço acessível para todos, e assim não só melhorar o ensino mas sim a vida do universitário.

                    </p>
                </Card>
                <img src={data}
                alt="imagemru"
                width="1295px"
                height="600px">
                </img>
            </div>
        )
    }


}

export default withRouter (Sobreoru)