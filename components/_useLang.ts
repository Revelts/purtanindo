import { useState, useEffect } from 'react';

export function useLang() {
	const [lang, setLang] = useState<'id' | 'en'>('id');
	useEffect(() => {
		// noop placeholder for shared hook; actual state held by parent on homepage
	}, [lang]);
	return { lang, setLang } as any;
}


