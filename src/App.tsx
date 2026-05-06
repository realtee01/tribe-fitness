/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Membership = lazy(() => import('./pages/Membership').then(module => ({ default: module.Membership })));
const TrainerProfile = lazy(() => import('./pages/TrainerProfile').then(module => ({ default: module.TrainerProfile })));

// Loading Component
const PageLoader = () => (
  <div className="min-h-screen w-full bg-brand-dark flex flex-col items-center justify-center">
    <div className="w-16 h-16 rounded-full border-4 border-brand-lime shadow-[0_0_20px_rgba(217,255,67,0.4)] border-t-transparent animate-spin-slow"></div>
    <div className="mt-8 font-anton text-2xl text-brand-light uppercase tracking-widest animate-pulse-slow">Loading...</div>
  </div>
);

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait a small amount of time for Lenis/DOM to settle
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Sidebar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/trainers/:id" element={<TrainerProfile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
