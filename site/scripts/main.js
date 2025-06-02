const glossary = [
  { term: "HTML", description: "HyperText Markup Language" },
  { term: "CSS", description: "Cascading Style Sheets" },
  { term: "JS", description: "JavaScript" },
  { term: "DOM", description: "Document Object Model" },
  { term: "API", description: "Application Programming Interface" }
];

let main = document.getElementById("creating-a-glosssary");
main.innerHTML="<h1>Glossary</h1>";

const dl = document.createElement("dl");
main.appendChild(dl);

glossary.forEach(entry => {
  const dt = document.createElement("dt");
  dt.textContent = entry.term;

  const dd = document.createElement("dd");
  dd.textContent = entry.description;

  dl.appendChild(dt);
  dl.appendChild(dd);
});
