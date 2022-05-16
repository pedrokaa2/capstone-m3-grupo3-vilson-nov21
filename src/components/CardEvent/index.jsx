

function CardEvent ({ imgUrl, date, address, name }) {

    <div>

        <img src={imgUrl} alt={name} />
        <h3>{name}</h3>
        <div>
            <h4>{address}</h4>
            <h5>{date}</h5>
        </div>

    </div>

}

export default CardEvent