import React from 'react';
import Hero from './Hero';
import CountdownTimer from './CountdownTimer';
import Tracks from './Tracks';
import Timeline from './Timeline';
import Prizes from './Prizes';
import PaymentUpload from './PaymentUpload';
import RegistrationForm from './RegistrationForm';
import Sponsors from './Sponsors';
import FAQ from './FAQ';
import Team from './Team';
import Footer from './Footer';

const Home: React.FC = () => {
    return (
        <>
                <Hero />
                <CountdownTimer />
                <Timeline />
                <Tracks />
                <Prizes />
                <PaymentUpload />
                <RegistrationForm />
                <Sponsors />
                <FAQ />
                <Team />
                <Footer />

        </>
    );
};

export default Home;