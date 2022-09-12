import './card.css'
function Card({ item, handleAdd }) {
    return (
                <div className="card" key={item.id}>
                    <a href={item.id}><img src={item.img} className="card-img" alt={item.name} /></a>
                    <div className="card-content">
                        <p>{item.name}</p>
                        <br></br>
                        <h3>{item.price} VNĐ</h3>
                    </div>
                    <div className="card-button">
                        <button onClick={()=>handleAdd(item)}>Thêm vào giỏ</button>
                    </div>
                </div>
    )
}
export default Card