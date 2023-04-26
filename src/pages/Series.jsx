import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FlexBox } from '../styles';

const CardStyled = styled.div`
   background-position: center;
   width: 200px;
   height: 300px;
   border-radius: 10px;
   background-image: url(${(props) => props.imageUrl});
   background-size: cover;
`;

const Series = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch('../../public/data/sample.json')
         .then((response) => response.json())
         .then((data) => setData(data.entries))
         .catch((error) => console.error(error));
   }, []);

   return (
      <FlexBox direction="row" wrap="wrap" gap="2rem">
         {data.slice(0, 20).map((item) => (
            <CardStyled key={item.id} imageUrl={item.images['Poster Art'].url}>
               <h2>{item.title}</h2>
               <p>{item.description}</p>
            </CardStyled>
         ))}
      </FlexBox>
   );
};

export { Series };
