import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./pages/Banner";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                </>
              }
            />
          </Routes>
        </main>
        {/* You can add a Footer component here later */}
      </div>
    </Router>
  );
}

export default App;
