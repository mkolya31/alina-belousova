import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    image: props => ({
        width: `${props.docWidth}px`,
        height: 'auto',
    })
})

const getDocumentWidth = () => document.documentElement.clientWidth

export function Image (props) {

    const { src: imageSrc } = props

    const [docWidth, setDocWidth] = useState(getDocumentWidth)

    useEffect(() => {
        window.addEventListener('resize', handleDocumentResize)

        return function cleanup() {
            window.removeEventListener('resize', handleDocumentResize)
        }
    })

    const handleDocumentResize = () => {
        return setDocWidth(getDocumentWidth())
    }

    const classes = useStyles({ docWidth })

    return (
        <img src={imageSrc} className={classes.image} />
    )
}

Image.propTypes = {
    src: PropTypes.string
}
