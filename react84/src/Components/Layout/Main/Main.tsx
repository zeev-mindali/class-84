import Leon from "../Leon/Leon";
import SingleTodo from "../singleTodo/singleTodo";
import "./Main.css";

function Main(): JSX.Element {
    const mySiteHeader = "Main Screen";
    const isLogged = true;
    const takeMeTirza = ["Rom","Leon","Gal","Shmuel","Benny"];

    const todo = [
        {
            id:1,
            name:"Clean the house",
            completed:true,
        },
        {
            id:2,
            name:"Take out grabage",
            completed:false,
        },
        {
            id:3,
            name:"Make fish for kidush",
            completed:false,
        },
        {
            id:4,
            name:"Clean the house",
            completed:false,
        },
    ];

    return (
        <div className="Main">
			<h1>{mySiteHeader}</h1><hr/>
            <h2>
            {isLogged?"User Logged":"Please log in"}<br/>
            {isLogged && "Check our special today"}<br/><br/>
            {takeMeTirza.map(groom=><div className="Box">{groom}</div>)}<br/><br/>
            {/*todo.map(todoItem=><div className="Box"><h3>{todoItem.id}</h3><hr/>{todoItem.name}<br/>{todoItem.completed&&"Completed"}</div>)*/}            
            {todo.map(todoItem =><SingleTodo id={todoItem.id} name={todoItem.name} isCompleted={todoItem.completed}/>)}
            <br/><br/><br/>
            </h2>
        </div>
    );
}

export default Main;
