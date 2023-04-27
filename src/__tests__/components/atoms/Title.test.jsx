import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Title } from '../../../components/atoms';

describe('Title', () => {
   it('renders correctly', () => {
      render(<Title as="h1">Title test</Title>);

      const title = screen.getByText(/title test/i);
      expect(title).toBeInTheDocument();
   });
});
