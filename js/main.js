const myImages = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
];

const imgSlider = document.querySelector(".images__slider");
const btnNext = document.querySelector(".btn-next__slider");
const btnPrev = document.querySelector(".btn-prev__slider");
let firstSlide = 0;

function showSlides(placeSlider) {
  if (firstSlide > myImages.length - 1) {
    firstSlide = 0;
  }
  let countSlide = 0;
  imgSlider.innerHTML = null;
  let numberSlide = firstSlide;
  for (let i of myImages) {
    if (countSlide < 5) {
      if (numberSlide > myImages.length - 1) {
        numberSlide = 0;
        const img = `<img onclick="showImg(this)" class='img__slider' src='${myImages[numberSlide]}' alt='#' loading='lazy' />`;
        imgSlider.insertAdjacentHTML("beforeend", img);
        numberSlide = numberSlide + 1;
      } else {
        const img = `<img onclick="showImg(this)" class='img__slider' src='${myImages[numberSlide]}' alt='#' loading='lazy' />`;
        imgSlider.insertAdjacentHTML("beforeend", img);
        numberSlide = numberSlide + 1;
      }
      countSlide = countSlide + 1;
    }
  }
  console.log(numberSlide);
}
showSlides();

btnNext.addEventListener("click", function () {
  firstSlide = firstSlide + 1;
  showSlides();
});

btnPrev.addEventListener("click", function () {
  if (firstSlide === 0) {
    firstSlide = myImages.length - 1;
  } else {
    firstSlide = firstSlide - 1;
  }
  showSlides();
  console.log(firstSlide);
});

const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    const fileType = file.type;

    if (fileType.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const imageUrl = event.target.result;
        myImages.push(imageUrl);
        console.log("Массив с фотографиями:", myImages);
      };

      reader.readAsDataURL(file);

      firstSlide = 0;
      showSlides();
    } else {
      alert("Пожалуйста, выберите изображение.");
    }
  }
});

function showImg(elem) {
  const div = document.createElement("div");
  div.classList.add("container-img");
  div.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("container-img") ||
      e.target.classList.contains("btn-close")
    ) {
      div.remove();
    }
  });

  const img = document.createElement("img");
  img.src = elem.src;

  const btnClose = document.createElement("div");
  btnClose.classList.add("btn-close");
  btnClose.textContent = "x";

  div.append(img, btnClose);
  document.body.append(div);

  console.log(elem.src);
}
