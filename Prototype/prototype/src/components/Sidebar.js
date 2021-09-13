import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      {/*, marginTop: "6vh"*/}
      <ProSidebar style={{ height: "100vh", width: "15vw" }}>
        <Menu iconShape="square">
          <MenuItem className="submenues">
            회사 관리 <Link to="/companyMng" />
          </MenuItem>
          <MenuItem className="submenues">
            육묘장 관리 <Link to="/raisingseedinghouse" />
          </MenuItem>
          <MenuItem className="submenues">
            생산창고 관리 <Link to="/warehouse" />
          </MenuItem>
          <SubMenu title="인사 관리" className="submenues">
            <MenuItem className="subitems">
              사용자 등록
              <Link to="/" />
            </MenuItem>
            <MenuItem className="subitems">일용직 등록</MenuItem>
          </SubMenu>
          <SubMenu title="품질 관리" className="submenues">
            <MenuItem className="subitems">품질 등록</MenuItem>
            <MenuItem className="subitems">폐기 등록</MenuItem>
            <MenuItem className="subitems">품질점검 일정 등록</MenuItem>
            <MenuItem className="subitems">설비환경 제어</MenuItem>
          </SubMenu>
          <SubMenu title="생산관리" className="submenues">
            <MenuItem className="subitems">발주생산 등록</MenuItem>
            <MenuItem className="subitems">구매요청 등록</MenuItem>
            <MenuItem className="subitems">출하대기 등록</MenuItem>
            <MenuItem className="subitems">일용요청 등록</MenuItem>
            <MenuItem className="subitems">설비환경 제어</MenuItem>
          </SubMenu>
          <SubMenu title="자재 / 설비관리" className="submenues">
            <MenuItem className="subitems">거래처 등록</MenuItem>
            <MenuItem className="subitems">품목 등록</MenuItem>
            {/* <MenuItem className="subitems">자산 / 설비 등록</MenuItem> */}
            <SubMenu title="자산 / 설비 등록" className="submenues">
              <MenuItem className="subitems">자산 등록</MenuItem>
              <MenuItem className="subitems">설비 등록</MenuItem>
            </SubMenu>
            <MenuItem className="subitems">구매의뢰 등록</MenuItem>
            <MenuItem className="subitems">구매처리 등록</MenuItem>
          </SubMenu>
          <SubMenu title="영업 관리" className="submenues">
            <MenuItem className="subitems">거래처 등록</MenuItem>
            <MenuItem className="subitems">발주 등록</MenuItem>
            <MenuItem className="subitems">출하 등록</MenuItem>
            <MenuItem className="subitems">매출처리 등록</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}
export default Sidebar;
