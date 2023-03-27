import { RouterProvider , createBrowserRouter} from "react-router-dom";
import Main from "./Components/layout/Main";
import Order from "./Components/Order/Order";
import OrderReview from "./Components/OrderReview/OrderReview";

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
      {
        path:'/order',element:<Order></Order>
      },
      {
        path:'/review',element:<OrderReview></OrderReview>
      },
      {

      }
    ]}
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
