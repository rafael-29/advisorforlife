import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://sunfinancialadvisor.com/">
      sunfinancialadvisor 2021
      </Link>
    </Typography>
  );
}


export default function StickyFooter() {
  

return (
  <div style={{
  width: '100%',
  paddingTop: '20px',
  paddingBottom: '35px',
  background: '#f5f5f5'
  }}>
  <Container maxWidth="sm">
    <Typography variant="body1"><a className="termspol-a" href="/termscon">Terms </a> and <a className="termspol-a" href="/privacy">Policy</a> agreement</Typography>
    <Copyright />
  </Container>
  </div>
);
}