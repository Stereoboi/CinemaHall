// import styled from "styled-components";
import {  styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--color-green)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--color-green)',
  },
  
});

