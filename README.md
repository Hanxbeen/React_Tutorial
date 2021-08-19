# React_Tutorial
React tutorial for beginner

벨로퍼트와 함께하는 모던 리액트
https://react.vlpt.us/

## 공부내용 정리
- Node.js : Webpack과 Babel과 같은 모듈화, 트랜스 파일링을 위한 도구들이 자바스크립트 런타임인 Node.js를 기반으로 만들어져 있기때문에 설치해야한다
- Yarn : npm보다 조금 더 개선된 버전의 Package Manager이며, 프로젝트에서 사용되는 라이브러리를 설치하고 해당 라이브러리들의 버전 관리를 하게 될 때 사용한다. 우리가 Yarn을 사용하는 이유는 "더 나은 속도", "더 나은 캐싱 시스템"을 사용하기 위함이다.


$ npx create-react-app begin-react
$ cd begin-react
$ yarn start


### Babel이란?
자바스크립트 문법 확장해주는 도구
아직 지원하지 않는 최신 문법을 정식 자바스크립트로 변환해준다.
### JSX 규칙
태그는 꼭 닫혀야 한다.
두개 이상의 태그가 존재한다면 꼭 하나의 태그로 감싸져야 한다.
### Fragment란?
단순히 감싸기 용으로 태그를 이용해야 할 때 사용하면된다.
형태 : <> </>
### Javascript 값 사용할 때에는 {}를 사용한다.
인라인스타일의 경우 style의 네이밍은 camelCase로 사용해야한다.
css파일에서 불어올때는 'className=' 으로 설정해야한다.


### JSX란?
리액트 컴포넌트에서 xml 형식의 값을 반환해는 것