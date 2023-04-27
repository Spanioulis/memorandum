import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Text } from '../atoms';
import facebook from '../../assets/social/facebook-white.svg';
import twitter from '../../assets/social/twitter-white.svg';
import instagram from '../../assets/social/instagram-white.svg';
import appStore from '../../assets/store/app-store.svg';
import playStore from '../../assets/store/play-store.svg';
import windowsStore from '../../assets/store/windows-store.svg';

const FooterStyled = styled(FlexBox)`
   background-color: ${colors.greyDark};
   bottom: 0;
   color: ${colors.text1};
   height: 10rem;
   padding: ${dimensions.spacing.base} 3rem;
   width: 100%;
`;

const ImgStyled = styled.img`
   border-radius: 7px;
`;

const Footer = () => {
   return (
      <>
         <FooterStyled data-testid="footer" direction="column" justify="space-around" gap="2rem">
            <FlexBox direction="row" justify="flex-start" gap="0.7rem">
               <Text>Home</Text>
               <Text>|</Text>
               <Text>Terms and conditions</Text>
               <Text>|</Text>
               <Text>Privacy Policy</Text>
               <Text>|</Text>
               <Text>Collection Statement</Text>
               <Text>|</Text>
               <Text>Help</Text>
               <Text>|</Text>
               <Text>Manage Account</Text>
            </FlexBox>

            <FlexBox direction="row">
               <FlexBox direction="row" justify="flex-start" gap="1rem">
                  <img src={facebook} alt="facebook" width="10px" />
                  <img src={twitter} alt="twitter" width="20px" />
                  <img src={instagram} alt="instagram" width="20px" />
               </FlexBox>
               <FlexBox direction="row" justify="center" gap="1rem">
                  <img src={appStore} alt="appStore" />
                  <img src={playStore} alt="playStore" />
                  <ImgStyled src={windowsStore} alt="windowsStore" width="110px" />
               </FlexBox>
            </FlexBox>
         </FooterStyled>
      </>
   );
};

export { Footer };
