import {
  Container,
  Section,
  SectionLayer,
  SectionTitle,
} from "@/components/section";
import Sliders from "./sliders";
import { venuesData } from "@/data/venues";
import EventSlider from "./event-slider";
import { eventsData } from "@/data/events";
import FoodCard from "./food-card";
import { foodsData } from "@/data/foods";
import { hotelsData } from "@/data/hotels";
import HotelCard from "./hotel-card";
import HeroSlider from "./hero-slider";
import { resturantData } from "@/data/resturant";
import ResturantCard from "./resturant-card";

const HomePage = () => {
  return (
    <div>
      <Section className="py-0">
        <Container>
          <HeroSlider />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionLayer>
            <SectionTitle className="mb-3">Venues in your city</SectionTitle>
            <Sliders data={venuesData} />
          </SectionLayer>
        </Container>
      </Section>
      <Section className="py-0">
        <Container>
          <SectionLayer>
            <SectionTitle>Decoration Event</SectionTitle>
            <EventSlider data={eventsData} />
          </SectionLayer>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionLayer>
            <SectionTitle>Nowring Food Kitchen</SectionTitle>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-4">
              {foodsData.map((item, index) => (
                <FoodCard key={`food-card-${index}`} item={item} />
              ))}
            </div>
          </SectionLayer>
        </Container>
      </Section>
      <Section className="py-0">
        <Container>
          <SectionLayer>
            <SectionTitle>
              luxury Awaits:Secure your stay with Ease
            </SectionTitle>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {hotelsData.map((item, index) => (
                <HotelCard key={`hotel-card-${index}`} item={item} />
              ))}
            </div>
          </SectionLayer>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionLayer>
            <SectionTitle>Select The restaurant of your choice</SectionTitle>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {resturantData.map((item, index) => (
                <ResturantCard key={`resturant-card-${index}`} item={item} />
              ))}
            </div>
          </SectionLayer>
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
