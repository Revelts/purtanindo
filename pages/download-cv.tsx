export default function DownloadCV() {
	// This page will immediately redirect the browser to the PDF for download
	return (
		<>
			<meta httpEquiv="refresh" content="0; url=/files/profile.pdf" />
			<p className="p-6">Redirecting to download...</p>
		</>
	);
}


