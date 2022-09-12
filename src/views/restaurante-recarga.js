import React from "react";
import imgcafe from "../componentes/imgcafe.png"
import imgalmoço from "../componentes/imgalmoço.png"
import imgjanta from "../componentes/imgjanta.png"


class RestauranteRecarga extends React.Component{
    render(){
        return(


            <body id="page-top">
             <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Refeições</h2>
                        <h3 className="section-subheading text-muted">No restaurante universitário são oferecidas as seguintes refeições</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" >
                                    <img className="img-fluid" src={imgcafe}  width="180px" alt="..." />
                                </a><br></br>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Café da manhã</div>
                                    <div className="portfolio-caption-subheading text-muted">O café da manhã é a primeira refeição servida e seu horário de funcionamento é das 8 às 9:30 e custa o valor de R$2,70.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" >
                                    <img className="img-fluid" src={imgalmoço} width="180px" align="flex"  alt="..." />
                                </a><br></br>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Almoço</div>
                                    <div className="portfolio-caption-subheading text-muted">O almoço é servido das 11:00 às 14:30 e custa R$6,10 para os alunos da universidade de Brasília.</div><br></br>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal">
                                    <img className="img-fluid" src={imgjanta} width="180px" align="middle" alt="..." />
                                </a><br></br>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">Janta</div>
                                    <div className="portfolio-caption-subheading text-muted">A janta no restaurante está disponível das 17:00 às 19:00 e tem o mesmo preço do almoço: R$6,10.</div>
                                   <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br></br><br></br><br></br><br></br><br></br>
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Sua área</h2>
                        <h3 className="section-subheading text-muted">Confira aqui o seu saldo, extrato e recarregue seu crédito</h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">Saldo</h4>
                            <p className="text-muted">O saldo da sua conta é de R$50,00.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">Extrato</h4>
                            <p className="text-muted">Confira aqui suas últimas compras e recargas.</p>
                            <button type="submit" className="btn btn-primary mb-2">Conferir meu extrato</button>

                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="my-3">Recarga</h4>
                            <p className="text-muted">Recarregue aqui o saldo da sua conta</p>
                            <form class="form-inline">
                                        <div className="form-group mb-2">
                                        </div>
                                        <div className="form-group mx-sm-3 mb-2">
                                            <input type="number" className="form-control" id="inputPassword2" placeholder="Insira o valor" min="0" max="100"></input>
                                        </div>
                                        <button type="submit" className="btn btn-primary mb-2">Confirmar</button>
                                        </form>
                        </div>
                    </div>
                </div>
            </section>
        </body>
        )
    }


}
export default RestauranteRecarga