import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks.ts';
import './styles.css';
import { dashboardValueSelector } from '../../redux/dashboard/selectors.ts';
import { increment } from '../../redux/dashboard/dashboardSlice.ts';

function App() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(dashboardValueSelector);

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>Virtual machines dashboard</h1>
      <p>{value}</p>
      <button onClick={handleClick}>Increment value</button>
    </div>
  );
}

export default App;
