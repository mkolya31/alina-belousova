import { createMuiTheme } from '@material-ui/core'

export const defaultTheme = createMuiTheme()

export const theme = createMuiTheme({
    typography: {
        h1: {
            fontSize: '2rem',
            color: 'black',
            fontWeight: 500
        },
        h2: {
            fontSize: '1.75rem',
            color: 'white',
        },
        body1: {
            fontSize: '1.5rem',
            color: 'white'
        },
        body2: {
            color: 'white'
        }
    }
})
