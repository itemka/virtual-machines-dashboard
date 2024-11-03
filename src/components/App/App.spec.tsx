import { render } from '@testing-library/react';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from '../../redux/store.ts';
import * as dashboardSelectors from '../../redux/dashboard/selectors';

const mockDispatch = jest.fn();

jest.mock('../../hooks/storeHooks.ts', () => ({
  ...jest.requireActual('../../hooks/storeHooks.ts'),
  useAppDispatch: () => mockDispatch,
}));

const Component = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('App', () => {
  const mockedDashboardValueSelector = jest.spyOn(
    dashboardSelectors,
    'dashboardValueSelector',
  );

  beforeEach(() => {
    mockedDashboardValueSelector.mockReturnValue(5);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render component', () => {
    const { getByText } = render(<Component />);

    expect(getByText('Virtual machines dashboard')).toBeVisible();
  });
});
