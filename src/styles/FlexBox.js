import styled from 'styled-components';

const FlexBox = styled.div`
   display: flex;
   align-items: ${({ align }) => align || 'center'};
   flex-direction: ${({ direction }) => direction || 'column'};
   flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
   gap: ${({ gap }) => gap || '0rem'};
   justify-content: ${({ justify }) => justify || 'center'};
   width: 100%;
`;

export { FlexBox };
