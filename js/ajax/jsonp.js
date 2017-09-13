function response(data) {
	console.log(data);
}

const script = document.createElement('script');
script.src = 'https://foo.bar/api/?callback=response';
document.body.appendChild(script);