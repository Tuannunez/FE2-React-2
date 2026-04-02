import { Toaster } from "react-hot-toast";
// import {Table } from "antd";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Login from "./components/Login";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./pages/Login";
import { StoryList } from "./pages/Lab5";
import EditStory from "./pages/Lab6";
import StoryForm from "./pages/Lab4";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register";

function App() {
  
  return (
    <UserProvider>
      <ThemeProvider>
        <>
          <Navbar />
          {/* MAIN CONTENT */}
          <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
            <Header/>
            <Routes>
              <Route path="/list" element={<StoryList/>} />
              <Route path="/add" element={<StoryForm/>} />
              <Route path="/edit/:id" element={<EditStory/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>
            {/* <Table columns={[]} dataSource={[]} /> */}
          </div>

          <Toaster />
        </>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
