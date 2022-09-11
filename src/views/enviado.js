import React from 'react'
import { withRouter } from 'react-router-dom'


class Enviado extends React.Component{
    render(){
        return(
            <>
            <br></br>
            <center>
            <img src="https://imagepng.org/wp-content/uploads/2019/12/check-icone-scaled.png" className="centerImage" alt="CH Logo" height="300" width="300"/>
            <br></br><br></br>
            <h1>Sugestão enviada com sucesso!!</h1> 
            </center>
            <hr className="featurette-divider"/>

            <div> 
                <footer className="container">
                <p className="float-end"><a href="#/home">Voltar à página inicial</a></p>
                </footer>
                <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>  
            </div>
            </>
        )
    }


}

export default withRouter (Enviado)