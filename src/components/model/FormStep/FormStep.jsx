/* eslint-disable no-unused-vars */
import FirstStep from "./common/FirstStep";
import LastStep from "./common/LastStep";
import Next_Submit from "./common/Next_Submit";
import Previous from "./common/Previous";
import SecondStep from "./common/SecondStep";
import HeaderStep from "./common/headerStep";
import Step1 from "./common/step1";

export default function FormStep() {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* <Step1 /> */}

        <div>
          <HeaderStep title />

          <div className="py-10">
            <FirstStep />
            {/* <SecondStep /> */}
            {/* <LastStep /> */}
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 py-5 bg-white shadow-md">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-between">
            <Previous />
            <Next_Submit />
          </div>
        </div>
      </div> */}
    </div>
  );
}
