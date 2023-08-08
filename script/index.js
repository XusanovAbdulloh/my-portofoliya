const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((elem) => observer.observe(elem));
  

  const cursor = document.getElementById("cursor");
  
  window.addEventListener("mousemove", (e) => {
    cursor.style.opacity = 1;
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
  });
  
  document.addEventListener("mouseout", () => {
    cursor.style.opacity = 0;
  });
  

  let lastScrollTop = 0;
  let navBar = document.querySelector("nav");
  
  window.addEventListener("scroll", (e) => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navBar.style.top = "-8rem";
    } else {
      navBar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });
  
  const project_container = document.querySelector("#carousel-wrapper");
  const demo_container = document.querySelector("#demo-code");
  const prev = document.querySelector("#previous-option");
  const next = document.querySelector("#next-option");
  const project_title = document.querySelector("#current-option-title");
  const project_text = document.querySelector("#current-option-text");
  let project_img = document.querySelector("#image");
  const demo_link = document.querySelector("#demo");
  const code_link = document.querySelector("#code");
  
  project_container.addEventListener("click", () => {
    demo_container.classList.toggle("open");
  });

  
  let project_titles = ["Ebay clone", "Olx clone", "My Todo list"];
  let project_texts = [
    "Login is not working",
    "Login is not working",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec risus convallis, fermentum felis quis.\n Vestibulum in fermentum ante. Cras dolor ligula, dapibus nec tellus ut."
  ];
  let img_srcs = [
    "../img/ebay.jpg",
    "../img/olx.jpg",
    "../img/to.jpg"
  ];
  let demo_links = ["https://my-ebay-clone.netlify.app/", "https://dulcet-paletas-7a585a.netlify.app/", "https://tubular-malabi-6fcea4.netlify.app/"];
  let code_links = ["https://github.com/XusanovAbdulloh/ebay", "https://github.com/XusanovAbdulloh/olx", "https://github.com/XusanovAbdulloh/Todo-list"];
  let index = 0;
  
  function changeText(element, text) {
    element.innerText = text;
  }
  
  function changeAttribute(element, attr, text) {
    element.setAttribute(attr, text);
  }
  function changeProject(indexChange) {
    index += indexChange;
    if (index < 0) {
      index = project_titles.length - 1;
    } else if (index >= project_titles.length) {
      index = 0;
    }
    changeText(project_title, project_titles[index]);
    changeText(project_text, project_texts[index]);
    changeAttribute(project_img, "src", img_srcs[index]);
    changeAttribute(demo_link, "href", demo_links[index]);
    changeAttribute(code_link, "href", code_links[index]);
  }
  
  prev.addEventListener("click", (e) => {
    e.stopPropagation();
    animatePrev();
    setTimeout(function () {
      changeProject(-1);
    }, 200);
  });
  next.addEventListener("click", (e) => {
    e.stopPropagation();
    animateNext();
    setTimeout(function () {
      changeProject(1);
    }, 200);
  });
  
  function animatePrev() {
    project_title.style.animation = "prevAnimation 1s ease-out";
    project_text.style.animation = "prevAnimation 1s ease-out";
    project_img.style.animation = "prevAnimation .75s ease-out";
    setTimeout(function () {
      project_title.style.animation = "";
      project_text.style.animation = "";
      project_img.style.animation = "";
    }, 1000);
  }
  
  function animateNext() {
    project_title.style.animation = "nextAnimation 1s ease-out";
    project_text.style.animation = "nextAnimation 1s ease-out";
    project_img.style.animation = "nextAnimation .75s ease-out";
    setTimeout(function () {
      project_title.style.animation = "";
      project_text.style.animation = "";
      project_img.style.animation = "";
    }, 1000);
  }
  
  let x1 = 0;
  let y1 = 0;
  project_container.addEventListener("touchstart", function (e) {
    x1 = e.changedTouches[0].screenX;
    y1 = e.changedTouches[0].pageY;
  });
  
  project_container.addEventListener("touchend", function (e) {
    let x2 = e.changedTouches[0].screenX;
    let y2 = e.changedTouches[0].pageY;
  
    if (x1 - x2 > 50 && Math.abs(y1 - y2) < 30) {
      animateNext();
      setTimeout(function () {
        changeProject(1);
      }, 200);
    } else if (x1 - x2 < -50 && Math.abs(y1 - y2) < 30) {
      animatePrev();
      setTimeout(function () {
        changeProject(-1);
      }, 200);
    }
  });
  
  let input_areas = document.querySelectorAll("input");
  let form = document.getElementById("form");
  let textarea = document.getElementById("message");
  
  // Prevent default of behavior;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    for (let i = 0; i < input_areas.length - 1; i++) {
      input_areas[i].value = "";
      textarea.value = "";
      let label = input_areas[i].previousElementSibling;
      label.classList.remove("onfocus");
    }
  });
  ;
  for (let i = 0; i < input_areas.length; i++) {
    onFocus(input_areas[i]);
    onBlur(input_areas[i]);
  }

  
  function onFocus(elem) {
 
    elem.addEventListener("focus", () => {
      let label = elem.previousElementSibling;
      label.classList.add("onfocus");
    });
  }
  function onBlur(elem) {
    elem.addEventListener("blur", () => {
      if (elem.value == "") {
        let label = elem.previousElementSibling;
        label.classList.remove("onfocus");
      }
    });
  }
  