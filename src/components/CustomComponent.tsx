import yoda from "../assets/yoda.webp";
import { Button } from "@/components/ui/button";

interface CustomComponentProps {
  name: string;
}

export const CustomComponent = ({ name }: CustomComponentProps) => {
  return (
    <div className="flex flex-col mx-auto justify-center items-center py-20 space-y-10">
      <img src={yoda} className="w-[500px]" />
      <p className="w-fit font-bold text-xl">
        May the Force be with you, {name}
      </p>
      <Button>shadch/ui button</Button>
    </div>
  );
};
