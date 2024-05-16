import { cleanup, render, screen } from '@testing-library/react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import LoginInput from './LoginInput';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';

/**
 * skenario testing
 *
 * - LoginInput Component
 *   - should handle Email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

expect.extend(matchers);

describe('LoginInput Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle Email typing correctly', async () => {
    // arrange
    render(<LoginInput onLogin={() => {}} />);
    const EmailInput = await screen.getByPlaceholderText('Email');
    // action
    await userEvent.type(EmailInput, 'EmailTest');
    // assert
    expect(EmailInput).toHaveValue('EmailTest');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginInput onLogin={() => {}} />);
    const PasswordInput = await screen.getByPlaceholderText('Password');
    // action
    await userEvent.type(PasswordInput, 'PasswordTest');
    // assert
    expect(PasswordInput).toHaveValue('PasswordTest');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const MockLogin = vi.fn();
    render(<LoginInput onLogin={MockLogin} />);
    const EmailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(EmailInput, 'EmailTest');
    const PasswordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(PasswordInput, 'PasswordTest');
    const LoginButton = await screen.getByRole('button', { name: 'Login' });

    // action
    await userEvent.click(LoginButton);

    // assert
    expect(MockLogin).toBeCalledWith({
      email: 'EmailTest',
      password: 'PasswordTest',
    });
  });
});
