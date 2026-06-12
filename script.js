const jobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "PixelWorks Studio",
    location: "Bengaluru, India",
    category: "IT",
    experience: "Fresher",
    workMode: "Hybrid",
    salary: "INR 18k - INR 25k / month",
    salaryValue: 3,
    posted: "2026-06-10",
    openings: 4,
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Build responsive interfaces and support the engineering team with reusable UI components.",
    responsibilities: ["Convert design mockups into accessible web pages.", "Fix UI bugs and improve page performance.", "Collaborate with developers during sprint reviews."],
    benefits: ["Mentor support", "Certificate", "Flexible timing"]
  },
  {
    id: 2,
    title: "Digital Marketing Associate",
    company: "GrowthLane Media",
    location: "Mumbai, India",
    category: "Marketing",
    experience: "Fresher",
    workMode: "On-site",
    salary: "INR 22k - INR 32k / month",
    salaryValue: 4,
    posted: "2026-06-09",
    openings: 2,
    skills: ["SEO", "Content", "Analytics"],
    description: "Plan campaigns, track performance, and support content distribution across digital channels.",
    responsibilities: ["Research keywords and competitor campaigns.", "Prepare weekly performance reports.", "Coordinate social posts and email newsletters."],
    benefits: ["Learning budget", "Performance bonus", "Team events"]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Northstar Apps",
    location: "Remote",
    category: "Design",
    experience: "Mid-Level",
    workMode: "Remote",
    salary: "INR 8 LPA - INR 12 LPA",
    salaryValue: 12,
    posted: "2026-06-08",
    openings: 3,
    skills: ["Figma", "User Research", "Prototyping"],
    description: "Design thoughtful product flows for mobile and web applications used by growing teams.",
    responsibilities: ["Create wireframes, prototypes, and high-fidelity screens.", "Run usability checks with stakeholders.", "Maintain the product design system."],
    benefits: ["Remote-first team", "Design tools", "Health cover"]
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "CloudMint",
    location: "Hyderabad, India",
    category: "IT",
    experience: "Mid-Level",
    workMode: "Hybrid",
    salary: "INR 10 LPA - INR 16 LPA",
    salaryValue: 16,
    posted: "2026-06-07",
    openings: 5,
    skills: ["Node.js", "MongoDB", "REST APIs"],
    description: "Develop reliable APIs and backend services for a fast-growing SaaS product.",
    responsibilities: ["Build API endpoints and service integrations.", "Write unit tests for core backend modules.", "Monitor logs and resolve production issues."],
    benefits: ["Hybrid work", "Paid certifications", "Annual bonus"]
  },
  {
    id: 5,
    title: "Human Resources Executive",
    company: "PeopleFirst Consulting",
    location: "Delhi, India",
    category: "HR",
    experience: "Mid-Level",
    workMode: "On-site",
    salary: "INR 5 LPA - INR 7 LPA",
    salaryValue: 7,
    posted: "2026-06-06",
    openings: 2,
    skills: ["Recruitment", "Onboarding", "Payroll"],
    description: "Handle recruitment coordination, employee engagement, and day-to-day HR operations.",
    responsibilities: ["Schedule interviews and maintain candidate pipelines.", "Support onboarding documentation.", "Coordinate employee engagement activities."],
    benefits: ["Travel allowance", "HRMS training", "Quarterly bonus"]
  },
  {
    id: 6,
    title: "Senior Product Manager",
    company: "FinEdge Labs",
    location: "Pune, India",
    category: "Product",
    experience: "Senior",
    workMode: "Hybrid",
    salary: "INR 24 LPA - INR 34 LPA",
    salaryValue: 34,
    posted: "2026-06-05",
    openings: 1,
    skills: ["Roadmaps", "Agile", "FinTech"],
    description: "Lead product strategy for finance tools used by businesses across India.",
    responsibilities: ["Own quarterly roadmap planning.", "Define success metrics for major releases.", "Partner with design, engineering, and sales teams."],
    benefits: ["Leadership role", "Stock options", "Health cover"]
  },
  {
    id: 7,
    title: "Data Analyst",
    company: "InsightLoop",
    location: "Chennai, India",
    category: "Analytics",
    experience: "Fresher",
    workMode: "Hybrid",
    salary: "INR 4 LPA - INR 6 LPA",
    salaryValue: 6,
    posted: "2026-06-04",
    openings: 6,
    skills: ["SQL", "Excel", "Power BI"],
    description: "Analyze business data and create dashboards that help teams make faster decisions.",
    responsibilities: ["Clean and prepare data from multiple sources.", "Build dashboards for business stakeholders.", "Summarize findings in clear reports."],
    benefits: ["Analytics training", "Laptop", "Team mentorship"]
  },
  {
    id: 8,
    title: "Content Writer",
    company: "BrightWords",
    location: "Kolkata, India",
    category: "Marketing",
    experience: "Mid-Level",
    workMode: "Remote",
    salary: "INR 4 LPA - INR 6.5 LPA",
    salaryValue: 6.5,
    posted: "2026-06-03",
    openings: 3,
    skills: ["Copywriting", "Research", "CMS"],
    description: "Write clear articles, landing page copy, and product content for technology clients.",
    responsibilities: ["Draft blogs and website copy.", "Edit content for tone and clarity.", "Work with SEO briefs and editorial calendars."],
    benefits: ["Remote setup", "Editorial coaching", "Flexible hours"]
  },
  {
    id: 9,
    title: "Senior DevOps Engineer",
    company: "DeployHub",
    location: "Remote",
    category: "IT",
    experience: "Senior",
    workMode: "Remote",
    salary: "INR 22 LPA - INR 30 LPA",
    salaryValue: 30,
    posted: "2026-06-02",
    openings: 2,
    skills: ["AWS", "Docker", "CI/CD"],
    description: "Improve deployment pipelines, infrastructure reliability, and observability practices.",
    responsibilities: ["Maintain cloud infrastructure and automated deployments.", "Improve monitoring and incident response.", "Guide teams on secure release practices."],
    benefits: ["Remote work", "Cloud credits", "Conference budget"]
  },
  {
    id: 10,
    title: "Graphic Designer",
    company: "CanvasCraft",
    location: "Jaipur, India",
    category: "Design",
    experience: "Fresher",
    workMode: "On-site",
    salary: "INR 20k - INR 28k / month",
    salaryValue: 3,
    posted: "2026-06-01",
    openings: 2,
    skills: ["Illustrator", "Branding", "Canva"],
    description: "Create social media graphics, campaign assets, and brand collateral for client projects.",
    responsibilities: ["Design visual assets for social campaigns.", "Prepare brand templates and presentation decks.", "Adapt creative assets for different formats."],
    benefits: ["Creative reviews", "Portfolio work", "Design workshops"]
  },
  {
    id: 11,
    title: "Sales Development Representative",
    company: "LeadSpring",
    location: "Gurugram, India",
    category: "Sales",
    experience: "Mid-Level",
    workMode: "On-site",
    salary: "INR 6 LPA - INR 9 LPA",
    salaryValue: 9,
    posted: "2026-05-31",
    openings: 5,
    skills: ["CRM", "Prospecting", "Communication"],
    description: "Identify prospects, qualify leads, and schedule meetings for the enterprise sales team.",
    responsibilities: ["Research target accounts and decision makers.", "Run outbound email and call campaigns.", "Update pipeline activity in the CRM."],
    benefits: ["Sales incentives", "CRM training", "Fast growth path"]
  },
  {
    id: 12,
    title: "Customer Support Specialist",
    company: "CareBridge",
    location: "Noida, India",
    category: "Support",
    experience: "Fresher",
    workMode: "Hybrid",
    salary: "INR 3 LPA - INR 4.5 LPA",
    salaryValue: 4.5,
    posted: "2026-05-30",
    openings: 8,
    skills: ["Ticketing", "Chat Support", "Empathy"],
    description: "Help customers resolve product questions through chat, email, and knowledge base articles.",
    responsibilities: ["Respond to customer queries within SLA.", "Document recurring issues for product teams.", "Update help center articles."],
    benefits: ["Shift allowance", "Support training", "Cab facility"]
  },
  {
    id: 13,
    title: "Machine Learning Intern",
    company: "NeuroSpark AI",
    location: "Bengaluru, India",
    category: "Analytics",
    experience: "Fresher",
    workMode: "Hybrid",
    salary: "INR 25k - INR 40k / month",
    salaryValue: 5,
    posted: "2026-05-29",
    openings: 3,
    skills: ["Python", "Pandas", "ML Basics"],
    description: "Support model experiments, clean datasets, and document findings for applied AI projects.",
    responsibilities: ["Prepare training datasets.", "Run baseline models.", "Create experiment summaries."],
    benefits: ["Research mentorship", "Certificate", "GPU access"]
  },
  {
    id: 14,
    title: "QA Automation Engineer",
    company: "TestGrid Systems",
    location: "Ahmedabad, India",
    category: "IT",
    experience: "Mid-Level",
    workMode: "Hybrid",
    salary: "INR 7 LPA - INR 11 LPA",
    salaryValue: 11,
    posted: "2026-05-28",
    openings: 4,
    skills: ["Selenium", "JavaScript", "Testing"],
    description: "Build automated test suites and improve release confidence for web products.",
    responsibilities: ["Write regression test cases.", "Track bugs with product teams.", "Improve test coverage."],
    benefits: ["Automation training", "Hybrid work", "Health cover"]
  },
  {
    id: 15,
    title: "Finance Operations Analyst",
    company: "LedgerWise",
    location: "Mumbai, India",
    category: "Finance",
    experience: "Fresher",
    workMode: "On-site",
    salary: "INR 4 LPA - INR 5.5 LPA",
    salaryValue: 5.5,
    posted: "2026-05-27",
    openings: 3,
    skills: ["Excel", "Reconciliation", "Reports"],
    description: "Assist with financial operations, reconciliation, and monthly business reporting.",
    responsibilities: ["Prepare financial reports.", "Validate transaction records.", "Support audit documentation."],
    benefits: ["Finance training", "Transport support", "Annual bonus"]
  },
  {
    id: 16,
    title: "Senior Brand Strategist",
    company: "AuraWorks",
    location: "Delhi, India",
    category: "Marketing",
    experience: "Senior",
    workMode: "Hybrid",
    salary: "INR 14 LPA - INR 20 LPA",
    salaryValue: 20,
    posted: "2026-05-26",
    openings: 1,
    skills: ["Branding", "Campaigns", "Research"],
    description: "Lead brand positioning and integrated campaigns for consumer and SaaS clients.",
    responsibilities: ["Develop brand strategies.", "Present campaign plans.", "Guide creative direction."],
    benefits: ["Client exposure", "Leadership role", "Performance bonus"]
  },
  {
    id: 17,
    title: "Mobile App Developer",
    company: "PocketLabs",
    location: "Kochi, India",
    category: "IT",
    experience: "Mid-Level",
    workMode: "Remote",
    salary: "INR 9 LPA - INR 15 LPA",
    salaryValue: 15,
    posted: "2026-05-25",
    openings: 2,
    skills: ["React Native", "Firebase", "APIs"],
    description: "Build mobile features, connect APIs, and improve user experience across Android and iOS.",
    responsibilities: ["Develop reusable mobile screens.", "Integrate backend services.", "Fix app performance issues."],
    benefits: ["Remote work", "Device allowance", "Learning budget"]
  },
  {
    id: 18,
    title: "Business Development Manager",
    company: "MarketBridge",
    location: "Pune, India",
    category: "Sales",
    experience: "Senior",
    workMode: "On-site",
    salary: "INR 12 LPA - INR 18 LPA",
    salaryValue: 18,
    posted: "2026-05-24",
    openings: 2,
    skills: ["Negotiation", "Enterprise Sales", "CRM"],
    description: "Build enterprise pipelines, close partnerships, and expand revenue in priority markets.",
    responsibilities: ["Own sales targets.", "Negotiate enterprise deals.", "Maintain partner relationships."],
    benefits: ["High incentives", "Travel allowance", "Leadership path"]
  }
];

