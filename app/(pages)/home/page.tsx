import SectionTitle from "@/components/section-title";
import Sliders from "./sliders";
import { venuesData } from "@/data/venues";

const HomePage = () => {
    return (
        <div>
            <section className="py-16 lg:py-24 bg-card">

            </section>
            <section className="bg-background py-16 lg:py-24">
                <div className="container">
                    <SectionTitle>Venues in your city</SectionTitle>
                    <div className="py-10">
                        <Sliders  data={venuesData}/>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HomePage;