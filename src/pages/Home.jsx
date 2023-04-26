import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexBox, colors, dimensions } from '../styles';
import placeholder from '../assets/placeholder.png';

const HomeContainerStyled = styled(FlexBox)`
   margin-top: 3rem;
   padding: 3rem;
   gap: 0.4rem;
`;

const CardStyled = styled(FlexBox)`
   background-image: url(${placeholder});
   background-color: ${colors.greyDark};
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   width: 300px;
   height: 400px;
   border-radius: 10px;
`;

const LinkStyled = styled(Link)`
   text-decoration: none;
   color: ${colors.text1};
   font-size: ${dimensions.font.h1};
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
