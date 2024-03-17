import {
  Button,
  Container,
  Nav,
  Navbar,
  DropdownButton,
  Dropdown,
  Badge,
  Form,
  InputGroup,
  NavDropdown
} from "react-bootstrap";
import { LinkContainer,  } from "react-router-bootstrap";
import { Link  } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>BEST ONLINE APP</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <InputGroup>
                <DropdownButton id="dropdown-basic-button" title="All">
                  <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Cars</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Books</Dropdown.Item>
                </DropdownButton>
                <Form.Control type="text" placeholder="Normal text" />
                <Button variant="warning">
                  <i className="bi bi-search text-dark"></i>
                </Button>
              </InputGroup>
            </Nav>
            <Nav>
              <LinkContainer to="/admin/orders">
                <Nav.Link>
                  Admin
  <span className="position-absolute 
  top-1 start-10 translate-middle p-2
   bg-danger borfer borfer-light rounded-circle"></span>
                </Nav.Link>
              </LinkContainer>

              <NavDropdown id="dropdown-basic-button" title="John Doe">
                  <NavDropdown.Item eventKey='/user/my-orders' as={Link} to="/user/my-orders">My orders</NavDropdown.Item>
                  <NavDropdown.Item eventKey='/user' as={Link} to="/user">My profile</NavDropdown.Item>
                  <NavDropdown.Item to="/login">Logout</NavDropdown.Item>
                </NavDropdown>

              <LinkContainer to="/login">
                <Nav.Link>login</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/register">
                <Nav.Link>register</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/cart">
              <Nav.Link>
                <Badge bg="danger">2</Badge>
                <i class="bi bi-cart-dash"></i>
                <span className="ms-1">CART</span>
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponent;
