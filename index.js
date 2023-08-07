AOS.init();

const swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  // 3초마다 자동으로 슬라이드가 넘어갑니다. 1초 = 1000
  autoplay: {
    delay: 3000,
  },
  loopAdditionalSlides: 1,
});

//] 차트

const asiaCtx = document.getElementById('asiaChart');

const data = {
  labels: [
    'Japan',
    'China',
    'Vietnam',
    'Thailand',
    'Taiwan',
    'Philippines',
    'Hong Kong',
  ],
  datasets: [
    {
      label: '2023년 국민 해외관광객 (Asia)',
      data: [3128470, 4346567, 1602183, 538766, 673841, 112371, 265074],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(114, 212, 125)',
        'rgb(54, 116, 135)',
        'rgb(54, 162, 25)',
        'rgb(74, 162, 235)',
      ],
    },
  ],
};

const config = {
  type: 'bar',
  data,
  options: {
    indexAxis: 'y',
  },
};

new Chart(asiaCtx, config);

const chartWrapper = document.querySelector('.chartWrapper');
const asia = document.querySelector('.asia');
// const europe = document.querySelector(".europe");
// const america = document.querySelector(".america");
// const oceania = document.querySelector(".oceania");
// const africa = document.querySelector(".africa");

const continentList = ['europe', 'america', 'oceania', 'africa'];

function showChartHandler() {
  chartWrapper.classList.toggle('show');
}

asia.addEventListener('click', showChartHandler);

// # 배열 초기값은 웬만하면 0부터 시작 !
for (let i = 0; i < continentList.length; i++) {
  document
    .querySelector(`.${continentList[i]}`)
    .addEventListener('click', () => {
      document
        .getElementById(`${continentList[i]}Iframe`)
        .classList.toggle('show');
    });
}

const icon = document.querySelector('.icon');
const msg = document.querySelector('.hiddenMsg');

icon.addEventListener('click', () => {
  msg.classList.toggle('show');
});
