import { useLocation, useParams } from "react-router-dom"

function User(){
    const {userId} = useParams()
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const name = queryParams.get('name')

    return(
        <div>
            유저 ID : {userId}
            유저 Name : {name}
        </div>
    )
}

export default User