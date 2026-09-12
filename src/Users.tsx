import { use } from "react";

export default function Users({ userDataPromise }) {

    const users = use(userDataPromise);

    console.log(users);

    return (
        <div>
            <h1>Users</h1>
        </div>
    );
}