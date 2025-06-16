import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Background from './pages/Background';
import ProjectDetails from './pages/ProjectDetails';
// import ReachOut from './pages/ReachOut';
// import ErrorPage from './pages/Error';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'background', element: <Background /> },
      { path: 'projects/:id', element: <ProjectDetails  /> }, // Assuming Projects handles the details view
      // { path: 'reachout', element: <ReachOut /> },
      // { path: '*', element: <ErrorPage /> },
    ],
  },
];

export default routes;