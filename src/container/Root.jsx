import LeftBar from "./LeftBar"
import Investor from "./Investor"
function Root() {
    return <div>
        <div style={{display: "flex", flexDirection: "row"}}>
        <LeftBar/>
        <Investor/>
        </div>
        
    </div>
}

export default Root