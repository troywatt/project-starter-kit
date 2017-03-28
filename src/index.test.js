import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe( 'our first test',  () => {
    it( 'should pass', () => {
        expect( true ).to.equal( true );
    });
});


describe( 'index.html', () => {
    it( 'should say hello', ( done ) => {
        // get a reference to our html file form file system
        const index = fs.readFileSync( './src/index.html', 'utf-8' );

        // create a jsdom environment by providing a document
        jsdom.env( index, ( err, window ) => {
            const h1 = window.document.getElementsByTagName( 'h1' )[ 0 ];

            expect( h1.innerHTML ).to.equal( 'Hello world!' );
            done();
            // free up memory by closing jsdom document
            window.close();
        } );
    });
});
