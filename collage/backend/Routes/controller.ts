import { UploadedFile } from 'express-fileupload';
// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import studentLogic from '../Logic/studentLogic';

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
  response.status(200).json( await studentLogic.getAllStudents())
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

export default router;