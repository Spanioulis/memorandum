import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Text, Title } from '../atoms';

const HeaderStyled = styled(FlexBox)`
   background-image: linear-gradient(to bottom, ${colors.blueLight}, ${colors.blueDark});
   color: ${colors.text1};
   padding: ${dimensions.spacing.base} 3rem;
`;

const ButtonStyled = styled.button`
   background-color: ${colors.grey};
   border-radius: 1px;
   margin-left: ${dimensions.spacing.xl};
   padding: ${dimensions.spacing.xxs} ${dimensions.spacing.base};
`;

const Header = () => {
   return (
      <HeaderStyled data-testid="header" direction="row" justify="space-between">
         <FlexBox style={{ flex: 1 }} align="start">
            <Title as="h1" color={colors.text1}>
               DEMO Streaming
            </Title>
         </FlexBox>

         <Text color={colors.text1}>Log in</Text>
         <ButtonStyled>
            <Text color={colors.text1}>Start your free trial</Text>
         </ButtonStyled>
      </HeaderStyled>
   );
};

export { Header };
