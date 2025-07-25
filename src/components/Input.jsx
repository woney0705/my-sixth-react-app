export default function Input(props) {
    return (
       <input id={props.id}   
            type={props.type} 
            name={props.name} 
            value={props.value} 
            min={props.min} 
            className={"input input-bordered " + props.className} 
            required={props.required} 
            onChange={props.onChange} 
       />
    );
}