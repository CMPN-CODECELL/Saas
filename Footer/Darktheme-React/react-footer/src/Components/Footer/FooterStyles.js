import styled from 'styled-components';

   
export const Box = styled.div`
  padding: 80px 60px;
  position: absolute;
  background-color: black;
  width: 100%;
  height: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: white;
  margin-bottom: 16px;
  font-size: 16px;
  text-decoration: none;
   
  &:hover {
      color:#A1CEF3;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 20px;
  color: #2B8FE6;
  margin-bottom: 35px;
  font-weight: bold;
`;

export const Para = styled.p`
  color: white;
  margin-bottom: 25px;
`;

export const IconCon = styled.div`
  display:flex;
  padding: 5px;
`;

export const Icon = styled.img`
  max-width: 30px;
  margin: 5px;
  cursor: pointer;
`;

export const WebsiteRights = styled.small`
  color: black;
`;

export const CopyDiv = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0px;
  background: #C1DBF2;

`;

export const Totbox = styled.div`
  margin:0px;
  padding:0px;
`;

