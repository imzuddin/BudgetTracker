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
                        height: '95vh',
                        width: '96vw',
                        left: '2vw',
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
            <h1> Your Dashboard </h1>
          </div>
        </Drawer>
      </div>
    );
  }