import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
  // count
  const count = screen.getByText("count: 0");
  expect(count).toBeInTheDocument();
  const button = screen.getByText(/Increment/i);
  fireEvent.click(button)
  const count1 = screen.getByText("count: 1");
  expect(count1).toBeInTheDocument(); 
});
