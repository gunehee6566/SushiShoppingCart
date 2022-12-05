import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        increaseCartQuantity,
    } = useShoppingCart()
    const navigate = useNavigate()
    const handleClick = () => navigate(`/store/${id}`)
    return (

        <Card className="h-100 ">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span>{name} <small>(1pc)</small></span>
                    <span className="text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    <Button className="w-100 " onClick={handleClick}
                        variant="outline-secondary" size="sm"
                        style={{ marginBottom: ".5rem" }}>See the description</Button>

                    <Button className="w-100" variant="success" onClick={() => increaseCartQuantity(id)}>
                        Add To Cart
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}