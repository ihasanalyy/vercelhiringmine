import '../ContentBody/ContentBody.css';
import banner from '../../Assests/banner.png';
import cartoons from '../../Assests/cartoons.webp';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import WorkIcon from '@mui/icons-material/Work';
import jobcardlogo from '../../Assests/jobcardlogo.png';
import FrameLeft from '../../Assests/FrameLeft.png';
import FrameRight from '../../Assests/FrameRight.png';
import footerLogo from '../../Assests/footerLogo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

import { useEffect, useState } from 'react';
const ContentBody = () => {
    const [category, Setcategory] = useState([])
    const [joblist, GetjobList] = useState([])
    const [keyword, SetKeyword] = useState('')

    // useeffect is calling the func for category API
    useEffect(() => {
        getCategory()
    }, [])

    // useeffect is calling the func for Job API
    useEffect(() => {
        getJobList()
    }, [])

    // Calling func for Category API 
    const getCategory = () => {
        fetch('https://backend-prod.app.hiringmine.com/api/categories/all')
            .then((res) => (res.json()))
            .then((res) => {
                Setcategory(res.data)
                console.log(res.data)
            })
            .catch("error")
    }
    // Calling func for Job API
    const getJobList = () => {
        fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=${keyword}&category=`)
            .then((res) => (res.json()))
            .then((res) => {
                console.log(res.data)
                GetjobList(res.data)
            })
    }
    return (
        <>
            <div className="content-body">
                <h1>
                    Dig. Apply
                    Prepare Your Future
                </h1>
                <p>
                    Hiring Mine connects employer and job seekers,
                    where employers are the source of the resources
                    and the job seeker can find and apply for their targeted job.
                </p>
                <div className='SearchBox'>
                    <input type="text" placeholder="Search by Role or Keyword" onChange={(e) => { SetKeyword(e.target.value) }} />
                    <button onClick={() => {
                        if (keyword) getJobList();
                    }}><PersonSearchIcon /></button>
                </div>
                <div className='Findjobs'>
                    <button>Find Jobs</button>
                </div>
                <h3>Popular Searches</h3>
                <div className='Btns'>
                    <button>Software</button>
                    <button>Developer</button>
                    <button>Backend</button>
                    <button>React</button>
                    <button>Node</button>
                    <button>React Native</button>
                    <button>Flutter</button>
                    <button>UI/UX</button>
                    <button>Designer</button>
                    <button>Web</button>
                    <button>SEO</button>
                    <button>Marketing</button>
                    <button>Writer</button>
                </div>
            </div>
            <img src={banner} alt='Banner Image' />
            <div className='StepMain'>
                <div className='divGet'>
                    <h1 className='font-rise'>Get Hired In 4 <span className='h1color'> Quick Easy Steps Coming Soon </span></h1>
                    <p>The quickest and the most effective way to get hired by the top firm.</p>
                </div>
                <div className='quickStepCards'>
                    {
                        quickEasySteps.map((arr) => (
                            <QuickStepCards arr={arr} />
                        ))
                    }
                </div>

            </div>
            <div className='cartoonMain'>
                <h1>Find Your Dream Job <span className='h1color'>Super Fast Ever.</span> </h1>
                <p>
                    We are here to help jobseekers connect with organizer and companies.
                    We are provides the best opportunities to professional people.
                </p>
                <img src={cartoons} />
            </div>
            <div className='quickJobMain'>
                <h1> < span className='h1color'>Countless Career Options</span> Are Waiting For You To Explore</h1>
                <div className='quickJobCards'>
                    {
                        category.slice(0, 8).map((c) => (<JobCards c={c} />))
                    }


                </div>

            </div>
            <div className='MainJobList'>
                <h1> <span className='h1color'>Latest And Top</span> Job Openings</h1>
                <div className='jobList'>
                    {
                        joblist.slice(0, 6).map((j) => (<JobList j={j} />))
                    }
                </div>
            </div>
            <div className='MainSideBanner'>
                {
                    Banner.map((arr) => (
                        <SideBanner arr={arr} />
                    ))
                }
            </div>
            <div className='MainFooter'>
                <div className='FooterRightDiv'>
                    <div className='SubFooterRight1'>
                        <img src={footerLogo} />
                        <p>HiringMine connects employer and job seekers,
                            where employers are the source of the resources and
                            the job seeker can find and apply for their targeted job.
                        </p>
                    </div>
                    <div className='SubFooterRight2'>
                        <h5>Follow us</h5>
                        <div className='SubFooterRight3'>
                            <FacebookIcon className='iconColor' />
                            <WhatsAppIcon className='iconColor' />
                            <InstagramIcon className='iconColor' />
                            <LinkedInIcon className='iconColor' />
                        </div>
                    </div>
                </div>
                <div className='FooterLeftDiv'>
                    <h5>Contact Us</h5>
                    <a href='#'><MailOutlineRoundedIcon className='iconColor' /> portal.hiringmine@gmail.com</a>
                </div>
            </div>
            <div className='endFooter'>
                <div className='terms'>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms and Condition</a>
                </div>
                <p>Copyright Hiringmine 2024. All Rights Reserved</p>
            </div>
        </>
    )
}
export default ContentBody

const QuickStepCards = ({ arr }) => {
    return (
        <div className='dynamicDiv'>
            {/* <span>{arr.icon}</span> */}
            <h3 className='h1color'>{arr.step1}</h3>
            <p>{arr.step2}</p>
        </div>
    )
}

const JobCards = ({ c }) => {
    return (
        <div>
            <h1>{c.name}</h1>
            <p>{c.postCounts} Jobs</p>
        </div>
    )
}

const JobList = ({ j }) => {
    return (
        <div className='MainBox'>
            <div className='FirstDiv'>
                <div className='FirstSub'>
                    <p>{j.companyName}</p>
                    <h5>{j.designation}</h5>
                    <h6>{ }</h6>
                </div>
                <div className='SecondSub'>
                    <img src={jobcardlogo} />
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
export { JobList }

const SideBanner = ({ arr }) => {
    return (
        <div className='SideBanner'>
            <div className='SideBannerImg'>
                <img src={arr.img} />
            </div>
            <div className='SideBannerContent'>
                <h1 className='font-rise'><span className='h1color'>{arr.hBlack}</span>{arr.hBlue}</h1>
                <button>{arr.ButtonText}</button>
            </div>
        </div>
    )
}





// Array Quick Easy Steps 
const quickEasySteps = [{
    icon: AccountBoxIcon,
    step1: "Create an Account",
    step2: "Join our vibrant community. Create your account and unlock boundless opportunities.",
},
{
    icon: SearchIcon,
    step1: "Search a Jobs",
    step2: "Discover your ideal job. Our intuitive search feature makes job hunting effortless.",
},
{
    icon: FilePresentIcon,
    step1: "Upload CV/Resume",
    step2: "Showcase your expertise. Upload your CV or resume and stand out to employers.",
},
{
    icon: WorkIcon,
    step1: "Get a Job",
    step2: "Achieve your career goals. Apply for jobs and embark on your next adventure.",
}]
// Array Side BAnner 
const Banner = [
    {
        img: FrameLeft,
        hBlack: "Connect With ",
        hBlue: "People Who Can Help",
        ButtonText: "Coming Soon",
    },
    {
        img: FrameRight,
        hBlack: "Post Your Job",
        hBlue: " For People To See",
        ButtonText: "Coming Soon",
    },
]