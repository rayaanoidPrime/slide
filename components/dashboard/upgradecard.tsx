import { Button } from "../ui/button";

type props = {
  type?: "FREE" | "PRO";
};

export const UpgradeCard = ({ type }: props) => {
  return (
    <div className="p-2 m-1 rounded-2xl bg-slate-800 flex flex-1 flex-col gap-y-2  items-center ">
      <span className="text-md ">
        Upgrade to{" "}
        <span className="font-bold bg-gradient-to-b from-pink-400 to-pink-600 bg-clip-text text-transparent">
          PRO
        </span>
      </span>
      <span className="text-center text-sm text-slate-300">
        Unlock all features <br /> including AI and more
      </span>
      <Button className="bg-gradient-to-b from-red-400 to-pink-700 rounded-xl w-full hover:bg-yellow-500 text-foreground hover:text-background ">
        <span className="font-bold text-lg">Upgrade</span>
      </Button>
    </div>
  );
};
