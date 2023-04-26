import styled from 'styled-components';
import { colors, dimensions } from '../../styles';

const Text = styled.p`
   color: ${({ color }) => color || colors.text1};
   font-size: ${({ size }) => size || dimensions.font.base};
   font-weight: ${({ weight }) => weight || 'normal'};
`;

export { Text };
