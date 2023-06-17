import RequestInviteButton from '../RequestInviteButton'
import ApiIcon from '../icons/ApiIcon'
import IconBudgeting from '../icons/IconBudgeting'
import IconOnboarding from '../icons/IconOnboarding'
import IconOnlineBanking from '../icons/IconOnlineBanking'
import {
  ArticleTexts,
  Articles,
  Benefits,
  ImageMockups,
  LatestArticlesCardsWrapper,
  LatestArticlesContainer,
  LatestArticlesContentsWrapper,
  LatestArticlesTitle,
  LatestArticlesWrapper,
  LeftSideTextsContainer,
  NextGenerationContainer,
  NextGenerationWrapper,
  WhyChooseContainer,
  WhyChooseContentsWrapper,
  WhyChooseIconsWrapper,
  WhyChooseTexts,
  WhyChooseWrapper,
} from './styles'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <NextGenerationContainer>
        <NextGenerationWrapper>
          <LeftSideTextsContainer>
            <p>Next generation digital banking</p>

            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing and much
              more.
            </p>

            <RequestInviteButton />
          </LeftSideTextsContainer>

          <ImageMockups>
            <img src="image-mockups.png" alt="right-cellphones" />
          </ImageMockups>
        </NextGenerationWrapper>
      </NextGenerationContainer>

      <WhyChooseContainer>
        <WhyChooseWrapper>
          <WhyChooseContentsWrapper>
            <WhyChooseTexts>
              <p>Why choose Easybank?</p>
              <p>
                We leverage Open Banking to turn your bank account inyo your
                financial hub.
                <br />
                Control your finances like never before.
              </p>
            </WhyChooseTexts>

            <WhyChooseIconsWrapper>
              <Benefits>
                <IconOnlineBanking />
                <p>Online Banking</p>
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </Benefits>

              <Benefits>
                <IconBudgeting />
                <p>Simple Budgeting</p>
                <p>
                  See exactly where your money goes each month. Receive
                  notifications when you&apos;re close to hitting your limits.
                </p>
              </Benefits>

              <Benefits>
                <IconOnboarding />
                <p>Fast Onboarding</p>
                <p>
                  We don&apos;t do branches. Open your account in minutes online
                  and start taking control of your finances right away.
                </p>
              </Benefits>

              <Benefits>
                <ApiIcon />
                <p>Open API</p>
                <p>
                  Manage your savings, investiments, pension, and much more from
                  one account. Tracking your monkey has never been easier.
                </p>
              </Benefits>
            </WhyChooseIconsWrapper>
          </WhyChooseContentsWrapper>
        </WhyChooseWrapper>
      </WhyChooseContainer>

      <LatestArticlesContainer>
        <LatestArticlesWrapper>
          <LatestArticlesContentsWrapper>
            <LatestArticlesTitle>
              <p>Latest Articles</p>
            </LatestArticlesTitle>

            <LatestArticlesCardsWrapper>
              <Articles>
                <img src="/image-currency.jpg" />
                <ArticleTexts>
                  <p>By Claire Robinson</p>
                  <p>Receive money in any currency with no fees</p>
                  <p>
                    The world is getting smaller and we&apos;re becoming more
                    mobile. So why should you be forced to only receive money in
                    a single...
                  </p>
                </ArticleTexts>
              </Articles>

              <Articles>
                <img src="/image-restaurant.jpg" />
                <ArticleTexts>
                  <p>By Wilson Hutton</p>
                  <p>Treat yourself withouth worrying about money</p>
                  <p>
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means
                    you...
                  </p>
                </ArticleTexts>
              </Articles>

              <Articles>
                <img src="/image-plane.jpg" />
                <ArticleTexts>
                  <p>By Wilson Hutton</p>
                  <p>Take your Easybank card wherever you go</p>
                  <p>
                    We want you to enjoy your travels. This is why we
                    don`&apos;t charge any fees on purchases while you`&apos;re
                    abroad. We`&apos;ll even show you...
                  </p>
                </ArticleTexts>
              </Articles>

              <Articles>
                <img src="/image-confetti.jpg" />
                <ArticleTexts>
                  <p>By Claire Robinson</p>
                  <p>Our invite-only Beta account are now live!</p>
                  <p>
                    After a lot of hard work by the whole team, we&apos;re
                    excited to launch our closed beta. It&apos;s easy to request
                    an invite through the site...
                  </p>
                </ArticleTexts>
              </Articles>
            </LatestArticlesCardsWrapper>
          </LatestArticlesContentsWrapper>
        </LatestArticlesWrapper>
      </LatestArticlesContainer>
    </Fragment>
  )
}
