import React from 'react';
import '../App.css';
import { ResponsiveLine } from "@nivo/line";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  
  
const data = [
    {
        "id": "line1",
        "color": "hsl(43, 70%, 50%)",
        "data": [
            {
                "x": "Jan",
                "y": 197
            },
            {
                "x": "Feb",
                "y": 108
            },
            {
                "x": "Mar",
                "y": 99
            },
            {
                "x": "Apr",
                "y": 22
            },
            {
                "x": "May",
                "y": 154
            },
            {
                "x": "June",
                "y": 52
            },
            {
                "x": "July",
                "y": 142
            },
            {
                "x": "Oct",
                "y": 107
            },
            {
                "x": "Nov",
                "y": 202
            },
            {
                "x": "Dec",
                "y": 38
            },
        ]
    },
];

const line1Color = "green";

export default function Profile() {
    
  console.log("Graph1 Data: ", data);
  return (
      <div className="App">
            <h1> Coca Cola</h1>
            <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
        >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </StyledBadge>
        <div className="wrapper">
          <div className="graphContainer">
            <ResponsiveLine
                curve="monotoneX"
                data={data}
                colors={[line1Color]}
                layers={["grid", "axes", "lines", "markers", "legends"]}
                axisLeft={{
                  legend: "My Donation",
                  legendPosition: "middle",
                  legendOffset: -40
                }}
                
                theme={getColoredAxis(line1Color)}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            />
          </div>

        </div>
      </div>
  );
}


const getColoredAxis = color => {
  return {
    axis: {
      ticks: {
        line: {
          stroke: color
        },
        text: { fill: color }
      },
      legend: {
        text: {
          fill: color
        }
      }
    }
  };
};
