/* eslint-disable react/style-prop-object */
import CustomButton from "../components/common/button";
import { FeedsLayout } from "../components/layouts";

const Feeds = () => (
    <FeedsLayout>
      <p className="border-b-2 border-quaternary w-fit ml-8 font-gilroyMd text-quaternary">My Feeds</p>
      <div className="h-px bg-[#EEEEEE]" />
      <div className="ml-8 pt-14 flex items-center w-2/6 justify-between">
        <h1>All DAOs</h1>
        <CustomButton bg="bg-bg">Create new DAO</CustomButton>
        {/* <Filters /> */}
        <div className="mt-8">
          {/* <AllDaos /> */}
        </div>
      </div>
    </FeedsLayout>
);

export default Feeds;