import "./Points.css";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

interface ContainerProps {
  username: string;
}

const Points: React.FC<ContainerProps> = ({ username }) => {
  const data = [
    {
      'division': '성희롱',
      'point': 10,
      'accumulate': 10,
      'issuer': '김진효',
      'date': '2022-10-10'
    },
    {
      'division': '성희롱',
      'point': 10,
      'accumulate': 10,
      'issuer': '김진효',
      'date': '2022-10-10'
    },
    {
      'division': '성희롱',
      'point': 10,
      'accumulate': 10,
      'issuer': '김진효',
      'date': '2022-10-10'
    },
    {
      'division': '성희롱',
      'point': 10,
      'accumulate': 10,
      'issuer': '김진효',
      'date': '2022-10-10'
    },
    {
      'division': '전국대회 수상',
      'point': -10,
      'accumulate': 10,
      'issuer': '김진효',
      'date': '2022-10-10'
    }
  ]


  return (
    <div>
      <div className="align">
        <Timeline position="alternate" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
          {Object.values(data).map((log:any, index:number) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{m:'auto 0'}}
                variant="body2"
                >
                  <div><span style={{ color: log.point < 0 ? '#ce2c2c' : '#04ad04' }}>{log.point > 0 ? '상점' : '벌점'} {Math.abs(log.point)}점</span></div>
                  <div>총 <span style={{ color: '#2951c7' }}>{log.accumulate}점 </span></div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector/>
                <TimelineDot style={{backgroundColor: log.point < 0 ? '#ce2c2c' : '#04ad04'}}>
                  {
                    log.point < 0 ? <RemoveIcon/> : <AddIcon/>
                  }
                </TimelineDot>
                <TimelineConnector/>
              </TimelineSeparator>

              <TimelineContent sx={{py: '12px', px: 2}}>
                <Typography variant="h6" component="span">
                  <div className={'division'}>{log.division}</div>
                </Typography>
                <Typography><span className={'date'}>{log.date}</span></Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        <span className="result">
          현재 {username} 님의 상벌점은 20점 입니다
        </span>
      </div>
      
    </div>
  );
};
export default Points;
