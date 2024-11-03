import { render } from "@testing-library/react";
import App from './App.tsx';

describe('App', () => {
  it('should render component', () => {
    const { getByText } = render(<App />);

    expect(getByText('Virtual machines dashboard')).toBeVisible();
  });
});