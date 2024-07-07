// Function to update content and active class
function updateContent(linkId, content, containerHeight) {
  document.getElementById("matter").innerHTML = content;
  document.getElementById("container-2").style.height = containerHeight;
  document.querySelectorAll("nav h4").forEach((link) => {
    link.classList.remove("Active");
  });
  document.getElementById(linkId).classList.add("Active");
}

const about = document
  .getElementById("ABOUTMELINK")
  .addEventListener("click", () => {
    const content = `
    <h1 class="heading">About me</h1>
    <hr class="Line" />
    <div id="about">

      <div class="about-paras">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis repellat dignissimos, tenetur deleniti ducimus, laboriosam autem iusto iste necessitatibus minus omnis sed? Exercitationem quis ab in enim? Reprehenderit, dolor earum!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis repellat dignissimos, tenetur deleniti ducimus, laboriosam autem iusto iste necessitatibus minus omnis sed? Exercitationem quis ab in enim? Reprehenderit, dolor earum!</p>
      </div>
      <h1 id="heading-whatiamdoing">What I am Doing!</h1>
      <div id="about-whatiamdoing">
        <div class="what-iamdoing-containers">
          <div class="whatiamdoing-tools">
            <img src="./assets/images/brain main.png" alt="">
            <h2>Machine learning</h2>
          </div>
          <div class="whatiamdoing-tools">
            <img src="./assets/images/icons8-java-100.png" alt="">
            <h2>Java full stack</h2>
          </div>
        </div>
        <div class="what-iamdoing-containers">
          <div class="whatiamdoing-tools">
            <img src="./assets/images/dev.png" alt="">
            <h2>web development</h2>
          </div>
          <div class="whatiamdoing-tools">
            <img src="./assets/images/dataanal.png" alt="">
            <h2>data analysis</h2>
          </div>
        </div>
      <h1 id="about-mycodingplatforms-heading">My Coding platforms</h1>
      <div id="about-codingContainer">
          <div class="codeingplatforms">
          <a href=""><img src="./assets/images/hackerrank.png" alt=""></a>
          <h2>hackerrank</h2>
        </div>
        <div class="codeingplatforms">
          <a href=""><img src="./assets/images/leetcode.png" alt=""></a>
          <h2>LeetCode</h2>
        </div>
        <div class="codeingplatforms">
          <a href=""><img src="./assets/images/codecheif.png" alt=""></a>
          <h2>CodeCheif</h2>
        </div>
      </div>
    </div>
    </div>`;
    updateContent("ABOUTMELINK", content, "1800px");
    applyMediaQueryStyles();
  });

const resume = document
  .getElementById("RESUME")
  .addEventListener("click", () => {
    const content = `<div id="resume">
    <h1 class="heading">Resume</h1>
    <hr class="Line" />
  </div>
  <div class="education">
    <div class="imgandheading">
      <img src="./assets/images/education.svg" alt="" />
      <h2>Education</h2>
    </div>
    <hr class="lines" />
  </div>
  <div class="dotsandmatter">
    <img src="/assets/images/dot.png" alt="" />
    <div class="dotmattera">
      <h2>University School Of The Arts</h2>
      <h3>2007 — 2008</h3>
      <h5>
        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
        delenit atque corrupti, quos dolores et quas molestias exceptur.
      </h5>
    </div>
  </div>

  <div class="dotsandmatter">
    <img src="/assets/images/dot.png" alt="" />
    <div class="dotmattera">
      <h2>University School Of The Arts</h2>
      <h3>2007 — 2008</h3>
      <h5>
        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
        delenit atque corrupti, quos dolores et quas molestias exceptur.
      </h5>
    </div>
  </div>

  <div class="dotsandmatter">
    <img src="/assets/images/dot.png" alt="" />
    <div class="dotmattera">
      <h2>University School Of The Arts</h2>
      <h3>2007 — 2008</h3>
      <h5>
        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
        delenit atque corrupti, quos dolores et quas molestias exceptur.
      </h5>
    </div>
  </div>

  <div class="experience">
    <div class="imgandheadingexp">
      <img src="./assets/images/education.svg" alt="" />
      <h2>Education</h2>
    </div>
    <hr class="lines" />
  </div>
  <div class="dotsandmatterexp">
    <img src="./assets/images/dot.png" alt="" />
    <div class="dotmatteraexp">
      <h2>University School Of The Arts</h2>
      <h3>2007 — 2008</h3>
      <h5>
        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
        delenit atque corrupti, quos dolores et quas molestias exceptur.
      </h5>
    </div>
  </div>

  <div class="dotsandmatterexp">
    <img src="./assets/images/dot.png" alt="" />
    <div class="dotmatteraexp">
      <h2>University School Of The Arts</h2>
      <h3>2007 — 2008</h3>
      <h5>
        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
        delenit atque corrupti, quos dolores et quas molestias exceptur.
      </h5>
    </div>
  </div>

  <div class="dotsandmatterexp">
    <img src="./assets/images/dot.png" alt="" />
    <div class="dotmatteraexp">
      <h2>University School Of The Arts</h2>
      <h3>2007 — 2008</h3>
      <h5>
        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
        delenit atque corrupti, quos dolores et quas molestias exceptur.
      </h5>
    </div>
  </div>
  <h1 id="skillshead">My Skills</h1>
  <div id="skills">
    <div class="Languages">
      <h1 id="Languagesheading">Languages</h1>
      <div class="ContainerDev">
        <div class="devcontainers">
          <img src="./assets/images/c.png" alt="" />
          <img src="./assets/images/r.png" alt="" />
          <img src="./assets/images/icons8-java-100.png" alt="" />
        </div>
        <div class="devcontainers">
          <img src="./assets/images/js.png" alt="" />
          <img src="./assets/images/mysql.png" alt="" />
          <img src="./assets/images/mongodb.png" alt="" />
        </div>

        <div class="devcontainers">
          <img src="./assets/images/python.png" alt="" />
        </div>
      </div>
    </div>
    <div class="development">
      <h1 id="developmentheading">Development</h1>
      <div class="ContainerDev">
        <div class="devcontainers">
          <img src="./assets/images/html.png" alt="" />
          <img src="./assets/images/css.png" alt="" />
          <img src="./assets/images/mern.png" alt="" />
        </div>
        <div class="devcontainers">
          <img src="./assets/images/pytorch.png" alt="" />
          <img src="./assets/images/django.png" alt="" />
          <img src="./assets/images/flask.png" alt="" />
        </div>

        <div class="devcontainers">
          <img src="./assets/images/git.png" alt="" />
          <img src="./assets/images/docker.png" alt="" />
          <img src="./assets/images/spring.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <button class="cv" type="button">DOWNLOAD CV</button>`;
    updateContent("RESUME", content, "1500px");
    applyMediaQueryStyles();
  });

