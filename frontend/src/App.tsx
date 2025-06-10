import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HomePage from './pages/Home';
import ProjectList from './components/projects/ProjectList';
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Background from "./pages/Background";
// import ReachOut from "./pages/ReachOut";
// import ErrorPage from "./pages/Error";
import Layout from "./components/layout/Layout";
import Home from './pages/Home';


function App() {
  return (
    
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects />} />
       <Route path="/background" element={<Background />} />
         {/*<Route path="/reachout" element={<ReachOut />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Layout>



    
  );
}

export default App;