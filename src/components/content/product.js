
import datas from '../data/data'
import Card from './card'
import './card.css'
function Product({handleAdd}) {
    return (
        <div className="card-layout">
            <p className="pro-title">Bánh Burgers</p>
            <div className="card-body">
                {datas.map((item) => {
                    return (
                        <Card key={item.id} item={item} handleAdd={handleAdd} />
                    )
                })}
            </div>
        </div>

    )
}
export default Product