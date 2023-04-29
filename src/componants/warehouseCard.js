import "../css/warehouseCard.css";
import { Link } from "react-router-dom";
import { MdLocationPin,MdOutlinePermIdentity } from 'react-icons/md';
export const Warehouse = (info) => {
  
  return (
    <div className="warehouseCard">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{info.name}</h4>
          <h6 className="card-title"><MdOutlinePermIdentity/> ID: {info.id}</h6>
          <h3 className='card-text'><Link to={info.location}><MdLocationPin/></Link>Location</h3>
          <div className="card-number">Status: {info.status} unit</div>
          <button className="warehouseCardbutton"><Link to={'/productList'}>View </Link></button>
          <div><button className="warehouseCardbutton"><Link to={'/updatewh'}>Update </Link></button></div>
          <div><button className="warehouseCardbutton"><Link to={'/productList'} >Delete </Link></button></div>
          
        </div>
      </div>
    </div>
  );
};
