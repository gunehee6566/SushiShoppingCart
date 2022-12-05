
import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
    return (
        <>
            <Container className="mb-4">
                <h1>Nigiri</h1>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {storeItems.map(item => (
                        <Col key={item.id}>
                            <StoreItem {...item} />
                        </Col>
                    ))}

                </Row>

            </Container>


        </>
    )
}
