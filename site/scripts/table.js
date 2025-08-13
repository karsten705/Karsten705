// table
const divTable = document.querySelector('#making-a-table');
const tableElement = document.createElement("table");
const caption = document.createElement('caption');
caption.textContent = "Table 1. Current Courses";
divTable.appendChild(tableElement);
tableElement.appendChild(caption);

const tableHeader = document.createElement("thead");
const tableRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.scope="col";
th1.rowSpan = 2;
th1.textContent = "Term";
const th2 = document.createElement("th");
th2.scope="col";
th2.colSpan = 3;
th2.textContent = "Course";
tableRow.appendChild(th1);
tableRow.appendChild(th2);
tableHeader.appendChild(tableRow);
tableElement.appendChild(tableHeader);

tableRow2 = document.createElement("tr");
const thTextContent = ["Code", "Name", "Hrs/Week"];
for(let i=0; i<3; i++) {
    const thElement = document.createElement("th");
    thElement.scope = "col";
    thElement.textContent = thTextContent[i];
    tableRow2.appendChild(thElement);
}
tableHeader.appendChild(tableRow2);

// tablebody
const fallCourseCodes = ["CSD105", "CMM115", "CSD120", "CSO104", "MTH122", "TNY130"];
const winterCourseCodes = ["CSA103", "CSD102", "CSD212", "CS102", "CST104"];

const fallCourseNames = ["Python", "Communications I", "Introduction to Web Development", "Introduction to Operating Systems and LAN",
    "Computer Mathematics", "Technology in Society"];

const winterCourseNames = ["Business Applications I", "Programming Using C++", "Web Scripting Languages",
    "Introduction to Linux", "PC Hardware and Networking"];

const fallHoursPerWeek = ["3","3","4","4","3","2"];
const winterHoursPerWeek = ["4","5","4","4","5"];

const tableBody = document.createElement("tbody");
const tBodyHeader1 = document.createElement("th");
tBodyHeader1.rowSpan = 7;
tBodyHeader1.scope="rowgroup";
tBodyHeader1.textContent = "Fall";
tableBody.appendChild(tBodyHeader1);
for (let tBodyRows = 0; tBodyRows < 6; tBodyRows += 1) {
    const tr = document.createElement("tr");

    // Column 1: Course Code
    const tdCode = document.createElement("td");
    tdCode.textContent = fallCourseCodes[tBodyRows];
    tr.appendChild(tdCode);

    // Column 2: Course Name
    const tdName = document.createElement("td");
    tdName.textContent = fallCourseNames[tBodyRows];
    tr.appendChild(tdName);

    // Column 3: Hours per Week
    const tdHours = document.createElement("td");
    tdHours.textContent = fallHoursPerWeek[tBodyRows];
    tr.appendChild(tdHours);

    tableBody.appendChild(tr);
}
const tBodyHeader2 = document.createElement("th");
tBodyHeader2.rowSpan = 6;
tBodyHeader2.scope="rowgroup";
tBodyHeader2.textContent = "Winter";
tableBody.appendChild(tBodyHeader2);
for(let tBodyRows = 0;  tBodyRows < 5; tBodyRows++) {
    const tr = document.createElement("tr");

    // Column 1: Course Code
    const tdCode = document.createElement("td");
    tdCode.textContent = winterCourseCodes[tBodyRows];
    tr.appendChild(tdCode);

    // Column 2: Course Name
    const tdName = document.createElement("td");
    tdName.textContent = winterCourseNames[tBodyRows];
    tr.appendChild(tdName);

    // Column 3: Hours per Week
    const tdHours = document.createElement("td");
    tdHours.textContent = winterHoursPerWeek[tBodyRows];
    tr.appendChild(tdHours);

    tableBody.appendChild(tr);
}
tableElement.appendChild(tableBody);
// tfoot
const tFooter = document.createElement("tfoot");
const tFooterRow = document.createElement("tr");
const tFooterHeader = document.createElement("th");
tFooterHeader.scope = "row";
tFooterHeader.textContent = "Total";
tFooterHeader.colSpan = 3;
const tFooterData = document.createElement("td");
tFooterData.textContent = 41;

tFooterRow.appendChild(tFooterHeader);
tFooterRow.appendChild(tFooterData);

tFooter.appendChild(tFooterRow);
tableElement.appendChild(tFooter)