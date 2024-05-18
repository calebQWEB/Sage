import React from "react";
import { styles } from "../../../styles";
import { topSagesNames } from "../../../constants";
import TopSageCard from "../Components/topSageCard";
import { slideIn } from "../../../utils/motion";

const TopSages = () => {
  return (
    <section className={`${styles.paddingY} text-center sm:text-start`}>
      <h1 className={`${styles.sectionHeadText}`}>Sages of the week</h1>
      <p className={`${styles.sectionSubText}`}>
        Every month sages are picked based on number of books read, Are you one
        of them?
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-16">
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
