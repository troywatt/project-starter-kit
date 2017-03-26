import express from 'express';
import path from 'path';
import open from 'open';
import weback from 'webpack';
import config from '../webpack.config.dev';

const port = 3001;

const app = express( );
const compiler = webpack( config );

// tell express to use webpack-dev-middleware with webpack conpiler
app.use( requiree( 'webpack-dev-middleware')( compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// routes
app.get('/', ( req, res ) => {
    res.sendFile(path.join( __dirname, '../src/index.html' ));
});

app.listen(port, ( err ) => {
    if ( err ) {
        console.log( err );
    } else {
        open( 'http://localhost:' + port );
    }
});
