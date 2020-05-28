// Add your code here
const documentBody = document.querySelector("body");

function submitData(name, email){
  let formData = {
    name: name,
    email: email
  };

  let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configurationObject)
  .then(response => response.json())
  .then(object => addIdToDom(object))
  .catch(error => renderError(error));
}

function addIdToDom(object){
  console.log(object);
  let idList = document.querySelector("ul");
  if (idList == undefined) {
    idList = document.createElement("ul");
    documentBody.appendChild(idList);
  }

  const newId = document.createElement("li");
  newId.innerHTML = object.id;
  idList.appendChild(newId);
}

function renderError(error){
  const errorP = document.createElement("p");
  errorP.innerHTML = error.message;
  documentBody.appendChild(errorP);
}
