import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLocation } from 'react-router-dom';

// Try different worker configuration for better PDF rendering
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const resumeFile = '/dhananjay_sable_resume.pdf'; // Ensure it's in the public/ folder

const ResumeSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [numPages, setNumPages] = useState(null);

    const location = useLocation();
    const isResumePage = location.pathname === '/resume';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'Dhananjay_Sable_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleView = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLoadSuccess = ({ numPages }) => {
        console.log('PDF loaded with', numPages, 'pages');
        setNumPages(numPages);
    };

    const handleLoadError = (error) => {
        console.error('PDF load error:', error);
    };

    return (
        <>
            <section
                className={`resume-section w-full py-16 px-4 md:px-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-xl animate-fade${isResumePage ? ' pt-24 md:pt-32' : ''}`}
                id="resume"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Resume
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Download my resume to learn more about my experience, skills, and qualifications.
                        You can also view it online before downloading.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={handleDownload}
                            className="download-btn group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400/50"
                        >
                            <div className="flex items-center gap-3">
                                <span>Download Resume</span>
                            </div>
                        </button>
                        <button
                            onClick={handleView}
                            className="view-btn group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
                        >
                            <div className="flex items-center gap-3">
                                <span>View Resume</span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-1 sm:p-2 md:p-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[98vh] flex flex-col mx-1 sm:mx-2 md:mx-0">
                        <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Resume Preview</h3>
                        </div>
                        <div className="flex-1 overflow-auto p-4 flex justify-center items-start">
                            <Document
                                file={resumeFile}
                                onLoadSuccess={handleLoadSuccess}
                                onLoadError={handleLoadError}
                                loading={<div className="text-center text-gray-500">Loading PDF...</div>}
                                error={<div className="text-center text-red-500">Failed to load PDF.</div>}
                            >
                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page
                                        key={`page_${index + 1}`}
                                        pageNumber={index + 1}
                                        width={window.innerWidth < 768 ? window.innerWidth - 80 : 700}
                                        renderTextLayer={true}
                                        renderAnnotationLayer={true}
                                    />
                                ))}
                            </Document>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 border-t border-gray-200 dark:border-gray-700 sticky bottom-0 bg-white dark:bg-gray-800 z-10">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors w-full sm:w-auto"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleDownload}
                                className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResumeSection;
