/**
 * Created by Wojtek on 2018-02-22.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const About = () => {
    const styles = {
        about: {
            padding: '30px'
        },
        caption: {
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            color: '#636c72',
            width: '100%',
            textAlign: 'center',
            display: 'block',
            captionSide: 'bottom'
        }
    };
    return (
        <MuiThemeProvider>
            <div className="container">
                <Paper zDepth={4} className="About" style={styles.about}>
                    <h1 style={styles.caption}>BEAR APP API</h1>
                    <h2>It's a simple app build on React and React-Router 4,with using:
                    </h2>
                    <ul>
                        <li>FETCH api</li>
                        <li>Material UI</li>
                        <li>Classnames</li>
                        <li> Features : <br/></li>
                    </ul>
                    <h3>Api used: <a href="https://punkapi.com/documentation/v2">https://punkapi.com/documentation/v2</a></h3>

                    <h3>json get @ <a href="https://api.punkapi.com/v2/beers">https://api.punkapi.com/v2/beers</a></h3>
                </Paper>
            </div>
        </MuiThemeProvider>
    )
};

export default About;
