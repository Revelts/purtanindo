import { useMemo, useState } from 'react';

function Accordion({ question, answer }: { question: string; answer: string }) {
	const [open, setOpen] = useState(false);
	return (
		<div className="mb-4 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
			<button className="w-full text-left px-5 py-4 flex items-center justify-between" onClick={() => setOpen(o => !o)}>
				<span className="font-medium text-slate-800">{question}</span>
				<i className={`fa-solid ${open ? 'fa-chevron-up' : 'fa-chevron-down'} text-slate-500`} />
			</button>
			<div className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
				<div className={`text-slate-600 text-sm leading-6 ${open ? 'px-5 pb-5' : 'px-5 pb-0'}`}>{answer}</div>
			</div>
			<div className="h-1 bg-gradient-to-r from-[#ffac00] to-[#fd5e79]" />
		</div>
	);
}

export default function FAQ({ title, questions }: { title: string; questions: { QUESTION: string; ANSWER: string }[] }) {
	const featured = useMemo(() => questions.slice(0, 3), [questions]);
	return (
		<section id="faq" className="py-20 bg-white">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-10">
					<h2 className="m-2 inline-block text-4xl md:text-5xl bg-gradient-to-r from-[#ffac00] to-[#fd5e79] bg-clip-text text-transparent tracking-[.2rem]">{title}</h2>
					<p className="text-slate-600">Jawaban ringkas untuk pertanyaan paling sering ditanyakan.</p>
				</div>
				<div className="grid md:grid-cols-2 gap-6">
					<div>
						{featured.map((q, i) => (<Accordion key={i} question={q.QUESTION} answer={q.ANSWER} />))}
					</div>
					<div>
						{questions.slice(3).map((q, i) => (<Accordion key={i} question={q.QUESTION} answer={q.ANSWER} />))}
					</div>
				</div>
			</div>
		</section>
	);
}


