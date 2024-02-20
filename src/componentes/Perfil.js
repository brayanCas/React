import React from 'react';
import '../estilos/Perfil.css';
import Contador from './Contador';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='cargo-perfil'>
               <strong>{props.nombre}</strong> en {props.pais}
            </p>        
        <p className='cargo-perfil'>
            {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='resena-perfil'>"{props.perfil}" </p>
        </div>
        {/* botones redes*/}
        <div className='contenedor-botones'>
            <button className='btn-llamativo2'  onClick={()=>window.open(props.linkedin,'_blank')}>
            <Contador>Seguir en linkedin</Contador>    
            </button>
                 
        </div>    
        <div className='contenedor-botones'>
            <button className='btn-llamativo2'  onClick={()=>window.open(props.youtube,'_blank')}
            > <Contador>Seguir en Youtube</Contador>    
            </button>
        
        </div>            
            <div className='contenedor-botones'>
            <button className='btn-llamativo2' onClick={()=>window.open(props.twitter,'_blank')}
            > <Contador>Seguir en X (Anteriormente Twitter)</Contador>    
            </button>         
        </div>
    </div>
    );
}
export default Perfil;