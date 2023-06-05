# server-deployment-practice1

### Notes that i wrote during the lecture 
Nodejs : runtime enviroment 
Express : framework 
** app.use()---> apply in all of the routes

Ci/Cd : continues integration - continues development 
-- actions search: Nodejs -> configration -> node.js.yml -add main branches if you have branches->commit changes
--  git clone 
-- nip init -y
-- git checkout the another main like "dev"
-- npm i dotenv express
-- 
middlewear function: if you want to send a thing or time before show the data 
-- app.get ('/data',stamper*this is the middle wear", (req,res) =>{
==function stamper(req,res,next){
	res.timestamp = newDate();
	next();

TDD = test driven 
package name for test is jest => 
	npm install --save-dev jest 
	npm i supertest

dev in development not in deployment so thats why we use -dev for install jest
__test__ <-- the name for the file to test to put inside it the tests needed like server.test.js
to activate need to change "test": "jest --coverage --verbose" in package.json

