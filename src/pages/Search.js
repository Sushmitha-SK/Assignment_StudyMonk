import React, { useState } from 'react';
import { TextField, Button, Container, Typography, CardContent, Card, Box, Alert } from '@mui/material';
import axios from 'axios';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Search.css'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';



const candidateList = [
    {
        id: 1,
        fullname: "Sahithya Kumar",
        gender: "Male",
        email: "sahithyakumar@google.es",
        address: "Suite 20",
        contactno: "6858199332",
        college: "University of Pretoria",
        qualification: "B.E (C.S)",
        "ex-employer": "Fadeo Technologies",
        designation: "Associate Software Engineer",
        skills: "React JS",
        department: "Software Development",
        location: "Bengaluru",
    },
    {
        id: 2,
        fullname: "Marci Paulsen",
        gender: "Female",
        email: "mpaulsen1@moonfruit.com",
        address: "PO Box 18498",
        contactno: "1152796200",
        college: "Tokyo Denki University",
        qualification: "B.E (ECE)",
        "ex-employer": "Dabjam",
        designation: "QA Engineer",
        skills: "Automation Testing",
        department: "QA",
        location: "Kennedy",
    },
    {
        id: 3,
        fullname: "Leonie Abthorpe",
        gender: "Female",
        email: "labthorpe2@opensource.org",
        address: "Apt 351",
        contactno: "7711761863",
        college: "Universidade Estadual de Campinas",
        qualification: "B.E (C.S)",
        "ex-employer": "Zoomlounge",
        designation: "Software Engineer",
        skills: "Java Springboot",
        department: "Software Development",
        location: "Swallow",
    },
    {
        id: 4,
        fullname: "Gratia Cromwell",
        gender: "Female",
        email: "gcromwell3@storify.com",
        address: "PO Box 74038",
        contactno: "2668611807",
        college: "Lulea University of Technology",
        qualification: "B.E (Mech)",
        "ex-employer": "Katz",
        designation: "Budget/Accounting Analyst III",
        skills: "TCP/IP",
        department: "Product Management",
        location: "Jenna",
    },
    {
        id: 5,
        fullname: "Lurline Tansey",
        gender: "Female",
        email: "ltansey4@discovery.com",
        address: "Room 1922",
        contactno: "7416511717",
        college: "Seisen University",
        qualification: "B.E (C.S)",
        "ex-employer": "Pixonyx",
        designation: "Assistant Professor",
        skills: "QPS",
        department: "Teaching",
        location: "Summit",
    },
    {
        "id": 6,
        "fullname": "Mallory Hay",
        "gender": "Male",
        "email": "mhay5@creativecommons.org",
        "address": "PO Box 81644",
        "contactno": "1168110533",
        "college": "Ibrahim Babangida University",
        "qualification": "B.E (C.S)",
        "ex-employer": "Fadeo",
        "designation": "Associate Software Engineer",
        "skills": "React Js",
        "department": "Software Development",
        "location": "Bengaluru"
    },

    {
        "id": 7,
        "fullname": "Gael Secker",
        "gender": "Female",
        "email": "gsecker6@biblegateway.com",
        "address": "PO Box 11601",
        "contactno": "7187571593",
        "college": "Universidad Nacional Hermilio Valdizan",
        "qualification": "B.E (C.S)",
        "ex-employer": "Camido",
        "designation": "Associate Software Engineer",
        "skills": "React Js",
        "department": "Software Development",
        "location": "Bengaluru"
    },

    {
        "id": 8,
        "fullname": "Chethan Kumar",
        "gender": "Male",
        "email": "chethank@creativecommons.com",
        "address": "PO Box 11601",
        "contactno": "7187571593",
        "college": "Universidad Nacional Hermilio Valdizan",
        "qualification": "B.E (Civil)",
        "ex-employer": "Camido",
        "designation": "Associate Software Engineer",
        "skills": "React Js",
        "department": "Software Development",
        "location": "Bengaluru"
    },

    {
        "id": 8,
        "fullname": "Thatch McCritichie",
        "gender": "Polygender",
        "email": "tmccritichie7@ehow.com",
        "address": "Suite 65",
        "contactno": "6737188314",
        "college": "Ama International University",
        "qualification": "B.E (Civil)",
        "ex-employer": "Plambee",
        "designation": "Associate Software Engineer",
        "skills": "React Js",
        "department": "Software Development",
        "location": "Bengaluru"
    },

];

