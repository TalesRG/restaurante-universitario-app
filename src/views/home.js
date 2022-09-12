import React from "react";
import {withRouter} from 'react-router-dom'; 
import { Carousel } from 'react-carousel-minimal';


class Home extends React.Component{
    entrar = () => {
        this.props.history.push('/login')
    }
    prepararCadastrar = () =>{
        this.props.history.push('/cadastro-usuario')
    }
    render(){
                
             const data = [
                {
                  image: "https://i.imgur.com/4NGFdgv.jpg",
                  caption: "Faça o controle de suas recargas"
                                         
                },
                {
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Campus_da_UnB_no_Gama_%28FGA%29_completa_10_anos_%2839135873690%29.jpg/800px-Campus_da_UnB_no_Gama_%28FGA%29_completa_10_anos_%2839135873690%29.jpg",
                  caption: "Entre ou faça seu cadastro gratuitamente"
                }

                
              ];
            
              const captionStyle = {
                fontSize: '2em',
                fontWeight: 'bold',
              }
              const slideNumberStyle = {
                fontSize: '20px',
                fontWeight: 'bold',
              }
        return (
                <div className="App">
                
                  <div style={{ textAlign: "center" }}>
                    <h1><strong>Bem-vindo ao Restaurante Universitário!</strong></h1>


                      <p>Fique atualizado com o cardápio da semana e gerencie seus gastos</p>
                    <div style={{
                      padding: "0 20px"
                    }}>
                      <Carousel
                        data={data}
                        time={2000}
                        width="1800px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={false}
                        pauseIconColor="blue"
                        pauseIconSize="40px"
                        slideBackgroundColor="black"
                        slideImageFit="cover"
                        thumbnails={false}
                        thumbnailWidth="100px"
                        style={{
                          textAlign: "center",
                          maxWidth: "1920px",
                          maxHeight: "1080px",
                          margin: "40px auto",
                          
                        }}
                      />
                    </div>
                  </div>
                  <div className="container marketing">

          <div className="row">
            <div className="col-lg-4">
              <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="https://schippers.com.br/wp-content/uploads/2020/03/cadastro.png"></img>
              <h2 className="fw-normal">Cadastrar</h2>
              <p>Faça já o seu cadastro gratuitamente!</p>
              <p><a className="button" href="#/cadastro-usuario">Cadastrar &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="https://cdn-icons-png.flaticon.com/512/17/17547.png"></img>

              <h2 className="fw-normal">Login</h2>
              <p>Caso já possua uma conta, faça o seu login e aproveite os benefícios!</p>
              <p><a className="button" href="#/login">Login &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <img className="bd-placeholder-img rounded-circle" width="140" height="140" src="https://cdn-icons-png.flaticon.com/512/1243/1243557.png"></img>

              <h2 className="fw-normal">Sobre o RU</h2>
              <p>Clique em saiba mais e conheça a história do Restaurante Universitário da UnB-FGA!</p>
              <p><a className="button" href="#/historia">Saiba mais &raquo;</a></p>
            </div>
          </div>
          </div>
        

              <hr className="featurette-divider"/>

              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading fw-normal lh-1">Controle seus gastos!</h2>
                  <p className="lead">Agora você pode realizar o controle de suas recargas e de quanto foi gasto.</p>
                </div>
                <div className="col-md-5">
                  <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://pbs.twimg.com/media/Eft_8JTXsAA9ZjD.jpg"></img>

                </div>
              </div>

              <hr className="featurette-divider"/>

              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading fw-normal lh-1">Tenha acesso ao cardápio da semana!</h2>
                  <p className="lead">Por meio do Restaurante Universitario Manager é possível acessar o cardápio oficial da Universidade de Brasília.</p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://i0.wp.com/gamacidadao.com.br/wp-content/uploads/2014/04/unb-gama.jpg?fit=600%2C399&ssl=1"></img>

                </div>
              </div>

              <hr className="featurette-divider"/>

              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading fw-normal lh-1">Histórico de compra!</h2>
                  <p className="lead">Tenha acesso ao seu histórico a partir da data que você escolher.</p>
                </div>
                <div className="col-md-5">
                  <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="http://www.noticias.unb.br/images/Noticias/2017/02-Fev/18Set2012_FGA_EduLauton.jpg"></img>

                </div>
              </div>

              <hr className="featurette-divider"/>

              
              <footer className="container">
              <p className="float-end"><a href="#/home">Voltar ao topo</a></p>
              <p>&copy; 2022 Branco Flor de Lótus, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
              </footer>
          
                        
                        
              <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
              
              </div>
        )
    }
}
export default withRouter(Home)