
const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT
const schema = process.env.REACT_APP_POSTGRES_SCHEMA
export async function getInvestor() {
    const obj = {
        sql: `SELECT * FROM ${schema}.investor`
    }

    const requestOptions = {
        // mode: 'no-cors',
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };
    return fetch(endpoint + "dbQuery", requestOptions)
    .then(res => {
        // Check if the response is ok (status code 200)
        // console.log(res)
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // Parse the JSON response and return it (returns a Promise)
        return res.json();
      })
    .then(res => {
        // console.log(res)
        // contactInfo = res
        return res.rows
    })
    .catch((error) => {
        // alert(error);
        console.error("Error:", error);
    });
}

export async function deleteInvestor(id) {
    const obj = {
        sql: `DELETE FROM ${schema}.investor WHERE id = $1`,
        values: [id]
    }

    const requestOptions = {
        // mode: 'no-cors',
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };
    return fetch(endpoint + "dbDelete", requestOptions)
    .then(res => {
        // Check if the response is ok (status code 200)
        // console.log(res)
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // Parse the JSON response and return it (returns a Promise)
        return res.json();
      })
    .then(res => {
        // console.log(res)
        // contactInfo = res
        return res.rows
    })
    .catch((error) => {
        // alert(error);
        console.error("Error:", error);
    });
}

export async function insertInvestor(investorData) {
    const obj = {
        sql: `
            INSERT INTO ${schema}.investor (nameid, legal_name, name, mailing_address, email, phone, date_of_birth, tax_id_ssn, ein, passport_number, citizenship, passport_copy, w9, w8, accredited_investor, investor_extra_info)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
            RETURNING id;
        `,
        values: [
            investorData.nameid,
            investorData.legal_name,
            investorData.name,
            investorData.mailing_address,
            investorData.email,
            investorData.phone,
            investorData.date_of_birth,
            investorData.tax_id_ssn,
            investorData.ein,
            investorData.passport_number,
            investorData.citizenship,
            investorData.passport_copy,
            investorData.w9,
            investorData.w8,
            investorData.accredited_investor,
            investorData.investor_extra_info
        ]
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };

    try {
        const response = await fetch(endpoint+ `dbInsertion`, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        throw error; // Optional: rethrow to be handled by caller
    }
}

export async function updateInvestor(investorData) {
    const obj = {
        sql: `
            UPDATE ${schema}.investor
            SET nameid = $1,
                legal_name = $2,
                name = $3,
                mailing_address = $4,
                email = $5,
                phone = $6,
                date_of_birth = $7,
                tax_id_ssn = $8,
                ein = $9,
                passport_number = $10,
                citizenship = $11,
                passport_copy = $12,
                w9 = $13,
                w8 = $14,
                accredited_investor = $15,
                investor_extra_info = $16
            WHERE id = $17
            RETURNING *;
        `,
        values: [
            investorData.nameid,
            investorData.legal_name,
            investorData.name,
            investorData.email,
            investorData.mailing_address,
            investorData.phone,
            investorData.date_of_birth,
            investorData.tax_id_ssn,
            investorData.ein,
            investorData.passport_number,
            investorData.citizenship,
            investorData.passport_copy,
            investorData.w9,
            investorData.w8,
            investorData.accredited_investor,
            investorData.investor_extra_info,
            investorData.id
        ]
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };

    try {
        const response = await fetch(endpoint+ `dbUpdate`, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        throw error; // Optional: rethrow to be handled by caller
    }
}