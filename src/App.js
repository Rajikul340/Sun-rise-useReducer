
import { RouterProvider } from "react-router-dom";
import ProuctProvider from "./component/context/ProuctProvider";
import { routers } from "./Routes/routes";

function App() {
 
  return (
    <ProuctProvider>
      <RouterProvider router={routers}></RouterProvider>
    </ProuctProvider>
  );
}

export default App;
