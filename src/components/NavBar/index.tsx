import { Trans } from '@lingui/macro'
import { useWeb3React } from '@web3-react/core'
import { useAccountDrawer } from 'components/AccountDrawer'
import Web3Status from 'components/Web3Status'
import { useIsPoolsPage } from 'hooks/useIsPoolsPage'
import { Box } from 'nft/components/Box'
import { Row } from 'nft/components/Flex'
import { VanaDarkIcon, VanaIcon } from 'nft/components/icons'
import { ReactNode, useCallback } from 'react'
import { NavLink, NavLinkProps, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useIsDarkMode } from 'theme/components/ThemeToggle'

import { useIsNavSearchInputVisible } from '../../nft/hooks/useIsNavSearchInputVisible'
import Blur from './Blur'
import { ChainSelector } from './ChainSelector'
import { MenuDropdown } from './MenuDropdown'
import * as styles from './style.css'

const Nav = styled.nav`
  padding: ${({ theme }) => `${theme.navVerticalPad}px 12px`};
  width: 100%;
  height: ${({ theme }) => theme.navHeight}px;
  z-index: 2;
`

interface MenuItemProps {
  href: string
  id?: NavLinkProps['id']
  isActive?: boolean
  children: ReactNode
  dataTestId?: string
}

const getInfoUrl = (chainId: number | undefined) => {
  const baseUrl = 'https://info.datadex.me'
  if (!chainId) return baseUrl

  switch (chainId) {
    case 1480:
      return `${baseUrl}/#/vana`
    case 14800:
      return `${baseUrl}/#/vana-moksha`
    // Add more chains as needed
    default:
      return baseUrl
  }
}

const MenuItem = ({ href, dataTestId, id, isActive, children }: MenuItemProps) => {
  return (
    <NavLink
      to={href}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{ textDecoration: 'none', overflow: 'hidden', whiteSpace: 'nowrap' }}
      data-testid={dataTestId}
    >
      {children}
    </NavLink>
  )
}

// Add ExternalMenuItem component
const ExternalMenuItem = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.menuItem}
      style={{ textDecoration: 'none', overflow: 'hidden', whiteSpace: 'nowrap' }}
    >
      {children} ↗
    </a>
  )
}

export const PageTabs = () => {
  const { pathname } = useLocation()
  const { chainId } = useWeb3React()
  const isPoolActive = useIsPoolsPage()

  const infoUrl = getInfoUrl(chainId)

  return (
    <>
      <MenuItem href="/swap" isActive={pathname.startsWith('/swap')}>
        <Trans>Swap</Trans>
      </MenuItem>
      <MenuItem href="/pools" dataTestId="pool-nav-link" isActive={isPoolActive}>
        <Trans>Pools</Trans>
      </MenuItem>
      <ExternalMenuItem href={infoUrl}>
        <Trans>Info</Trans>
      </ExternalMenuItem>
      <ExternalMenuItem href="https://stargate.finance/bridge?srcChain=vana">
        <Trans>Bridge</Trans>
      </ExternalMenuItem>
      <Box marginY="4">
        <MenuDropdown />
      </Box>
    </>
  )
}

const Navbar = ({ blur }: { blur: boolean }) => {
  const navigate = useNavigate()
  const isNavSearchInputVisible = useIsNavSearchInputVisible()
  const [accountDrawerOpen, toggleAccountDrawer] = useAccountDrawer()
  const isDarkMode = useIsDarkMode()
  console.log('Dark mode:', isDarkMode)

  const handleHorIconClick = useCallback(() => {
    if (accountDrawerOpen) {
      toggleAccountDrawer()
    }
    navigate({
      pathname: '/',
      search: '?intro=true',
    })
  }, [accountDrawerOpen, navigate, toggleAccountDrawer])

  return (
    <>
      {blur && <Blur />}
      <Nav>
        <Box display="flex" height="full" flexWrap="nowrap">
          <Box className={styles.leftSideContainer}>
            <Box className={styles.logoContainer}>
              {isDarkMode ? (
                <VanaIcon width={109} height={36} className={styles.logo} onClick={handleHorIconClick} />
              ) : (
                <VanaDarkIcon width={109} height={36} className={styles.logo} onClick={handleHorIconClick} />
              )}
            </Box>
            <Box display={{ sm: 'flex', lg: 'none' }}>
              <ChainSelector leftAlign={true} />
            </Box>
            <Row>
              <PageTabs />
            </Row>
          </Box>
          <Box
            className={styles.searchContainer}
            {...(isNavSearchInputVisible && {
              display: 'flex',
            })}
          ></Box>
          <Box className={styles.rightSideContainer}>
            <Row gap="12">
              <Box position="relative" display={isNavSearchInputVisible ? 'none' : { sm: 'flex' }}></Box>
              <Box display={{ sm: 'none', lg: 'flex' }}>
                <ChainSelector />
              </Box>

              <Web3Status />
            </Row>
          </Box>
        </Box>
      </Nav>
    </>
  )
}

export default Navbar
