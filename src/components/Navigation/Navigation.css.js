import styled from 'styled-components'
import Wrapper from '../Wrapper'

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray.light};
  padding: ${({ theme }) => theme.spacing.xs}px 0;
  display: flex;
  justify-content: space-between;
`

const List = styled.ul`
  display: flex;
  align-items: center;
`

const NavigationWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`

export { Container, List, NavigationWrapper }