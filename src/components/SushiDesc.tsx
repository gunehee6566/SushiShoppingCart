import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import storeItem from "../data/items.json"
import './SushiDesc.scss'


export function SushiDesc() {
    const { itemId } = useParams()
    const item = getItem(itemId!)

    return (

        <Container>
            <h1 className="mb-4">{item?.name}</h1>

            <div className="thumnail">
                <img src={item?.descImg} className="resizeImg"></img>
                <div className="caption">{item?.desc}

                </div>
            </div>
        </Container>



    )
}

function getItem(itemId: string) {

    return storeItem.find(({ id }) => String(id) === itemId)
}