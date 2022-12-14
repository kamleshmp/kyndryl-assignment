import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

class Header extends React.Component {
  render() {
    const { menuStyle, handleChangeRequestNavDrawer, classes } = this.props;
    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
      },
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ ...menuStyle, ...style.appBar }}>
          <Toolbar variant="regular">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={handleChangeRequestNavDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="subtitle1" color="inherit">
              Project Portal
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
