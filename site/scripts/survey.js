const surveyMain = document.querySelector("main");

const formElement = document.createElement("form");
formElement.action = "https://formspree.io/f/mrbkblny";
formElement.method = "POST";

const labels = ["What is your name", "What is your email", "Which whole number is the best?", "Which day is the best?"];
const labelFor = ["name_field", "email_field", "best_whole_number", "best_day"];
const inputTypes = ["text", "email", "number", "date"];

for(let i=0; i<4; i++) {
    const pElement = document.createElement("p");
    const label = document.createElement("label");
    label.htmlFor = labelFor[i];
    label.textContent = labels[i];
    const input = document.createElement("input");
    input.type = inputTypes[i];
    input.id = labelFor[i];
    input.name = labelFor[i];
    pElement.appendChild(label);
    pElement.appendChild(input);
    formElement.appendChild(pElement);
}
surveyMain.appendChild(formElement);

// drop-down list
const dropListPTag = document.createElement("p");
const ddListLabel = document.createElement("label");
ddListLabel.htmlFor = "best_bear";
ddListLabel.textContent = "Which bear is the best? *";
const selectElement = document.createElement("select");
selectElement.id = "best_bear";
selectElement.name = "best_bear";
selectElement.required = true;


const bearOptions = ["","Black", "Brown", "Care", "Panda", "Polar", "Teddy"];
for(let i=0; i<7; i++) {
    const options = document.createElement("option");
    options.textContent = bearOptions[i];
    options.value = bearOptions[i];
    selectElement.appendChild(options);
}
dropListPTag.appendChild(ddListLabel);
dropListPTag.appendChild(selectElement);
formElement.appendChild(dropListPTag);

// radiobuttons
const fieldSet = document.createElement("fieldset");
const legend = document.createElement("legend");
legend.textContent = "Do you like radio buttons?"
const ul = document.createElement("ul");

const radioIDs = ["radio_yes", "radio_no", "radio_none"];
const radioValues = ["yes", "no", "?"];
const radioLabels = ["Yes", "No", "None of your business"];

for(let i=0; i<3;i++) {
    const li = document.createElement("li");
    const inputRadioBtn = document.createElement("input");
    inputRadioBtn.type="radio";
    inputRadioBtn.id = radioIDs[i];
    inputRadioBtn.name = "enjoys_radio_buttons";
    inputRadioBtn.value = radioValues[i];

    const labelRadioBtn = document.createElement("label");
    labelRadioBtn.htmlFor = radioIDs[i];
    labelRadioBtn.textContent = radioLabels[i];

    li.appendChild(inputRadioBtn);
    li.appendChild(labelRadioBtn);

    ul.appendChild(li);
}
fieldSet.appendChild(legend);
fieldSet.appendChild(ul);
formElement.appendChild(fieldSet);

// textArea
const textAreaPTag = document.createElement("p");
const textAreaLabel = document.createElement("label");
textAreaLabel.htmlFor = "life_meaning";
textAreaLabel.textContent = "What is the meaning of life?";

const textAreaElement = document.createElement("textarea");
textAreaElement.id = "life_meaning";
textAreaElement.name = "life_meaning";
textAreaElement.rows = 5;
textAreaElement.cols = 50;
textAreaElement.placeHolder = "Enter the correct answer here....";

textAreaPTag.appendChild(textAreaLabel);
textAreaPTag.appendChild(textAreaElement);
formElement.appendChild(textAreaPTag);

// Form Submit Button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Send";

formElement.appendChild(submitButton);