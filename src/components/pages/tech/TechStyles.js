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
`

export const TechText = styled.p`
    line-height: 32px;
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

export const MarkGreen = styled.mark`
    padding-left: 2px;
    padding-right:0px;
    padding-bottom: 1px;
    background-color: #1d8e4a;
`;

export const MarkRed = styled(MarkGreen)`
    background-color: var(--primary-headline-color);
`;

export const MarkBlue = styled(MarkGreen)`
    background-color: #2483E0;
`;