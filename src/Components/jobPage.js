// import { JobList } from "./ContentBody/ContentBody"
import { useEffect, useState } from "react";
import logo from '../Assests/jobcardlogo.png';
import Navbar from "./navbar/Navbar";
import { useNavigate } from "react-router-dom";
import JobDetailsCard from '../Components/JobDetailsCard';
import '../../src/Components/Pages/jobPage.css';
const GetJobs = () => {
    useEffect(() => {
        getJobList()
    }, [])
    const getJobList = () => {
        fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=&pageNo=1&keyWord=&category=`)
            .then((res) => (res.json()))
            .then((res) => {
                console.log(res.data)
                GetjobList(res.data)
            })
    }
    const [joblist, GetjobList] = useState([])
    const [filter, Setfilter] = useState([])


    const GetFilteration = () => {
        fetch(`https://backend-prod.app.hiringmine.com/api/filterations/all`)
            .then((res) => (res.json()))
            .then((res) => {
                console.log(res.data, "filteration")
                Setfilter(res.data)

            }
            )
    }
    useEffect(() => {
        GetFilteration()
    }, [])


    console.log(filter.filteration, "====>>>>>")
    return (
        <>
            <Navbar />
            <div style={{
                // border: '1px solid black',
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "80%",
                height: "30px", 
                margin: "20px auto",
                overflowX: 'auto'
            }}>
                {
                    filter.filteration?.map((filter, index) =>
                        <Selection filter={filter} key={index} />)
                }
            </div>

            <div style={{
                display: "grid",
                width: "70%",
                margin: "50px auto",
                gridTemplateColumns: window.innerWidth < 600 ? "repeat(1, 1fr)" : "repeat(2, 1fr)", // Single column for small screens
                gap: "20px" // Add space between the cards (optional)
            }}>
                {
                    joblist.map((j, index) => (<JobList j={j} key={index} />))
                }

            </div>
        </>
    )
}
export { GetJobs }

const JobList = ({ j }) => {
    // CALLING HOOK
    const navigate = useNavigate()

    const OpenHandler = () => {
        console.log("===>>>", j._id);
        navigate(`/jobs/jobcards/${j._id}`)

    }

    return (

        <div className='MainBox' onClick={OpenHandler}>
            <div className='FirstDiv'>
                <div className='FirstSub'>
                    <p>{j.companyName ? `${j.companyName}` : <p>No mentioned</p>}</p>
                    <h5>{j.designation}</h5>
                </div>
                <div className='SecondSub'>
                    <img src={logo} />
                </div>
            </div>
            <div className='SecondDiv'>
                <div className=''>
                    <h6>{j.city && j.country ? `${j.city}, ${j.country}` : <p>No mentioned</p>}</h6>
                    <p>just now</p>
                </div>
                <div className=''>
                    <p>{j.views} views</p>
                </div>
            </div>
        </div>

    )
}
export { JobDetailsCard }

const Selection = ({ filter }) => {
    return (
        <div className="filterMain">
            <select>
                <option>{filter.filterationName}</option>
                {
                    filter.filterationOptions.map((value, index) => (
                        <option key={index} value={value.sluk}>{value.title}</option>
                    ))
                }
            </select>
        </div>
    )
}
