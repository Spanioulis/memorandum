import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexBox, colors, dimensions } from '../styles';
import placeholder from '../assets/placeholder.png';

const HomeContainerStyled = styled(FlexBox)`
   gap: 0.4rem;
   margin-top: 3rem;
   padding: 3rem;
`;

const CardStyled = styled(FlexBox)`
   background-color: ${colors.greyDark};
   background-image: url(${placeholder});
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;
   border-radius: 10px;
   height: 400px;
   width: 300px;
`;

const LinkStyled = styled(Link)`
   color: ${colors.text1};
   font-size: ${dimensions.font.h1};
   text-decoration: none;
`;

const Home = () => {
   return (
      <HomeContainerStyled direction="row" justify="flex-start" wrap="wrap">
         <CardStyled>
            <LinkStyled to="/series">SERIES</LinkStyled>
         </CardStyled>
         <CardStyled>
            <LinkStyled to="/films">MOVIES</LinkStyled>
         </CardStyled>
      </HomeContainerStyled>
   );
};

export { Home };
