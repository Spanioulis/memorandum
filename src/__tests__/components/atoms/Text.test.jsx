import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Text } from '../../../components/atoms';
import { colors, dimensions } from '../../../styles';

describe('Text', () => {
   it('renders correctly', () => {
      render(
         <Text color={colors.text1} size={dimensions.font.base}>
            Text test
         </Text>
      );

      const text = screen.getByText(/text test/i);
      expect(text).toBeInTheDocument();
      expect(text).toHaveStyle(`color: ${colors.text1}`);
      expect(text).toHaveStyle(`font-size: ${dimensions.font.base}`);
   });
});
