import VisitLoad from "@/functions/visitLoad";
import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router";

const Aquarium = lazy(() => import("@/pages/aquarium"));
const Confirm = lazy(() => import("@/pages/confirm"));

function App() {
  
  return (
    <Router basename="/aquarium">
      <Suspense fallback={<div>Loading...</div>}>
        <VisitLoad />
        <Routes>
          <Route path="/" element={<Aquarium />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
