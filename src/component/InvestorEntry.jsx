import { insertInvestor, deleteInvestor, updateInvestor } from "../util/util"
import React from "react"
function InvestorEntry(props) {
    const {investor, deleteInvestorRecall, setEditedRecordsCount, editedRecordsCount, idx} = props
    const backgroundColor = idx % 2 == 0 ? "rgb(246 251 253)" : "rgb(243 245 255)"

    // the struct to be display
    const [curInvestor, setCurInvestor] = React.useState(investor)
    // Black: regular color, red: record to be deleted
    const [color, setColor] = React.useState(curInvestor.id === null ? "lightGrey" : "black")

    const [recordChanged, setRecordChanged] = React.useState(false)

    function copyFieldsFromCurInvestorToInvestor() {
        for (const entry of Object.entries(curInvestor)) {
            investor[entry[0]] = entry[1]
        }
    }

    React.useEffect(() => {
        if (recordChanged) {
            setEditedRecordsCount(editedRecordsCount + 1)
        } else {
            setEditedRecordsCount(editedRecordsCount - 1)
        }
    }, [recordChanged])

    async function persist() {
        setRecordChanged(false)
        if (curInvestor.id === null) {
            if (curInvestor.legal_name === null) {
                alert("Legal Name cannot be null")
                return
            }
            const res = await insertInvestor(investor)
            setCurInvestor(curInvestor => ({
                ...curInvestor,   // Spread the previous state
                id: res.rows[0].id          // Update only the ID
            }));
            copyFieldsFromCurInvestorToInvestor()
            setColor("black")
        } else if (color === "red") {
            deleteInvestor(curInvestor.id)
            deleteInvestorRecall(curInvestor.id)
        } else {
            copyFieldsFromCurInvestorToInvestor()
            updateInvestor(curInvestor)
        }
    }

    function restore() {
        setColor("black")
        setRecordChanged(false)
        setCurInvestor(investor)
    }

    function toDelete() {
        setColor("red")
    }
    // console.log(curInvestor)
    return <div style={{display: "flex", color: color,
        marginBottom: "20px"}}>
            <div style={{minWidth: "60px", textAlign: "center", alignContent: "center"}}>
                <button style={{display: recordChanged ? "ruby" : "none"}}
                onClick={() => persist()}>Persist</button>
            </div>

            <div style={{minWidth: "65px", textAlign: "center", alignContent: "center"}}>
                <button style={{display: recordChanged ? "ruby" : "none"}}
                onClick={() => restore()}>Restore</button>
            </div>

            <div style={{minWidth: "25px", textAlign: "center", alignContent: "center"}}>
                <button onClick={() => toDelete()}>-</button>
            </div>

            <div style={{
                // border: "1px solid lightGrey", 
                display: "flex", 
                // background: "white",
                background: backgroundColor,
                height: "50px",
                borderRadius: "10px",
                marginLeft: "10px"
                }}>
                <div style={{width: "50px", textAlign: "center", 
                    // borderRight: "1px solid lightGrey",
                    alignSelf: "center"
                    }}>
                    {curInvestor.id}
                </div>

                <div contentEditable={true} 
                suppressContentEditableWarning={true}
                onInput={(e) => {
                    e.preventDefault();
                    console.log(e)
                    setRecordChanged(true)
                    setCurInvestor({
                    ...curInvestor,   
                    legal_name: e.target.innerHTML
                })}}
                style={{width: "100px", textAlign: "center", 
                // borderRight: "1px solid lightGrey",
                    alignSelf: "center"
                }}>
                    {curInvestor.legal_name}
                </div>

                {/* <div style={{width: "150px", textAlign: "center", 
                    // borderRight: "1px solid lightGrey",
                    alignSelf: "center"
                    }}>
                    {curInvestor.mailing_address}
                </div> */}
                <input value={curInvestor.mailing_address}
                onChange={(e) => {
                    // e.preventDefault();
                    setRecordChanged(true)
                    e.value = e.target.innerHTML
                    setCurInvestor({
                        ...curInvestor,   
                        mailing_address: e.target.innerHTML
                    })
                }}
                style={{
                    background: backgroundColor,
                    border: "none",
                    outline: "none",
                    textAlign: "center"
                }}
                >
                </input>
                <div style={{width: "200px", textAlign: "center", 
                    // borderRight: "1px solid lightGrey",
                    alignSelf: "center"
                    }}>
                    {curInvestor.email}
                </div>
                <div style={{width: "150px", textAlign: "center", 
                    // borderRight: "1px solid lightGrey",
                    alignSelf: "center"
                    }}>
                    {curInvestor.phone}
                </div>
                <div style={{width: "100px", textAlign: "center", 
                    // borderRight: "1px solid lightGrey",
                    alignSelf: "center"
                    }}>
                    {curInvestor.date_of_birth && curInvestor.date_of_birth.slice(0,10)}
                </div>
                <div style={{width: "100px", textAlign: "center", 
                    // borderRight: "1px solid lightGrey",
                    alignSelf: "center"
                    }}>
                    {curInvestor.tax_id_ssn}
                </div>
                <div style={{width: "100px", textAlign: "center", 
                    // borderRight: "1px solid lightGrey",
                    alignSelf: "center"
                    }}>
                    {curInvestor.ein}
                </div>
                <div style={{width: "100px", textAlign: "center", 
                    // borderRight: "1px solid lightGrey",
                    alignSelf: "center"
                    }}>
                    {curInvestor.passport_num}
                </div>
                <div style={{width: "100px", textAlign: "center", 
                    // borderRight: "1px solid lightGrey",
                    alignSelf: "center"
                    }}>
                    {curInvestor.citizenship}
                </div>
                
            </div>
            <div style={{minWidth: "20px"
                    }}>
                </div>
        </div>
}

export default InvestorEntry