const Search = () => {
    const [location, setLocation] = useState('');
    const [candidates, setCandidates] = useState([]);
    const [designation, setDesignation] = useState([]);
    const [showAlert, setShowAlert] = useState(false);


    const navigate = useNavigate()


    const handleSearch = (e) => {
        e.preventDefault();
        const filteredCandidates = candidateList.filter((candidate) => {
            const matchLocation =
                location !== '' && candidate.location.toLowerCase().includes(location.toLowerCase());
            const matchDesignation =
                typeof designation === 'string' &&
                designation !== '' &&
                candidate.designation.toLowerCase().includes(designation.toLowerCase());

            return matchLocation || matchDesignation;
        });

        setCandidates(filteredCandidates);
        setShowAlert(filteredCandidates.length === 0);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);

    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        navigate('/')
    }


    return (
        <>
            <div className="page-wrapper searchwrapper">
                <nav class="navbar navbar-expand-lg" style={{ background: '#fff' }}>
                    <div className="container navbarcontainer">
                        <div className="navbar-content d-flex justify-content-between align-items-center">
                            <div className="brand-and-toggler d-flex align-items-center justify-content-between">
                                <a className="navbar-brand d-flex align-items-center" onClick={() => navigate('/search')}>
                                    <span className="brand-shape d-inline-block text-white">H</span>
                                    <span className="brand-text fw-7">HireLogic</span>
                                </a>
                                <button type="button" className="d-none navbar-show-btn">
                                    <i className="fas fa-bars" />
                                </button>
                            </div>
                            <div className="navbar-box">
                                <button type="button" className="navbar-hide-btn">
                                    <i className="fas fa-times" />
                                </button>


                                <ul className="navbar-nav d-flex align-items-center custom-navbar-nav" style={{ marginLeft: '1024px' }}>

                                    <li className="nav-item" >
                                        <a className="nav-link text-nowrap" onClick={handleLogout}>
                                            Logout
                                        </a>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </nav>

                <Container maxWidth="lg">
                    <Typography variant="h4" component="h2" align="center" style={{ marginTop: '5%', marginBottom: '3%', fontFamily: 'Mulish' }}>
                        Candidate Search
                    </Typography>

                    <form onSubmit={handleSearch} className="search-form">
                        <TextField
                            label="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            fullWidth
                            margin="normal"
                            style={{ width: '350px', background: '#fff' }}
                        />
                        <TextField
                            label="Designation"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            fullWidth
                            margin="normal"
                            style={{ width: '350px', background: '#fff' }}
                        />
                        <Button type="submit" variant="contained" color="primary" className='searchButton'
                            style={{ color: '#fff', textTransform: "capitalize" }}>
                            Search
                        </Button>
                    </form>

                    {showAlert && (
                        <Alert severity="info" style={{ marginTop: '1rem' }}>
                            No records found.
                        </Alert>
                    )}


                    <div className="card-grid">
                        {candidates.map((candidate) => (
                            <Card key={candidate.id} variant="outlined" className='candidateCard'
                                sx={{ mt: 2, mb: 2, backgroundColor: '#fcfdfd', borderRadius: '12px' }} elevation={2}>
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        {candidate.fullname}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Gender: {candidate.gender}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Email: {candidate.email}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Address: {candidate.address}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Contact No: {candidate.contactno}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        College: {candidate.college}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Qualification: {candidate.qualification}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Ex-Employer: {candidate["ex-employer"]}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Skills: {candidate.skills}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Department: {candidate.department}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Location: {candidate.location}
                                    </Typography>
                                </CardContent>

                            </Card>
                        ))}
                    </div>
                </Container>
                <Footer />
            </div>

        </>
    )
}

export default Search