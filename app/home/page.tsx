import { Container, Section, SectionTitle } from "@/components/section";
import Sliders from "./sliders";
import { venuesData } from "@/data/venues";
import EventSlider from "./event-slider";
import { eventsData } from "@/data/events";
import FoodCard from "./food-card";
import { foodsData } from "@/data/foods";
import { hotelsData } from "@/data/hotels";
import HotelCard from "./hotel-card";
import HeroSlider from "./hero-slider";

const HomePage = () => {
  return (
    <div>
      <Section className="py-0 lg:py-0">
        <Container>
          <HeroSlider />
        </Container>
      </Section>
      <Section className="bg-background py-16 lg:py-24">
        <Container>
          <SectionTitle>Venues in your city</SectionTitle>
          <div className="py-10">
            <Sliders data={venuesData} />
          </div>
        </Container>
      </Section>
      <Section className="bg-card">
        <Container>
          <SectionTitle>Decoration Event</SectionTitle>
          <div className="py-10">
            <EventSlider data={eventsData} />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle>Nowring Food Kitchen</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-4">
            {foodsData.map((item, index) => (
              <FoodCard key={`food-card-${index}`} item={item} />
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-card">
        <Container>
          <SectionTitle>Select The restaurant of your choice</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {hotelsData.map((item, index) => (
              <HotelCard key={`hotel-card-${index}`} item={item} />
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle>Promoted Weeding Photographers</SectionTitle>
        </Container>
      </Section>
    </div>
  );
};

export default HomePage;
