import { Offcanvas, OffcanvasBody, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem"
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json"
import './ShoppingCart.scss'

type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()

    return (
        <div className="cartFont">
            <Offcanvas show={isOpen} onHide={closeCart} placement="end">
                <Offcanvas.Header closeButton>

                    <Offcanvas.Title className="cartFont">
                        Cart
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <OffcanvasBody className="cartFont">
                    <Stack gap={3}>
                        {cartItems.map(item => (
                            <CartItem key={item.id} {...item} />)
                        )}
                        <div className="ms-auto fw-bold fs-5">
                            Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)
                            )}
                        </div>

                    </Stack>

                </OffcanvasBody>

            </Offcanvas>
        </div>
    )
}