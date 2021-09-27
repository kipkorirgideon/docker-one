import {personController} from '../controllers/testController'
import {Response , Application} from 'express'
const personcontroller = new personController()
module.exports = (app:Application)=>{
    app.get('/', async(req:any, res:any)=>{

        const data = await personcontroller.greetings()
        res.render('test', {
            title:'I love dockers',
            data: data ? data: {}
        })

    })

}