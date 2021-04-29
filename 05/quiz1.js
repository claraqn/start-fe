const todayPhoto = [
  {
    url: 'http://media.daum.net/photo/2841',
    img: 'http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg',
    title: '&quot;뜨면 끝장&quot; 최강 공격헬기 성능이 설마',
    id: '20120516082207657',
  },
  {
    url: 'http://media.daum.net/entertain/photo/gallery/?gid=100320',
    img: 'http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg',
    title: '&#39;오늘만&#39; 필리핀 새댁 5개국어 능통 엄친딸',
    id: '20120516091011626',
  },
  {
    url: 'http://media.daum.net/photo/4010',
    img: 'http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg',
    title: '[북한 결혼식 풍경] 신랑·신부 &quot;행복합니다&quot;',
    id: '20120516092605081',
  },
  {
    url: 'http://sports.media.daum.net/general/gallery/gagsports/index.html',
    img: 'http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg',
    title: '&#39;내가 더 잘해&#39; 후보GK 경기 난입해 선방',
    id: '20120516100608409',
  },
  {
    url: 'http://sports.media.daum.net/general/gallery/0516ufc/index.html',
    img: 'http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg',
    title: '양동이의 하이킥에 타바레스 &#39;주춤&#39;',
    id: '20120516093313331',
  },
  {
    url: 'http://media.daum.net/entertain/photo/gallery/?gid=100539',
    img: 'http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg',
    title: '이승철 아내와 딸 사진 공개 &quot;사주에. .&quot;',
    id: '20120516093918544',
  },
  {
    url: 'http://media.daum.net/photo/3899',
    img: 'http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg',
    title: '생후 6개월에 프랑스로 입양됐던 아이가..',
    id: '20120516030614331',
  },
  {
    url: 'http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html',
    img: 'http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg',
    title: '&#39;교생&#39; 김연아, 스승의날에도 인기폭발',
    id: '20120516092003892',
  },
];

let page = 1;
const onceLook = 3; // 한번에 보일 개수
const totalPage = Math.ceil(todayPhoto.length / onceLook); // js 소숫점올리는 법 -> Math.ceil();

const $wrap = document.getElementById('wrap'); // $ 앞에 붙여주는 것 = DOM 형식의 변수라는 뜻
const $btnPrev = document.querySelector('.btn-prev');
const $btnNext = document.querySelector('.btn-next');
const $page = document.querySelector('.page');
const $totalPage = document.querySelector('.total-page');

console.log(todayPhoto[0].title);

function prev() {
  if (page === 1) return; // page가 0이 되는것을 막는 것
  // eslint-disable-next-line no-plusplus
  page--;
  // eslint-disable-next-line no-use-before-define
  printImg(page);
}

function next() {
  if (page === totalPage) return;
  // eslint-disable-next-line no-plusplus
  page++;
  // eslint-disable-next-line no-use-before-define
  printImg(page);
}

$btnPrev.addEventListener('click', prev);
$btnNext.addEventListener('click', next);

// eslint-disable-next-line no-shadow
function getStartIndex(page) {
  // if(page === 1) return 0;
  // else if(page === 2) return 3;
  // else if(page === 3) return 6;
  const startIndex = (page - 1) * onceLook;
  return startIndex;
}

// eslint-disable-next-line no-shadow
function printImg(page) {
  const startIndex = getStartIndex(page);
  let str = '';
  // eslint-disable-next-line no-plusplus
  for (let i = startIndex; i < startIndex + onceLook; i++) {
    // 한 페이지에 보여질,,
    if (todayPhoto[i]) {
      str += `<img src="${todayPhoto[i].img}"> `;
      // console.log(todayPhoto[i].title);
    }
  }

  $wrap.innerHTML = str;
  $page.innerHTML = page;
  $totalPage.innerHTML = totalPage;
}

printImg(page);

// // 1 페이지 = 0,1,2
// function printPage1(){

// }
// // 2 페이지 = 3,4,5
// function printPage2(){

//     var str = '';
//     for(var i=3; i<3+onceLook; i++){ // 한 페이지에 보여질,,

//         str += '<img src="'+todayPhoto[i].img+'"> ';
//     }

//     $wrap.innerHTML = str;
//     $page.innerHTML = page;
//     $totalPage.innerHTML = totalPage;

// }
// // 3페이지 = 6,7,8
// function printPage3(){

//     var str = '';
//     for(var i=6; i<6+onceLook; i++){ // 한 페이지에 보여질,,
//         if(todayPhoto[i]){
//             str += '<img src="'+todayPhoto[i].img+'"> ';
//         }
//     }

//     $wrap.innerHTML = str;
//     $page.innerHTML = page;
//     $totalPage.innerHTML = totalPage;

// }
