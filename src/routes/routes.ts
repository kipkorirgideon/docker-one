import { Application } from "express";

namespace generalRouter{
    module.exports = async(app:Application)=>{
        require('./testRouter')(app)

    }
}