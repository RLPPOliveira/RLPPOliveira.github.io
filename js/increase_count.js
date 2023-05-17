let section = document.querySelector("#about");
let stats = document.querySelectorAll(".about-info-project .about-info-title");
let start = false;

window.addEventListener("scroll", function() {
  if (window.scrollY >= section.offsetTop && !start) {
    stats.forEach(function(stat) {
      startCount(stat);
    });
    start = true;
  }
});

function startCount(el) {
  let max = parseInt(el.dataset.max);
  let currentValue = parseInt(el.textContent);
  let step = Math.ceil((max - currentValue) / 20);
  if (currentValue < max) {
    el.textContent = Math.min(currentValue + step, max) + "+";
    setTimeout(function() {
      startCount(el);
    }, 200);
  }
}
