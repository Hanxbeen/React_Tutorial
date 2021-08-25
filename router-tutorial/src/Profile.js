import React from "react";

// 프로필에서 사용할 데이터
const profileData = {
  admin: {
    name: "인사담당자",
    description: "ERP 전반에 대한 관리 책임자",
  },
  laborer: {
    name: "일용직 근로자",
    description: "공장 일용 근로자",
  },
//   undefined: {
//     name: "No one",
//     description: "no one",
//   },
};

// 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조할 예정
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
