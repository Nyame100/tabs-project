import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    const response = await fetch(url);
    const jobs = await response.json();
    setLoading(false);
    setJobs(jobs);
    // const allCompanies = [...new Set(jobs.map((job) => job.company))];
    // setCategories(allCompanies);
    // console.log(allCompanies);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <main className="section-loading">
        <h1>loading</h1>
      </main>
    );
  }

  const { title, company, id, dates, duties } = jobs[value];
  return (
    <main className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => {
                  return setValue(index);
                }}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </main>
  );
}

export default App;
