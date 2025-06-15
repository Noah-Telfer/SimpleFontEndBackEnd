import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Background from './pages/Background';
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
      // { path: 'reachout', element: <ReachOut /> },
      // { path: '*', element: <ErrorPage /> },
    ],
  },
];

export default routes;