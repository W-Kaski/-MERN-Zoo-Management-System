import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {getTaskDetails} from '../../../redux/venueRelated/venueHandle';
import {registerUser} from '../../../redux/userRelated/userHandle';
import {underControl} from '../../../redux/userRelated/userSlice';
import {CircularProgress} from '@mui/material';

const AddZookeeper = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {status, response, error} = useSelector(state => state.user);

    useEffect(() => {

    }, [dispatch, ]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState("");
    // const [showPopup, setShowPopup] = useState(false);
    // const [loader, setLoader] = useState(false)

    const role = "Zookeeper"
    const zooName = ""  // need modify
    const ID = 123  // need modify
    const assignedSpecies = ""  // need modify
    const assignedVenue = ""  // need modify
    const monthlySalary = 3000  // need modify
    const zookeeperTasks = []
    const completedTasks = 0
    const monthlyWarning = 0

    const fields = {name, zooName, ID, email, password, role, assignedVenue, assignedSpecies, completedTasks, zookeeperTasks, monthlyWarning, monthlySalary}

    const submitHandler = (event) => {
        event.preventDefault()
        setLoader(true)
        dispatch(registerUser(fields, role))
    }

    useEffect(() => {
        if (status === 'added') {
            dispatch(underControl())
            navigate("/Admin/zookeepers")
        } else if (status === 'failed') {
            setMessage(response)
            // setShowPopup(true)
            // setLoader(false)
        } else if (status === 'error') {
            setMessage("Network Error")
            // setShowPopup(true)
            // setLoader(false)
        }
    }, [status, navigate, error, response, dispatch]);

    return (
        <div>
            <div className="register">
                <form className="registerForm" onSubmit={submitHandler}>
                    <span className="registerTitle">Add Zookeeper</span>
                    <br/>
                    <label>
                        Subject : {taskDetails && taskDetails.subName}
                    </label>
                    <label>
                        Class : {taskDetails && taskDetails.sclassName && taskDetails.sclassName.sclassName}
                    </label>
                    <label>Name</label>
                    <input className="registerInput" type="text" placeholder="Enter zookeeper's name..."
                           value={name}
                           onChange={(event) => setName(event.target.value)}
                           autoComplete="name" required/>

                    <label>Email</label>
                    <input className="registerInput" type="email" placeholder="Enter zookeeper's email..."
                           value={email}
                           onChange={(event) => setEmail(event.target.value)}
                           autoComplete="email" required/>

                    <label>Password</label>
                    <input className="registerInput" type="password" placeholder="Enter zookeeper's password..."
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}
                           autoComplete="new-password" required/>

                    <button className="registerButton" type="submit" disabled={loader}>
                        {loader ? (
                            <CircularProgress size={24} color="inherit"/>
                        ) : (
                            'Register'
                        )}
                    </button>
                </form>
            </div>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup}/>
        </div>
    )
}

export default AddZookeeper