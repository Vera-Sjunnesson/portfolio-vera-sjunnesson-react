import styled from 'styled-components/macro';

export const TechSection = styled.section`
    height: 668px;
    width: 100%;
    background-color: var(--secondary-container-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 62px;
    z-index: 1000;

    @media (min-width: 744px) and (max-width: 1280px) {
        height: 800px;
        position: relative;
    
    }

    @media (min-width: 1280px) {
        height:100vh;
        flex-direction: row;
        gap: 143px;
        position: relative;
    }
`

export const TechHeading = styled.h4`
    font-size: 80px;
    color: #fffdfb;
`

export const TechText = styled.p`
    font-size: 30px;
    line-height: 40px;
    word-break: normal;
    padding: 0 24px;
    max-width: 327px;

    @media (min-width: 744px) and (max-width: 1280px) {
        max-width: 531px;
        padding: 0;
    }

    @media (min-width: 1280px) {
        max-width: 531px;
        padding: 0;
        margin: 0;
        height: auto;
    }
`

export const TechTextSpan = styled.span`
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background: #fffdfb;
    padding: 0px 5px 1px 5px;
`;

export const MarkGreen = styled.mark`
    padding-left: 2px;
    padding-right:0px;
    padding-bottom: 1px;
    background-color: #94b647;
`;

export const MarkRed = styled(MarkGreen)`
    background-color: #ffba1d;
`;

export const MarkBlue = styled(MarkGreen)`
    background-color: #b2cee5;
`;