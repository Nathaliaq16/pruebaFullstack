//importamos el Modelo
import PersonaModel from "../models/personaModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los personas
export const getAllPersonas = async (req, res) => {
    try {
        const personas = await PersonaModel.find()
        res.status(200).json(personas)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un persona
export const getPersona = async (req, res) => {
        try {
            const id = req.params.id
            await PersonaModel.findById( {_id:id} ).then( (persona) => {
                res.status(200).json(persona)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un persona
export const createPersona = async (req, res) => {
    try {
       await PersonaModel.create(req.body)
       res.status(200).json({
           "message":"¡Persona creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un persona
export const updatePersona = async (req, res) => {
    try {
        const id = req.params.id
        await PersonaModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡persona actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un persona
export const deletePersona = async (req, res) => {
    try {
        const id = req.params.id
        await PersonaModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡persona eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}