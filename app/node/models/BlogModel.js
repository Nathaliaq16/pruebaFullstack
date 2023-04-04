import mongoose from "mongoose";
const Schema = mongoose.Schema

const blogSchema = new Schema(
    {
      nombre: {type:String},       
      contrasena: {type:String}
    },
    {collection: 'blogs'}
)

export default mongoose.model('BlogModel', blogSchema)