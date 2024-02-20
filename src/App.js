import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/Contador';


function App() {
  const users = [
  {
    nombre : 'Brais Moure',
    pais: 'Spain',
    imagen: 'brais',
    cargo : 'software engginer',
    empresa :'CEO Mure Dev',
    resena : 'Es un programador, español que comparte recursos en internet',
    linkedin:'https://www.linkedin.com/in/braismoure/',
    youtube:'https://www.youtube.com/@mouredev',
    twitter:'https://twitter.com/MoureDev' ,
  },
  {
    nombre : 'Brais Moure',
    pais: 'Spain',
    imagen: 'facundo',
    cargo : 'software engginer',
    empresa :'CEO Mure Dev',
    resena : 'Es un programador, estadounidense que comparte recursos en internet',
    linkedin:'https://www.linkedin.com/in/braismoure/',
    youtube:'https://www.youtube.com/@mouredev',
    twitter:'https://twitter.com/MoureDev' ,
  },
  {
    nombre : 'Fernando Herrera',
    pais: 'Spain',
    imagen: 'fernando',
    cargo : 'software engginer',
    empresa :'CEO Mure Dev',
    resena : 'Es un programador, Canadiense que comparte recursos en internet',
    linkedin:'https://www.linkedin.com/in/braismoure/',
    youtube:'https://www.youtube.com/@mouredev',
    twitter:'https://twitter.com/MoureDev' ,

  },
  ];
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>my favorite counts</h1>
          {users.map((user) => (
            <Perfil
            nombre={user.nombre}
            pais={user.pais}
            imagen={user.imagen}
            cargo={user.cargo}
            empresa={user.empresa}
            resena={user.resena}
            linkedin ={user.linkedin}
            youtube={user.youtube}
            twitter={user.twitter}
            />
          ))}         
        </div>
      </div>
    );
  }
  
  export default App;