import React, { useEffect, useState } from "react";

const StudentData = () => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(()=>{fetchData()},[])

    const fetchData = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()
        setListUsers(data)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
};

export default StudentData;