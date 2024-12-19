import { render, screen, cleanup } from '@testing-library/react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import RegisterInput from './RegisterInput';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';

/**
 * skenario testing
 *
 * - RegisterInput Component
 *   - should handle Name typing correctly
 *   - should handle Email typing correctly
 *   - should handle password typing correctly
 *   - should call Register function when register button is clicked
 */
expect.extend(matchers);

describe('RegisterInput Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle Name typing correctly', async () => {
    // arrange
    render(<RegisterInput onRegister={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    // action
    await userEvent.type(nameInput, 'NameTest');
    // assert
    expect(nameInput).toHaveValue('NameTest');
  });

  it('should handle Email typing correctly', async () => {
    // arrange
    render(<RegisterInput onRegister={() => {}} />);
    const EmailInput = await screen.getByPlaceholderText('Email');
    // action
    await userEvent.type(EmailInput, 'EmailTest');
    // assert
    expect(EmailInput).toHaveValue('EmailTest');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<RegisterInput onRegister={() => {}} />);
    const PasswordInput = await screen.getByPlaceholderText('Password');
    // action
    await userEvent.type(PasswordInput, 'PasswordTest');
    // assert
    expect(PasswordInput).toHaveValue('PasswordTest');
  });

  it('should call Register function when register button is clicked', async () => {
    // arrange
    const mockRegister = vi.fn();
    render(<RegisterInput onRegister={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'NameTest');
    const EmailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(EmailInput, 'EmailTest');
    const PasswordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(PasswordInput, 'PasswordTest');
    const RegisterButton = await screen.getByRole('button', { name: 'Register' });
    // action
    await userEvent.click(RegisterButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      name: 'NameTest',
      email: 'EmailTest',
      password: 'PasswordTest',
    });
  });
});
