import "./Card.module.scss"
function Card() {
    return ( 
        <div className="container">
            <div className="content">
                <div className="cover">
                    <img src="~\src\assets\img\cover.png"></img>
                </div>
                <div className="ava"></div>
                <span>Description</span>
            </div>
        </div>
    );
}

export default Card;