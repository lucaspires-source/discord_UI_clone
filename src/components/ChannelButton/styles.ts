import styled from "styled-components";
import {Hashtag} from 'styled-icons/heroicons-outline';
import {PersonAdd, Settings} from 'styled-icons/material';


export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    cursor: pointer;
    border-radius:5px;
    padding:5px 3px;
    background-color:transparent;
    transition:background-color .2s;
    >div{
        display :flex;
        align-items:center;
    }
    >div span{
        color:var(--senary);
        margin-left:5px;
    }
    &:hover, &:active{
        background-color:var(--quinary);
        >div span{
            color:#fff;
        }
    }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;


export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  transition:color .2s;
  cursor:pointer;
  &:hover{
      color:#fff
  };
  padding-right:1px;
`;
export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  transition:color .2s;
  cursor:pointer;
  &:hover{
      color:#fff
  }
  padding-left:1px;
`;