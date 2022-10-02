import "./singleTodo.css";

interface SingleTodoProps {
	//which data the component expects
    id:number,
    name:string,
    isCompleted:boolean,
}

function SingleTodo(props: SingleTodoProps): JSX.Element {
    return (
        <div className="singleTodo Box">
			<h1>{props.id}</h1><hr/>
            <h2>{props.name}</h2><br/>
            {props.isCompleted?"Completed":"Not Completed"}
        </div>
    );
}

export default SingleTodo;
