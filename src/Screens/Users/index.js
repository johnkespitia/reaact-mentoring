import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const User = (props) => {
    const { id } = useParams()
    const search = useLocation().search
    let params = new URLSearchParams(search)
    const { name } = useParams()
    return <div>
        <h1>User {id} {params.get("name")}</h1>
    </div>
}

export default User