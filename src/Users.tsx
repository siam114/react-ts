import { use } from "react";
import UserCart from "./UserCart";

export default function Users({ userDataPromise }) {

    const users = use(userDataPromise);

    console.log(users);

    return (
        <div>
            <h1>Users:{users.length}</h1>
            {
                users.map (user => <UserCart user={user}/>)
            }
        </div>
    );
}