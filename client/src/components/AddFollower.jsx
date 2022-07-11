import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function AddFollower(props) {
    const { _id } = useParams()
    const user = JSON.parse(sessionStorage.getItem("user"))
    const [postInfo, setPostInfo] = useState("")
    const [userID, setUserID] = useState("")
    const [userInfo, setUserInfo] = useState("")
    const [loaded, setLoaded] = useState(false)

    const [followerName, setFollowerName] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/getPost/' + _id)
            .then(res => {
                console.log(res.data)
                setPostInfo(res.data)
                setUserID(res.data.userID)
            })
            .catch(err => console.error(err))
        axios.get('http://localhost:8000/api/users/getUserById/' + userID)
            .then(res => {
                console.log(res.data)
                setUserInfo(res.data)
                setLoaded(true)
            })
    }, [userID]);

    const addFollower = follower => {
        axios.put('http://localhost:8000/api/users/addFollower/' + userID + "/" + follower._id)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.error(err))
    }

    // const getFollowers = followerID => {
    //     axios.get('http://localhost:8000/api/users/getUserById/' + followerID)
    //         .then(res => {
    //             console.log(res.data)
    //             setFollowerName(res.data)
    //         })
    // }

    return (
        <div>
            <div class="background-image">
                <h2> Logged in user: {user.firstName} </h2>
                <h2> Post title: {postInfo.title} </h2>
                <h3> posted by: {userInfo.firstName} </h3>
                <h3>Followers: {loaded &&
                    userInfo.followers.map((follower, index) => {
                        return <>{follower},                  </>
                    })}
                </h3>
                <button type="submit" onClick={() => addFollower(user)}> FOLLOW </button>
            </div>
        </div>
    )
}

export default AddFollower