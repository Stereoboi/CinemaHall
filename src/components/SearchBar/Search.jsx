import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';

import { CssTextField } from './Search.styled';
import Box from '@mui/material/Box';

export const Search = ({onSubmit}) => {
  return (

    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, pb: 2, } }}
      onSubmit={e => onSubmit(e)}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'flex-end' }}
      >
        <SearchIcon
          sx={{ color: 'action.active', mr: 1, }} 
          
          />
        <CssTextField
          name="query"
          type="text"
          label="Tap to fid film"
          variant="standard"
          sx={{ width: "400px" }} />
      </Box>
    </Box>
  )
}

Search.propTypes = {
    onSubmit: PropTypes.func,
}

