
import Card from "@/components/ui/code-card";
import BasicAccordion from "./basic-accordion";
import CustomBreadcrumb from "@/components/custom-breadcrumb";

const AccordionPage = () => {
  return (
    <div>
      <CustomBreadcrumb pageTitle="Accordion" />
      <div className="space-y-5">
        <Card title="Accordion">
          <BasicAccordion />
        </Card>
      </div>
    </div>

  );
};

export default AccordionPage;