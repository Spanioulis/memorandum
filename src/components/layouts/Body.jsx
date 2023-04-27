import { Footer, Header, Subheader } from '.';
import { FlexBox } from '../../styles';

const Body = ({ children }) => {
   return (
      <FlexBox>
         <Header data-testid="header" />
         <Subheader />
         {children}
         <Footer />
      </FlexBox>
   );
};

export { Body };