const state = {
  keyword: "",
  location: "",
  category: "",
  experience: "",
  workMode: "",
  minSalary: 0,
  sort: "latest",
  page: 1,
  perPage: 6,
  saved: new Set(JSON.parse(localStorage.getItem("savedJobs") || "[]"))
};

const selectors = {
  jobGrid: document.querySelector("#jobGrid"),
  emptyState: document.querySelector("#emptyState"),
  resultCount: document.querySelector("#resultCount"),
  pageStatus: document.querySelector("#pageStatus"),
  filterSummary: document.querySelector("#filterSummary"),
  savedCount: document.querySelector("#savedCount"),
  savedPreview: document.querySelector("#savedPreview"),
  pagination: document.querySelector("#pagination"),
  keywordFilter: document.querySelector("#keywordFilter"),
  locationFilter: document.querySelector("#locationFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  experienceFilter: document.querySelector("#experienceFilter"),
  workModeFilter: document.querySelector("#workModeFilter"),
  salaryFilter: document.querySelector("#salaryFilter"),
  salaryValue: document.querySelector("#salaryValue"),
  sortFilter: document.querySelector("#sortFilter"),
  resetFilters: document.querySelector("#resetFilters"),
  heroSearchForm: document.querySelector("#heroSearchForm"),
  quickSearch: document.querySelector("#quickSearch"),
  modalBackdrop: document.querySelector("#modalBackdrop"),
  modalClose: document.querySelector("#modalClose"),
  themeToggle: document.querySelector("#themeToggle"),
  categoryCards: document.querySelector("#categoryCards"),
  companyGrid: document.querySelector("#companyGrid")
};

const categoryMeta = {
  IT: ["IT", "Software, QA, DevOps, and mobile roles"],
  Marketing: ["MK", "Digital campaigns, content, and brand roles"],
  Design: ["DS", "UI, UX, graphics, and product design"],
  HR: ["HR", "Recruitment and people operations"],
  Product: ["PR", "Product strategy and roadmap roles"],
  Analytics: ["AN", "Data, business intelligence, and AI roles"],
  Sales: ["SL", "Sales, partnerships, and growth roles"],
  Support: ["SP", "Customer success and support roles"],
  Finance: ["FN", "Finance operations and reporting"]
};

function uniqueValues(key) {
  return [...new Set(jobs.map((job) => job[key]))].sort();
}

function fillSelect(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function getFilteredJobs() {
  const keyword = state.keyword.trim().toLowerCase();

  const filtered = jobs.filter((job) => {
    const searchText = `${job.title} ${job.company} ${job.location} ${job.category} ${job.workMode} ${job.skills.join(" ")}`.toLowerCase();
    const matchesKeyword = !keyword || searchText.includes(keyword);
    const matchesLocation = !state.location || job.location === state.location;
    const matchesCategory = !state.category || job.category === state.category;
    const matchesExperience = !state.experience || job.experience === state.experience;
    const matchesWorkMode = !state.workMode || job.workMode === state.workMode;
    const matchesSalary = job.salaryValue >= state.minSalary;

    return matchesKeyword && matchesLocation && matchesCategory && matchesExperience && matchesWorkMode && matchesSalary;
  });

  return sortJobs(filtered);
}

function sortJobs(jobList) {
  return [...jobList].sort((a, b) => {
    if (state.sort === "salary") return b.salaryValue - a.salaryValue;
    if (state.sort === "company") return a.company.localeCompare(b.company);
    return new Date(b.posted) - new Date(a.posted);
  });
}

function renderJobs() {
  const filteredJobs = getFilteredJobs();
  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / state.perPage));

  if (state.page > totalPages) {
    state.page = totalPages;
  }

  const start = (state.page - 1) * state.perPage;
  const visibleJobs = filteredJobs.slice(start, start + state.perPage);

  selectors.jobGrid.innerHTML = visibleJobs.map(createJobCard).join("");
  selectors.emptyState.hidden = filteredJobs.length !== 0;
  selectors.resultCount.textContent = `${filteredJobs.length} ${filteredJobs.length === 1 ? "job" : "jobs"} found`;
  selectors.pageStatus.textContent = filteredJobs.length ? `Page ${state.page} of ${totalPages}` : "";
  selectors.filterSummary.textContent = buildFilterSummary();
  selectors.salaryValue.textContent = state.minSalary === 0 ? "Any" : `INR ${state.minSalary} LPA`;

  renderPagination(totalPages);
  renderSavedPreview();
}

