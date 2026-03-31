const resources = [
  {
    category: "campus",
    title: "New International Student Guide",
    description: "Wright State orientation and arrival information for new international students.",
    audience: "New students",
    source: "Wright State",
    url: "https://www.wright.edu/international-education/international-students/what-to-know-as-a-new-international-wright-state-student"
  },
  {
    category: "campus",
    title: "UCIE Home",
    description: "Main Wright State international education office with contact information and student services.",
    audience: "All students",
    source: "Wright State",
    url: "https://www.wright.edu/international-education"
  },
  {
    category: "campus",
    title: "RaiderConnect",
    description: "Help with registration, billing, financial aid, and enrollment questions.",
    audience: "All students",
    source: "Wright State",
    url: "https://www.wright.edu/enrollment-services/article/raiderconnect-is-serving-students-in-person-and-virtually"
  },
  {
    category: "campus",
    title: "Housing and Residence Life",
    description: "Campus housing information, move-in support, and residence options.",
    audience: "New students",
    source: "Wright State",
    url: "https://www.wright.edu/housing-and-residence-life"
  },
  {
    category: "campus",
    title: "Student Health Insurance",
    description: "Understand insurance expectations and student health-related support.",
    audience: "All students",
    source: "Wright State",
    url: "https://www.wright.edu/student-health-services/insurance-billing"
  },
  {
    category: "campus",
    title: "Career Services",
    description: "Resume, job search, and career advising support that can complement work authorization guidance.",
    audience: "Current students",
    source: "Wright State",
    url: "https://www.wright.edu/student-success/career-services"
  },
  {
    category: "studentlife",
    title: "Finding Employment",
    description: "Wright State guidance for international students seeking employment and needing UCIE approval first.",
    audience: "Current students",
    source: "Wright State",
    url: "https://www.wright.edu/international-education/international-students/finding-employment"
  },
  {
    category: "studentlife",
    title: "On-Campus Jobs",
    description: "Student employment overview, onboarding expectations, and job search details for campus positions.",
    audience: "Students seeking campus jobs",
    source: "Wright State",
    url: "https://www.wright.edu/human-resources/student-employment/students-on-campus-jobs"
  },
  {
    category: "studentlife",
    title: "Account Access and Payments",
    description: "Use WINGS to view billing statements, make payments, and manage refunds or authorized users.",
    audience: "All students",
    source: "Wright State",
    url: "https://www.wright.edu/enrollment-services/accounts-and-bills/access-your-account"
  },
  {
    category: "studentlife",
    title: "Dining Plans",
    description: "Compare residential and commuter dining plans, dining dollars, and RaiderCash options.",
    audience: "Residential and commuter students",
    source: "Wright State",
    url: "https://www.wright.edu/dining-services/dining-plans"
  },
  {
    category: "studentlife",
    title: "Dining Concepts",
    description: "See the campus food locations, concepts, and current dining spots students use most.",
    audience: "All students",
    source: "Wright State",
    url: "https://www.wright.edu/dining-services/dining-concepts"
  },
  {
    category: "studentlife",
    title: "Parking",
    description: "Buy permits, manage citations, and understand student parking expectations on campus.",
    audience: "Students with cars",
    source: "Wright State",
    url: "https://www.wright.edu/public-safety/parking"
  },
  {
    category: "immigration",
    title: "Study in the States",
    description: "DHS resource hub for maintaining F-1 or M-1 status and understanding student responsibilities.",
    audience: "F-1 and M-1 students",
    source: "DHS",
    url: "https://studyinthestates.dhs.gov/"
  },
  {
    category: "immigration",
    title: "USCIS Students and Employment",
    description: "Official USCIS guidance on students, practical training, and immigration forms.",
    audience: "Students planning work authorization",
    source: "USCIS",
    url: "https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors"
  },
  {
    category: "immigration",
    title: "SEVIS Fee Payment",
    description: "Official I-901 SEVIS fee payment portal used before visa issuance and entry.",
    audience: "Incoming students",
    source: "SEVP",
    url: "https://www.fmjfee.com/"
  },
  {
    category: "immigration",
    title: "I-94 Arrival Record",
    description: "Retrieve your online I-94 admission and travel history after entering the United States.",
    audience: "Recently arrived students",
    source: "CBP",
    url: "https://i94.cbp.dhs.gov/home"
  },
  {
    category: "immigration",
    title: "Travel and Reentry Basics",
    description: "DHS travel guidance for international students entering or re-entering the U.S.",
    audience: "Students traveling internationally",
    source: "DHS",
    url: "https://studyinthestates.dhs.gov/students/travel"
  },
  {
    category: "visa",
    title: "Student Visa Overview",
    description: "Official State Department page for F-1 and M-1 student visas and interview preparation.",
    audience: "Prospective and returning students",
    source: "State Dept.",
    url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html"
  },
  {
    category: "visa",
    title: "Visa Appointment Wait Times",
    description: "Check estimated visa interview wait times at U.S. embassies and consulates.",
    audience: "Students booking interviews",
    source: "State Dept.",
    url: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html"
  },
  {
    category: "visa",
    title: "Passport Information",
    description: "U.S. State Department passport portal, useful for general passport guidance and travel planning.",
    audience: "Travel planning",
    source: "State Dept.",
    url: "https://travel.state.gov/content/travel/en/passports.html"
  },
  {
    category: "government",
    title: "USCIS Home",
    description: "Forms, case tools, and policy guidance for immigration benefits and documentation.",
    audience: "All students",
    source: "USCIS",
    url: "https://www.uscis.gov/"
  },
  {
    category: "government",
    title: "CBP Travel Entry Resources",
    description: "Border and travel information from U.S. Customs and Border Protection.",
    audience: "Traveling students",
    source: "CBP",
    url: "https://www.cbp.gov/travel"
  },
  {
    category: "government",
    title: "Social Security Number Information",
    description: "Official Social Security Administration guidance for students who are eligible to apply for an SSN.",
    audience: "Eligible working students",
    source: "SSA",
    url: "https://www.ssa.gov/number-card"
  },
  {
    category: "government",
    title: "USA.gov Immigration and Citizenship",
    description: "Broad federal government navigation page that helps students find the right agency faster.",
    audience: "All students",
    source: "USA.gov",
    url: "https://www.usa.gov/immigration-and-citizenship"
  }
];

