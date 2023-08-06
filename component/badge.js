export default function Badge(props) {
    const {children} = props;
    return(
        <div className="badge">
            {`badge ${props.style && props.style}`}
            {children}
            {props.value ? props.value : "burn"}
        </div>
    ) 
}