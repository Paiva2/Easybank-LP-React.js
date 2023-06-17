import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding-top: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  z-index: 1000;
  background-color: #fff;
  position: relative;

  @media (max-width: 970px) {
    padding: 0;

    .request-button {
      display: none;
    }
  }

  svg {
    cursor: pointer;
  }
`

export const MobileMenuButton = styled.button`
  all: unset;
  font: 0;
  display: none;

  @media (max-width: 970px) {
    display: block;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 95rem;
  height: 4.6875rem;
`
export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2.5rem;

  @media (max-width: 970px) {
    width: 90%;
    left: 50%;
    transform: translateX(-50%) translateY(5%);
    gap: 1.5625rem;
    border-radius: 5px;
    flex-direction: column;
    position: absolute;
    top: 100%;
    background-color: #fff;
    height: auto;
    padding: 1.25rem 1.875rem;
    box-shadow: 26px 95px 300px -30px #2d314d;
    transition: all 0.3s ease-in-out;

    a {
      color: #2d314d !important;
    }

    &.disabled-mobile-menu {
      opacity: 0;
      visibility: hidden;
      height: 0;
      overflow: hidden;
    }

    &.active-mobile-menu {
      opacity: 1;
      height: 15.625rem;
      visibility: visible;
      overflow: hidden;
    }
  }

  a {
    color: hsl(233, 8%, 62%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: 0;
    position: relative;

    &:hover {
      &::after {
        opacity: 1;
      }
    }

    &::after {
      content: '';
      opacity: 0;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.25rem;
      background: linear-gradient(
        to right,
        #31cf71,
        #00cc92,
        #00c8ac,
        #00c2be,
        #2dbbc7
      );
      transition: all 0.2s ease-in-out;
    }
  }
`
