/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { SelectComponent } from "../../../common";
import { optionType } from "../dataSelect";
import styleSelect from "../styleSlectTypeVip";
import { useDispatch, useSelector } from "react-redux";
import { updateContextForm } from "../../../../context/formSlice";
import { formatDateForInput } from "../../../../util/TimeFormat";

export default function Xe() {
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.userSlice);
  const { contextForm, currentStep } = useSelector((state) => state.formSlice);
  const [value, getValueSelect] = useState(() => {
    const itemValue = optionType.find(
      ({ label }) => infoUser?.Type_Car.toUpperCase() == label.toUpperCase()
    );
    if (itemValue) {
      return itemValue;
    }
    if (contextForm?.type_car) {
      return contextForm.type_car;
    }
  });
  const selectRef = useRef();
  const biensoInput = useRef();
  const numberOfPeopleInput = useRef();
  const timeLeavePagodaInput = useRef();
  const handleSave = () => {
    dispatch(
      updateContextForm({
        ...contextForm,
        bien_so: biensoInput.current.value,
        number_of_people: numberOfPeopleInput.current.value,
        type_car: value,
        time_leave_pagoda: timeLeavePagodaInput.current.value,
      })
    );
  };
  useEffect(() => {
    handleSave();
  }, [currentStep]);
  return (
    <div>
      <div className="mb-5">
        <label
          htmlFor="firstname"
          className="font-bold mb-1 text-gray-700 block"
        >
          Biển số xe
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="nhập biển số xe"
          ref={biensoInput}
          defaultValue={contextForm?.bien_so || infoUser?.Bien_so}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="firstname"
          className="font-bold mb-1 text-gray-700 block"
        >
          Loại xe
        </label>
        <SelectComponent
          options={optionType}
          getValueSelect={getValueSelect}
          selectRef={selectRef}
          value={value}
          placeholder={"loại xe"}
          isClearable
          styleSelect={styleSelect}
          isSearchable={false}
        />
      </div>
      <div className="mb-5">
        <label className="font-bold mb-1 text-gray-700 block">
          Số lượng người
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="nhập số lượng người"
          ref={numberOfPeopleInput}
          defaultValue={
            contextForm?.number_of_people || infoUser?.Number_of_people
          }
        />
      </div>
      <div className="mb-5">
        <label className="font-bold mb-1 text-gray-700 block">
          Thời gian rời chùa
        </label>
        <input
          type="datetime-local"
          className="w-full px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="thời gian rời chùa"
          ref={timeLeavePagodaInput}
          defaultValue={formatDateForInput(
            infoUser?.Time_leave_pagoda || contextForm?.time_leave_pagoda
          )}
        />
      </div>
    </div>
  );
}
