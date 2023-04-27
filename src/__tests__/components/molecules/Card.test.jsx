import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from '../../../components/molecules';

describe('Card', () => {
   it('renders Card component with background image and title', () => {
      const mockData = {
         key: 1,
         imageUrl: 'https://example.com/image.jpg',
         title: 'Example Title'
      };
      const { container } = render(<Card {...mockData} />);

      const cardElement = container.firstChild;

      expect(screen.getByText(mockData.title)).toBeInTheDocument();
      expect(cardElement).toHaveStyle(`background-image: url(${mockData.imageUrl})`);
   });
});
