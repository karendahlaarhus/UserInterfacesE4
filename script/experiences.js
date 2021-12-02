function add() {
  addExperience();
  togglePopup("addexperience_popup");
}

const addExperience = () => {
  const desc = document.getElementById("experienceDesc").value;

  const allRows = document.querySelectorAll(".row");
  const existingRow = allRows.length;
  const newRowNr = rows.length + 1;

  const myExperiencesDiv = document.getElementById("myexperiences_posts");
  const rowDiv = document.getElementById("row" + existingRow);

  const experiences = document.querySelectorAll(".card");

  if (experiences.length % 4 == 0) {
    myExperiencesDiv.innerHTML +=
      `
    <div class="row" id="row` +
      newRowNr +
      `">
      <div class="col-sm">
        <div class="card" style="width: 18rem">
            <img
                src="../images/experience_images/bali.png"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <p class="card-text">` +
      desc +
      `</p>
            </div>
        </div>
      </div>    
    </div>`;
  } else {
    rowDiv.innerHTML +=
      `<div class="col-sm">
      <div class="card" style="width: 18rem">
          <img
              src="../images/experience_images/bali.png"
              class="card-img-top"
              alt="..."
          />
          <div class="card-body">
              <p class="card-text">` +
      desc +
      `</p>
          </div>
      </div>
    </div>`;
  }
};
const deleteExperience = () => {};
