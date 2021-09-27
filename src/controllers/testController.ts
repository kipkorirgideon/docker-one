import { details } from "../models/testSchema";
export class personController{
    async greetings(){
        try {
            const person:details = {
            name:'Kipkorir Gideon',
            age:26,
            email:'kipkorir.gideon@touchinspiration.com'
       }
       return person
            
        } catch (error) {
            console.log('Error occured')
            
        } 

    }

}