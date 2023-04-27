import { useEffect } from 'react';
import styled from 'styled-components';
import { FlexBox, colors, dimensions } from '../../styles';
import { Title } from '../atoms';

const PopupBackgroundStyled = styled(FlexBox)`
   bottom: 0;
   left: 0;
   right: 0;
   top: 0;
   display: flex;
   opacity: 1;
   overflow: hidden;
   padding: 0.2rem;
   position: fixed;
   z-index: 1000;
`;

const PopupWrapper = styled(FlexBox)`
   background-color: rgba(0, 0, 0, 0.68);
   bottom: 0;
   left: 0;
   right: 0;
   top: 0;
   cursor: default;
   display: block;
   height: 100%;
   position: absolute;
   width: 100%;
`;

const PopupContainerSyled = styled(FlexBox)`
   background-color: ${colors.greyDark};
   border-radius: 5px;
   height: 700px;
   margin: 6rem auto ${dimensions.spacing.xl};
   padding: ${dimensions.spacing.xl} ${dimensions.spacing.base};
   position: relative;
   width: 100%;
   max-width: 355px;
   z-index: 1;
`;

const Popup = ({ children, isOpen, toggleModal, title }) => {
   const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
         toggleModal();
      }
   };
   useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
      };
   });

   return isOpen ? (
      <PopupBackgroundStyled>
         <PopupWrapper onClick={toggleModal} />
         <PopupContainerSyled>
            <FlexBox gap="1rem">
               <Title as="h1" fontWeight="bold" color={colors.blueLight}>
                  {title}
               </Title>
               {children}
            </FlexBox>
         </PopupContainerSyled>
      </PopupBackgroundStyled>
   ) : null;
};

export { Popup };
