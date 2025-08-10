import React from 'react';
import Banner from '../../components/Banner/Banner';
import Map from '../../components/Map/Map';
import TwoSection from '../../components/TwoSection/TwoSection';
import { Helmet } from 'react-helmet';
import UserReview from '../../components/UserReview/UserReview';
import PromotionPopup from '../../components/PromotionPopup/PromotionPopup';

const Home = () => {
    return (
        <div>
           <PromotionPopup></PromotionPopup>
            <Helmet>
                <title>Home | Hotel Star</title>
            </Helmet>
           <Banner></Banner>
           <TwoSection></TwoSection>
           <UserReview></UserReview>
           <Map></Map>
        </div>
    );
};

export default Home;