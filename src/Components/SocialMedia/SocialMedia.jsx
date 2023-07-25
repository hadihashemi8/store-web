import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';;
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import TelegramIcon from '@mui/icons-material/Telegram';







const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft ': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),

    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(0),
        left: theme.spacing(2),
    },
}));

const actions = [
    {id:1 , icon: <LinkedInIcon className="hover:text-blue-500" />, name: 'LinkedIn' },
    {id:2 , icon: <FacebookIcon className="hover:text-blue-500" />, name: 'Facebook' },
    {id:3 , icon: <InstagramIcon className="hover:text-red-500" />, name: 'Instagram' },
    {id:4 , icon: <TelegramIcon className="hover:text-blue-500" />, name: 'Telegram' },
];



export default function SocialMedia() {




    return (
        <Box className=" z-40" sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>

            <Box sx={{ position: 'relative' }}>
                <StyledSpeedDial
                    ariaLabel="SpeedDial playground "

                    icon={<ShareIcon />}
                    direction="down"
                >
                    {actions.map(action => (
                        <SpeedDialAction
                            key={action.id}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </StyledSpeedDial>
            </Box>
        </Box>
    )
}
