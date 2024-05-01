/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useUUID from "../../../hooks/useUUID";
import { useEffect, useState } from "react";

export default function ItemUser({ dataItem }) {
  const { handHash } = useUUID();
  const [dataToId, setDataToId] = useState(null);
  useEffect(() => {
    setDataToId(handHash(dataItem?.name + dataItem?.phone));
  }, []);
  console.log(dataToId);
  return (
    <>
      {dataToId && (
        <Link className="p-2 lg:w-1/3 md:w-1/2 w-full" to={`${dataToId}/${dataItem?.phone}`}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">
                {dataItem?.name}
              </h2>
              <p className="text-gray-500">{dataItem?.phone}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
