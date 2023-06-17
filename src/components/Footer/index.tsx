import RequestInviteButton from '../RequestInviteButton'
import EasyBankLogo from '../icons/EasyBankLogo'
import FacebookIcon from '../icons/FacebookIcon'
import InstagramIcon from '../icons/InstagramIcon'
import PinterestIcon from '../icons/PinterestIcon'
import TwitterIcon from '../icons/TwitterIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import {
  CopyrightContainer,
  FooterContainer,
  FooterWrapper,
  LeftSideFooter,
  LogoNSocialMediaWrapper,
  SocialMedias,
} from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LeftSideFooter>
          <LogoNSocialMediaWrapper>
            <div>
              <EasyBankLogo color="#fff" />
            </div>

            <SocialMedias>
              <FacebookIcon />
              <YoutubeIcon />
              <TwitterIcon />
              <PinterestIcon />
              <InstagramIcon />
            </SocialMedias>
          </LogoNSocialMediaWrapper>

          <nav>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </nav>
        </LeftSideFooter>

        <CopyrightContainer>
          <RequestInviteButton />

          <p>© Easybank. All Rights Reserved</p>
        </CopyrightContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
