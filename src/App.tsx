import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import RiskAlerts from './pages/RiskAlerts';
import HealthScore from './pages/HealthScore';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/risk" element={<RiskAlerts />} />
          <Route path="/health" element={<HealthScore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
