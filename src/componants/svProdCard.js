import "../css/productCard.css";

import { Link } from "react-router-dom";
export const SvProduct = (items) => {
  
  return (
    <div className="productCard">
      <div className="card">
        <img className="card-img-top" src={items.image} alt="" />
        <div className="card-body">
          <h4 className="card-title">{items.name}</h4>
          <div className="card-text">Description: {items.descr}</div> -
          <div className="card-number">Stock: {items.stock} unit</div>
          <button className="productCardbtn"><Link to={'/request'} >Change Stock</Link></button>
        </div>
      </div>
    </div>
  );
};
