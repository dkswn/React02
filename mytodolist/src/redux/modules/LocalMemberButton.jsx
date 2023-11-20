import React from 'react';
import { useDispatch } from 'react-redux';
import {SelectMembers} from './SelectMembersComment';
import { Memberlist } from './SelectMembersComment';

const LocalMemberButton = ({ Memberlist }) => {
    const dispatch = useDispatch();
};

const handleButtonClick = () =>{
    dispatch(SelectMembers(MemberList));

}

export default LocalMemberButton;