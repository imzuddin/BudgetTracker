import { ExpandLess, ExpandMore, Settings } from '@mui/icons-material';
import { Collapse, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';


type DropDownProps = {
}

export const dropdown = () => {
    const [openCollapse, setOpenCollapse] = React.useState(false);    

    const handleOpenSettings = () => {
        setOpenCollapse(!openCollapse)
    }

    return(
        <Drawer>
            <ListItem button onClick={handleOpenSettings}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
              {openCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </Drawer>
    )
}
