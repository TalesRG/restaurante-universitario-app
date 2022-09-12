import React from "react";
import FormGroup from "../componentes/form-group";

class CardRecarga extends React.Component{
    state = {
        quantidaderecarga : '',
        mensagemErro: null
    }
    render(){
        return(
            
            <div className="card-group">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Saldo</h5>
                <h7 className="card-text">Seu saldo é:</h7>
                <p>R$ 50,00</p>
                </div>
                <div className="card-footer">
                <small className="text-muted">Saldo</small>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Preços</h5>
                <p className="card-text">Café da manhã: R$ 2,70 <br></br>Almoço: R$ 6,10<br></br>Jantar: R$ 6,10 </p>
                </div>
                <div className="card-footer">
                <small className="text-muted">Preços</small>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Recarregar saldo</h5>
                <p className="card-text">Quanto deseja recarregar?</p>
                <FormGroup label =" R$" htmlFor ="exampleInputrecarga1">
                    <input value={this.state.senha}
                         onChange = {e => this.setState({senha: e.target.value})}
                         type="number" 
                         className="form-control" 
                         id="exampleInputrecarga1" 
                         placeholder="Valor de $0,1 a $100"
                         min="0"
                         max="100"
                         ></input>
                         <button onClick={this.entrar} className="btn btn-success">Recarregar</button>

                </FormGroup>
                </div>
                <div className="card-footer">
                <small className="text-muted">Recarregar saldo</small>
                </div>
            </div>
            </div>
        )
    }
}

export default CardRecarga