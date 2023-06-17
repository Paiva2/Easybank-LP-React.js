import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  background: hsl(233, 26%, 24%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0px 2.5rem 0px;
`

export const FooterWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 96rem;
  justify-content: space-between;

  @media (max-width: 968px) {
    flex-direction: column;
    width: 100%;
    gap: 1.875rem;
  }
`

export const LeftSideFooter = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;

  @media (max-width: 968px) {
    flex-direction: column;
    width: 100%;
    gap: 1.875rem;
    text-align: center;
  }

  nav {
    ul {
      list-style: none;
      padding: 0;
      color: hsl(220, 16%, 96%);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      cursor: pointer;

      li:hover {
        color: hsl(136, 65%, 51%);
      }
    }
  }
`

export const LogoNSocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`
export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  @media (max-width: 968px) {
    gap: 1.25rem;
  }

  svg:hover path {
    fill: hsl(136, 65%, 51%);
  }
`
export const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 968px) {
    align-items: center;

    button {
      align-self: center !important;
    }
  }

  button {
    align-self: end;
  }

  p {
    color: hsl(233, 8%, 62%);
  }
`
