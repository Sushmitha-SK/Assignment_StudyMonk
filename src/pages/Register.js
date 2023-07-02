import React, { useState } from 'react'
import Styles from '../styles/Register.css'
import { Box, FormControl, Grid, InputLabel, OutlinedInput, Paper, Typography, Checkbox, Button } from '@mui/material';
import SignUpImage from '../assets/signup.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 0,
                m: 1,
                width: 450,
                textAlign: "center",
                ...sx,
            }}
            {...other}
        />
    );
}

const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [emailid, setEmailid] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [errorFlag, setErrorFlag] = useState(false);
    const [checked, setChecked] = React.useState(false);
    const [checkedBox, setCheckedBox] = useState(false);
    const [authToken, setAuthToken] = useState('')


    // const emailRegex =
    //     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // const phoneRegex = /^[0-9]{10,10}$/;
    // var letters = /^[A-Za-z]+$/;
    // const passwordRegex =
    //     /^(?!=.* )(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{6,}$/;

    const navigate = useNavigate();

    const handleAgreementCheck = (event) => {
        setChecked(event.target.checked);
    };

    const handleSignup = (e) => {
        e.preventDefault()
        //reqres registered sample user
        const signupPayload = {
            email: emailid,
            password: password
        }

        axios.post("https://reqres.in/api/register", signupPayload)
            .then(response => {
                //get token from response
                const token = response.data.token;

                //set JWT token to local
                localStorage.setItem("token", token);



                //set token to axios common header
                setAuthToken(token);

                //redirect user to home page
                navigate('/login')


            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="container-area">
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    component={Paper}
                    square
                    className="container-info"
                    sx={{
                        justify: "space-between",
                        alignItems: "100%",
                        overflowY: "auto",
                    }}
                >
                    <div className="brand-and-toggler d-flex align-items-center justify-content-between" style={{ marginTop: '5%' }}>
                        <a className="navbar-brand d-flex align-items-center" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                            <span className="brand-shape d-inline-block">&nbsp;</span>
                            <span className="brand-text fw-7">HireLogic</span>
                        </a>

                    </div>
                    <div
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            <Box
                                component="form"
                                noValidate
                                sx={{
                                    marginTop: "6%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Item sx={{ marginTop: "7%" }}>
                                    <Typography
                                        component="h1"
                                        className="heading"
                                        fontWeight={700}
                                        fontSize={34}
                                        fontFamily={"Mulish"}
                                    >
                                        Sign up
                                    </Typography>
                                </Item>
                                {/* <Item sx={{ marginLeft: "8px", marginTop: "1%" }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            padding: "0%",
                                            gap: "10px",
                                        }}
                                    >
                                        <FormControl variant="outlined" sx={{ width: "100%" }}>
                                            <InputLabel
                                                sx={{ color: "#9CA3AF" }}
                                                required
                                                htmlFor="outlined-adornment-firstname"
                                            >
                                                First Name
                                            </InputLabel>
                                            <OutlinedInput
                                                type="text"
                                                name="firstname"
                                                autoComplete="off"
                                                id="firstname"
                                                sx={Styles.text}
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                                label="First Name"
                                            />
                                        </FormControl>



                                        <FormControl variant="outlined" sx={{ width: "100%" }}>
                                            <InputLabel
                                                sx={{ color: "#9CA3AF" }}
                                                required
                                                htmlFor="outlined-adornment-firstname"
                                            >
                                                Last Name
                                            </InputLabel>
                                            <OutlinedInput
                                                type="text"
                                                name="lastname"
                                                autoComplete="off"
                                                id="lastname"
                                                sx={Styles.text}
                                                value={lastname}
                                                onChange={(e) => setLastname(e.target.value)}
                                                label="Last Name"
                                            />
                                        </FormControl>


                                    </Box>
                                </Item> */}

                                <Item>
                                    <FormControl variant="outlined" sx={{ width: "100%" }}>
                                        <InputLabel
                                            sx={{ color: "#9CA3AF" }}
                                            required
                                            htmlFor="outlined-adornment-email"
                                        >
                                            Email
                                        </InputLabel>

                                        <OutlinedInput
                                            id="email"
                                            name="email"
                                            autoComplete="off"
                                            sx={Styles.text}
                                            value={emailid}
                                            onChange={(e) => setEmailid(e.target.value)}
                                            label="Email"
                                            type="email"
                                        />
                                    </FormControl>


                                </Item>


                                <Item>
                                    <FormControl variant="outlined" sx={{ width: "100%" }}>
                                        <InputLabel
                                            sx={{ color: "#9CA3AF" }}
                                            required
                                            htmlFor="outlined-adornment-password"
                                        >
                                            Password
                                        </InputLabel>
                                        <OutlinedInput
                                            name="password"
                                            autoComplete="off"
                                            sx={Styles.text}
                                            style={{ marginTop: "1%" }}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            id="outlined-adornment-password"
                                            type="password"
                                            label="Password"
                                        />
                                    </FormControl>

                                </Item>

                                <Item>
                                    <FormControl variant="outlined" sx={{ width: "100%" }}>
                                        <InputLabel
                                            sx={{ color: "#9CA3AF" }}
                                            required
                                            htmlFor="outlined-adornment-confirmpassword"
                                        >
                                            Confirm Password
                                        </InputLabel>
                                        <OutlinedInput
                                            name="confirmpassword"
                                            // autoComplete="confirmpassword"
                                            sx={Styles.text}
                                            style={{ marginTop: "1%" }}
                                            // sx={{ width: '100%', background: '#fffff', fontFamily: 'Poppins', marginTop: '1%' }}
                                            value={confirmpassword}
                                            onChange={(e) => setConfirmpassword(e.target.value)}
                                            id="outlined-adornment-password"
                                            type="password"
                                            label="Confirm Password"
                                        />
                                    </FormControl>


                                </Item>






                                <Item sx={{ marginTop: "2%" }}>

                                    <Button
                                        onClick={handleSignup}
                                        type="submit"
                                        sx={{
                                            borderRadius: 3, marginTop: 3, backgroundColor: '#458ff6',
                                            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;', width: '150px'
                                        }}
                                        variant="contained"
                                    // color="primary"

                                    >
                                        Sign Up
                                    </Button>
                                </Item>

                                <Item>
                                    <Box>
                                        <Typography
                                            fontFamily={"Mulish"}
                                            textAlign="center"
                                            width="400"
                                            fontWeight={400}
                                            fontSize={12}
                                            sx={{ marginTop: "2%", color: '#333' }}
                                        >
                                            By clicking “Sign Up” I agree to&nbsp;
                                            <Link to="/login" className="term_link">
                                                Terms of service{" "}
                                            </Link>
                                            <br /> and{" "}
                                            <Link to="/login" className="term_link">
                                                Privacy policy.
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Item>
                                <Item>
                                    <Box>
                                        <Typography
                                            fontFamily={"Mulish"}
                                            fontWeight={500}
                                            textAlign="center"
                                            fontSize={14}
                                            sx={{ marginTop: "2%" }}
                                        >
                                            Already have an account?&nbsp;
                                            <Link className="signup_link" to="/login">
                                                Log In
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Item>
                            </Box>
                        </div>
                    </div>
                </Grid>

                <Grid
                    className="container-main"
                    item
                    xs={false}
                    sm={6}
                    md={6}
                    sx={{
                        backgroundColor: "#E5E5E5",
                        height: '100vh',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={SignUpImage}
                        alt="SignUpImage"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Grid>
            </div>
        </>
    )
}

export default Register