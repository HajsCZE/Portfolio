// MyLayout.js
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './MyLayout.css';


const MyLayout = () => {
  return (
      <div>
        {/* Navigační lišta */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Matyáš Hiess</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Domů</Nav.Link>
                <Nav.Link href="#link">O mně</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                {/* Přidat další odkazy podle potřeby */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>



          <p className='main1'>VÍTEJTE NA MÉM WEBU</p>


          <p className='main2' style={{ position: 'relative', textalign: 'center', marginTop:'-1%', color : '#808080', fontSize: '15px', marginLeft: '20%', marginRight: '10%',
              fontWeight: '100%'}}
          >Tvorba a správa webových stránek</p>


        <p style={{ position: 'relative', textalign: 'center', marginTop:'10%', color : '#808080', fontSize: '20px', marginLeft: '20%', marginRight: '35%'}}
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>





        {/* Paticka (Footer) s margin-top 90% */}
        <footer style={{ marginTop: '90%' }}>
          <Container>
            <p>&copy; 2023 My React App</p>
          </Container>
        </footer>
      </div>
  );
};

export default MyLayout;