const projects = document
  .getElementById("PROJECTS")
  .addEventListener("click", () => {
    const content = `<div id="projects">
    <h1 class="heading">Projects</h1>
    <hr class="Line" />
    <div id="typesofprojects">
      <p class="types">ALL</p>
      <p class="types">Web Applications</p>
      <p class="types">Machine Learning</p>
    </div>
    <div class="projectscontainer">
      <div class="project">COMING SOON...</div>
      <div class="project">COMING SOON...</div>
      <div class="project">COMING SOON...</div>
    </div>
    </div>
    </div>
   
  </div>`;
    updateContent("PROJECTS", content, "950px");
    applyMediaQueryStyles();
  });

const contact = document
  .getElementById("CONTACT")
  .addEventListener("click", () => {
    const content = `<div id="Contact">
    <h1 class="heading">Contact</h1>
    <hr class="Line" />
    <div class="mapContainer">
      <iframe
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7614.737403452289!2d78.53292052928852!3d17.394084795984675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719875497609!5m2!1sen!2sin"
        width="930"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div id="Contactus">
    <h1 id="contactheading">Contact Form</h1>
    <form action="">
      <input type="text" placeholder="Full name" name="" id="">
      <input type="email" placeholder="Email" name="" id="">
      <textarea name="" placeholder="Message" rows="10" col="10" id=""></textarea>
      <input type="submit" id="button" value="Send Message">
    </form>
  </div>`;
    updateContent("CONTACT", content, "1300px");
    applyMediaQueryStyles();
  });

document.getElementById("container-1").addEventListener("mouseover", () => {
  document.getElementById(
    "imgcontainer"
  ).innerHTML = `<img src="./assets/images/mypic.jpeg " style=" width:190px ; border-radius:20px ; " alt=""> `;
});

document.getElementById("container-1").addEventListener("mouseout", () => {
  document.getElementById(
    "imgcontainer"
  ).innerHTML = `<img src="./assets/images/my-avatar.png" alt="">`;
});

function applyMediaQueryStyles() {
  const container = document.getElementById("container-2");
  const activeLink = document.querySelector("nav h4.Active");
  if (window.matchMedia("(max-width: 1000px)").matches) {
    if (activeLink) {
      const activeLinkId = activeLink.id;
      switch (activeLinkId) {
        case "ABOUTMELINK":
          container.style.height = "1800px";
          break;
        case "RESUME":
          container.style.height = "2000px";
          break;
        case "PROJECTS":
          container.style.height = "1200px";
          break;
        case "CONTACT":
          container.style.height = "1200px";
          break;
        default:
          container.style.height = "2000px";
      }
    }
  }
}
