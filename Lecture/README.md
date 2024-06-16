# React-Native

---

> ## 리액트 네이티브 기본 컴포넌트 분석

- Style은 Flex를 기반으로 쓰며, CSS와는 살짝 다르다.
- React를 그대로 가져와 쓸 수 없다.
- Redux와 같은 비지니스 로직은 재사용할 수 있다.

## App.tsx

- 인라인 스타일을 사용하는 경우는 변수를 사용하는것
- `%`를 사용할 수 있으나, 기본적으로 px이 아닌 dip를 단위로 사용한다.
  - dp는 고정된 값이 아니다.
- StyleSheet를 사용할 경우 모든 변수는 스네이크가 아닌 카멜케이스를 사용

## 스타일

- React-Native에서의 CSS는 공식문서가 따로 없으니, 직접 쳐봐야 알 수 있다.


## React-Native Tip

- View와 Text를 가장 많이 사용한다.
- View는 div와 같은 역할, Text는 span과 비슷한 역할이라고 하지만, 실제로는 차이가 크다
  - 문자와 같은 텍스트는 Text로 감싸주어야한다.
- `SafeAreaView`는 폰 기기의 죽은 공간 처리를 해주어 가려지는 부분이 없도록 해준다.
- `StatusBar`는 배터리를 표시해주는 그런 부분의 디자인을 할 때 사용한다.
  - StatusBar의 높이가 기기마다 다르기 때문에 `react-native-status-bar-height` 라이브러리를 사용하여 높이를 구한다.
- ScrollView는 콘텐츠가 넘칠 경우 ScrollView를 사용해야 스크롤이 생긴다.

---

> ## 데브메뉴와 Flipper


