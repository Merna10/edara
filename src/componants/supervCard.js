import "../css/supervCard.css";
import { Link } from "react-router-dom";
import { MdOutlinePermIdentity } from 'react-icons/md';
export const Supervisor = (info) => {
  
  return (
    <div className="supervCard">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{info.name}</h4>
          <h6 className="card-title"><MdOutlinePermIdentity/> Email: {info.email}</h6>
          <h6 className="card-title"><MdOutlinePermIdentity/> Password: {info.password}</h6>
          <span className="card-number">Status: {info.status}</span>
          <div><button className="supervCardbutton"><Link to={'/updatesv'} >Update</Link></button></div>
          <div><button className="supervCardbutton"><Link to={'/delete'} >Delete</Link></button></div>
        </div>
      </div>
    </div>
  );
};
