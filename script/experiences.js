function addExperience() {
  togglePopup("addexperience_popup");
  const title = document.getElementById("experienceTitle").value;
  if (title != "") {
    add();
  }
}

const add = () => {
  const desc = document.getElementById("experienceDesc").value;
  const img = document.getElementById("imageSrc").value;

  const allRows = document.querySelectorAll(".row");
  const existingRow = allRows.length;
  const newRowNr = allRows.length + 1;

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
                src="` +
      img +
      `"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <p class="card-text">` +
      desc +
      `</p>
            </div>
            <div class="social_bar">
          <img
            class="card-icon"
            src="../images/icons/trash.svg"
            alt="Delete experience"
            onclick="deleteExperience('01')"
          />
          <p class="like_count" id="like01">0</p>
          <img
            class="card-icon"
            src="../images/icons/heart.svg"
            alt="Like post"
            id="heart01"
            alt=""
            onclick="like(01)"
          />
          <p class="comment_count">0</p>
          <img
            class="card-icon"
            src="../images/icons/chat-left-quote.svg"
            alt=""
          />
          <img
            class="card-icon"
            src="../images/icons/share.svg"
            alt="Share to facebook"
            onclick="share()"
          />
        </div>
        </div>
      </div>    
    </div>`;
  } else {
    rowDiv.innerHTML +=
      `<div class="col-sm">
      <div class="card" style="width: 18rem">
          <img
              src="` +
      img +
      `""
              class="card-img-top"
              alt="..."
          />
          <div class="card-body">
              <p class="card-text">` +
      desc +
      `</p>
          </div>
          <div class="social_bar">
          <img
            class="card-icon"
            src="../images/icons/trash.svg"
            alt="Delete experience"
            onclick="deleteExperience('01')"
          />
          <p class="like_count" id="like01">0</p>
          <img
            class="card-icon"
            src="../images/icons/heart.svg"
            alt="Like post"
            id="heart01"
            alt=""
            onclick="like(01)"
          />
          <p class="comment_count">0</p>
          <img
            class="card-icon"
            src="../images/icons/chat-left-quote.svg"
            alt=""
          />
          <img
            class="card-icon"
            src="../images/icons/share.svg"
            alt="Share to facebook"
            onclick="share()"
          />
        </div>
      </div>
    </div>`;
  }
};

const createCollection = () => {
  togglePopup("create_collection_popup");
};
const deleteExperience = (nr) => {
  console.log("card" + nr);
  const card = document.getElementById("card" + nr);

  card.parentNode.removeChild(card);
};
