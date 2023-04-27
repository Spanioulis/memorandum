import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FlexBox } from '../styles';
import { Card, Popup } from '../components/molecules';
import { Text } from '../components/atoms';

const ContainerStyled = styled(FlexBox)`
   margin: 3rem 0rem;
`;

const Series = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [selectedItem, setSelectedItem] = useState(null);

   const [isOpen, setIsOpen] = useState(false);

   const openModal = (item) => {
      setSelectedItem(item);
      setIsOpen(true);
   };

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
      <>
         <ContainerStyled direction="row" wrap="wrap" gap="2rem">
            {data
               .filter((item) => item.programType === 'series')
               .filter((item) => item.releaseYear >= 2010)
               .slice(0, 20)
               .map((item) => (
                  <Card
                     key={item.title}
                     imageUrl={item.images['Poster Art'].url}
                     title={item.title}
                     onClick={() => openModal(item)}
                  />
               ))}
         </ContainerStyled>
         {selectedItem && (
            <Popup
               isOpen={isOpen}
               toggleModal={() => {
                  setSelectedItem(null);
                  setIsOpen(false);
               }}
               title={selectedItem.title}
            >
               <img src={selectedItem.images['Poster Art'].url} alt={selectedItem.title} width="200px" />
               <Text>{selectedItem.description}</Text>
               <Text>Release Year: {selectedItem.releaseYear}</Text>
            </Popup>
         )}
      </>
   );
};

export { Series };
