import { useContext } from "react";
import { NewsContext } from "../ContextAPI/CreateContext";
import LetestTitles from "./LetestTitles";
import Marquee from "react-fast-marquee";



const LatestNews = () => {



  const { newses } = useContext(NewsContext);

  // console.log(newses)



  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={70}>
        {
          newses.map(news => <LetestTitles news={news} key={news.id}></LetestTitles>)
        }
      </Marquee>

    </div >
  );
};

export default LatestNews;
