import React, { useEffect, useState } from 'react'
import Styles from '../styles/Login.css'
import { Box, FormControl, Grid, InputLabel, OutlinedInput, Paper, Typography, Checkbox, Button } from '@mui/material';
import SignInImage from '../assets/login.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Navbar.css'


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

const Login = () => {
    const [emailid, setEmailid] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const [authToken, setAuthToken] = useState('')

    const navigate = useNavigate()

    const handleSignin = (e) => {
        e.preventDefault()
        if (emailid === "" || password === "") {
            alert("Please fill in all the fields");
            return;
        }
        //reqres registered sample user
        const loginPayload = {
            email: emailid,
            password: password
        }

        axios.post("https://reqres.in/api/login", loginPayload)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("isLoggedIn", true)
                setAuthToken(token);
                navigate('/search')
            })
            .catch(err => console.log(err));
    };

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
                                        Sign In
                                    </Typography>
                                </Item>

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

                                <Item sx={{ marginTop: "2%" }}>

                                    <Button
                                        onClick={handleSignin}
                                        type="submit"
                                        sx={{ borderRadius: 3, marginTop: 3, backgroundColor: '#458ff6', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;', width: '150px' }}
                                        variant="contained">
                                        Sign In
                                    </Button>
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
                                            Not yet Registered?&nbsp;
                                            <Link className="login_link" to="/register">
                                                Sign Up
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
                        src={SignInImage}
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

export default Login