function createJobCard(job) {
  const saved = state.saved.has(job.id);

  return `
    <article class="job-card">
      <div class="job-top">
        <div>
          <h3 class="job-title">${job.title}</h3>
          <p class="company">${job.company}</p>
        </div>
        <button class="save-button ${saved ? "saved" : ""}" type="button" data-save="${job.id}" aria-label="${saved ? "Unsave" : "Save"} ${job.title}">
          ${saved ? "Saved" : "Save"}
        </button>
      </div>
      <div class="tags">
        <span class="tag">${job.location}</span>
        <span class="tag">${job.category}</span>
        <span class="tag">${job.experience}</span>
        <span class="tag">${job.workMode}</span>
      </div>
      <p class="job-description">${job.description}</p>
      <div class="job-extra">
        <span>Posted ${formatDate(job.posted)}</span>
        <span>${job.openings} ${job.openings === 1 ? "opening" : "openings"}</span>
      </div>
      <div class="card-actions">
        <span class="salary">${job.salary}</span>
        <button class="view-button" type="button" data-view="${job.id}">View More</button>
      </div>
    </article>
  `;
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    selectors.pagination.innerHTML = "";
    return;
  }

  selectors.pagination.innerHTML = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const active = page === state.page ? "active" : "";
    return `<button class="page-button ${active}" type="button" data-page="${page}" aria-label="Go to page ${page}">${page}</button>`;
  }).join("");
}

