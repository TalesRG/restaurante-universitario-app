import React from "react";
import Card from "../componentes/card";
import FormGroup from "../componentes/form-group";
import {withRouter} from 'react-router-dom'
class Home extends React.Component{
    render(){
        return (
            <Card title ="Cadatro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-componet">
                            <FormGroup label ="Nome * " htmlFor="inputNome">
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Card>
    
        )
    }
    
}
export default withRouter(Home)
