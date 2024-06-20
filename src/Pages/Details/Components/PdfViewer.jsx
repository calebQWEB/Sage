import { useState, useRef, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase.config.js';
import { bookDb } from '../Functions/readBooks';

function PdfViewer({ bookTitle, bookId, setShowAlert, bookCategory }) {
  const { addReadBooks, saveBookProgress } = bookDb();
  const [user, setUser] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState();
  const pdfContainerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    // Scroll to the saved page number
    if (pdfContainerRef.current) {
      const pageHeight = pdfContainerRef.current.scrollHeight / numPages;
      const scrollTop = (pageNumber - 1) * pageHeight;
      pdfContainerRef.current.scrollTop = scrollTop;
    }
  }

  function onDocumentLoadError(error) {
    console.error('Error while loading document: ', error);
  }

  function handleScroll() {
    if (pdfContainerRef.current) {
      const container = pdfContainerRef.current;
      const pageHeight = container.scrollHeight / numPages;
      const scrollPosition = container.scrollTop + container.clientHeight / 2;
      const newPageNumber = Math.min(
        numPages,
        Math.max(1, Math.ceil(scrollPosition / pageHeight))
      );
      setPageNumber(newPageNumber);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const container = pdfContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [numPages]);

  useEffect(() => {
    saveBookProgress(bookTitle, bookId, bookCategory, pageNumber)
  }, [pageNumber, bookTitle, bookId, bookCategory]);

  useEffect(() => {
    if (pageNumber === numPages) {
      setShowAlert(true);

      if (user) {
        addReadBooks(bookTitle, user.uid);
      }
    }
  }, [pageNumber, bookTitle, bookId, numPages, setShowAlert, user]);

  return (
    <div className="p-[50px] bg-gray-200">
      <p className="text-center mb-2 text-2xl font-bold">
        Page {pageNumber} of {numPages || '...'}
      </p>
      <div
        className="pdf-container overflow-y-auto"
        style={{ height: '600px' }}
        ref={pdfContainerRef}
      >
        <Document
          file="/napo-hill.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          {numPages &&
            Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
        </Document>
      </div>
    </div>
  );
}

export default PdfViewer;
