import mongoose, { Schema } from "mongoose";

//Author scheme
const schema: mongoose.Schema = new mongoose.Schema(
    {
        name:{
            type: String,
            requied: true,
        },
    },
    
    {timestamps: true}
)
export default mongoose.model("Author", schema);