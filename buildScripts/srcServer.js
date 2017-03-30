/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3001;

const app = express( );
const compiler = webpack( config );

// tell express to use webpack-dev-middleware with webpack conpiler
app.use( require( 'webpack-dev-middleware')( compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));



// routes
app.get('/', ( req, res ) => {
    res.sendFile(path.join( __dirname, '../src/index.html' ));
});

// simple api
app.get( '/users', ( req, res ) => {
    res.json([
        { id: 1, firstName: 'troy', lastName: 'watt', email: 'troywatt@gmail.com' },
        { id: 2, firstName: 'john', lastName: 'doe', email: 'johndoe@gmail.com' },
        { id: 3, firstName: 'jane', lastName: 'doe', email: 'janedoe@gmail.com' }
    ]);

});

app.listen(port, ( err ) => {
    if ( err ) {
        console.log( err );
    } else {
        open( 'http://localhost:' + port );
    }
});
