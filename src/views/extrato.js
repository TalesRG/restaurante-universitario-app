import React from 'react'
import '../cardHome.css'
import { withRouter } from 'react-router-dom'


class Extrato extends React.Component{
    render(){
        return(
            
            <div className="card text-center">
            <div className="card-header">
                <h2>Consultar extrato</h2>
            </div>
            <div className="card-body">
                <h3 className="card-title">Últimas transações</h3>
                <br></br>
                <h5>R$50,00 ------------------------------ 13/08/2022</h5>
                <h5>R$40,00 ------------------------------ 13/08/2022</h5>
                <h5>R$61,00 ------------------------------ 13/08/2022</h5>
                <h5>- R$6,10 ------------------------------ 13/08/2022</h5>
                <h5>- R$ 6,10 ------------------------------ 13/08/2022</h5>
                <h5>- R$ 2,70 ------------------------------ 13/08/2022</h5>
                <br></br>
                <a href="#/restaurante-recarga" className="btn btn-primary">Fazer recarga</a>
            </div>
            </div>
        )
    }
}

export default withRouter(Extrato)