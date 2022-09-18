import "./Skills.css";
interface killAble{
    killName:string;
}

function Skills(props:killAble): JSX.Element {
    return (
        <div className="Skills">
            <h2>{props.killName} Skills</h2>
            <ul>
                <li>good with the sword</li>
                <li>have emma trueman child</li>
                <li>he in love with emma</li>
                <li>he cann't kill with two fingers</li>
            </ul>
        </div>
    );
}

export default Skills;
