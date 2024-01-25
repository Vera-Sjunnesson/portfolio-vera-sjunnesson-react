import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`

body, html {
  font-family: var(--primary-font-family);
  block-size: fit-content;
  height: 100%;
  overscroll-behavior: none;
  background: var(--primary-color);
}
  
  h1 {
  font-family: 'Satoshi-Bold', sans-serif;
  font-size: 28px;
  line-height: 37.8px;
  color: var(--primary-headline-color);
}
  
  h2 {
  font-family: 'Satoshi-Black', sans-serif;
  font-size: 32px;
  line-height: 43.2px;
  color: var(--primary-text-color);
}
  
h3 {
  font-family: 'Satoshi-Medium', sans-serif;
  font-size: 24px;
  line-height: 32.4px;
  color: var(--secondary-headline-color);
}
  
  h4 {
  font-family: 'Satoshi-Black', sans-serif;
  font-size: 72px;
  line-height: 80px;
  color: var(--primary-headline-color);

    @media (min-width: 744px) {
      font-size: 80px;
    }
  }

h5 {
  font-family: 'Satoshi-Black', sans-serif;
  font-size: 32px;
  line-height: 43.2px;
}
  
p {
  font-family: var(--secondary-font-family);
  font-weight: 400;
  font-size: 22px;
  line-height: 28.71px;
}

button {
  font-family: 'Satoshi-Medium', sans-serif;
  border-radius: 40px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  padding: 10.5px 16px 10.5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: fit-content;
  cursor: pointer;
}

a {
  text-decoration: none;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
}

article img {
  width: 100%;
  object-fit: cover;
}

.svg-animation {
  min-height: 100vh !important;
  height: 100vh !important;

  @media (min-width: 744px) and (max-width: 1279px) {
    min-width: 120%!important;
    width: 120%!important;
    min-height: auto!important;
    height: auto!important;
  }
}
`