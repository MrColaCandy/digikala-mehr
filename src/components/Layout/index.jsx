import Header from "@components/Header";
import Container from "@components/Container";



const Layout = ({ children }) => {





  return (

    <>
      <Header />
      <Container>{children}</Container>
    </>

  );
};

export default Layout;

//