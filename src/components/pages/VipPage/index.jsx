// import { SelectComponent } from "components/common";
import { useRef, useState } from "react";
import { optionVIP } from "./dataSelect";
// import useAppScript from "hooks/useAppScript";
import styleSelect from "./styleSlectTypeVip";
import { useDispatch, useSelector } from "react-redux";
// import { setOpenContent, setOpenDialog } from "context/dialogSlice";
import QRCodeContent from "./QRCodeContent";
import useAppScript from "../../../hooks/useAppScript";
import useUUID from "../../../hooks/useUUID";
import { setOpenContent, setOpenDialog } from "../../../context/dialogSlice";
import { SelectComponent } from "../../common";
// import useUUID from "hooks/useUUID";

export default function VipPage() {
  const { content } = useSelector((state) => state.dialogSlice);
  const dispatch = useDispatch();
  const { addVip } = useAppScript();
  const { handHash } = useUUID();
  const phoneInput = useRef();
  const nameInput = useRef();
  const selectRef = useRef();
  const licensePlateInput = useRef();
  const [value, setValue] = useState();
  const getValueSelect = (value) => {
    setValue(value);
  };
  const handleAddVip = () => {
    const vipID = handHash(
      `${nameInput.current.value}${phoneInput.current.value}${licensePlateInput.current.value}`
    );

    const data = {
      phone: phoneInput.current.value,
      name: nameInput.current.value,
      type: `VIP-${value.label}-${licensePlateInput.current.value}`,
      urlID: vipID,
      licensePlateInput: licensePlateInput.current.value,
    };
    addVip(data).then((res) => {
      dispatch(
        setOpenDialog({
          content: QRCodeContent,
          data: { message: res.message, id: `${vipID}`, status: res.status },
        })
      );
      if (res.status == 200) {
        phoneInput.current.value = "";
        nameInput.current.value = "";
        licensePlateInput.current.value = "";
        setValue(null);
      }
    });
  };
  return (
    <section className="relative text-gray-600 body-font rounded-xl  h-full flex-1">
      <div className=" mx-auto flex px-5 items-center pt-5 justify-center flex-col h-full flex-1 ">
        <div className="mx-auto  max-w-xl sm:mt-20  flex-1 flex flex-col h-full">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 h-full flex-1">
            <div>
              <label
                htmlFor="first-name"
                className="block text-xl font-semibold leading-6 text-gray-900 "
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:leading-6"
                  ref={nameInput}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-xl font-semibold leading-6 text-gray-900"
              >
                Type
              </label>
              <div className="mt-2.5">
                <SelectComponent
                  options={optionVIP}
                  getValueSelect={getValueSelect}
                  selectRef={selectRef}
                  value={value}
                  placeholder={"Type"}
                  isClearable
                  classNames={{
                    control: () => ({
                      padding: "1rem !important",
                      display: "none !important",
                    }),
                  }}
                  styleSelect={styleSelect}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-xl font-semibold leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="family-name"
                  className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:leading-6"
                  ref={phoneInput}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="license-plate"
                className="block text-xl font-semibold leading-6 text-gray-900 "
              >
                License plate
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="license-plate "
                  id="license-plate"
                  autoComplete="given-name"
                  className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:leading-6"
                  ref={licensePlateInput}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex gap-5">
            {content && (
              <button
                className="block w-full rounded-xl bg-indigo-600 px-4 py-5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => dispatch(setOpenContent())}
              >
                Show Before QR
              </button>
            )}
            <button
              className="block w-full rounded-xl bg-indigo-600 px-4 py-5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleAddVip}
            >
              Add VIP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
