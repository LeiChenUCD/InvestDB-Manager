import { getInvestor } from "../util/util"
import React from "react"
import InvestorEntry from "../component/InvestorEntry"
import { LeftBarWidth } from "../util/config"
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group"
function Investor() {
    const [investors, setInvestors] = React.useState([])
    const [editedRecordsCount, setEditedRecordsCount] = React.useState(0)
    console.log(editedRecordsCount)
    React.useEffect(() => {
        async function getData() {
            const res = await getInvestor()
            setInvestors(res)
        }
        getData()
    }, [])

    function deleteInvestorRecall(id) {
        setInvestors(investors.filter(investor => investor.id !== id))
    }

    function addEntry() {
        console.log("hi")
        setInvestors([
            ...investors,
            {
                "id": null,
                "nameid": null,
                "legal_name": null,
                "name": null,
                "mailing_address": null,
                "email": null,
                "phone": null,
                "date_of_birth": null,
                "tax_id_ssn": null,
                "ein": null,
                "passport_number": null,
                "citizenship": null,
                "passport_copy": null,
                "w9": null,
                "w8": null,
                "accredited_investor": false,
                "investor_extra_info": null
            }
        ])
    }
    
    return <div style={{width: `calc(100vw - ${LeftBarWidth}px)`, overflowY: 'overlay', paddingTop: "50px", height: "100vh", paddingTop: "100px"}}>
        
        <div style={{display: "flex"}}>
            <div style={{minWidth: "150px", textAlign: "center"}}>
            </div>
            <div style={{border: "1px solid lightGrey", display: "flex", background: "white"}}>
                <div style={{width: "50px", textAlign: "center", borderRight: "1px solid lightGrey"}}>
                    ID
                </div>
                <div style={{width: "100px", textAlign: "center", borderRight: "1px solid lightGrey"}}>
                    Legal Name
                </div>
                <div style={{width: "150px", textAlign: "center", borderRight: "1px solid lightGrey"}}>
                    Mailing Address
                </div>
                <div style={{width: "200px", textAlign: "center", borderRight: "1px solid lightGrey"}}>
                    Email
                </div>
                <div style={{width: "150px", textAlign: "center", borderRight: "1px solid lightGrey"}}>
                    Phone
                </div>
                <div style={{width: "100px", textAlign: "center", borderRight: "1px solid lightGrey"}}>
                    Date of Birth
                </div>
                <div style={{width: "100px", textAlign: "center", borderRight: "1px solid lightGrey"}}>
                    SSN
                </div>
                <div style={{width: "100px", textAlign: "center", borderRight: "1px solid lightGrey"}}>
                    ein
                </div>
                <div style={{width: "100px", textAlign: "center", borderRight: "1px solid lightGrey"}}>
                    Passport
                </div>
                <div style={{width: "100px", textAlign: "center", borderRight: "1px solid lightGrey"}}>
                    Citizenship
                </div>
            </div>
        </div>
        
        {investors.map((investor, idx) => 
        <InvestorEntry 
        key={idx} 
        investor={investor} 
        deleteInvestorRecall={deleteInvestorRecall}
        setEditedRecordsCount={setEditedRecordsCount}
        editedRecordsCount={editedRecordsCount}
        />)}

        <button style={{marginLeft: "150px"}} onClick={() => addEntry()}>+</button>
    </div>
}

export default Investor