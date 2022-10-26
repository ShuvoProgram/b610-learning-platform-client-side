import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import './App.css';
import LoadContext from "./context/LoadContext";

function App() {
  return (
    <div className="app">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
