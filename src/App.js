import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Components/HomeScreen";
import MobileSidebar from "./Components/MobileSidebar";
import SideBar from "./Components/SideBar";
import Courses from "./Components/Courses";

function App() {
  return (
    <Router>
      <div className="flex">
          <div class="w-full lg:w-10/12 flex flex-col justify-between">
          <div className="px-3 md:px-10 py-8 ms-0 md:ms-5">
            <Header />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
            </Routes>
          </div>
        </div>
        <div
          className="w-0 lg:w-2/12 hidden lg:flex fixed right-0 bg-gray-100 flex-col justify-between pt-8 pb-5 px-5"
          style={{ height: "100%" }}
        >
          <SideBar />
        </div>
        <MobileSidebar />
      </div>
      <Footer />
    </Router>
  );
}

export default App;

