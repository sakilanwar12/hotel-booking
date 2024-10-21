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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import WeedingSlider from "./weeding-slider";

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
          <SectionLayer>
            <div className="flex justify-between mb-5">
              <SectionTitle>Promoted Weeding Photographers</SectionTitle>
              <Button asChild className="group">
                <Link href="#">
                  View All
                  <ChevronRight className="ms-0.5 h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
            <WeedingSlider />
          </SectionLayer>
        </Container>
      </Section>
      <div className="h-20 lg:hidden"></div>
    </div>
  );
};

export default HomePage;
