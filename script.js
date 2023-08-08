const form = document.getElementById("form"),
    modal = document.getElementById("modal"),
    overlay = document.getElementById("overlay"),
    emailField = document.getElementById("email"),
    nameField = document.getElementById("name"),
    firstName = document.getElementById("firstName"),
    accountType = document.getElementById("accountType"),
    closeButton = document.getElementById("close"),
    submitButton = document.getElementById("submit");

form.addEventListener('submit', (e) => {
    openModal();
    e.preventDefault();
});

overlay.addEventListener('click', closeModal);
closeButton.addEventListener('click', closeModal);

nameField.addEventListener('blur', trimName);
emailField.addEventListener('blur', trimEmail);

function openModal() {
    updateModalText();
    showModal();
}
function closeModal() {
    resetForm();
    hideModal();
    clearModalText();
}

function hideModal() {
    modal.classList.remove("active");
}
function showModal() {
    modal.classList.add("active");
}

function updateModalText() {
    firstName.innerHTML = parseFirstName();
    accountType.innerHTML = parseAccountType();
}
function clearModalText() {
    firstName.innerHTML = "";
    accountType.innerHTML = "";
}

function parseFirstName() {
    return nameField.value.split(" ")[0];
}
function parseAccountType() {
    let accountType = emailField.value.substring(emailField.value.indexOf("@") + 1, emailField.value.length);
    return accountType.indexOf('.') == -1 ? accountType : accountType.substring(0, accountType.indexOf('.'));
}

function resetForm() {
    form.reset();
}
function trimName() {
    nameField.value = nameField.value.trim();
}
function trimEmail() {
    emailField.value = emailField.value.trim();
}