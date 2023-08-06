import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


export default function Alertresponce(props) {
    return (
        <div className='alert'>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {props.data}
            </Alert>
        </div>
    )
}
