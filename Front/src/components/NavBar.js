import React, { useState } from 'react';
import logo from '../images/Jujutsu_kaisen_logo.png';
import { AppBar, Box, Container, Toolbar, Typography, MenuItem, IconButton, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

function NavBar({ characters, onCharacterSelect }) {
  const navigate = useNavigate();
  const [charactersAnchorEl, setCharactersAnchorEl] = useState(null);

  const handleOpenCharactersMenu = (event) => {
    setCharactersAnchorEl(event.currentTarget);
  };

  const handleCloseCharactersMenu = () => {
    setCharactersAnchorEl(null);
  };

  const handleCharacterSelect = (firstname) => {
    onCharacterSelect(firstname);
    navigate(`/characters/${firstname}`);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
          <img src={logo} alt="Logo" style={{ maxHeight: '30%', maxWidth: '20%', marginLeft: '2rem' }} />
          <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
              variant="body1"
              component="span"
              onClick={() => navigate('/')}
              style={{ borderRadius: '15px', backgroundColor: 'purple', color: 'white', cursor: 'pointer', padding: '5px 10px' }}
            >
              Home
            </Typography>

            <IconButton
              size="large"
              aria-label="characters-menu"
              aria-haspopup="true"
              onClick={handleOpenCharactersMenu}
              color="inherit"
            >
              <Typography variant="body1" style={{ borderRadius: '15px', backgroundColor: 'black', color: 'white', padding: '5px 10px' }}>Characters<KeyboardArrowDownIcon /></Typography>
            </IconButton>
            <Menu
              id="characters-menu"
              anchorEl={charactersAnchorEl}
              open={Boolean(charactersAnchorEl)}
              onClose={handleCloseCharactersMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              {characters.map((character) => (
                <MenuItem
                  key={character._id}
                  onClick={() => {
                    handleCharacterSelect(character.firstname);
                    handleCloseCharactersMenu();
                  }}
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    '&:hover': {
                      backgroundColor: '#333',
                      color: 'white',
                    },
                  }}
                >
                  {character.firstname}
                </MenuItem>
              ))}
            </Menu>

            <Typography
              variant="body1"
              component="span"
              onClick={() => navigate('#about')}
              style={{ borderRadius: '15px', backgroundColor: 'black', color: 'white', cursor: 'pointer', padding: '5px 10px' }}
            >
              About
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
