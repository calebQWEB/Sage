import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styles } from "../../styles";
import { useApi } from "../../utils/api";
import PdfViewer from './Components/PdfViewer'
import BookAlert from './Components/BookAlert'
import { FaLongArrowAltLeft } from "react-icons/fa";

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Details = () => {
  const { id, category } = useParams();
  const { fetchBooksById } = useApi();

  const [showAlert, setShowAlert] = useState(false)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState("");

  const [showPdf, setShowPdf] = useState(false)

  useEffect(() => {
    fetchBooksById(category, id, setData, setError, setLoading);
  }, []);

  if (loading) return <div className='canvas-container'><div className='canvas-loader'></div></div>

  return (
    <main className={`${styles.padding} bg-gray-100 sm:flex items-start justify-center gap-10`}>
      {showAlert && <BookAlert bookTitle={data?.title} setShowAlert={setShowAlert}/>}
      {showPdf && <div className='flex items-start justify-start cursor-pointer' onClick={() => setShowPdf(false)}><FaLongArrowAltLeft size={30}/></div>}
      {!showPdf && (
        <aside className="flex flex-col items-start justify-start gap-5 max-w-lg border border-solid border-1 border-gray-700 p-10">
          <img
            src={data?.imageURL}
            alt={data?.title}
            className="w-full h-full sm:w-[400px] sm:h-[500px]"
          />
          <div>
            {data?.genre.map((item, index) => {
              return (
                <span
                  key={data?.id}
                  className="border border-2 border-solid border-secondary rounded-md px-5 py-2 font-bold text-linkMobile sm:text-link"
                >
                  {item}
                </span>
              );
            })}
          </div>
          <h1 className="text-black font-black md:text-[40px] sm:text-[30px] xs:text-[24px] text-[30px]">
            {data?.title}
          </h1>
          <p className="sm:text-[16px] text-[14px] text-black tracking-wider">
            {data?.description}
          </p>
          <div>
            <button onClick={() => setShowPdf(true)} className="bg-headers rounded-md cursor-pointer relative lg:px-8 lg:py-3 px-6 py-3 group hover:z-20 text-black font-bold md:text-link text-linkMobile">
              Start Reading
            </button>
          </div>
        </aside>
      )}

      {showPdf && <PdfViewer bookTitle={data?.title} bookId={data?.id} setShowAlert={setShowAlert} bookCategory={category}/>}
    </main>
  );
};

export default Details;
