import { Provider } from 'react-redux';
import { fireEvent, render, within } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { store } from '@/redux/store.ts';
import * as virtualMachinesSelectors from '@/redux/virtualMachines/selectors.ts';
import { theme } from '@/theme/theme.ts';
import { Dashboard } from './Dashboard';

const mockDispatch = jest.fn();
const mockedDonutChart = 'DonutChart';
const mockedTrendChart = 'TrendChart';
const mockedVMTable = 'VMTable';

jest.mock('@/components/Dashboard/DonutChart/DonutChart.tsx', () => ({
  DonutChart: () => <div>{mockedDonutChart}</div>,
}));

jest.mock('@/components/Dashboard/TrendChart/TrendChart.tsx', () => ({
  ...jest.requireActual('@/components/Dashboard/TrendChart/TrendChart.tsx'),
  TrendChart: () => <div>{mockedTrendChart}</div>,
}));

jest.mock('@/components/Dashboard/VMTable/VMTable.tsx', () => ({
  VMTable: () => <div>{mockedVMTable}</div>,
}));

jest.mock('@/hooks/storeHooks.ts', () => ({
  ...jest.requireActual('@/hooks/storeHooks.ts'),
  useAppDispatch: () => mockDispatch,
}));

const Component = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  </Provider>
);

describe('Dashboard', () => {
  const mockedVirtualMachinesSelector = jest.spyOn(
    virtualMachinesSelectors,
    'virtualMachinesSelector',
  ) as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    mockedVirtualMachinesSelector.mockReturnValue({
      data: [],
      pending: false,
    });
  });

  it('should render loading state', () => {
    mockedVirtualMachinesSelector.mockReturnValue({
      data: [],
      pending: true,
    });

    const { getByRole } = render(<Component />);

    const loadingElement = getByRole('progressbar');

    expect(loadingElement).toBeInTheDocument();
  });

  it('should render component', () => {
    const { getByText } = render(<Component />);

    const virtualMachinesElement = getByText('State');
    const newButtonElement = getByText('Trend');
    const donutChartElement = getByText('DonutChart');
    const trendChartElement = getByText('TrendChart');
    const vmTableElement = getByText('VMTable');

    expect(virtualMachinesElement).toBeInTheDocument();
    expect(newButtonElement).toBeInTheDocument();
    expect(donutChartElement).toBeInTheDocument();
    expect(trendChartElement).toBeInTheDocument();
    expect(vmTableElement).toBeInTheDocument();

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  it("should allow the user to select 'Last 7 days'", () => {
    const { getByRole } = render(<Component />);

    let selectButton = getByRole('combobox');

    fireEvent.mouseDown(selectButton);

    const listbox = within(getByRole('listbox'));

    fireEvent.click(listbox.getByText(/last 7 days/i));

    const combobox = within(getByRole('combobox'));

    selectButton = combobox.getByText(/Last 7 days/i);

    expect(selectButton).toBeInTheDocument();
  });
});
