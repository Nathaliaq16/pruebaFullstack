import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
  

    return (
        <div>
           <h3>Login</h3>
           <form >
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Constraseña</label>
                    <textarea
                        
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <Link to="/create" className='btn btn-primary mt-2 mb-2'> Enviar </Link>
           </form>
        </div>
    )
}

export default CompCreateBlog