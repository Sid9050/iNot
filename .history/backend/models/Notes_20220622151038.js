const mongoose=require('mongoose')

const NotesSchema=new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    :{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
}
)

module.exports=mongoose('user',UserSchema);