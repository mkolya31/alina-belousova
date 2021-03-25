import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import img2 from '../../../assets/img/2chb.jpg'
import Block from '../../../components/block/block'

const services = [
    'Стильная (online/offline) консультация',
    'Создаю персональный lookbook',
    'Разбор гардероба',
    'Гайд необхдимых покупок',
    'Шопинг сопровождение',
    'Создание имиджа',
    'Чеклист шопинга (помогу найти необходимую вещь)'
]

export function PersonalStylist() {
    return (
        <Block
            background={{
                imageUrl: img2
            }}
        >
            <Typography
                variant="h1"
            >
                Чем я занимаюсь:
            </Typography>
            <Box>
                <Typography
                    variant="h2"
                >
                    Услуги персонального стилиста
                </Typography>
                <ul>
                    {services.map((text, i) => (
                        <li
                            key={i}
                        >
                            <Typography
                                variant="body1"
                            >
                                {text}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </Box>
        </Block>
    )
}
