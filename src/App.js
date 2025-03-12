import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;