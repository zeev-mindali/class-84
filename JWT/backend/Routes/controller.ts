import { UploadedFile } from 'express-fileupload';
// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import studentLogic from '../Logic/studentLogic';
import jwt from "jsonwebtoken";
import {getJWT,checkJWT,getUserNameFromJWT} from "../Utils/JWT";
// generic router 
const router = express.Router();

router.get("/courses", async (request: Request, response: Response, next: NextFunction) => {
    console.log("rest test");
    response.status(200).json(await studentLogic.getAllCourses());
})

router.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json("controller working");
})

// gets information from DB
router.get("/all", async (request: Request, response: Response, next: NextFunction) => {
    if (request.headers.authorization){
        //create new JWT
        const userName = getUserNameFromJWT(request.headers.authorization)
        console.log("my user name: ",userName);
        response.set("Authorization",`Bearer ${await getJWT(userName)}`);
        //return the response
        response.status(200).json( await studentLogic.getAllStudents())
    } else {
        response.status(401).json("You are no authorized!!!");
    }
  
})

//get single student
router.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    response.status(200).json( await studentLogic.getSingleStudent(id));
})

// sends information to DB
router.post("/add", async (request: Request, response: Response, next: NextFunction) => {
  const body = request.body;
  console.log(request.body);
  response.status(201).json( await studentLogic.addStudent(body))
})

// delete information from DB
router.delete("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const id = +request.params.id;
  response.status(204).json( await studentLogic.deleteStudent(id))
})

// update information in DB
router.put("/", async (request: Request, response: Response, next: NextFunction) => {
  const body = request.body;
  response.status(201).json( await studentLogic.updateStudent(body));
})


//upload image to the server
router.post('/image',async (request: Request, response: Response, next: NextFunction) => {
    try{
        if (!request.files){
            response.send({
                status: false,
                message: 'no file uploaded'
            });
        } else {
            //user the name of the input field (i.e. "userPhoto") to retrive the uploaded file
            let userPhoto:any = request.files.userPhoto;

            //use the mv() method to place the file in the images directory (i.e. "images")
            userPhoto.mv("./user_image/"+userPhoto.name);
            
            //send response
            response.send({
                status:true,
                message: 'file is uploaded',
                data:{
                    name: userPhoto.name,
                    MimeType:userPhoto.mimetype,
                    size: userPhoto.size,
                    imageLocation: "http://localhost:3001/"+userPhoto.name
                }
            })
        }

    } catch (err){
        console.log("error :\n",err)
        response.status(500).send(err);
    }
})

router.post("/login",async (request: Request, response: Response, next: NextFunction) => {
    //user admin , password admin...
    let body = request.body;
    //console.log(body.user,body.password);
    // if (body.user==="admin" && body.password==="password"){
    //     response.status(202).json("All OK")
    // } else {
    //     response.status(401).json("Who R U?");
    // }
    //create the JWT data

    //check if we have a token in the header.....
    if (request.headers.authorization){    
        //console.log("you token from header:",request.headers.authorization);
        //check the token .......
        try{
            if (await checkJWT(request.headers.authorization)){
                response.status(202).json(`Welcome my Lady , Tirza!!!`);
            } else {
                response.status(401).json("unauthorized user...");
            }
        } catch (err:any){
            console.log(err);
            response.status(404).json("unauthorized user...");
        }
        return;
    } else {
        console.log("no token recived....")
    }

    if (body.user=="admin" && body.password=="password"){
        const token = getJWT(body.user);
        //add token to the system...
        response.set("Authorization",`Bearer ${token}`);
        console.log("user name:",getUserNameFromJWT(token));
        response.status(202).json(`Welcome my Lord , Gal!!!`);
    } else {
        response.status(401).send("You are not authorized!!!!")
    }

});


export default router;