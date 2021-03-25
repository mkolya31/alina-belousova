import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import img1 from '../../../assets/img/1chb.jpg'
import Block from '../../../components/block/block'

const useStyles = makeStyles({

})

export function Welcome() {

    return (
        <Block
            background={{
                imageUrl: img1
            }}
        >
            <Box>
                <Typography variant="h1">
                    Привет! Я Аля Белоусова
                </Typography>
                <Typography variant="h2">
                    Digital stylist и визуализатор твоей индивидуальности
                </Typography>
            </Box>
        </Block>
    )
}
