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
                    <h1>Bem-vindo ao Restaurante Universitário!</h1>

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

                      </div>
    
              );
    }
}
export default withRouter(Home)