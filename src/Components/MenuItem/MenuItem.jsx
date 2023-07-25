import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function MenuItem(props) {
    return (
        <div>
            <Accordion className='my-1 '>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <p className='text-xl cursor-pointer'>{props.category}</p>
                </AccordionSummary>
                {props.subMenu.length > 0 && props.subMenu.map(sub => (
                    <div key={sub.id}>
                        {sub.subMenuItems.length > 0 ? (
                            <Accordion  className='my-0 Accordion cursor-pointer '>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <p className='text-lg '>{sub.subMenuTitle}</p>
                                </AccordionSummary>
                                {sub.subMenuItems.map(item => (
                                    < AccordionDetails key={item.id} className='hover:bg-gray-200 cursor-pointer'>
                                        <Typography>{item}</Typography>
                                    </AccordionDetails>

                                ))}
                            </Accordion>
                        ) : (
                            < AccordionDetails  >
                                <Typography>{sub.subMenuTitle}</Typography>
                            </AccordionDetails>


                        )}
                    </div>
                ))
                }
            </Accordion >
        </div >
    )
}

