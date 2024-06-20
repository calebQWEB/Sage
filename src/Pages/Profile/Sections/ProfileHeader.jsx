import { useEffect, useState } from 'react'
import { styles } from '../../../styles'
import { auth } from '../../../firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { setQuote } from '../../../ReduxSlices/quoteSlice'
import Button from '../../../components/common/Button'

const ProfileHeader = () => {
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const quote = useSelector((state) => state.quote.value)
    const [favQuote, setFavQuote] = useState('')

    const [showQuote, setShowQuote] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
        })

        return unsubscribe
    }, [user])

    const onSetQuote = () => {
        setShowQuote(true)
        dispatch(setQuote(favQuote))
    }

    return (
        <section className={`${styles.paddingY}`}>
            <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-5'>
                <img src={user?.photoURL || 'https://res.cloudinary.com/dmdg0lwhz/image/upload/v1716033496/cubes-male-avatar-1_wvwbyq.png'} alt={user?.displayName || 'User-photo'} className='w-24 h-24 sm:w-48 sm:h-48' />
                <h1 className='text-link sm:text-2xl font-bold'>{user?.displayName || user?.email}</h1>
            </div>
            <div className='mt-16 text-center sm:text-start flex flex-col items-center justify-center sm:block'>
                <span className='text-linkMobile text-link font-medium'>Give us your favorite quote</span>
                {showQuote ?
                    <div className='mt-5 flex flex-col gap-5 items-center justify-center sm:items-start sm:justify-start'>
                        <div className='flex items-center justify-center text-start w-full sm:w-1/2 min-h-24 border border-1 border-solid border-gray-700 rounded-md p-3 font-bold sm:text-medium'>
                            "{quote}"
                        </div>
                        <Button textColor='text-black' text='Change Quote' click={() => {setShowQuote(false)}}/>
                    </div>
                    :
                    <form className='mt-5 flex flex-col gap-5 items-center justify-center sm:items-start sm:justify-start w-full'>
                        <textarea className='w-full sm:w-1/2 min-h-24 border border-2 border-solid border-black rounded-md p-3' name="quote" placeHolder='Favourite Quote' value={favQuote} onChange={(e) => { setFavQuote(e.target.value) }} />
                        <Button textColor='text-black' text='Set Quote' click={onSetQuote} />
                    </form>}
            </div>
        </section>
    )
}

export default ProfileHeader