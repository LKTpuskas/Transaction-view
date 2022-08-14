import React from 'react'
import { render, screen } from '@testing-library/react';
import HomeAccount from './HomeAccount';
import { server, rest } from '../../setupServer';
import { API_URL } from '../utils/helpers';

describe('HomeAccount', () => {
  describe('when api returns 200 status', () => {
    it('should render Provider details', async () => {
      render(<HomeAccount />)
      expect(await screen.findByText('Monzo')).toBeInTheDocument()
      expect(await screen.findByText('Current Account')).toBeInTheDocument()
      expect(await screen.findByText('Sort code: 12-34-56')).toBeInTheDocument()
      expect(await screen.findByText('Account number: 12345678')).toBeInTheDocument()
      expect(await screen.findByTestId('balance')).toHaveTextContent('Balance: GBP1250.32')
    })
    it('should render transaction description', async () => {
      render(<HomeAccount />)
      expect(await screen.findByText('Transport for London')).toBeInTheDocument()
      expect(await screen.findByText('Tesco')).toBeInTheDocument()
      expect(await screen.findByText('Amazon')).toBeInTheDocument()
    })
  })
  describe('when api returns 500', () => {
    it('should display an error message', async () => {
      server.use(
        rest.get(API_URL, (req, res, ctx) => {
          return res(ctx.status(500)
          );
        }),
      )
      render(<HomeAccount />)
      expect(await screen.findByRole('heading', { name: 'Error: Request failed with the status code 500' })).toBeInTheDocument()
    })
  })
})
