import { styled } from 'styled-components'

export const NextGenerationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 44rem;
  justify-content: center;
  overflow: hidden;
  background-color: hsl(0, 0%, 98%);

  @media (min-width: 3800px) {
    height: 33%;
  }
`

export const NextGenerationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 95rem;
  width: 80%;

  @media (max-width: 970px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`

export const ImageMockups = styled.div`
  position: absolute;
  right: 0;
  background-image: url('bg-intro-desktop.svg');
  background-repeat: no-repeat;
  background-size: inherit;
  background-position-y: -130px;

  @media (max-width: 1200px) {
    background-image: url('bg-intro-mobile.svg');
    background-position-y: initial;
    background-size: cover;
    position: initial;
    width: 100%;

    img {
      right: 0 !important;
      top: -55px;
      width: 100%;
    }
  }

  img {
    position: relative;
    right: -125px;
    z-index: 10;
  }
`

export const LeftSideTextsContainer = styled.div`
  display: flex;
  width: 25.9375rem;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 970px) {
    width: 100%;
    padding: 0px 10px 40px 10px;
    justify-content: center;
    text-align: center;
    align-items: center;

    p:nth-child(1) {
      font-size: 2.4375rem !important;
    }

    button {
      align-self: center !important;
    }
  }

  p {
    margin: 0;
  }

  p:nth-child(1) {
    color: hsl(233, 26%, 24%);
    font-size: 3.4375rem;
  }

  p:nth-child(2) {
    color: hsl(233, 8%, 62%);
    font-size: 1rem;
  }

  button {
    align-self: start;
  }
`
export const WhyChooseContainer = styled.main`
  width: 100%;

  @media (min-width: 3800px) {
    height: 33%;
  }
`

export const WhyChooseWrapper = styled.div`
  padding: 2.5rem 0px 2.5rem 0px;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background: hsl(220, 16%, 96%);
  height: 100%;
`

export const WhyChooseContentsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  max-width: 95rem;
  gap: 3.125rem;

  @media (min-width: 3800px) {
    height: 100%;
    justify-content: center;
  }

  @media (max-width: 970px) {
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`

export const WhyChooseTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p:first-child {
    color: hsl(233, 26%, 24%);
    font-size: 2.1875rem;
  }

  p:last-child {
    color: hsl(233, 8%, 62%);
    font-size: 1rem;
  }
`

export const WhyChooseIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 95rem;

  @media (max-width: 970px) {
    width: 100%;
    flex-direction: column;
    gap: 1.875rem;
  }
`

export const Benefits = styled.div`
  width: 21%;

  @media (max-width: 970px) {
    width: 85%;
    display: flex;
    gap: 1.25rem;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  p:nth-child(2) {
    font-size: 1.5625rem;
    color: hsl(233, 26%, 24%);
  }

  p:nth-child(3) {
    font-size: 1rem;
    color: hsl(233, 8%, 62%);
  }
`

export const LatestArticlesContainer = styled.main`
  width: 100%;

  @media (min-width: 3800px) {
    height: 33%;
  }
`

export const LatestArticlesWrapper = styled.div`
  padding: 2.5rem 0px 2.5rem 0px;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: hsl(0, 0%, 98%);
  height: 100%;
`

export const LatestArticlesContentsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  max-width: 95rem;
  gap: 3.125rem;

  @media (min-width: 3800px) {
    height: 100%;
    justify-content: center;
  }

  @media (max-width: 970px) {
    width: 85%;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`

export const LatestArticlesTitle = styled.div`
  p {
    color: hsl(233, 26%, 24%);
    font-size: 2.1875rem;
  }
`

export const LatestArticlesCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 95rem;

  @media (max-width: 970px) {
    width: 100%;
    flex-direction: column;
    gap: 30px;
  }
`

export const Articles = styled.div`
  width: 23%;
  background-color: #fff;
  min-height: 27.8125rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  -webkit-box-shadow: 4px 6px 5px 0px rgba(240, 240, 240, 1);
  -moz-box-shadow: 4px 6px 5px 0px rgba(240, 240, 240, 1);
  box-shadow: 4px 6px 5px 0px rgba(240, 240, 240, 1);
  height: 30rem;
  gap: 1.875rem;
  overflow-y: auto;
  padding-bottom: 15px;

  img {
    width: 100%;
    object-fit: cover;
    height: 14rem;
    min-height: 14rem;
  }

  @media (max-width: 970px) {
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100%;
  }
`

export const ArticleTexts = styled.div`
  padding: 0px 1.25rem 0px 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  p {
    color: hsl(233, 8%, 62%);
    font-size: 0.875rem;
  }

  p:nth-child(2) {
    font-size: 1.5625rem;
    color: hsl(233, 26%, 24%);
  }

  p:nth-child(3) {
    font-size: 1.125rem;
    color: hsl(233, 8%, 62%);
  }
`
