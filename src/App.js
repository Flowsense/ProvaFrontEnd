import React, {Component} from 'react';
import logo from './img/logo-white-no-slogan.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" style={{width: 300}}/>
                    <h4>Olá</h4>
                    <div style={{textAlign: 'center', maxWidth: 800}}>
                        Sua tarefa é utilizar a biblioteca axios para fazer uma requisição à uma API REST pública da
                        OMDB de filmes.
                    </div>
                    <div style={{textAlign: 'center', maxWidth: 800}}>
                        Você deve fazer duas coisas:
                        <ol>
                            <li>Mostrar uma lista de filmes com cartaz, título e gênero</li>
                            <li>Permitir aplicar um filtro de gênero para filtrar os resultados</li>
                        </ol>
                        Não é necessário se preocupar com um design bonito, vamos avaliar a organização do
                        código/componentes e aplicação da lógica de programação.
                        A lista de resultados pode ser enxuta, queremos avaliar o uso da biblioteca axios para
                        requisições HTTP.
                        Sinta-se à vontade para instalar e usar quaisquer bibliotecas de suporte que desejar.
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
