import styled from 'styled-components';
import { FlexBox, colors } from '../../styles';
import { Title } from '../atoms';

const CardStyled = styled(FlexBox)`
   position: relative;
   text-align: center;
   background-image: url(${(props) => props.imageUrl});
   background-position: center;
   background-size: cover;
   border-radius: 5px;
   cursor: pointer;
   height: 300px;
   opacity: 1;
   padding: 0.5rem;
   transition: all 0.3s ease-in-out;
   width: 200px;
   border: 2px solid transparent;

   &:hover {
      border-color: white;
      opacity: 0.8;
      ${Title} {
         color: ${colors.greyLight};
      }
   }
`;

const Card = ({ key, imageUrl, title, onClick }) => {
   return (
      <CardStyled key={key} imageUrl={imageUrl}>
         <Title as="h2" onClick={onClick}>
            {title}
         </Title>
      </CardStyled>
   );
};

export { Card };
