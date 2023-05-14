import React from 'react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'
import { store } from './redux/store';

describe('App', () => {
  it('Renders Delivery App', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})