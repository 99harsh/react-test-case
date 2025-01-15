import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByTestId('custom-button')).toHaveTextContent('Click me');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByTestId('custom-button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByTestId('custom-button')).toBeDisabled();
  });

  test('has correct styles', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveClass('button');
  });
});