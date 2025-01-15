const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim:true
    },
    lname: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    subjects:[]
    
})

userSchema.methods.Subjectsave= async function(subject){
    try {
        this.subjects = this.messages.concat({subject});
        await this.save();
        return this.subjects;
}
    catch (error) {
        console.log("error is",error);
    }
}

const users = new mongoose.model('users',userSchema);

module.exports = users;

