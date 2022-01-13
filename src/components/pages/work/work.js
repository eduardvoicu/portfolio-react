import React from "react";
import "./Work.css";
import Work1 from "./assets";
import Work2 from "./assets";
import Work3 from "./assets";
import Work4 from "./assets";
import Work5 from "./assets";
import Work6 from "./assets";

export default function Work() {
  return (
    <div class="mainCont">
      <section class="work" id="work">
        <h1>Work</h1>
        <div class="workCont">
          <div class="workItem">
            <p class="workTitle">
              <span class="projTitle">Project Title: Locomotive</span>
            </p>
            <img class="work1" src={Work1} />
            <p>
              GitHub Repo:{" "}
              <a
                target="blank"
                href="https://github.com/krysmit/Train-Accessibility-Project"
              >
                Click here!
              </a>
            </p>
            <p>
              Deployed App:{" "}
              <a target="blank" href="https://krysmit.github.io/Train-Accessibility-Project/">
                Click here!
              </a>
            </p>
          </div>
          <div class="workItem1">
            <p class="workTitle">
              <span class="projTitle"></span>
            </p>
            <img class="work2" src={Work2} />
            <p>
              GitHub Repo:{" "}
              <a
                target="blank"
                href=""
              >
                Click here!
              </a>
            </p>
            <p>
              Deployed App:{" "}
              <a
                target="blank"
                href=""
              >
                Click here!
              </a>
            </p>
          </div>
          <div class="workItem1">
            <p class="workTitle">
              <span class="projTitle"></span>
            </p>
            <img class="work3" src={Work3} />
            <p>
              GitHub Repo:{" "}
              <a
                target="blank"
                href=""
              >
                Click here!
              </a>
            </p>
            <p>
              Deployed App:{" "}
              <a
                target="blank"
                href=""
              >
                Click here!
              </a>
            </p>
          </div>
        </div>
          </section>
    </div>
  );
}