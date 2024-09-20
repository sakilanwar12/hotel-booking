import CustomBreadcrumb from "@/components/custom-breadcrumb";
import Card from "@/components/ui/code-card";
import BasicButton from "./basic-button";
import RoundedButton from "./rounded-button";
import OutlineButton from "./outline-button";
import RoundedOutlineButton from "./rounded-outline";
import ButtonSizes from "./button-sizes";
import ButtonFullWidth from "./button-full";
import { basicButton, buttonFullWidth, buttonSizes, outlineButton, roundedButton, roundedOutline } from "./source-code";
const ButtonPage = () => {

  return (
    <div>
      <CustomBreadcrumb pageTitle="Button" />
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        <Card title="Colors" code={basicButton}>
          <BasicButton />
        </Card>
        <Card title="Rounded" code={roundedButton}>
          <RoundedButton />
        </Card>
        <Card title="Outline" code={outlineButton}>
          <OutlineButton />
        </Card>
        <Card title="Rounded Outline" code={roundedOutline}>
          <RoundedOutlineButton />
        </Card>
        <Card title="Size" code={buttonSizes}>
          <ButtonSizes />
        </Card>
        <Card title="Full Width" code={buttonFullWidth}>
          <ButtonFullWidth />
        </Card>
      </div>
    </div>
  );
};

export default ButtonPage;