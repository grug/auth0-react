import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import useAuth0 from '../src/use-auth0';
import { createWrapper } from './helpers';

describe('useAuth0', () => {
  it('should provide the auth context', async () => {
    const wrapper = createWrapper();
    const {
      result: { current },
      waitForNextUpdate,
    } = renderHook(useAuth0, { wrapper });
    await waitForNextUpdate();
    expect(current).toBeDefined();
  });

  it('should throw with no provider', () => {
    const {
      result: { current },
    } = renderHook(useAuth0);

    expect(current.loginWithRedirect).toThrowError(
      'You forgot to wrap your component in <Auth0Provider>.'
    );
  });

  it('should throw', async () => {
    const App = (): null => {
      useAuth0();

      return null;
    };

    expect(() => render(<App />)).toThrowError('asdasd');
  });
});
