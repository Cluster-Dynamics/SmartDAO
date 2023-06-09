import { useState } from "react";
import NewProposalTemp from "../../../components/common/newProposalTemp";
import { FeedsLayout } from "../../../components/layouts";
import { SideBar } from "./data";
import DetailsNav from "./detailsNav";
import FundGraph from "./fundGraph";
import ProposalUpdate from "./proposalUpdate";

const DaoDetails = () => {
  const [enableCreateProposal, setEnableCreateProposal] = useState(false);

  return (
    <FeedsLayout>
      <DetailsNav setEnableCreateProposal={setEnableCreateProposal}>
        {enableCreateProposal && <NewProposalTemp />}
        <ProposalUpdate />
        <div className="flex justify-between">
          <div className="w-4/6 rounded-lg shadow-medium py-7 p-2">
            <div className="flex justify-end mb-4 cursor-pointer">
              <div className="bg-lightBlue rounded p-2 text-[10px] font-gilroyMd">
                1W
              </div>
              <div className="bg-lightBlue rounded p-2 text-[10px] font-gilroyMd ml-2">
                1M
              </div>
              <div className="bg-lightBlue rounded p-2 text-[10px] font-gilroyMd ml-2">
                1Y
              </div>
              <div className="bg-lightBlue rounded p-2 text-[10px] font-gilroyMd ml-2">
                ALL
              </div>
            </div>
            <FundGraph />
          </div>
          <div className="w-4/12 ml-8">
            {SideBar.map((val) => (
              <div
                className="px-4 py-5 shadow-medium rounded-lg cursor-pointer mb-7 hover:border hover:border-grey border border-white trans"
                key={val.title}
              >
                <div className="flex justify-between text-sm">
                  <p className="text-grey">{val.title}</p>
                  <p className="text-quaternary font-gilroyMd">
                    {val.percent}%
                  </p>
                </div>
                <h2 className="font-gilroyBold mt-2">{val.value}</h2>
              </div>
            ))}
          </div>
        </div>
      </DetailsNav>
    </FeedsLayout>
  );
};

export default DaoDetails;
