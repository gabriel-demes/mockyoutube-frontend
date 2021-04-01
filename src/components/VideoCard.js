import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/VideoCard.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoSubtitle, InfoTitle } from '@mui-treasury/components/info';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

const useStyles = makeStyles(() => ({
    card: {
      margin: 10,
      Width: 100,
      position: 'relative',
      boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
      backgroundColor: '#eeee',
      overflow: 'visible',
      borderRadius: '1.5rem',
      transition: '0.4s',
      '&:hover': {
        transform: 'translateY(-2px)',
        '& $shadow': {
          bottom: '-1.5rem',
        },
        '& $shadow2': {
          bottom: '-2.5rem',
        },
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: 0,
        display: 'block',
        width: '100%',
        bottom: -1,
        height: '100%',
        borderRadius: '1.5rem',
        backgroundColor: 'rgba(0,0,0,0.08)',
      },
    },
    main: {
        
      overflow: 'hidden',
      borderTopLeftRadius: '1.5rem',
      borderTopRightRadius: '1.5rem',
      zIndex: 1,
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        display: 'block',
        width: '100%',
        height: '100%',
        
      },
    },
    content: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      zIndex: 1,
      padding: '1.5rem 1.5rem 1rem',
    },
    avatar: {
      width: 48,
      height: 48,
    },
    tag: {
      display: 'inline-block',
      fontFamily: "'Sen', sans-serif",
      backgroundColor: '#ff5dac',
      borderRadius: '0.5rem',
      padding: '2px 0.5rem',
      color: '#fff',
      marginBottom: '0.5rem',
    },
    title: {
      fontFamily: "'Sen', sans-serif",
      fontSize: '2rem',
      fontWeight: 800,
      color: '#fff',
    },
    author: {
      zIndex: 1,
      position: 'relative',
      borderBottomLeftRadius: '1.5rem',
      borderBottomRightRadius: '1.5rem',
    },
    shadow: {
      transition: '0.2s',
      position: 'absolute',
      zIndex: 0,
      width: '88%',
      height: '100%',
      bottom: 0,
      borderRadius: '1.5rem',
      backgroundColor: 'rgba(0,0,0,0.06)',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    shadow2: {
      bottom: 0,
      width: '72%',
      backgroundColor: 'rgba(0,0,0,0.04)',
    },
  }));

function VideoCard( {video} ) {

    const styles = useStyles()
    const mediaStyles = useCoverCardMediaStyles();

    return (
        <div className="vidcard">
        <Link to={`/video/${video.id}`} style={{color: 'black'}}>
            <Card className={styles.card}>
                
                <Box className={styles.main} minHeight={200} position={'relative'}>

                    <CardMedia
                        classes={mediaStyles}
                        image={video.thumbnail}
                    />
                </Box>
                
                <Row
          className={styles.author}
          m={0}
          p={3}
          pt={2}
          gap={2}
          bgcolor={'common.white'}
        >
          <Item>
            <Avatar
              className={styles.avatar}
            >{video.user.username.slice()[0]}</Avatar>
          </Item>
          <Info position={'middle'} useStyles={useNewsInfoStyles}>
            <InfoTitle>{video.title}</InfoTitle>
            <InfoSubtitle>{Date(video.created_at).split('G')[0]}</InfoSubtitle>
          </Info>
        </Row>
        
        <div className={styles.shadow} />
        <div className={`${styles.shadow} ${styles.shadow2}`} />
      </Card>
      </Link>
      </div>
        
    )
}

export default VideoCard