import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'


const CompShowBlogs = () => {
    
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}${id}`)
       getBlogs()
    }

    

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/" className='btn btn-primary mt-2 mb-2'> Volver al login </Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Foto del perfil</th>
                                <th>Nombre</th>
                                <th>Habilidades</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog, index) => (
                                <tr key={ index }>
                                    <td> <img src={blog.foto} alt="Foto no existe" width="180" height="200"></img> </td>
                                    <td> { blog.title } </td>
                                    <td> { blog.skills } </td>
                                    <td>
                                        <button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                        
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowBlogs