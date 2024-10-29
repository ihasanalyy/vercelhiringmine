import Navbar from "./navbar/Navbar";
import jobcardlogo from '../Assests/jobcardlogo.png';
import '../Components/JobDetailsCard.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const JobDetailsCard = () => {
    const { jobid } = useParams();
    const [job, setJob] = useState([])
    console.log(jobid, "===>>>>")

    const singleJobDetail = (jobid) => {
        console.log("Job ID:", jobid); // Verify jobId

        fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/${jobid}`)
            .then(response => response.json())
            .then(response => {
                console.log(response.data);
                setJob(response.data)
            }
            )
    }
    useEffect(() => {
        if (jobid)
            singleJobDetail(jobid);
    }, [jobid])
    console.log(job, '====>>>>')

    return (
        <div className="jobDetailsCard">
            <Navbar />
            <div className="Main">
                <div className="First">
                    <img src={jobcardlogo} alt="logo" />
                    <h1>{job.designation}</h1>
                    <p className="colorpurple">{job.companyName ? job.companyName : "Anonymous"}</p>
                    <p>{job.city && job.country ? `${job.city}, ${job.country}` : <p>No mentioned</p>}</p>
                    <p>{job.views} views</p>
                </div>
                <div className="Second">
                    <h1>Job Details</h1>
                    <h4 className="colorpurple">Salary</h4>
                    <p>{job.payRangeStart && job.payRangeEnd ? `${job.payRangeStart} - ${job.payRangeEnd}` : "No salary range mentioned"}</p>
                    <h4 className="colorpurple">Job Type</h4>
                    <p>{job.jobType}</p>
                </div>
                <div className="Third">
                    <h1>Skills</h1>
                    <div className="buttondiv">
                        {
                            job.skills?.map((skill) => <button>{skill}</button>)
                        }
                    </div>
                </div>
                <div className="Fourth">
                  {/* RENDERING HTML DESP FROM API */}
                    <div dangerouslySetInnerHTML={{ __html: job.desc }} />
                   
                </div>
            </div>
        </div>
    )
}
export default JobDetailsCard