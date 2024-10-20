// script.js

// Sample data
const student = {
    name: "Mcbright Matlou",
    email: "mcbrightmatlou.gmail.com",
    matricMarks: 850,
    interests: ["Computer Science", "Engineering"]
  };
  
  const universities = [
    { name: "University of Cape Town", location: "Cape Town" },
    { name: "University of the Witwatersrand", location: "Johannesburg" },
    { name: "Stellenbosch University", location: "Stellenbosch" }
  ];
  
  const courses = [
    {
      name: "BSc Computer Science",
      university: "University of Cape Town",
      description: "Study computer science, software engineering and data science.",
      duration: "3 years",
      fees: "R50,000 - R70,000 per annum",
      admissionRequirements: "Matric exemption, 60% in Mathematics and Physical Science"
    },
    {
      name: "BEng Mechanical Engineering",
      university: "University of the Witwatersrand",
      description: "Learn mechanical engineering, thermodynamics and materials science.",
      duration: "4 years",
      fees: "R60,000 - R80,000 per annum",
      admissionRequirements: "Matric exemption, 65% in Mathematics and Physical Science"
    },
    // Add more courses here...
  ];
  
  // Function to populate student details
  function populateStudentDetails() {
    const studentDetails = document.getElementById("student-details");
    studentDetails.innerHTML = `
      <h2>Student Details</h2>
      <p>Name: ${student.name}</p>
      <p>Email: ${student.email}</p>
      <p>Matric Marks: ${student.matricMarks}</p>
      <p>Interests: ${student.interests.join(", ")}</p>
    `;
  }
  
  // Function to populate recommended universities
  function populateUniversities() {
    const universityList = document.querySelector("#recommended-universities ul");
    universities.forEach((university) => {
      const listItem = document.createElement("LI");
      listItem.textContent = `${university.name} (${university.location})`;
      universityList.appendChild(listItem);
    });
  }
  
  
  // Function to populate recommended courses
  function populateCourses() {
    const courseTable = document.querySelector("#recommended-courses table tbody");
    courses.forEach((course) => {
      const row = document.createElement("TR");
      row.innerHTML = `
        <td>${course.name}</td>
        <td>${course.university}</td>
        <td>${course.description}</td>
      `;
      courseTable.appendChild(row);
    });
  }
  
  // Function to populate course details
  function populateCourseDetails() {
    const courseDetails = document.querySelector("#course-details");
    courses.forEach((course) => {
      const courseSection = document.createElement("SECTION");
      courseSection.innerHTML = `
        <h3>${course.name}</h3>
        <p>Duration: ${course.duration}</p>
        <p>Fees: ${course.fees}</p>
        <p>Admission Requirements: ${course.admissionRequirements}</p>
      `;
      courseDetails.appendChild(courseSection);
    });
  }
  // script.js (continued)

// Add event listener to course table rows
document.querySelectorAll("#recommended-courses table tbody tr").forEach((row) => {
    row.addEventListener("click", () => {
      // Toggle course details visibility
      row.nextElementSibling.classList.toggle("hidden");
    });
  });
  
  // Add event listener to university list items
  document.querySelectorAll("#recommended-universities ul li").forEach((item) => {
    item.addEventListener("click", () => {
      // Toggle university details visibility
      item.nextElementSibling.classList.toggle("hidden");
    });
  });
  
  // Call functions to populate data
  populateStudentDetails();
  populateUniversities();
  populateCourses();
  populateCourseDetails();

 /*  // Fetch data from JSON file
fetch('data.json')
.then(response => response.json())
.then(data => {
  const student = data.student;
  const universities = data.universities;
  const courses = data.courses;

  // Populate student details
  populateStudentDetails(student);

  // Populate recommended universities
  populateUniversities(universities);

  // Populate recommended courses
  populateCourses(courses);

  // Populate course details
  populateCourseDetails(courses);
})
.catch(error => console.error('Error fetching data:', error));

// Functions to populate data remain the same */