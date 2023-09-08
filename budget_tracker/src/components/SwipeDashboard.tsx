import React, { useState } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Drawer, Button } from "@mui/material";


export const SwipeDashboard = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setIsOpen(open);
    };
  
    return (
      <div>
        <Button onClick={toggleDrawer(true)}>
            <KeyboardDoubleArrowUpIcon fontSize="large">

            </KeyboardDoubleArrowUpIcon>
        </Button>
        <Drawer anchor="bottom" 
                open={isOpen} 
                onClose={toggleDrawer(false)}
                variant="persistent"
                elevation={24}
                sx={{
                    '& .MuiDrawer-paper': {
                        height: '90vh',
                        width: '95vw',
                        left: '2.5vw',
                        position: 'absolute',
                        bottom: isOpen ? 0 : '-30vh',  // 30vh is hidden, 20vh is peeking out
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        transition: 'bottom 0.5s ease',
                    }
                }}
                >
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <p>This is the drawer content!</p>
          </div>
        </Drawer>
      </div>
    );
  }