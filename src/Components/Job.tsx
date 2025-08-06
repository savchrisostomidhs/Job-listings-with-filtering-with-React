import "./Job.css"

interface Job {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: string[]
}

function Job({ job, setFilter }:
    { job: Job, setFilter: React.Dispatch<React.SetStateAction<string[]>> }) {

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const value = e.currentTarget.textContent;
        setFilter(prev => !value || prev.includes(value) ? prev : [...prev, value]);
    }

    return (
        <div
            style={job.featured ?
                { borderLeft: "5px solid hsl(180, 29%, 50%)" } :
                { borderLeft: "5px solid transparent" }}
            className="job"
        >
            <div className="left">
                <img src={job.logo} alt="logo" />
                <div className="info">
                    <div className="name">
                        <p className="company">{job.company}</p>
                        {job.new && <div className="new">New!</div>}
                        {job.featured && <div className="featured">Featured</div>}
                    </div>
                    <p className="job-title">{job.position}</p>
                    <ul className="time">
                        <li className="posted-at">{job.postedAt}</li>
                        <li>{job.contract}</li>
                        <li>{job.location}</li>
                    </ul>
                </div>
            </div>
            <div className="categories">
                {
                    [job.role, job.level]
                        .concat(job.languages)
                        .concat(job.tools)
                        .map((cat, i) =>
                            <div
                                onClick={handleClick}
                                className="category"
                                key={i}
                            >
                                {cat}
                            </div>)
                }
            </div>
        </div>
    )
}

export default Job