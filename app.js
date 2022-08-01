// ==============fetch the data from json file==========

const dataArr = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

const levelContainer = document.getElementById("level-container");
const roleContainer = document.getElementById("role-container");
const contractContainer = document.getElementById("contract-container");
const toolsContainer = document.getElementById("tools-container");
const languagesContainer = document.getElementById("language-container");

// ============display level btns==============
function displaylevelBtn() {
  let levelBtns = dataArr.reduce(
    function (values, data) {
      if (!values.includes(data.level)) {
        values.push(data.level);
      }
      return values;
    },
    ["all"]
  );
  let btnsList = "";
  for (let i = 1; i < levelBtns.length; i++) {
    btnsList += `<button class="btn" data-id=${levelBtns[i]}>${levelBtns[i]}</button>`;
  }
  levelContainer.innerHTML = btnsList;
}

// ============display role btns==============
function displayroleBtn() {
  let roleBtns = dataArr.reduce(
    function (values, data) {
      if (!values.includes(data.role)) {
        values.push(data.role);
      }
      return values;
    },
    ["all"]
  );
  let btnsList = "";
  for (let i = 1; i < roleBtns.length; i++) {
    btnsList += `<button class="btn" data-id=${roleBtns[i]}>${roleBtns[i]}</button>`;
  }
  roleContainer.innerHTML = btnsList;
}

//===============contract btns============

function displaycontractBtn() {
  let contractBtns = dataArr.reduce(
    function (values, data) {
      if (!values.includes(data.contract)) {
        values.push(data.contract);
      }
      return values;
    },
    ["all"]
  );
  let btnsList = "";
  for (let i = 1; i < contractBtns.length; i++) {
    btnsList += `<button class="btn" data-id=${contractBtns[i]}>${contractBtns[i]}</button>`;
  }
  contractContainer.innerHTML = btnsList;
}

// =================languages=====================

function displayLanguageBtns() {
  let languageBtns = dataArr.reduce(
    function (values, data) {
      for (let i = 0; i < data.languages.length; i++) {
        if (!values.includes(data.languages[i])) {
          values.push(data.languages[i]);
        }
        return values;
      }
    },
    ["all"]
  );
  let btnsList = "";
  for (let i = 1; i < languageBtns.length; i++) {
    btnsList += `<button class="btn" data-id=${languageBtns[i]}>${languageBtns[i]}</button>`;
  }
  languagesContainer.innerHTML = btnsList;
}

// =================tools=====================

function displaytoolBtns() {
  let filtertoolBtn = dataArr.filter(function (data) {
    return data.tools.length > 0;
  });
  let toolsBtns = filtertoolBtn.reduce(
    function (values, data) {
      for (let i = 0; i < data.tools.length; i++) {
        if (!values.includes(data.tools[i])) {
          values.push(data.tools[i]);
        }
        return values;
      }
    },
    ["all"]
  );
  let btnsList = "";
  for (let i = 1; i < toolsBtns.length; i++) {
    btnsList += `<button class="btn" data-id=${toolsBtns[i]}>${toolsBtns[i]}</button>`;
  }
  toolsContainer.innerHTML = btnsList;
}
window.addEventListener("DOMContentLoaded", function () {
  displaylevelBtn();
  displaycontractBtn();
  displayroleBtn();
  displayLanguageBtns();
  displaytoolBtns();
});
