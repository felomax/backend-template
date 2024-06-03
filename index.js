const express = require ("express");

const app = express();

const port = process.env.PORT || 3000;


app.get('/',(req, res)=>{
	const htmlResponse = `
		<html>
			<head>
				<title>prueba backend felipe</title>
			</head>
			<body>
				<h1>
					soy un proyecto de prueba para vercel
				</h1>
			</body>
		</html>`;
		res.send(htmlResponse)
})


app.listen(port, () =>{
	console.log(`port running on port ${port}`)
})
