import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem, 
  Box, 
  Container, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  ListItemButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface NavLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, external }) => {
  return external ? (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ 
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgba(0, 166, 151, 0.8)',
        },
        textTransform: 'none',
        mx: 0.5
      }}
    >
      {label}
    </Button>
  ) : (
    <Button
      component={Link}
      to={href}
      sx={{ 
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgba(0, 166, 151, 0.8)',
        },
        textTransform: 'none',
        mx: 0.5
      }}
    >
      {label}
    </Button>
  );
};

const Navbar: React.FC = () => {
  const { username, logout } = useAuth();
  const [resourcesAnchorEl, setResourcesAnchorEl] = useState<null | HTMLElement>(null);
  const [communityAnchorEl, setCommunityAnchorEl] = useState<null | HTMLElement>(null);
  const [accountAnchorEl, setAccountAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = {
    resources: [
      { label: "Data Science", href: "https://science.dataidea.org" },
      { label: "Blog", href: "https://blog.dataidea.org" },
      { label: "Movies", href: "https://movies.dataidea.org" },
    ],
    community: [
      { label: "Forum Group", href: "https://chat.whatsapp.com/GuCZRyJICgO3Y7MPvDQKhi" },
      { label: "YouTube", href: "https://www.youtube.com/@dataideascience" },
      { label: "Twitter", href: "https://twitter.com/dataideaorg" },
    ],
  };

  useEffect(() => {
    handleCloseAllMenus();
    setDrawerOpen(false);
  }, [location]);

  const handleCloseAllMenus = () => {
    setResourcesAnchorEl(null);
    setCommunityAnchorEl(null);
    setAccountAnchorEl(null);
  };

  const handleResourcesClick = (event: React.MouseEvent<HTMLElement>) => {
    setResourcesAnchorEl(event.currentTarget);
  };

  const handleCommunityClick = (event: React.MouseEvent<HTMLElement>) => {
    setCommunityAnchorEl(event.currentTarget);
  };

  const handleAccountClick = (event: React.MouseEvent<HTMLElement>) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="sticky" sx={{ 
      background: 'linear-gradient(90deg, #008374 0%, #006d61 100%)',
      borderBottom: '1px solid rgba(102, 253, 238, 0.3)'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: '80px' }}>
          {/* Logo Section */}
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 5 },
              fontFamily: 'inherit',
              '&:hover': {
                color: '#66fdee',
              },
              transition: 'color 0.3s'
            }}
          >
            DATAIDEA
          </Typography>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <NavLink href="/" label="Home" />
              
              {/* Resources Dropdown */}
              <Button
                onClick={handleResourcesClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 166, 151, 0.8)',
                  },
                  textTransform: 'none',
                  mx: 0.5,
                  backgroundColor: resourcesAnchorEl ? 'rgba(0, 166, 151, 0.8)' : 'transparent'
                }}
              >
                Resources
              </Button>
              <Menu
                anchorEl={resourcesAnchorEl}
                open={Boolean(resourcesAnchorEl)}
                onClose={() => setResourcesAnchorEl(null)}
                MenuListProps={{
                  'aria-labelledby': 'resources-button',
                }}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 2,
                    border: '1px solid rgba(102, 253, 238, 0.2)',
                    mt: 0.5
                  }
                }}
              >
                {menuItems.resources.map((item, index) => (
                  <MenuItem 
                    key={index} 
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(0, 131, 116, 0.1)',
                      }
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>

              {/* Community Dropdown */}
              <Button
                onClick={handleCommunityClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 166, 151, 0.8)',
                  },
                  textTransform: 'none',
                  mx: 0.5,
                  backgroundColor: communityAnchorEl ? 'rgba(0, 166, 151, 0.8)' : 'transparent'
                }}
              >
                Community
              </Button>
              <Menu
                anchorEl={communityAnchorEl}
                open={Boolean(communityAnchorEl)}
                onClose={() => setCommunityAnchorEl(null)}
                MenuListProps={{
                  'aria-labelledby': 'community-button',
                }}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 2,
                    border: '1px solid rgba(102, 253, 238, 0.2)',
                    mt: 0.5
                  }
                }}
              >
                {menuItems.community.map((item, index) => (
                  <MenuItem 
                    key={index} 
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(0, 131, 116, 0.1)',
                      }
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {/* Account Section - Desktop */}
          {!isMobile && (
            <Box>
              <Button
                onClick={handleAccountClick}
                startIcon={<AccountCircleIcon />}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 166, 151, 0.8)',
                  },
                  textTransform: 'none',
                  backgroundColor: accountAnchorEl ? 'rgba(0, 166, 151, 0.8)' : 'transparent'
                }}
              >
                {username ? username : 'Account'}
              </Button>
              <Menu
                anchorEl={accountAnchorEl}
                open={Boolean(accountAnchorEl)}
                onClose={() => setAccountAnchorEl(null)}
                MenuListProps={{
                  'aria-labelledby': 'account-button',
                }}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 2,
                    border: '1px solid rgba(102, 253, 238, 0.2)',
                    mt: 0.5
                  }
                }}
              >
                {username ? (
                  <MenuItem 
                    onClick={logout}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(0, 131, 116, 0.1)',
                      }
                    }}
                  >
                    <ExitToAppIcon fontSize="small" sx={{ mr: 1 }} />
                    Logout
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem 
                      component={Link} 
                      to="/login"
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(0, 131, 116, 0.1)',
                        }
                      }}
                    >
                      Login
                    </MenuItem>
                    <MenuItem 
                      component={Link} 
                      to="/register"
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(0, 131, 116, 0.1)',
                        }
                      }}
                    >
                      Register
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: '80%',
            maxWidth: '300px',
            background: 'linear-gradient(180deg, rgba(0, 131, 116, 0.95) 0%, rgba(0, 109, 97, 0.95) 100%)',
            backdropFilter: 'blur(8px)',
            color: 'white'
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            DATAIDEA
          </Typography>
          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
          
          <List>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
            
            <Typography sx={{ mt: 2, mb: 1, pl: 2, fontWeight: 'bold', textTransform: 'capitalize' }}>
              Resources
            </Typography>
            {menuItems.resources.map((item, index) => (
              <ListItemButton 
                key={index}
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ pl: 4 }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            
            <Typography sx={{ mt: 2, mb: 1, pl: 2, fontWeight: 'bold', textTransform: 'capitalize' }}>
              Community
            </Typography>
            {menuItems.community.map((item, index) => (
              <ListItemButton 
                key={index}
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ pl: 4 }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            
            <Divider sx={{ my: 2, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            
            {username ? (
              <>
                <ListItem>
                  <ListItemText 
                    primary={`Signed in as ${username}`} 
                    primaryTypographyProps={{ 
                      variant: 'body2', 
                      sx: { opacity: 0.8 } 
                    }} 
                  />
                </ListItem>
                <ListItemButton onClick={logout}>
                  <ExitToAppIcon sx={{ mr: 2 }} />
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </>
            ) : (
              <>
                <ListItemButton component={Link} to="/login">
                  <ListItemText primary="Login" />
                </ListItemButton>
                <ListItemButton component={Link} to="/register">
                  <ListItemText primary="Register" />
                </ListItemButton>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
