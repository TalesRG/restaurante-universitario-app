import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import Rotas from './rotas'
import NavBar from '../componentes/navbar';
import "../style.css"

class App extends React.Component{
  render(){
    return(
      <>
      <NavBar></NavBar>
      <div className='container'>
        <Rotas></Rotas>        
      </div>
        
      </>
      
    )
  }
}

export default App;
