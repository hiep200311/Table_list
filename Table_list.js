const employeeData = [
  {
    Image:
      "https://xcorp-upload.s3.ap-southeast-1.amazonaws.com/094ecf62b81c96f22ab1aa5a0e4d3fc1/avatar/24/avatar.jpg?2024-11-27T10:27:46.706075226",
    employee: "Men Ho",
    location: "xperc",
    department: "Sale,Compounding360,[xCorp] QA,X-ID",
    wfh: 3,
    trainingLeave: 1,
    wfhTraining: 0,
    annualLeave: 2,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 6,
  },
  {
    employee: "Luat Nguyen",
    location: "xperc",
    department: "Sale,Compounding360,[xCorp] QA,X-ID",
    wfh: 0,
    trainingLeave: 0,
    wfhTraining: 0,
    annualLeave: 0,
    maternityLeave: 0,
    marriageLeave: 0,
    bereavementLeave: 0,
    maternityLeaveMale: 0,
    total: 0,
  },
  // Add more data as needed
];

const rowsPerPage = 10;
let currentPage = 1;

function populateTable() {
  const tableBody = document.getElementById("employee-data");
  tableBody.innerHTML = "";

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = employeeData.slice(startIndex, endIndex);

  currentData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.employee}</td>
      <td>${data.location}</td>
      <td>${data.department}</td>
      <td>${data.wfh}</td>
      <td>${data.trainingLeave}</td>
      <td>${data.wfhTraining}</td>
      <td>${data.annualLeave}</td>
      <td>${data.maternityLeave}</td>
      <td>${data.marriageLeave}</td>
      <td>${data.bereavementLeave}</td>
      <td>${data.maternityLeaveMale}</td>
      <td>${data.total}</td>
    `;
    tableBody.appendChild(row);
  });

  updatePaginationInfo();
}

function updatePaginationInfo() {
  const showingEntries = document.getElementById("showing-entries");
  const startEntry = (currentPage - 1) * rowsPerPage + 1;
  const endEntry = Math.min(currentPage * rowsPerPage, employeeData.length);
  showingEntries.textContent = `Showing ${startEntry} to ${endEntry} of ${employeeData.length} entries`;

  document.getElementById("current-page").textContent = ` ${currentPage}`;
}

function handleSearch() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const tableBody = document.getElementById("employee-data");
  tableBody.innerHTML = "";

  const filteredData = employeeData.filter((data) => {
    return Object.values(data).join(" ").toLowerCase().includes(searchValue);
  });

  filteredData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.employee}</td>
      <td>${data.location}</td>
      <td>${data.department}</td>
      <td>${data.wfh}</td>
      <td>${data.trainingLeave}</td>
      <td>${data.wfhTraining}</td>
      <td>${data.annualLeave}</td>
      <td>${data.maternityLeave}</td>
      <td>${data.marriageLeave}</td>
      <td>${data.bereavementLeave}</td>
      <td>${data.maternityLeaveMale}</td>
      <td>${data.total}</td>
    `;
    tableBody.appendChild(row);
  });

  updatePaginationInfo();
}

function setupPaginationControls() {
  document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage * rowsPerPage < employeeData.length) {
      currentPage++;
      populateTable();
    }
  });

  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      populateTable();
    }
  });
}

document.getElementById("search-btn").addEventListener("click", handleSearch);

populateTable();
setupPaginationControls();
