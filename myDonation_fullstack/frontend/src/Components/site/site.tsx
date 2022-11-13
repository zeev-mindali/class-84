import Menu from "../Layout/Menu/Menu";
import Routing from "../Layout/Routing/Routing";
import "./site.css";

function Site(): JSX.Element {
  return (
    <div className="site">
      <Menu />
      <hr />
      <Routing />
    </div>
  );
}

export default Site;
