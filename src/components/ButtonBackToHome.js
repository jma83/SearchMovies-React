import React from 'react';
import {Link} from 'react-router-dom'


export const ButtonBackToHome = () =>{
    return <Link className='button is-info' to='/'>
    Volver a la portada
    </Link>
}