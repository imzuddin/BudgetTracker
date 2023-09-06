import { MenuBookOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, IconButton, Toolbar, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import React, {useState} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Dropdown = () => {
    const [openCollapse, setOpenCollapse] = useState(false);    

    const handleOpenSettings = () => {
        setOpenCollapse(!openCollapse)
    }

    return(
        <Toolbar style={{margin:'0px'}}>
            <IconButton color='inherit' onClick={() => setOpenCollapse(true)}>
                <MenuBookOutlined/>
            </IconButton>

            <Drawer anchor='left' variant="temporary" open={openCollapse} onClick={() => setOpenCollapse(false)}>
                <Box sx={{ width: 350}}>
                    <List>
                        {['Dashboard', 'Projects', 'About', 'Contact Us'].map((text, index) => (
                            <ListItem key={text}>
                                <ListItemButton>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                        {['Github', 'LinkedIn'].map((text, index) => (
                                <ListItemIcon>
                                    {index == 0 ? 
                                        <GitHubIcon fontSize='large' style={{padding: '10px'}}></GitHubIcon> :
                                        <LinkedInIcon fontSize='large'style={{padding: '10px'}}></LinkedInIcon> 
                                    }
                                </ListItemIcon>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Toolbar>
    )
}

export default Dropdown