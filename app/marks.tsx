import BenZviMark from "~/sources/images/marks/17.jpeg";
import AnimalsMark from "~/sources/images/mark-ananas.png";
import KnessetMark from "~/sources/images/marks/23.jpeg";
import ShipMark from "~/sources/images/marks/67.png";
import GazellsMark from "~/sources/images/marks/25.jpeg";
import TelAviv40 from "~/sources/images/marks/31.jpeg";
import BirdMark from "~/sources/images/marks/30.jpeg";
import EilatMark from "~/sources/images/marks/66.jpeg";
import TelAvivUnMark from "~/sources/images/marks/54.jpeg";
import Jerusalem from "~/sources/images/marks/40.jpeg";

export const Marks = () => (
  <div className="mx-auto grid h-[30vw] max-h-[650px] min-h-[300px] w-[34vw] min-w-[340px] max-w-[700px] grid-cols-4 grid-rows-6 justify-center justify-items-center gap-1 bg-black p-3 md:col-start-2 md:mx-0 md:p-4 lg:row-span-2">
    <img
      src={BenZviMark}
      className="row-span-4 h-full object-cover"
      alt="Yitzhak Ben-Zvi Portrait post mark"
    />
    <img
      src={AnimalsMark}
      className=" h-full object-cover"
      alt="Animals post mark"
    />
    <img
      src={KnessetMark}
      className="row-span-2 h-full object-cover"
      alt="Beit Knesset Israeli in Jerusalem post mark"
    />
    <img
      src={ShipMark}
      className="row-span-4 h-full object-cover"
      alt="Ship post mark"
    />
    <img
      src={GazellsMark}
      className="row-span-3 h-full object-cover"
      alt="Gazelles post mark"
    />
    <img
      src={TelAviv40}
      className="col-start-3 row-start-4 h-full object-cover"
      alt="Mark with people building Tel Aviv on Palms background post mark"
    />
    <img src={BirdMark} className="h-full object-cover" alt="Bird post mark" />
    <img
      src={EilatMark}
      className="col-start-1 row-span-2 h-full object-cover"
      alt="Eilat post mark"
    />
    <img
      src={TelAvivUnMark}
      className="col-start-2 col-end-4 row-start-5 row-end-7 h-full w-full object-cover object-top"
      alt="Tel Aviv University post mark"
    />
    <img
      src={Jerusalem}
      className="col-start-4  row-span-2 h-full object-cover"
      alt="Jerusalem hill in red color post mark"
    />
  </div>
);
