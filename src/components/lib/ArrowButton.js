import React from 'react'
import styled from 'styled-components/macro';

export const ArrowButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: fixed;
  right: 0;
  bottom: 10px;
  left: 0;
  margin: auto;
  z-index: 999;
  padding: 0px;
  background: #fffdfb;
  box-shadow: 5px 5px 19px 0px rgba(0, 0, 0, 0.50);
  z-index: 1001;

  @media (min-width: 744px) {
    width: 70px;
    height: 70px;
  }
`

// eslint-disable-next-line max-len
export const ArrowButton = ({ handleScrollToNextSection, atBottom }) => {
  return (
    <ArrowButtonStyled
      type="button"
      onClick={handleScrollToNextSection}>
      <img style={{ transform: atBottom ? 'rotate(-180deg)' : '', color: '#f85f36' }} src={`${process.env.PUBLIC_URL}/assets/arrow-red-small.svg`} alt="arrow icon" />
    </ArrowButtonStyled>
  )
}