function renderSavedPreview() {
  const savedJobs = jobs.filter((job) => state.saved.has(job.id));
  selectors.savedCount.textContent = `${savedJobs.length} saved ${savedJobs.length === 1 ? "job" : "jobs"}`;

  if (savedJobs.length === 0) {
    selectors.savedPreview.innerHTML = `<p>No saved jobs yet.</p>`;
    return;
  }

  selectors.savedPreview.innerHTML = savedJobs.slice(0, 4).map((job) => `
    <button type="button" data-view="${job.id}">${job.title} at ${job.company}</button>
  `).join("");
}

function renderCategoryCards() {
  const categories = uniqueValues("category");

  selectors.categoryCards.innerHTML = categories.map((category) => {
    const count = jobs.filter((job) => job.category === category).length;
    const [icon, text] = categoryMeta[category] || [category.slice(0, 2).toUpperCase(), "Explore active roles"];

    return `
      <button class="category-card" type="button" data-category-card="${category}">
        <span class="category-icon">${icon}</span>
        <h3>${category}</h3>
        <p>${text}</p>
        <span class="company-badge">${count} jobs</span>
      </button>
    `;
  }).join("");
}

function renderCompanies() {
  const companies = [...new Map(jobs.map((job) => [job.company, job])).values()].slice(0, 8);

  selectors.companyGrid.innerHTML = companies.map((job) => {
    const count = jobs.filter((item) => item.company === job.company).length;
    const initials = job.company.split(" ").map((word) => word[0]).join("").slice(0, 2);

    return `
      <article class="company-card">
        <span class="company-logo">${initials}</span>
        <h3>${job.company}</h3>
        <p>${job.description}</p>
        <footer>
          <span>${job.location}</span>
          <span>${count} active</span>
        </footer>
      </article>
    `;
  }).join("");
}

