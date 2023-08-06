AOS.init();

const swiper = new Swiper(".swiper-container", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // 3초마다 자동으로 슬라이드가 넘어갑니다. 1초 = 1000
  autoplay: {
    delay: 3000,
  },
  loopAdditionalSlides: 1,
});

//] asia 차트
const ctx = document.getElementById("asiaChart");

const data = {
  labels: [
    "Japan",
    "China",
    "Vietnam",
    "Thailand",
    "Taiwan",
    "Philippines",
    "Hong Kong",
  ],
  datasets: [
    {
      label: "2023년 국민 해외관광객",
      data: [3128470, 4346567, 1602183, 538766, 673841, 112371, 265074],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
        "rgb(54, 162, 235)",
        "rgb(54, 162, 235)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
};

const config = {
  type: "bar",
  data,
  options: {
    indexAxis: "y",
  },
};

new Chart(ctx, config);

//]

//++ aisa 차트 생성 함수
const chartWrapper = document.querySelector(".chartWrapper");
const asia = document.querySelector(".asia");

function showChartHandler() {
  chartWrapper.classList.toggle("show");
}

// title.style.pointerEvents = "none";

// asia 클릭
asia.addEventListener("click", showChartHandler);
