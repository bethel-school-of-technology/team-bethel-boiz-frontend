// import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NewPost from "./screens/NewPost";
import Profile from "./screens/Profile/Profile";
import SignUp from "./screens/SignUp";
import Header from "./components/Header";
import Admin from "./screens/Admin";
import AdminPosts from "./screens/AdminPosts";
import Missing from "./screens/Missing";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {

  return (
    <Router>
      <div>
        <div className="App">
          <Header />
        </div>
        <Routes>
<<<<<<< HEAD
          
=======
        {/* //Public Routes */}
>>>>>>> origin
          <Route path="/login" element={<Login />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />


        {/* //Protected Routes */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminposts" element={<AdminPosts />} />


         {/* //Catch All */}
          <Route path="/*" element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
}







export default App;