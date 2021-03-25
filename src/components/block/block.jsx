import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
    background: ({ background: { imageUrl, position, attachment } }) => ({
        width: '100vw',
        minHeight: '100vh',
        padding: '30px',
        boxSizing: 'border-box',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: position || 'center',
        backgroundAttachment: attachment || 'scroll'
    })
}))

const Block = props => {
    const { children } = props
    const classes = useStyles(props)

    return (
        <Box
            className={classes.background}
        >
            {children}
        </Box>
    )
}

Block.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.shape({
        imageUrl: PropTypes.string,
        position: PropTypes.oneOf(['left', 'center', 'right', 'top', 'bottom', 'initial', 'inherit']),
        attachment: PropTypes.oneOf(['scroll', 'fixed', 'local', 'initial', 'inherit'])
    }),
    classes: PropTypes.shape({
        background: PropTypes.object
    })
}

Block.defaultProps = {
    background: {
        imageUrl: '',
        position: 'center',
        attachment: 'scroll'
    },
    classes: {}
}

export default Block