const categoryLabels = {
  campus: "Campus",
  immigration: "Immigration",
  visa: "Visa & Passport",
  government: "Government",
  studentlife: "Student Life"
};

const resourceGrid = document.getElementById("resourceGrid");
const resourceResultsMeta = document.getElementById("resourceResultsMeta");
const searchInput = document.getElementById("searchInput");
const filterButtons = Array.from(document.querySelectorAll(".filter-chip"));
const template = document.getElementById("resourceCardTemplate");

let activeFilter = "all";
let activeSearch = "";

function matchesResource(resource) {
  const byCategory = activeFilter === "all" || resource.category === activeFilter;
  const haystack = [
    resource.category,
    resource.title,
    resource.description,
    resource.audience,
    resource.source
  ].join(" ").toLowerCase();

  const bySearch = haystack.includes(activeSearch.toLowerCase());
  return byCategory && bySearch;
}

function renderResources() {
  const filtered = resources.filter(matchesResource);
  resourceGrid.innerHTML = "";

  filtered.forEach((resource) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".resource-tag").textContent = categoryLabels[resource.category];
    clone.querySelector(".resource-source").textContent = resource.source;
    clone.querySelector("h3").textContent = resource.title;
    clone.querySelector(".resource-description").textContent = resource.description;
    clone.querySelector(".resource-audience").textContent = resource.audience;

    const link = clone.querySelector(".resource-link");
    link.href = resource.url;
    link.textContent = "Open resource";

    resourceGrid.appendChild(clone);
  });

  const countLabel = filtered.length === 1 ? "resource" : "resources";
  resourceResultsMeta.textContent =
    filtered.length > 0
      ? `Showing ${filtered.length} ${countLabel}`
      : "No resources match that search yet. Try a broader word like visa, OPT, housing, or travel.";
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((chip) => chip.classList.remove("is-active"));
    button.classList.add("is-active");
    renderResources();
  });
});

searchInput.addEventListener("input", (event) => {
  activeSearch = event.target.value.trim();
  renderResources();
});

renderResources();
