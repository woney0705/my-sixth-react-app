import Input from './Input'

export default function FormInput({props}) {
    return (
        <div>
            <label htmlFor={props.name} className="label">
            <span className="label-text">{props.labelText}</span>
            </label>
            <Input {...props}/>
        </div>
    );
}