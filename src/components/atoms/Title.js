import styled from 'styled-components';
import { colors, dimensions } from '../../styles';

const Title = styled.p.attrs((props) => ({
   as: props?.as || 'h1'
}))`
   color: ${({ color }) => color || colors.primary};
   ${({ as }) => as === 'h1' && `font-size: ${dimensions.font.h1}`};
   ${({ as }) => as === 'h2' && `font-size: ${dimensions.font.h2}`};
   ${({ as }) => as === 'h3' && `font-size: ${dimensions.font.h3}`};
`;

export { Title };
