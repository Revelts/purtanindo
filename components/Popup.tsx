import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Popup({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
	useEffect(() => {
		if (!isOpen) return;
		document.body.style.overflow = 'hidden';
		return () => { document.body.style.overflow = ''; };
	}, [isOpen]);

	if (!isOpen) return null;

	return createPortal(
		<div className="fixed inset-0 z-[1000]">
			<div className="absolute inset-0 bg-black/70" onClick={onClose} />
			<div className="absolute inset-0 p-4 flex items-center justify-center">
				<div className="relative bg-white rounded-2xl shadow-xl w-[min(92vw,64rem)] max-h-[85vh] overflow-y-auto overflow-x-hidden">
					<button aria-label="Close" onClick={onClose} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white text-slate-700 shadow hover:bg-slate-100"><i className="fa-solid fa-xmark" /></button>
					{children}
				</div>
			</div>
		</div>,
		document.body
	);
}


