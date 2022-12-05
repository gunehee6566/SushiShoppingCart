import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { Home } from "../../pages/Home"
import './Navbar.scss'

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-light shadow-lg mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} className="sushiGiwa">
                        Sushi Giwa
                    </Nav.Link>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Menu
                    </Nav.Link>
                </Nav>
                <Button style={{ width: "3rem", height: "3rem", paddingLeft: "0.5rem", position: "relative" }} variant="outline-success" className="rounded-circle shoppingCartBtn"
                    onClick={openCart}>
                    <FaShoppingCart className="icon" />
                    <div
                        className="rounded-circle bg-danger d-flex justify-content-center 
                align-itmes-center"
                        style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                        }}>
                        {cartQuantity}
                    </div> </Button>
            </Container>
        </NavbarBs>
    )
}