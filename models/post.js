const mongoose= require("mongoose")

const PostSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        max:500,
    },
    img:{
        type:String,
        max:50000,
    },
    likes:{
        type:Array,
        default:[],
    },
    comments:[{
        name:String,
        profilePic:String,
        userId:String,
        desc:String,
    }],
},
{timestamps: true},
);

module.exports = mongoose.model("post",PostSchema);