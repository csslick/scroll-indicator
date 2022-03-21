# scroll pager.js
- 2022.03.21 By CSSLICK
- 콘텐츠 스크롤시 페이지 위치를 감지하는 pager UI

## How to use

```
<head>
  ...
  <link rel="stylesheet" href="./scrollPager.css">
  <script src="./scrollPager.js"></script>
</head>
```

```
<body>
  <!-- pager UI -->
  <nav class="side-pager">
  </nav>

  <!-- scroll contents, class='pager' -->
  <section id="s1" class='page'>
    <h1>section 1</h1>
  </section>
  <section id="s2" class='page'>
    <h2>section 2</h2>
  </section>
  <section id="s3" class='page'>
      <h2>section 3</h2>
  </section>

  <script>
    // Init scroll pager
    scrollPager();
  </script>
</body>
```


## Options
```
  scrollPager({
      offset: 150,  // 위치 조정값,
      showNum: false,  // 숫자 표시 유무
  );

```

## 디자인 수정
scrollPager.css를 수정하면 됨

