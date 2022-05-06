import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('username input show be rendered', () =>{
  render(<App />);
  const userinput = screen.getByPlaceholderText(/username/i);
  expect(userinput).toBeInTheDocument();
})

test('pass input show be rendered', () =>{
  render(<App />);
  const passinput = screen.getByPlaceholderText(/password/i);
  expect(passinput).toBeInTheDocument();
})

test('login input show be rendered', () =>{
  render(<App />);
  const logininput = screen.getByRole("button");
  expect(logininput).toBeInTheDocument();
})

test('login input should be disabled', () =>{
  render(<App />);
  const logininput = screen.getByRole("button");
  expect(logininput).not.toBeDisabled();
})

test('err msg should be inivisible', () =>{
  render(<App />);
  const err = screen.getByTestId("error");
  expect(err).toBeVisible();
})

test('username input should be testval', () =>{
  render(<App />);
  const userinput = screen.getByPlaceholderText(/username/i);
  const testvalue = "test";

  fireEvent.change(userinput, { target: { value: testvalue } });
  expect(userinput.value).toBe(testvalue);  
})

