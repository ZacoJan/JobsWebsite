const newJob = {
    title: "Web Developer",
    company: "Next Step",
    shortdescription: "We are looking for a skilled web developer to join our team.",
    longdescription: "We are looking for a skilled web developer to join our team.",
    hours: 38,
    pay: 27,
    url: "web-developer-job-content.html"

};

const newJob2 = {
    title: "Dentist",
    company: "Aus Dental",
    shortdescription: "We are looking for a skilled web developer to join our team.",
    longdescription: "We are looking for a skilled web developer to join our team.",
    hours: 15,
    pay: 40,
    url: "web-developer-job-content.html"

};

function addNewJob(job) {
    const jobListings = document.querySelector(".job-listings");
    const newJobListing = document.createElement("div");
    newJobListing.classList.add("job-listing");
    newJobListing.innerHTML = `
        <div class="job-listing">
            <div class="job-listing-title">
                <h3 class="job-title">${job.title}</h3>
                <p class="job-company">${job.company}</p>
            </div>
            <div class="job-description">
                <p>${job.shortdescription}</p>
            </div>
            <div class="job-listing-info">
                <p class="pay">$${job.pay}/hr</p>
                <p class="hours">${job.hours} hrs/wk</p>
            </div>
            <div class="job-listing-actions">
                <a href="#" class="job-listing-apply-button">Apply</a>
                <a href="${job.url}" class="job-listing-content-button" target="_blank">View More</a>
            </div>
        </div>

    `;
    jobListings.appendChild(newJobListing);
}

addNewJob(newJob);
addNewJob(newJob2);
addNewJob(newJob);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);
addNewJob(newJob2);

/* Add remove jobs top left */
const addJobButton = document.querySelector("#add-job-button");
const removeJobButton = document.querySelector("#remove-job-button");

addJobButton.addEventListener("click", function() {
  addNewJob(newJob);
});

removeJobButton.addEventListener("click", function() {
  const firstJob = document.querySelector(".job-listings .job-listing");
  firstJob.parentNode.removeChild(firstJob);
});



const allJobs = document.querySelectorAll(".job-listing");
const previousPageButton = document.querySelector(".previous-page-button");
const nextPageButton = document.querySelector(".next-page-button");
const jobsPerPage = 25;
let currentPage = 1;

if (allJobs.length <= jobsPerPage) {
    previousPageButton.style.display = "none";
    nextPageButton.style.display = "none";
}

nextPageButton.addEventListener("click", function() {
  const startIndex = currentPage * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  for (let i = 0; i < allJobs.length; i++) {
    if (i >= startIndex && i < endIndex) {
      allJobs[i].style.display = "flex";
    } else {
      allJobs[i].style.display = "none";
    }
  }
  currentPage++;
  previousPageButton.style.display = currentPage > 1 ? "block" : "none";
  nextPageButton.style.display = allJobs.length > (jobsPerPage * currentPage) ? "block" : "none";
});

previousPageButton.addEventListener("click", function() {
  if(currentPage >1){
    currentPage--;
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    for (let i = 0; i < allJobs.length; i++) {
      if (i >= startIndex && i < endIndex) {
        allJobs[i].style.display = "flex";
      } else {
        allJobs[i].style.display = "none";
      }
    }
    previousPageButton.style.display = currentPage > 1 ? "block" : "none";
    nextPageButton.style.display = allJobs.length > (jobsPerPage * currentPage) ? "block" : "none";
  }
});