function buildFilterSummary() {
  const activeFilters = [state.keyword, state.location, state.category, state.experience, state.workMode].filter(Boolean).length + (state.minSalary > 0 ? 1 : 0);
  return activeFilters ? `${activeFilters} active filters` : "Showing all jobs";
}

function updateFiltersFromInputs() {
  state.keyword = selectors.keywordFilter.value;
  state.location = selectors.locationFilter.value;
  state.category = selectors.categoryFilter.value;
  state.experience = selectors.experienceFilter.value;
  state.workMode = selectors.workModeFilter.value;
  state.minSalary = Number(selectors.salaryFilter.value);
  state.sort = selectors.sortFilter.value;
  state.page = 1;
  renderJobs();
}

function openModal(jobId) {
  const job = jobs.find((item) => item.id === jobId);
  if (!job) return;

  document.querySelector("#modalCompany").textContent = job.company;
  document.querySelector("#modalTitle").textContent = job.title;
  document.querySelector("#modalMeta").textContent = `${job.location} - ${job.category} - ${job.experience} - ${job.workMode} - ${job.salary}`;
  document.querySelector("#modalDescription").textContent = job.description;
  document.querySelector("#modalResponsibilities").innerHTML = job.responsibilities.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#modalDetails").innerHTML = [
    `Posted: ${formatDate(job.posted)}`,
    `Openings: ${job.openings}`,
    `Benefits: ${job.benefits.join(", ")}`
  ].map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#modalSkills").innerHTML = job.skills.map((skill) => `<span class="tag">${skill}</span>`).join("");
  selectors.modalBackdrop.hidden = false;
  selectors.modalClose.focus();
}

