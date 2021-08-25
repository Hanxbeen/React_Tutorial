import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.admin === "true"; // 쿼리의 파싱결과값은 문자열입니다.
  return (
    <div>
      <h1>메인</h1>
      <p>리액트 라우터로 메인페이지 이동 테스트.</p>
      {detail && (
        <p>관리자 로그인 시에만 보여줄 정보들.. 어쩌고 저쩌고 룰루랄랄</p>
      )}
    </div>
  );
};

export default About;
