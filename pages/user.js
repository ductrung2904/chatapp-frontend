import { useState, useEffect } from "react";

function user({ users }) {
    return (
        <>
            {users.map(user => {
                return (
                    <div key={user}>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
                        <p>{user.username}</p>
                        <p>{user.password}</p>
                        <p>{user.email}</p>
                        <p>{user.address}</p>
                    </div>
                )
            })}
        </>
    )
}

export const getServerSideProps = async ctx => {
    const req = await fetch("http://localhost:5000/users");
    console.log(req)
    const data = await req.json();

    return {
        props: { users: data }
    }
}

export default user