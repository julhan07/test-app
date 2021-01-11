import { Spinner } from "react-bootstrap"

function SpinnerMedia() {
    return <center>
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>
        </center>
    
}


export default SpinnerMedia
