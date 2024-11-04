import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './theme/global.scss';
import { Layout } from './components/Layout/Layout.tsx';
import { Dashboard } from './pages/Dashboard/Dashboard.tsx';
import { Events } from './pages/Events/Events.tsx';
import { Help } from './pages/Help/Help.tsx';

export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Layout>
    </Router>
  );
}
