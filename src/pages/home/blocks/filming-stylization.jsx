import React from 'react'
import Typography from '@material-ui/core/Typography'

import img3 from '../../../assets/img/3chb.jpg'
import Block from '../../../components/block/block'

const services = [
    'Стилизация частных съёмок',
    'Стилизация коммерческих съёмок',
    'Создание fashion контента'
]

export function FilmingStylization() {
    return (
        <Block
            background={{
                imageUrl: img3
            }}
        >
            <Typography
                variant="h2"
            >
                Услуги стилизации съёмок
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
        </Block>
    )
}
