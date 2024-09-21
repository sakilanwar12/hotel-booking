import CustomBreadcrumb from "@/components/custom-breadcrumb";
import Card from "@/components/ui/code-card";
import BasicDialog from "./basic-dialog";
import DialogSizes from "./dialog-sizes";
const DialogPage = () => {
  return (
    <div>
      <CustomBreadcrumb pageTitle="Dialog" />
      <div className="grid grid-cols-1 gap-6">
        <Card title="Basic">
          <BasicDialog />
        </Card>
        <Card title="Size">
          <DialogSizes />
        </Card>
      </div>
    </div>
  );
};

export default DialogPage;