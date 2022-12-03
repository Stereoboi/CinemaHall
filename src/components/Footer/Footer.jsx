import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FooterContainer } from './Footer.styled';
export const Footer = (props) => {

  return (
    <FooterContainer>
      <Typography variant="body2" color="text.primary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Stereoboi">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </FooterContainer>
  )
}