
// NOTE --> this file is not transpiled

// register babael to transpile our tests before startin g test harness
require( 'babel-register' )();

// disable webpack features that mocha does not understand
// ignores css imports encountered in js modules
require.extensions[ '.css' ] = function() {};
