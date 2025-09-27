export default function Footer() {
	return (
		<footer className="bg-[#0f172a] text-white">
			<div className="bg-gradient-to-br from-[#f60001] to-[#fd5e78] py-16">
				<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
					<div>
						<h4 className="uppercase text-sm font-bold mb-5 tracking-wider">About Us</h4>
						<ul className="space-y-2">
							<li><a href="#home">Home</a></li>
							<li><a href="#about">About us</a></li>
							<li><a href="#service">Our services</a></li>
							<li><a href="#">Terms & condition</a></li>
							<li><a href="#">Privacy policy</a></li>
						</ul>
					</div>
					<div>
						<h4 className="uppercase text-sm font-bold mb-5 tracking-wider">Useful Links</h4>
						<ul className="space-y-2">
							<li><a href="#portfolio">Portfolio</a></li>
							<li><a href="#team">Team</a></li>
							<li><a href="/careers.html">Career</a></li>
							<li><a href="#contact">Contact</a></li>
							<li><a href="#faq">FAQ</a></li>
						</ul>
					</div>
					<div className="text-sm">
						<h4 className="uppercase text-sm font-bold mb-5 tracking-wider">Contact Us</h4>
						<p>
							Jl. Jatinegara Timur<br/>
							Bali Mester, Kecamatan Jatinegara, Kota Jakarta Timur<br/>
							Indonesia<br/>
							<strong>Phone:</strong> +62-851-2111-4156<br/>
							<strong>Email:</strong> leynardoyosef@purtanindo.com
						</p>
						<div className="flex gap-2 mt-3">
							<a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="bg-white/95 hover:bg-white text-black w-9 h-9 grid place-items-center rounded"><i className="fa-brands fa-facebook-f" /></a>
							<a href="https://twitter.com/login?lang=en" target="_blank" rel="noreferrer" className="bg-white/95 hover:bg-white text-black w-9 h-9 grid place-items-center rounded"><i className="fa-brands fa-x-twitter" /></a>
							<a href="https://www.linkedin.com/company/pt-tech-innovation-purtanindo" target="_blank" rel="noreferrer" className="bg-white/95 hover:bg-white text-black w-9 h-9 grid place-items-center rounded"><i className="fa-brands fa-linkedin-in" /></a>
							<a href="https://www.instagram.com/purtanindo/" target="_blank" rel="noreferrer" className="bg-white/95 hover:bg-white text-black w-9 h-9 grid place-items-center rounded"><i className="fa-brands fa-instagram" /></a>
							<a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" rel="noreferrer" className="bg-white/95 hover:bg-white text-black w-9 h-9 grid place-items-center rounded"><i className="fa-brands fa-google" /></a>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-6xl mx-auto px-4 py-6 text-sm">Copyright © 2025 PT.Tech Innovation Purtanindo. All Rights Reserved.</div>
		</footer>
	);
}


