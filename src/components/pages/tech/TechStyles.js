import styled from 'styled-components';

export const TechSection = styled.section`
    height: 668px;
    width: 100%;
    background-color: var(--secondary-container-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 62px;

    @media (min-width: 668px) and (max-width: 1023px) {
        height: 800px;
        position: relative;
    
    }
`

export const TechText = styled.p`
    line-height: 32px;
    word-break: normal;
    padding: 0 24px;
`

export const Mark = styled.mark`
    padding-left: 2px;
    padding-right:0px;
    padding-bottom: 1px;
    color: var(--primary-color)
    background-color: ${(props) => (props.javascript && '#1d8e4a')};
    background-color: ${(props) => (props.react && 'var(--primary-headline-color)')};
    background-color: ${(props) => (props.mob && '#2483E0')};
`