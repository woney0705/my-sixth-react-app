import Button from './Button'
import Input from './Input'


export default function Product({id, qty, onIncrement, onDecrement, onChangeQty, product}) {

    return (
        <div className="card bg-base-200 shadow p-4">
            <div className="flex justify-between items-center">
            <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">{"₩"+Number(product.price).toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2">
                <Button type="button" className="btn-sm" onClick={onDecrement}>-</Button>
                <Input 
                    type="number"
                    min={1}
                    value={qty}
                    className="input-sm w-16 text-center"
                    onChange={e => {
                        onChangeQty(Number(e.target.value));
                    }}
                    id={id} 
                />
                <Button type="button" className="btn-sm" onClick={onIncrement}>+</Button>
            </div>
            </div>
        </div>
    );
}