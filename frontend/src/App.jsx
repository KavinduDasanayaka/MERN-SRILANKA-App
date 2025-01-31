import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./pages/Auth/Navigation";
import CustomCursor from "./components/CustomCursur";


const App = () => {
  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Toast Container */}
      <ToastContainer />

      {/* Main Content */}
      <main className="py-3">
        <Navigation />

        <Outlet />
      </main>
    </>
  );
};

export default App;