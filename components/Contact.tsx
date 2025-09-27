import { useEffect, useRef, useState } from 'react';

export default function Contact({ title, description, buttonLabel }: { title: string; description: string; buttonLabel: string }) {
	const formRef = useRef<HTMLFormElement>(null);
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => {
		import('emailjs-com').then(({ default: emailjs }) => {
			try { emailjs.init('_-JL8QuvvYmyGCP9r'); } catch {}
		});
	}, []);

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!formRef.current) return;
		const form = formRef.current;
		const data = {
			from_name: (form.elements.namedItem('name') as HTMLInputElement).value,
			phone_number: (form.elements.namedItem('phone') as HTMLInputElement).value,
			from_email: (form.elements.namedItem('email') as HTMLInputElement).value,
			message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
		};
		setSubmitting(true);
		const emailjs = (await import('emailjs-com')).default;
		try {
			await emailjs.send('service_mb270rv', 'template_3bvd27e', data);
			alert('Thanks! We will contact you soon.');
			form.reset();
		} catch (err) {
			alert('Error sending message! Please try again.');
			console.error(err);
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<section id="contact" className="py-20 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-10">
					<h2 className="m-2 inline-block text-4xl md:text-5xl bg-gradient-to-r from-[#ffac00] to-[#fd5e79] bg-clip-text text-transparent tracking-[.2rem]">{title}</h2>
					<p className="text-slate-600 text-lg">{description}</p>
				</div>
				<div className="bg-white shadow-soft rounded-2xl p-4 md:p-8 grid md:grid-cols-2 gap-4 md:gap-6">
					<div className="order-2 md:order-1">
						<form ref={formRef} onSubmit={onSubmit} className="space-y-4">
							<div className="grid sm:grid-cols-2 gap-4">
								<input name="name" placeholder="Name" required className="h-11 w-full border border-gray-300 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-[#fd5e79]" />
								<input name="phone" placeholder="Contact number" required maxLength={18} className="h-11 w-full border border-gray-300 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-[#fd5e79]" />
							</div>
							<input type="email" name="email" placeholder="Email" required className="h-11 w-full border border-gray-300 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-[#fd5e79]" />
							<textarea name="message" placeholder="Your Message" required className="h-36 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#fd5e79]" />
							<button disabled={submitting} className="rounded-full bg-gradient-to-r from-[#ffac00] to-[#fd5e79] text-white shadow px-8 h-11 hover:opacity-90">{submitting ? 'Submitting...' : buttonLabel}</button>
						</form>
					</div>
					<div className="order-1 md:order-2">
						<iframe title="Geolocation" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Jl.%20Jatinegara%20Timur%20No.101,%20RT.8/RW.2,%20Bali%20Mester,%20Kecamatan%20Jatinegara,%20Kota%20Jakarta%20Timur,%20Daerah%20Khusus%20Ibukota%20Jakarta%2013310+(PT.%20Tech%20Innovation%20Purtanindo)&t=&z=14&ie=UTF8&iwloc=B&output=embed" width="100%" height="100%" className="min-h-[320px] md:min-h-[400px] rounded-xl" style={{ border: 0 }} loading="lazy" />
					</div>
				</div>
			</div>
		</section>
	);
}


