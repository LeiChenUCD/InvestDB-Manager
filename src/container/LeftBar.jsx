import LeftBarTabs from "../component/LeftBarTabs"
import { LeftBarWidth } from "../util/config"
function LeftBar() {
    return <div>
        <div style={{
            paddingTop: "60px",
            paddingBottom: "30px",
            marginLeft: "80px",
            color: "rgb(27 20 100)",
            fontWeight: "bold"
        }}>
            AlphaX Investor <br></br>Database Manager
        </div>
        <div style={{paddingTop: "30px", 
    // borderRight: "1px solid lightBlue", 
    width: `${LeftBarWidth}px`, height: "300px",
    background: "white",
    marginLeft: "100px",
    color: "rgb(27 20 100)",
    borderRadius: "5px"
    }}>
        <LeftBarTabs tabName={"Investor"}/>
        <LeftBarTabs tabName={"Investment"}/>
    </div>
    </div>
}

export default LeftBar