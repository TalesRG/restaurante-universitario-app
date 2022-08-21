import ApiService from "../apiService";

class UsuarioService extends ApiService{
    constructor() {
        super("/api");
    }

    autenticar(credenciais){
        return this.post('/autenticar',credenciais)
    }

    salvar(usuario){
        return this.post('/cadastrar',usuario)
    }


}

export default UsuarioService;