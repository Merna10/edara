import { createBrowserRouter } from "react-router-dom";
import { ProductList } from "./manage/product/productList";
import { SvProductList } from "./manage/svProduct/superVproductList ";
import { Request } from "./manage/svProduct/request";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import { AddWarehouse } from "./manage/warehouses/addwarehou";
import { UpdateWarehous } from "./manage/warehouses/updatewarehou";
import { SvHome } from "./pages/home/svhome";
import { AdminHome } from "./pages/home/adminhome";
import { App } from "./App";
import { AddProduct } from "./manage/product/addProduct";
import { UpdateProduct } from "./manage/product/updateProduct";
import { AddSuberv } from "./manage/supervisors/addSv";
import { UpdateSuber } from "./manage/supervisors/updateSv";
import { WhList } from "./manage/warehouses/whList";
import { SvList } from "./manage/supervisors/svList";
import { SvHistorList } from "./manage/historyRequests/svReq";
import { AdminHistorList } from "./manage/historyRequests/adminReq";
// List of Routes (Pages)
// Route is (url displayed in browser + which component to display)

// Here we have 1 Route (that contains nested routes)
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // App component children routes
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/adminhome",
        element: <AdminHome />,
      },
      {
        path: "/svhome",
        element: <SvHome />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addsv",
        element: <AddSuberv />,
      },
      {
        path: "/svList",
        element: <SvList />,
      },
      {
        path: "/updatesv",
        element: <UpdateSuber />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/updateproduct",
        element: <UpdateProduct />,
      },
      {
        path: "/productList",
        element: <ProductList />,
      },
      {
        path: "/addwh",
        element: <AddWarehouse />,
      },
      {
        path: "/whList",
        element: <WhList />,
      },
      {
        path: "/updatewh",
        element: <UpdateWarehous />,
      },
      
      {
        path: "/SvProductList",
        element: <SvProductList />,
      },
      {
        path: "/request",
        element: <Request />,
      },
      {
        path: "/supervisorHistory",
        element: <SvHistorList />,
      },
      {
        path: "/adminhistory",
        element: <AdminHistorList />,
      },
    
      
    ],
  },
]);


