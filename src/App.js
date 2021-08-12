import "./App.css";
import { Link, NavLink, withRouter } from "react-router-dom";

const App = (props) => {
  const goToDetails = (item) => {
    props.history.push(`/dashboard/${item}`);
  };
  //Navlink provides us an extraprop activeClassName
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
      <button onClick={goToDetails}>goto</button>
      {[1, 2, 3, 4].map((item) => {
        return <button onClick={() => goToDetails(item)}>Push {item}</button>;
      })}
      <hr />
    </div>
  );
};

export default withRouter(App);
