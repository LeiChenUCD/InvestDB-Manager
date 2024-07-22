import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
function LeftBarTabs(props) {
    const {tabName} = props
    return <div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <div style={{
                    paddingLeft: "15px",
                    paddingRight: "10px"
                }}>
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                
                <div style={{height: "50px", alignContent: "center", textAlign: "center"}}>{tabName}</div>
            </div>
        </div>
}
export default LeftBarTabs