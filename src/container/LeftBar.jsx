import LeftBarTabs from "../component/LeftBarTabs"
import { LeftBarWidth } from "../util/config"
function LeftBar() {
    return <div style={{paddingTop: "30px", borderRight: "1px solid lightBlue", width: `${LeftBarWidth}px`, height: "100vh"}}>
        <LeftBarTabs tabName={"Investor"}/>
        <LeftBarTabs tabName={"Investment"}/>
    </div>
}

export default LeftBar