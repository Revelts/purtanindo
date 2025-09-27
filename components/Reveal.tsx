import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!ref.current) return;
		const el = ref.current;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					el.classList.add('show');
					observer.unobserve(el);
				}
			});
		}, { threshold: 0.12 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className={`reveal ${className}`}>{children}</div>
	);
}


