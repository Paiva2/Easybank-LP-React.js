import { useState } from 'react'
import CloseMenuIcon from '../CloseMenuIcon'
import HamburguerMenuIcon from '../HamburguerMenuIcon'
import RequestInviteButton from '../RequestInviteButton'
import EasyBankLogo from '../icons/EasyBankLogo'
import {
  HeaderContainer,
  HeaderWrapper,
  MobileMenuButton,
  Navbar,
} from './styles'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <EasyBankLogo />
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseMenuIcon /> : <HamburguerMenuIcon />}
        </MobileMenuButton>
        <Navbar
          className={
            isMobileMenuOpen ? 'active-mobile-menu' : 'disabled-mobile-menu'
          }
        >
          <a href="#">
            <span>Home</span>
          </a>
          <a href="#">
            <span>About</span>
          </a>
          <a href="#">
            <span>Contact</span>
          </a>
          <a href="#">
            <span>Blog</span>
          </a>
          <a href="#">
            <span>Careers</span>
          </a>
        </Navbar>
        <RequestInviteButton />
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
