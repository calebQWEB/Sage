import './alert.css'

const BookAlert = ({setShowAlert, bookTitle}) => {
    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className='custom-alert-overlay'>
            <div className="custom-alert-overlay">
                <div className="custom-alert">
                    <p className='text-linkMobile sm:text-link'>Congratulations, you completed <span className='font-bold'>"{bookTitle}"</span></p>
                    <button onClick={handleCloseAlert}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default BookAlert