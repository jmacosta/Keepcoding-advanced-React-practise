import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { authLogin } from '../../../../store/actions';
import LoginPage from '../LoginPage';
jest.mock('../../../../store/actions');
describe('LoginPage', () => {
  const state = { ui: { isFetching: false, error: null } };
  const store = {
    getState: () => state,
    subscribe: () => {}
  };
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

  test('snapshot', () => {
    const result = renderComponent();

    expect(result.container).toMatchSnapshot();
  });
  test('Should dispatch authLogin action', () => {
    const email = 'user@example.com';
    const password = '123456';
    const rememberMe = '';

    renderComponent();
    const emailInput = screen.getByPlaceholderText(/Email/);
    const passwordInput = screen.getByPlaceholderText(/Password/);

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled;
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    fireEvent.click(submitButton);
    expect(submitButton).toBeEnabled;
    expect(authLogin).toHaveBeenCalledWith({ email, password, rememberMe });
  });
});
