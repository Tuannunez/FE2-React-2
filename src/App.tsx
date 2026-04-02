import { Toaster } from "react-hot-toast";
import {Table } from "antd";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Login from "./components/Login";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

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
            <Login/>
            <Table columns={[]} dataSource={[]} />
          </div>

          <Toaster />
        </>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
