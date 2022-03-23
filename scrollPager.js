function scrollPager(option = {
  offset: 150, // 위치 조정값,
  showNum: false, // 숫자 표시
}) {

  // pager 생성
  createPager(option.showNum);

  const pager = document.querySelectorAll('.side-pager > ul > li');
  pager[0].classList.add('on');
  // pager 생성
  // createPager(pages, pageNum);

  // 페이지 스크롤 감지
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const pages = document.querySelectorAll('.page');
    // console.log(scrollY)
    offset = option.offset;

    pages.forEach(function (page, i) {
      if (scrollY >= page.offsetTop - offset) {
        pager.forEach(function (p) {
          p.classList.remove('on');
        })
        pager[i].classList.add('on');
      }
    })
  }); // scroll event
} // scrollPager


// pager 초기화
function createPager(showNum) {
  // 위치 초기화
  history.scrollRestoration = 'manual';

  // page 개수
  const pages = document.querySelectorAll('.page');
  const pageNum = document.querySelectorAll('.page').length;
  const sidePagerEl = document.querySelector('.side-pager');
  const ul = document.createElement('ul');

  pages.forEach((page, i) => {
    // console.log(pageId);
    const li = `
    <li>
      <a href="#${page.id}">${showNum ? i+1: ''}</a>
    </li>
  `
    ul.innerHTML += li;
  })

  sidePagerEl.appendChild(ul)
}