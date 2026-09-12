export default function UserCart({user}){
    return(
        <div>
            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Phone: {user.phone}</h3>
        </div>
    )
}