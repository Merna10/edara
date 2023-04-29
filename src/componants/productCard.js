import "../css/productCard.css";
import { useNavigate,Link } from "react-router-dom";

export const Product = (items) => {
  
  return (
    <div className="productCard">
      <div className="card">
        <img className="card-img-top" src={items.image} alt="" />
        <div className="card-body">
          <h4 className="card-title">{items.name}</h4>
          <div className="card-text">Description: {items.descr}</div> -
          <div className="card-number">Stock: {items.stock} unit</div>
          <div><button className="productCardbtn"><Link to={'/updateproduct'} >Update</Link></button></div>
          <div><button className="productCardbtn"><Link to={'/delete'} >delete</Link></button></div>
        </div>
      </div>
    </div>
  );
};
