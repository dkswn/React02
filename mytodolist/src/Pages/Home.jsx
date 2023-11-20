import React from 'react';
import styled from "styled-components";
import GlobalStyled from "../GlobalStyled";
import { useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { useState } from 'react-redux';
import SelectMemberComment from '../redux/modules/SelectMembersComment';
import {SelectMembers} from '../redux/modules/SelectMembersComment';

const StBox = styled.div`
  background-Image:url('https://i.namu.wiki/i/QE_n6IEQBHJBt3fNZTsFzoGALX9k-UIZrir-UgQZoqDCOk4M3BBufJhH6vLyAdmhwfhXWpSl0rplqjWhpzRICoBWvMUUGegFslWL2Ehweumw49fk924IB4d-X1DUYVkeM1as-UG0Majnsv8cxqbusA.webp');
  width:  150rem;
  height: 30rem;
  border: 1px solid red;
  margin: 1px;
  font-size: 45px;
  align-items: center;
`
const TitleTeamName = styled.h1`
   align-items: center;
   font-size: 80px;
   justify-content: space-between;
   font-weight: bold;
   margin: 50px 0;
   padding-left: 65rem;
   color: white;
   cursor: pointer;
`
 // 멤버 박스 레아이웃
const BorderBoxMembers = styled.span`
  position: absolute;
    top: 370px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    border: 1px solid white;
    border-radius: 20px;
    list-style: none;
    padding: 18px;
    width: 800px;
    background-color: rgb(79, 85, 81);
`;
// 멤버 버튼
const MemberButton = styled.button`
  border: 2px solid red;
  width: 24rem;
  height: 5rem;
  color: #dc3545;;
  background-color:gainsboro;
  cursor: pointer;
  font-weight: 700;
`;
const StContainer = styled.div`
background-color: #008080ac;
 position: absolute;
 justify-content: space-between;
    top: 500px;
    left: 50%;
    width: 900px;
    padding:20px;
    transform: translateX(-50%);
  border: 1px solid red;
  align-items: center;
  
`;
// 인풋
const InputContent= styled.input`
  width: 450px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  display: flex;
    border-radius: 10px;
    margin: 5px auto 5px auto;
    padding: 20px;
`
const LabelTextStyle = styled.label`
justify-content: space-between;
  font-weight: 700;
  width: 100px;
  left: 300px;
  height: 40px;
  margin:3px auto 3px auto;
  align-items: center;
  color: white;
`;

const FormContainer = styled.form`
   align-items: center;
`;
 // 가수 선택 리스트 select
const SelelctActionList = styled.select`
  margin:1px auto 1px auto;
  padding: 10px;
    width: 55%;
     align-items:center;
     display: grid;
`;

const RegisterAction = styled.button`
    font-weight: 700;
    box-sizing: border-box;
    font-size: 14px;
    padding: 20px 15px;
    cursor: pointer;
    user-select: none;
    background-color: black;
    text-align: right;
    color: white;
`;
const Home = () => {
  const [nickname,setNickName] = useState("");
  const [constents, setContents] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmitHandler =(e) => {
    e.preventDefault();
    if(nickname == "" || constents == "") return;
    dispatch(
      SelectMemberComment({id:todos.length+1,
      nickname,
      constents,
    })
    );
  };
  const GroupName = "IZ*ONE";
  const NickNameLabel= '닉네임';
  const contentNameLabel = '내용';
  const WhoPush = '누구에게 보낼건가요?'
    return (
    <>
    <GlobalStyled/>
    <StBox>
    <TitleTeamName>
    {GroupName}
      </TitleTeamName>
    </StBox>
    <BorderBoxMembers>
    <MemberButton >권은비</MemberButton>
    <MemberButton>강혜원</MemberButton>
    <MemberButton>최예나</MemberButton>
    <MemberButton>이채연</MemberButton>
    <MemberButton>김채원</MemberButton>
    <MemberButton>김민주</MemberButton>
    <MemberButton>야부키 나코</MemberButton>
    <MemberButton>혼다 히토미</MemberButton>
    <MemberButton>조유리</MemberButton>
    <MemberButton>안유진</MemberButton>
    <MemberButton>장원영</MemberButton>
    <MemberButton>사쿠라</MemberButton>
    </BorderBoxMembers>
    <FormContainer onSubmit={onSubmitHandler}>
    <StContainer>
    <LabelTextStyle><br/>{NickNameLabel}</LabelTextStyle>
    <InputContent type="text" value={nickname} onChange={(e) => {
     setNickName(e.target.value);
    }} placeholder='닉네임을 입력해주세요!!'/>
    <LabelTextStyle><br/>{contentNameLabel}</LabelTextStyle>
    <InputContent type="text" value={constents} onChange={(e)=>{
      setContents(e.target.value);
    }} placeholder='내용을 입력해주세요!!' />
    <LabelTextStyle><br/>{ WhoPush}</LabelTextStyle>

    <SelelctActionList styled={{SelelctActionList}}>
      <option value="강혜원">강혜원</option>
      <option value="최예나">최예나</option>
      <option value="이채연">이채연</option>
      <option value="김채원">김채원</option>
      <option value="김민주">김민주</option>
      <option value="야부키 나코">야부키 나코</option>
      <option value="혼다 히토미">혼다 히토미</option>
      <option value="조유리">조유리</option>
      <option value="안유진">안유진</option>
      <option value="장원영">장원영</option>
      <option value="사쿠라">사쿠라</option>
      </SelelctActionList>
      <RegisterAction>팬레터등록</RegisterAction>
    </StContainer>
    </FormContainer>
    </>
    );
};
export default Home;

