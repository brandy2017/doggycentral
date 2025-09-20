import NavButton from "./NavButton";
// If a library/file exports more than 1 component we can use the curly braces to import more than one component.
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
