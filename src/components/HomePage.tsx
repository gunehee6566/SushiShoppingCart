import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.scss"

export function HomePage() {
    return (

        <div className="mainpage">
            <img src="/imgs/sashimiFive.jpg"></img>
            <div className="textBlock">
                <div className="homeTitle">Sushi Giwa</div>
                <Link to="/store" >
                    <Button className="orderBtn">
                        Order Now
                    </Button>
                </Link>
            </div>
        </div>
    )
}