import LeftBar from "./LeftBar"
import Investor from "./Investor"
import { Header } from "./Header"
function Root() {
    return <div>
        <Header/>
        <div style={{display: "flex", flexDirection: "row"}}>
        <LeftBar/>
        <Investor/>
        </div>
        
    </div>
}

export default Root