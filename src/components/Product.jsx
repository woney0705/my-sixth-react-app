import Input from './Input'


export default function Product({product, checked, onChange}) {

    return (
        <label className="card shadow-lg bordered cursor-pointer">
            <Input 
                type="checkbox"
                name="products"
                value={product.id}
                className="checkbox absolute top-4 left-4"
                checked={checked}
                onChange={onChange}
            />
            <figure>
                <img
                    src={product.imageUrl || 'https://via.placeholder.com/300'}
                    alt={product.name}
                    className="object-cover h-48 w-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>₩{product.price?.toLocaleString() ?? '0'}</p>
            </div>
        </label>
    );
}