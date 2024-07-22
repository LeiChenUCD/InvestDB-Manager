import LeftBar from "./LeftBar"
import Investor from "./Investor"
import { Header } from "./Header"
/*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=dfe5f0&c2=e5e3ff&gt=r&gd=dcr
*/
function Root() {
    return <div style={{background: "#DFE5F0", background: "radial-gradient(at right center, #DFE5F0, #E5E3FF)", height: "100vh"}}>
        {/* <Header/> */}
        <div style={{display: "flex", flexDirection: "row"}}>
        <LeftBar/>
        <Investor/>
        </div>
        
    </div>
}

export default Root