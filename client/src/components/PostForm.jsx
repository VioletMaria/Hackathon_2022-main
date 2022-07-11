import React from 'react';
import { useState } from 'react';
import axios from "axios"
import { useHistory } from 'react-router-dom';

const PostForm = (props) => {
    const categories = ["housing", "food", "other"]
    const user = JSON.parse(sessionStorage.getItem("user"))

    const [form, setForm] = useState({
        userID: user._id,
        title: "",
        description: "",
        categories: categories[0],
        location: "",
        food_quantity: null,
        housing_quantity: null,
        otherName: "",
        otherQuantity: null,
    })

    const [errors, setErrors] = useState({});
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log(form)
        axios.post(`http://localhost:8000/api/users/createPost/${user._id}`, form)
            .then(res => {
                console.log(res);
                // history.push("/")
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors)
            })

    }

    return (
        <div>
            <div className="background-image">
                <div style={{ textAlign: 'center' }}>
                    {/* *************** FORM START *************** */}
                    <h1 style={{ paddingTop: "20px" }}>Provide a Resource</h1>
                    <form className="container" onSubmit={onSubmitHandler}>

                        <div className="form-group mb-2">
                            <label> Title </label> <br />
                            <input type="text" name="title" className="form-control" placeholder="title" onChange={onChangeHandler} />
                            <span style={{ color: "red" }}> {errors.title && errors.title.message}</span>
                        </div>
                        <div className="form-group mb-2">
                            <label> Description </label><br />
                            <input type="text" name="description" className="form-control" placeholder="description" onChange={onChangeHandler} />
                            <span style={{ color: "red" }}> {errors.description && errors.description.message}</span>
                        </div>

                        <label> Categories </label> <br />
                        <select name="categories" className="form-select mb-2" onChange={onChangeHandler} >
                            {
                                categories.map((category, i) => {
                                    return <option value={category} key={i}> {category} </option>
                                })
                            }
                        </select>
                        <span style={{ color: "red" }}> {errors.categories && errors.categories.message}</span><br />

                        <label>Location </label> <br />
                        <div className="form-group mb-2" onChange={onChangeHandler}>
                            <input type="text" name="location" className="form-control" placeholder="location" />
                        </div>
                        <span style={{ color: "red" }}> {errors.platform && errors.platform.message}</span>

                        <label>Food Quantity </label><br />
                        <div className="form-group mb-2" onChange={onChangeHandler}>
                            <input type="number" name="food_quantity" className="form-control" placeholder="food_quantity" />
                        </div>
                        <span style={{ color: "red" }}> {errors.food_quantity && errors.food_quantity.message}</span>

                        <label>Housing Quantity </label><br />
                        <div className="form-group mb-2" onChange={onChangeHandler}>
                            <input type="number" name="housing_quantity" className="form-control" placeholder="housing_quantity" />
                        </div>
                        <span style={{ color: "red" }}> {errors.housing_quantity && errors.housing_quantity.message}</span>

                        <label>Other Name</label><br />
                        <div className="form-group mb-2" onChange={onChangeHandler}>
                            <input type="text" name="otherName" className="form-control" placeholder="otherName" />
                        </div>
                        <span style={{ color: "red" }}> {errors.otherName && errors.otherName.message}</span>

                        <label>Other Quantity </label><br />
                        <div className="form-group mb-2" onChange={onChangeHandler}>
                            <input type="number" name="otherQuantity" className="form-control" placeholder="otherQuantity" />
                        </div>
                        <span style={{ color: "red" }}> {errors.otherQuantity && errors.otherQuantity.message}</span>
                        <input type="submit" className="btn btn-success" />

                    </form>
                    {/* *************** FORM END *************** */}
                </div>
            </div>
        </div>
    )
}

export default PostForm;