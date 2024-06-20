import {collection, doc, setDoc, increment, serverTimestamp, addDoc, query, orderBy, limit, getDocs} from "firebase/firestore";
import { db, auth } from "../../../firebase.config";

export const bookDb = () => {
    const readBookRef = collection(db, "Read-Books");
    const userRef = collection(db, "users")

    const addReadBooks = async (bookTitle, userId, userName, userPhoto) => {
        try {
            await addDoc(readBookRef, {
                userId: userId,
                content: bookTitle,
                readAt: serverTimestamp()
            })

            const userDocRef = doc(userRef, userId)
            await setDoc(userDocRef, {
                booksRead: increment(1),
                userId: userId,
                userName: userName,
                userPhoto: userPhoto
            }, {merge: true})

            console.log('Added')
        } catch (error) {
            console.error('Error adding book: ', error);
        }
    }

    const getTopUsers = async () => {
        const usersRef = collection(db, 'users')
        const topUsersRef = query(usersRef, orderBy("booksRead", "desc"), limit(3))

        try {
            const querySnapShot = await getDocs(topUsersRef)
            const topUsers = querySnapShot.docs.map(doc => doc.data())

            console.log('Top three')
            return topUsers
        } catch (error) {
            console.error(error)
        }
    }

    const saveBookProgress = async (bookTitle, bookId, category, pageNumber) => {
        const user = auth.currentUser;
        if (!user) return; // Ensure user is authenticated
      
        try {
            const progressDocRef = doc(db, 'Users', user.uid, 'BooksInProgress', bookId);
            await setDoc(progressDocRef, {
              bookTitle,
              category,
              pageNumber,
            }, { merge: true }); 
          
            console.log('Progress saved or updated.');
        } catch(error) {
            console.log(error)
        }
    };
 
    return {
        addReadBooks,
        getTopUsers,
        saveBookProgress
    }
}