import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Projects = () => {

    type AccordianListType = {
        [key: string]: any;
    };

    const test = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor enim similique vel quibusdam et natus perspiciatis eaque rem molestiae nam dignissimos, placeat temporibus unde dicta sint quam modi hic explicabo."
    const accordianList: AccordianListType = {
        "one": test, "two": test, "three":test
    }

    return (
        Object.keys(accordianList).map((key: string) =>{
            return (
                <div key={key}>
                    <Accordion className="accordion">
                        <AccordionSummary 
                        expandIcon={<KeyboardArrowDownIcon/>}
                        aria-controls="panella-content"
                        id="panella-header">
                            <Typography>
                                {key}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {accordianList[key]}
                        </AccordionDetails>
                    </Accordion>
                </div>
            )
        })
    )
}