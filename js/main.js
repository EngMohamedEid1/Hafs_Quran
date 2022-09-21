// change language

iconGroup.addEventListener("click", (e) => {
  dropdown.classList.toggle("active");
});

// navbar dropdown

var fa = document.getElementById("faBars");
console.log(fa);
fa.addEventListener("click", (e) => {
  navDropdown.classList.toggle("active");
});

// blog gallery

let dataCategory = document.querySelectorAll(" .blog-type div");

let boxes = document.querySelectorAll(" .content .box");

dataCategory.forEach((div) => {
  div.addEventListener("click", manageActive);
  div.addEventListener("click", showCategoryItems);
});

function manageActive(e) {
  dataCategory.forEach((el) => {
    el.classList.remove("active");
    e.target.classList.add("active");
  });
}

function showCategoryItems(e) {
  boxes.forEach((box) => {
    box.style.display = "none";
    document.querySelectorAll(e.target.dataset.cat).forEach((elemento) => {
      elemento.style.display = "block";
    });
  });
}

blogBtn.addEventListener("click", (e) => {
  boxes.forEach((box) => {
    box.style.display = "block";
  });
});

// slider

const arrimg = [
  ` <img
            style="z-index: 55"
            src="images/christopher-haehne.fw_.png"
            class="img-slider"
          />`,
  `<img src="images/andreas-764.png" class="img-slider" />`,
  `<img src="images/Group 4733 (1)/Group 4733.jpg" class="img-slider" />`,
  `<img src="images/thomas-pieber-freiraeume-2019.png" class="img-slider" />`,
  `<img src="images/Group 4733 (1)/Group 4733.jpg" class="img-slider" />`,
];

let i = 0;
sliderContainer.innerHTML += arrimg[i];
pre.setAttribute("disabled", "disabled");
sliderContainer.innerHTML += `  <p>0${i + 1} / 0 ${arrimg.length}</p>  `;

next.addEventListener("click", (eo) => {
  pre.removeAttribute("disabled");

  i++;
  sliderContainer.innerHTML += arrimg[i];
  sliderContainer.innerHTML += `  <p>0${i + 1} / 0${arrimg.length}</p>  `;

  if (i + 1 == arrimg.length) {
    next.setAttribute("disabled", "disabled");
  }

  parentNumbers
    .getElementsByClassName("active-num")[0]
    .classList.remove("active-num");
  parentNumbers.getElementsByTagName("button")[i].classList.add("active-num");
});

pre.addEventListener("click", (eo) => {
  next.removeAttribute("disabled");
  i--;

  sliderContainer.innerHTML += arrimg[i];
  sliderContainer.innerHTML += `  <p>0${i + 1} / 0${arrimg.length}</p>  `;

  if (i == 0) {
    pre.setAttribute("disabled", "disabled");
  }

  parentNumbers
    .getElementsByClassName("active-num")[0]
    .classList.remove("active-num");
  parentNumbers.getElementsByTagName("button")[i].classList.add("active-num");
});

const allButtons = document.querySelectorAll(".mynumber");
const parentNumbers = document.getElementsByClassName("numbers")[0];

allButtons.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    // remove the current "active-num" => add "active-num" to target element
    parentNumbers
      .getElementsByClassName("active-num")[0]
      .classList.remove("active-num");
    item.classList.add("active-num");

    slidercontainer.innerHTML += arrimg[index];
    slidercontainer.innerHTML += `  <p>0${index + 1} / 0 ${
      arrimg.length
    }</p>  `;

    i = index;

    // last index
    if (index == arrimg.length - 1) {
      next.setAttribute("disabled", "disabled");
      pre.removeAttribute("disabled");

      // first index
    } else if (index == 0) {
      next.removeAttribute("disabled");
      pre.setAttribute("disabled", "disabled");
    } else {
      next.removeAttribute("disabled");
      pre.removeAttribute("disabled");
    }
  });
});
