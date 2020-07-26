import styled from 'styled-components';

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #ebfeff;
    border-radius: 8px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0, 0.25);
    text-align: center;
    
    p {
        font-size: 1rem;
    }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    
    :hover {
        opacity: 0.8;
    }
    
    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        margin: 5px 0;
        padding: 8px 12px;
        background: ${ ({correct, userClicked}) =>
            correct ? 'linear-gradient(90deg, #56ffa4, #59bc86);'
                : (!correct && userClicked
                    ? 'linear-gradient(90deg, #ff5656, #c16868);'
                    : 'linear-gradient(90deg, #56ccff, #6eafb4);' )
        }
        border: 3px solid #fff;
        box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0,0,0, 0.25);
    }
`;