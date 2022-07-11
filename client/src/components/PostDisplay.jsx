import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PostDisplay = (props) => {

    const [info, setInfo] = useState([])
    const { category } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/getResourceByType/${category}`)
            .then(res => {
                console.log(res.data);
                setInfo(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="background-image">
                <div class="main-back">
                    <div class="single-post-page">
                        <div class="provider-info">
                            <p class="time-stamp">1 hour ago</p>
                            <h2 class="provider-name">Name of Providers Establishment</h2>
                            <p><span class="highlight">[Nearby]</span>(Location upon approval)</p>
                            <p><i>(Number) users have pending requests for <span class="highlight">(resource name)</span> at this location.</i></p>
                        </div>
                        <div class="card-btns-page">
                            <div>
                                <h3>Food</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div>
                                <h3>Housing</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div class="request">
                                <h3>Send Request</h3>
                            </div>
                        </div>
                    </div>

                    <div class="single-post-page">
                        <div class="provider-info">
                            <p class="time-stamp">1 hour ago</p>
                            <h2 class="provider-name">Name of Providers Establishment</h2>
                            <p><span class="highlight">[Nearby]</span>(Location upon approval)</p>
                            <p><i>(Number) users have pending requests for <span class="highlight">(resource name)</span> at this location.</i></p>
                        </div>
                        <div class="card-btns-page">
                            <div>
                                <h3>Food</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div>
                                <h3>Housing</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div class="request">
                                <h3>Send Request</h3>
                            </div>
                        </div>
                    </div>

                    <div class="single-post-page">
                        <div class="provider-info">
                            <p class="time-stamp">1 hour ago</p>
                            <h2 class="provider-name">Name of Providers Establishment</h2>
                            <p><span class="highlight">[Nearby]</span>(Location upon approval)</p>
                            <p><i>(Number) users have pending requests for <span class="highlight">(resource name)</span> at this location.</i></p>
                        </div>
                        <div class="card-btns-page">
                            <div>
                                <h3>Food</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div>
                                <h3>Housing</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div class="request">
                                <h3>Send Request</h3>
                            </div>
                        </div>
                    </div>

                    <div class="single-post-page">
                        <div class="provider-info">
                            <p class="time-stamp">1 hour ago</p>
                            <h2 class="provider-name">Name of Providers Establishment</h2>
                            <p><span class="highlight">[Nearby]</span>(Location upon approval)</p>
                            <p><i>(Number) users have pending requests for <span class="highlight">(resource name)</span> at this location.</i></p>
                        </div>
                        <div class="card-btns-page">
                            <div>
                                <h3>Food</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div>
                                <h3>Housing</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div class="request">
                                <h3>Send Request</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {
                    info?.map((value, i) => {
                        <div key={i}>
                            <h1>Category: {value.categories} </h1>
                            <h1>Title: {value.title} </h1>
                            <h1>Description: {value.description} </h1>
                            <h1>Location: {value.location} </h1>
                        </div>
                    })
                } */}
            </div>
        </div>
    )
}


export default PostDisplay