import { Component } from "react";

export class Student extends Component {
    constructor() {
        super();
        this.state = {
            myName: "K Jeswanth",
            person: {
                fname: "Kotholla",
                lname: "Jachu",
            },
            users: ["Jeswanth", "Vishal", "Sekhar", "Nethaji"],
        };
    }
    render() {
        const { myName, person, users } = this.state;
        return (
            <div>
               
                <h2>{myName}</h2>
                <ul>
                    <li>{person.fname}</li>
                    <li>{person.lname}</li>
                </ul>

                <ul>
                    {users.map(function (usr) {
                        return <li>{usr}</li>
                    })}
                </ul>
            </div>
        );
    }
}