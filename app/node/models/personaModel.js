import mongoose from "mongoose";
const Schema = mongoose.Schema

const personaSchema = new Schema(
    {
      nombre: {type:String},       
      posicion: {type:String},
      avatar: {type:String}
    },
    {collection: 'personas'}
)

export default mongoose.model('personaModel', personaSchema)