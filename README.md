# Shopping Mall

## 목적

Shopping mall 프로젝트입니다. cloudinary를 이용하여 이미지를 관리하고 firebase를 사용하여 데이터관리와 네트워크통신 실습을 위한 프로젝트입니다.

## 주요 기능

### Home page

<img src="https://user-images.githubusercontent.com/92011224/226246803-491ca81a-93e3-49c4-b620-08e08609fe40.png" width="300px" height="230px"/>

### Product page

<img src="https://user-images.githubusercontent.com/92011224/226249408-f1bdb0d6-ae30-4181-9721-c58c3020d4a9.png" width="300px" height="230px"/>

### 장바구니 page

<img src="https://user-images.githubusercontent.com/92011224/226246940-61722d65-f0fd-4fa2-a5e6-6f1e33adcb05.png" width="300px" height="230px"/>

### 새로운 제품등록 page

<img src="https://user-images.githubusercontent.com/92011224/226246966-1a309254-b71f-4c9e-927c-6ed146de0ab1.png" width="300px" height="230px"/>

### 제품 상세정보 page

<img src="https://user-images.githubusercontent.com/92011224/226246993-5ff79f1a-f127-4e93-bd7f-a163a278166d.png" width="300px" height="230px"/>

##

1. 구글 계정을 이용하여 로그인 할 수 있습니다. 새로고침을 하여도 로그인, 로그아웃 상태는 유지됩니다.

![ezgif com-video-to-gif (6)](https://user-images.githubusercontent.com/92011224/226248217-0fa3d914-6d88-4882-8ce5-cfc4e9036a40.gif)

2. 제품 상세정보 페이지에서 옵션을 선택하고 제품을 장바구니에 추가할 수 있습니다. 장바구니에 추가된 제품은 수량 조절과 삭제가 가능합니다. 장바구니 page에서는 장바구니에 담긴 제품의 총 가격과 배송비를 보여줍니다.

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/92011224/226263815-0096ab4e-b20b-4d3a-9e7b-aa2c70bfe7fe.gif)

3. admin 구글 계정으로 로그인 시 새로운 제품등록 page에 접근할 수 있습니다. 새로운 제품등록 페이지에서 등록한 제품은 즉시 화면에 업로드 되고, firebase 실시간 데이터베이스에도 등록됩니다.
<left>
<img src="https://user-images.githubusercontent.com/92011224/226262515-40fb642c-34c3-4539-800d-de929e04fa95.gif"/>
</left>

4. admin 계정이 아닌 구글계정으로 새로운 제품등록 page에 접근 시 home 화면으로 redirect됩니다. 로그인하지 않은 사용자가 장바구니 page에 접근 시에도 home 화면으로 redirect됩니다.

## 배운 점

- cloudinary 서비스로 이미지 업로드
- firebase를 이용해서 구글로그인
- firebase 실시간 데이터베이스를 이용해서 데이터를 동적으로 읽고 쓰기
- javascript object.values()
- navigate로 컴포넌트 이동 시 props 전달 -> state, useLocation 활용
- page상에서 업데이트를 즉각적으로 처리 -> useQuery를 사용할 때 읽는 부분에서 얼마나 오랫동안 cache를 하고있는지 모르니까 useMutation을 써서 ‘products’ 캐시키를 가지고 있는 것들을 업데이트 해야한다.
- URL.createObjectURL(file)

## 어려운 점

- firebase 실시간 데이터베이스 활용 부분
- 변경 사항을 즉각적으로 페이지에 업데이트 하기 위해 react-query의 useMutation 사용
- 리팩토링 과정에서 사용한 커스텀 훅

## 더 공부할 점

- 주문하기에서 결제시스템을 추가하여 구현
- 리액트쿼리 invalidate

## Deploy

https://moominshop.netlify.app/
