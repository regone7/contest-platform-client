import Banner from "../../components/Banner";
import ContestWinnerCard from "../../components/ContestWinnerCard";
import Offer from "../../components/Offer";


const Home = () => {
    return (
        <div>
            <div className="font-lato">
                <Banner></Banner>
            </div>
            <div className="font-lato">
                <Offer></Offer>
            </div>
            <div className="font-lato container mx-auto">
                <div className="md:mt-12">
                    <h1 className="text-2xl font-bold text-center">Our Contest Winner</h1>

                </div>
                <div >
                    <ContestWinnerCard></ContestWinnerCard>
                </div>
            </div>
        </div>
    );
};

export default Home;