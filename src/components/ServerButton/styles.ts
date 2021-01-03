import styled from "styled-components";
import {Props} from './index'

export const Button = styled.button<Props>`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-shrink:0;
    width:48px;
    height:48px;
    border-radius:${props => props.isHome ? '25%' : '50%'};
    margin-bottom:8px;
    background-color:${props => props.isHome ? 'var(--home)' : 'var(--primary)'};
    padding-top:${props => props.isHome ? '3px' : 'none'};
    position:relative;
    cursor:pointer;

    > img{
        width:40px;
        height:40px;
    }

    &::before{
        width: 9px;
        height:9px;
        position:absolute;
        left:-17px;
        top:calc(50% - 4.5px);

        background-color:#fff;
        border-radius:50%;

        content:'';
        display:${props => props.hasNotifications ? 'inline' : 'none'};
    }
    &::after{
        background-color:var(--notification);
        width:auto;
        height:16px;
        padding:0 4px;
        position:absolute;
        bottom: -4px;
        right:-4px;

        border-radius:12px;
        border:4px solid var(--quaternary);
        text-align:right;
        font-size:13px;
        font-weight:bold;
        color:#fff;

        content: '${props => props.mentions && props.mentions}';
        display:${props => props.mentions ? 'inline' : 'none'};
    }

    &.active,&:hover{
        border-radius:25%;
        background-color:${props => props.isHome ? 'var(--home)' : 'var(--discord)'};
        transition:border-radius .2s,background-color .2s
    }
`