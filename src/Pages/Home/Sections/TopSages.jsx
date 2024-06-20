import {useState, useEffect} from "react";
import { styles } from "../../../styles";
import { topSagesNames } from "../../../constants";
import TopSageCard from "../Components/topSageCard";
import { slideIn } from "../../../utils/motion";
import {bookDb} from '../../Details/Functions/readBooks'

const TopSages = () => {
  const {getTopUsers} = bookDb()
  const [topSages, setTopSage] = useState(null)

  useEffect(() => {
    const fetchTopUsers = async () => {
      const users = await getTopUsers()
      setTopSage(users)

      console.log(users)
    }

    fetchTopUsers()
  }, [])

  return (
    <section className={`${styles.paddingY} text-center sm:text-start`}>
      <h1 className={`${styles.sectionHeadText}`}>Sages of the month</h1>
      <p className={`${styles.sectionSubText}`}>
        Everyday sages are picked based on number of books read, Are you one
        of them?
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-16 overflow-x-hidden">
        {topSagesNames.map((item, index) => {
          return (
            <TopSageCard
              key={item.id}
              sageImage={item.sagePhoto}
              sageName={item.sageName}
              booksRead={item.booksRead}
              sageQuote={item.sageQuote}
              id={item.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TopSages;
