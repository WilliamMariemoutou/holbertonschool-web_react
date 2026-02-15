// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create first student
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Paris"
};

// Create second student
const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");

// Loop through students and create rows
for (let i = 0; i < studentsList.length; i++) {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = studentsList[i].firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = studentsList[i].location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
}

// Add table to the page
document.body.appendChild(table);
