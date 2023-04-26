import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Text } from '../atoms';

const FooterStyled = styled(FlexBox)`
   background-color: ${colors.greyDark};
   bottom: 0;
   color: ${colors.text1};
   gap: 0.5rem;
   height: 10rem;
   padding: ${dimensions.spacing.base} 3rem;
   width: 100%;
`;

const Footer = () => {
   return (
      <FooterStyled data-testid="footer" direction="row" justify="flex-start">
         <Text>Home</Text>
         <Text>|</Text>
         <Text>Terms and conditions</Text>
         <Text>|</Text>
         <Text>Privacy Policy</Text>
         <Text>|</Text>
         <Text>Collection Statement |</Text>
         <Text>|</Text>
         <Text>Help |</Text>
         <Text>|</Text>
         <Text>Manage Account</Text>
      </FooterStyled>
   );
};

export { Footer };
