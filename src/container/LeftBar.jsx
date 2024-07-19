import LeftBarTabs from "../component/LeftBarTabs"
function LeftBar() {
    return <div style={{border: "1px solid black", width: "300px", height: "100vh"}}>
        <LeftBarTabs tabName={"Investor"}/>
        <LeftBarTabs tabName={"Investment"}/>
    </div>
}

export default LeftBar