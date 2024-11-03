import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks.ts';
import './styles.css';
import { dashboardValueSelector } from '../../redux/dashboard/selectors.ts';
import { increment } from '../../redux/dashboard/dashboardSlice.ts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(dashboardValueSelector);

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Home
              <br />
              <Link to="dashboard">Dashboard</Link>
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <h1>Virtual machines dashboard</h1>
              <p>{value}</p>
              <button onClick={handleClick}>Increment value</button>
            </>
          }
        />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </Router>
  );
}

export default App;