function closeModal() {
  selectors.modalBackdrop.hidden = true;
}

function toggleSaved(jobId) {
  if (state.saved.has(jobId)) {
    state.saved.delete(jobId);
  } else {
    state.saved.add(jobId);
  }

  localStorage.setItem("savedJobs", JSON.stringify([...state.saved]));
  renderJobs();
}

function resetAllFilters() {
  selectors.keywordFilter.value = "";
  selectors.locationFilter.value = "";
  selectors.categoryFilter.value = "";
  selectors.experienceFilter.value = "";
  selectors.workModeFilter.value = "";
  selectors.salaryFilter.value = "0";
  selectors.sortFilter.value = "latest";
  selectors.quickSearch.value = "";
  updateFiltersFromInputs();
}

function applyCategory(category) {
  selectors.categoryFilter.value = category;
  updateFiltersFromInputs();
  document.querySelector("#jobs").scrollIntoView({ behavior: "smooth" });
}

function applyKeyword(keyword) {
  selectors.quickSearch.value = keyword;
  selectors.keywordFilter.value = keyword;
  updateFiltersFromInputs();
  document.querySelector("#jobs").scrollIntoView({ behavior: "smooth" });
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-IN", { month: "short", day: "numeric" }).format(new Date(dateString));
}

fillSelect(selectors.locationFilter, uniqueValues("location"));
fillSelect(selectors.categoryFilter, uniqueValues("category"));
fillSelect(selectors.workModeFilter, uniqueValues("workMode"));
renderCategoryCards();
renderCompanies();

[
  selectors.keywordFilter,
  selectors.locationFilter,
  selectors.categoryFilter,
  selectors.experienceFilter,
  selectors.workModeFilter,
  selectors.salaryFilter,
  selectors.sortFilter
].forEach((input) => {
  input.addEventListener("input", updateFiltersFromInputs);
});

selectors.resetFilters.addEventListener("click", resetAllFilters);

selectors.heroSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  applyKeyword(selectors.quickSearch.value);
});

document.querySelectorAll("[data-keyword-chip]").forEach((button) => {
  button.addEventListener("click", () => applyKeyword(button.dataset.keywordChip));
});

selectors.categoryCards.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category-card]");
  if (!button) return;
  applyCategory(button.dataset.categoryCard);
});

selectors.jobGrid.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const saveButton = event.target.closest("[data-save]");

  if (viewButton) openModal(Number(viewButton.dataset.view));
  if (saveButton) toggleSaved(Number(saveButton.dataset.save));
});

selectors.savedPreview.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) openModal(Number(viewButton.dataset.view));
});

selectors.pagination.addEventListener("click", (event) => {
  const pageButton = event.target.closest("[data-page]");
  if (!pageButton) return;

  state.page = Number(pageButton.dataset.page);
  renderJobs();
  document.querySelector("#jobs").scrollIntoView({ behavior: "smooth", block: "start" });
});

selectors.modalClose.addEventListener("click", closeModal);
selectors.modalBackdrop.addEventListener("click", (event) => {
  if (event.target === selectors.modalBackdrop) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !selectors.modalBackdrop.hidden) closeModal();
});

selectors.themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

renderJobs();
