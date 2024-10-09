import { Container, Section, SectionTitle } from "@/components/section";
import Sliders from "./sliders";
import { venuesData } from "@/data/venues";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import EventSlider from "./event-slider";
import { eventsData } from "@/data/events";
import FoodCard from "./food-card";

const HomePage = () => {
  return (
    <div>
      <section className="bg-card py-16 lg:py-24"></section>
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
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <FoodCard />
            {/* <Button variant={"outline"}>
              <Plus className="me-2 h-4 w-4" />
              Add to Cart
            </Button> */}
          </div>
        </Container>
      </Section>
      <Section className="bg-card">
        <Container>
          <SectionTitle>Select The restaurant of your choice</SectionTitle>
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
