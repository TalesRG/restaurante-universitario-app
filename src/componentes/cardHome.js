import React from "react";
import '../cardHome.css';


class CardHome extends React.Component{
  
    
    render(){
        return( 
            <div className="card-group">
            <div className="card">
                <img src="https://i.imgur.com/4NGFdgv.jpg"/>
                <div className="card-body">
                <h5 className="card-title">Título do card</h5>
                <p className="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
                </div>
                <div className="card-footer">
                <button onclick="#/login" className="btn btn-success"><a href="#/login">Entrar</a></button>
                </div>
            </div>
            <div className="card">
                <img src="https://i.imgur.com/4NGFdgv.jpg"/>
                <div className="card-body">
                <h5 className="card-title">Título do card</h5>
                <p className="card-text">Este é um card com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>
                </div>
                <div className="card-footer">
                <button>Cadastrar</button>
                </div>
            </div>
            <div className="card">
                <img src="https://i.imgur.com/4NGFdgv.jpg"/>
                <div className="card-body">
                <h5 className="card-title">Título do card</h5>
                <p className="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este card tem o conteúdo ainda maior que o primeiro, para mostrar a altura igual, em ação.</p>
                </div>
                <div className="card-footer">
                <button>Saiba mais</button>

                </div>
            </div>
            </div>
        )
    }
}

export default CardHome
