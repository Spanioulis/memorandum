import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FlexBox } from '../styles';
import { Text } from '../components/atoms';

const ContainerStyled = styled(FlexBox)`
   margin-top: 2rem;
`;

const CardStyled = styled.div`
   background-image: url(${(props) => props.imageUrl});
   background-position: center;
   background-size: cover;
   border-radius: 10px;
   height: 300px;
   width: 200px;
`;

const Series = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      fetch('../../public/data/sample.json')
         .then((response) => response.json())
         .then((data) => {
            setData(data.entries);
            setLoading(false);
         })
         .catch((error) => {
            console.error(error);
            setLoading(false);
            setError(true);
         });
   }, []);

   if (loading) {
      return <Text>Loading...</Text>;
   }

   if (error) {
      return <Text>Oops! Something went wrong...</Text>;
   }
   return (
      <ContainerStyled direction="row" wrap="wrap" gap="2rem">
         {data.slice(0, 20).map((item) => (
            <CardStyled key={item.title} imageUrl={item.images['Poster Art'].url}>
               <h2>{item.title}</h2>
               <p>{item.description}</p>
            </CardStyled>
         ))}
      </ContainerStyled>
   );
};

export { Series };
