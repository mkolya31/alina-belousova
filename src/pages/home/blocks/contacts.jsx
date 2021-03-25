import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

import img4 from '../../../assets/img/4chb.jpg'
import Block from '../../../components/block/block'

const buttonData = [
    {
        key: 'text-me',
        text: 'Написать мне',
        startIcon: <MailOutlineIcon />
    },
    {
        key: 'inst',
        text: 'Мой Instagram',
        href: 'https://instagram.com/alya_b__?igshid=q69260ynqm31',
        startIcon: <InstagramIcon />
    },
    {
        key: 'youtube',
        text: 'Мой YouTube',
        href: 'https://www.youtube.com/channel/UCF-q-2rJNt_TCUDOhb-vnoQ',
        startIcon: <YouTubeIcon />
    }
]

const useStyles = makeStyles({
    buttonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        margin: '10px 0',
        minWidth: '70%'
    }
})

export function Contacts() {
    const classes = useStyles()

    return (
        <Block
            background={{
                imageUrl: img4
            }}
        >
            <Box>
                <Typography variant="h1">
                    Связаться со мной:
                </Typography>
                <Box
                    className={classes.buttonContainer}
                >
                    {buttonData.map((button) => {
                        const { key, text, ...otherProps } = button

                        return (
                            <Button
                                key={key}
                                variant="contained"
                                className={classes.button}
                                {...otherProps}
                            >
                                {text}
                            </Button>
                        )
                    })}
                </Box>
            </Box>
        </Block>
    )
}
