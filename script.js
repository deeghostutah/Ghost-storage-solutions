const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz7RUSRBlO3_YWsjWYrgvqVgCDZByDJnfq0hZ82UGaDRBfhguMdE2aAe4qq2ee0b4U/exec";

const projectForm = document.querySelector(".project-form");

if (projectForm) {
  projectForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(projectForm);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });

      alert("Thank you! Your project request has been submitted.");
      projectForm.reset();
    } catch (error) {
      alert("Something went wrong. Please call or email us directly.");
    }
  });
}