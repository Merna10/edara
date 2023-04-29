// import image
import { Link } from "react-router-dom";
import '../../../css/superVheader.css'

export const SvHeader = () => {
  return (
    <>
      <nav >
        <div >

          <ul >
          <li >
              <Link to={'/svhome'} >Home</Link>
            </li>
            <li >
              <Link to={'/SvProductList'} >Products</Link>
            </li>
            <li >
              <Link to={'/supervisorHistory'}>Requests</Link>
            </li>
            <li className="nav-item2" >
            <Link to={'/'} >LogOut</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
