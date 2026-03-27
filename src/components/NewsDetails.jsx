import { Link, useLoaderData, useParams } from "react-router";
import Header from "./Header";
import RighAside from "./homelayout/RighAside";

const NewsDetails = () => {

    const { Id } = useParams();
    const newses = useLoaderData();
    const news = newses.find(n => n.id === Id);

    const { category_id, title, image_url, details, } = news;
    console.log(news)

    return (
        <div>
            <header className="py-3">
                <Header></Header>
            </header>

            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <div className="col-span-9 p-3 shadow">
                    <div>
                        <img className="w-full rounded h-96 object-cover" src={image_url} alt="" />
                    </div>
                    <div className="p-1 space-y-5 mt-5">
                        <h2 className="text-2xl font-semibold my-3">{title}</h2>
                        <p className="text-justify">{details}</p>
                        <p className="text-justify">{details}</p>
                        <Link to={`/category/${category_id}`} className="btn btn-secondary"> {"<--"} Back to category</Link>
                    </div>

                </div>

                <div className="col-span-3 sticky top-0 h-fit">
                    <RighAside></RighAside>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;