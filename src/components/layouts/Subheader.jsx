import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Title } from '../atoms';

const SubheaderStyled = styled(FlexBox)`
   background-color: ${colors.grey};
   color: ${colors.text1};
   padding: ${dimensions.spacing.base} 3rem;
`;

const Subheader = () => {
   return (
      <SubheaderStyled data-testid="header" direction="row" justify="flex-start">
         <Title as="h1" color={colors.white}>
            Popular Titles
         </Title>
      </SubheaderStyled>
   );
};

export { Subheader };
