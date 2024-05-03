const { name } = require('ejs');
require('dotenv').config();
const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://panda:<password>@atlascluster.6dxqrgm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster");
const connect  = mongoose.connect(process.env.MONGO_URL);
const plm = require('passport-local-mongoose');

const userSchema = mongoose.Schema({

        username: String,
        pname:String,
        email: String,
        password: String,
        profileImage:String,
        contact:Number,
        boards:{
          type:Array,
          default: []
        },
        posts:[{

          type:mongoose.Schema.Types.ObjectId,
          ref: 'post'
        }]
        
});

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);

module.exports = User;