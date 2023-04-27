import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Body } from '../../../components/layouts';

describe('Body', () => {
   it('renders correctly', () => {
      render(<Body>Body Test</Body>);

      const body = screen.getByText(/body test/i);
      expect(body).toBeInTheDocument();
   });
});
