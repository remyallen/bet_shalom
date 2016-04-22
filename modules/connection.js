//connectionsString for Heroku database
var connectionString = '';

if(process.env.DATABASE_URL !== undefined) {
    connectionString = process.env.DATABASE_URL + '?ssl=true';
} else {
<<<<<<< HEAD
    connectionString = 'postgres://localhost:5432/bet_shalom';
    //connectionString = 'postgres://dqqhueitqjswre:wgvCElpoXCoYBkANPhDXVYxjLp@ec2-23-21-215-184.compute-1.amazonaws.com:5432/dfdvljek5oqofi';

=======
    connectionString = 'postgres://dqqhueitqjswre:wgvCElpoXCoYBkANPhDXVYxjLp@ec2-23-21-215-184.compute-1.amazonaws.com:5432/dfdvljek5oqofi';
>>>>>>> 861ebb9f19b7823c616bf146743b11be7c8a881a
}

module.exports = connectionString;



//connectionsString for localhost database
//var connectionString = '';
//
//if(process.env.DATABASE_URL !== undefined) {
//    connectionString = process.env.DATABASE_URL + 'ssl';
//} else {
//    connectionString = 'postgres://localhost:5432/bet_shalom';
//}
//
//module.exports = connectionString;