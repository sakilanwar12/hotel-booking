import CustomBreadcrumb from "@/components/custom-breadcrumb";
import Card from "@/components/ui/code-card";
import BasicDialog from "./basic-dialog";
import DialogSizes from "./dialog-sizes";
import { basicDialog, dialogSizes } from "./source-code";
const DialogPage = () => {
  return (
    <div>
      <CustomBreadcrumb pageTitle="Dialog" />
      <div className="grid grid-cols-1 gap-6">
        <Card title="Basic" code={basicDialog}>
          <BasicDialog />
        </Card>
        <Card title="Size" code={dialogSizes}>
          <DialogSizes />
        </Card>
      </div>
    </div>
  );
};

export default DialogPage;