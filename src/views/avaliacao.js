import React from 'react'
import { withRouter } from 'react-router-dom'
import HoverRating from '../componentes/rate'

class Avaliacao extends React.Component{

    enviar = () => {
        this.props.history.push('enviado')
    }

    render(){


        return(
            <>
            <h1>Avaliações</h1>
            <br></br>
            <br></br>
            <h4> O que você achou dos pratos da semana? Ajude-nos a saber quais são os melhores e pratos, para que possamos melhorar nosso cardápio e trazer novidades! </h4>
            <br></br> <br></br>
            <hr className="featurette-divider"/>

              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading fw-normal lh-1">Frango com cebola caramelizada</h2>
                  <br></br>
                  <p className="lead">Acompanhamentos: <br></br><br></br>Arroz e feijão carioca <br></br>Purê de batatas <br></br></p>
                  <HoverRating></HoverRating>
                </div>
                <div className="col-md-5">
                  <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://guiadacozinha.com.br/wp-content/uploads/2019/10/frango-com-cebola-caramelada-50561.jpg"></img>

                </div>
              </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Lasanha à bolonhesa</h2>
                    <br></br>
                    <p className="lead">Acompanhamentos: <br></br><br></br>Arroz branco e feijão preto <br></br>Abobrinhas com orégano <br></br></p>
                    <HoverRating></HoverRating>
                    </div>
                    <div className="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://img.itdg.com.br/tdg/images/recipes/000/178/076/216464/216464_original.jpg?w=1200"></img>

                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">Filé de frango com ervas</h2>
                    <br></br>
                    <p className="lead">Acompanhamentos: <br></br><br></br>Arroz branco e feijão carioca <br></br>Macarrão parafuso com molho de tomate <br></br></p>
                    <HoverRating></HoverRating>
                    </div>
                    <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://vitat.com.br/central/Content/handlers/Receita.jpg?id=11453&tipo=r&default=s"></img>

                    </div>
                </div>

                <hr className="featurette-divider"/>
                
                <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Assado de carne</h2>
                    <br></br>
                    <p className="lead">Acompanhamentos: <br></br><br></br>Arroz branco e feijão preto <br></br>Cuscuz temperado <br></br></p>
                    <HoverRating></HoverRating>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-carne-assada.jpg"></img>

                </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">Suíno ao molho barbecue</h2>
                    <br></br>
                    <p className="lead">Acompanhamentos: <br></br><br></br>Arroz branco e feijão carioca <br></br>Farofa de passas <br></br></p>
                    <HoverRating></HoverRating>
                </div>
                <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://i0.wp.com/blogdocheftaico.com/wp-content/uploads/2019/10/Fil%C3%A9-Mignon-Su%C3%ADno-ao-Barbecue.jpg?fit=800%2C533&ssl=1"></img>

                </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Frango cremoso</h2>
                    <br></br>
                    <p className="lead">Acompanhamentos: <br></br><br></br>Arroz branco e feijão carioca <br></br>Farofa de passas <br></br></p>
                    <HoverRating></HoverRating>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=640,h=360,fit=cover/wp-content/uploads/2021/11/img-7988.jpg"></img>

                </div>
                </div>
                <hr className="featurette-divider"/>


                <h3>Envie-nos a sua sugestão!</h3>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com"/>
                </div>
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Sugestão</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                
                <button onClick={this.enviar} type="button" className="btn btn-success">Enviar</button>
                </div>

            </>
        )
    }
}

export default withRouter (Avaliacao)