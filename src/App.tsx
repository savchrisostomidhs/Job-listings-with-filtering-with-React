import Filter from './Components/Filter'
import Job from './Components/Job'
import { useState } from 'react'
import data from "./data.json"
import './App.css'

function App() {
  const [filter, setFilter] = useState<string[]>([]);

  return (
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <div className={`jobs ${filter.length !== 0 && "gap"}`}>
        {data.map(job => {
          const filterValues = [job.role, job.level].concat(job.languages).concat(job.tools);
          return filter.every(val => filterValues.includes(val)) &&
            <Job key={job.id} job={job} setFilter={setFilter} />
        })}
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/savchrisostomidhs">savchrisostomidhs</a>.
      </div>
    </>
  )
}

export default App
