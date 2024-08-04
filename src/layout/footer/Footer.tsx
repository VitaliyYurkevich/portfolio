import {FlexWrapper} from "../../components/FlexWrapper";
import {IconSvg} from "../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";
import {GoTopBtn} from "../../components/goTopBtn/goTopBtn";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Vitaliy</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <IconSvg height={'17px'} width={'17px'} viewBox={'0 0 17px 17px'} iconId={'instagram'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <IconSvg height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <IconSvg height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <IconSvg height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Vitaliy Yurkevich, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
  position: relative;
  background-color: darkgreen;
  padding: 40px 0;

`
const Name = styled.span`
  ${font({family: 'Josefin Sans', weight: 700, Fmax: 22, Fmin: 16})}
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialIconLink = styled.a`
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animation.transition};
  
  color: ${theme.colors.accent};
  
  
  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
    
  }
`

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`

const SocialItem = styled.li`
  
`
