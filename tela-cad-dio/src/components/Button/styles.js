import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 5px 12px;
    min-width: 120px;
    width: 100%;
    font-weight: 600;
    text-transform: uppercase;
    &:hover{
        background-color: #e4105d;
        transition-duration:.4s;
    }

   
    
    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        
        background: #E4105D;
      

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
        &:hover{
            box-shadow: 0px 0px 50px 5px #e4105d;
    `}
`