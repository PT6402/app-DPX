/* eslint-disable react/prop-types */
import { faker } from "@faker-js/faker";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { useMemo, Fragment, useCallback } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";
import { Listbox, Transition } from "@headlessui/react";

function Avatar({ src, alt = "avatar" }) {
  return (
    <img src={src} alt={alt} className="w-8 h-8 rounded-full object-cover" />
  );
}
const generateData = (numberOfRows = 25) =>
  [...Array(numberOfRows)].map(() => ({
    name: faker.name.fullName(),
    image: faker.image.avatar(),
    accountNumber: faker.finance.account(8),
    accountName: faker.finance.accountName(),
    amount: faker.finance.amount(500, 1e4, 2, "$"),
  }));
const getColumns = () => [
  {
    Header: "Name",
    accessor: "name",
    width: "300px",
    Cell: ({ row, value }) => {
      return (
        <div className="flex gap-2 items-center">
          <Avatar src={row.original.image} alt={`${value}'s Avatar`} />
          <div>{value}</div>
        </div>
      );
    },
  },
  {
    Header: "Account Number",
    accessor: "accountNumber",
  },
  {
    Header: "Account Name",
    accessor: "accountName",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
];

function InputGroup7({
  label,
  name,
  value,
  onChange,
  type = "text",
  decoration,
  className = "",
  inputClassName = "",
  decorationClassName = "",
  disabled,
}) {
  return (
    <div
      className={`flex flex-row-reverse items-stretch w-full rounded-xl overflow-hidden bg-white shadow-[0_4px_10px_rgba(0,0,0,0.03)] ${className}`}
    >
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={label}
        aria-label={label}
        onChange={onChange}
        className={`peer block w-full p-3 text-gray-600 focus:outline-none focus:ring-0 appearance-none ${
          disabled ? "bg-gray-200" : ""
        } ${inputClassName} border-none `}
        disabled={disabled}
      />
      <div
        className={`flex items-center pl-3 py-3 text-gray-600 ${
          disabled ? "bg-gray-200" : ""
        } ${decorationClassName}`}
      >
        {decoration}
      </div>
    </div>
  );
}

function GlobalSearchFilter1({
  globalFilter,
  setGlobalFilter,
  className = "",
}) {
  return (
    <InputGroup7
      name="search"
      value={globalFilter || ""}
      onChange={(e) => setGlobalFilter(e.target.value)}
      label="Search"
      decoration={<FaSearch size="1rem" className="text-gray-400" />}
      className={className}
    />
  );
}

function SelectMenu1({ value, setValue, options, className = "", disabled }) {
  const selectedOption = useMemo(
    () => options.find((o) => o.id === value),
    [options, value]
  );
  return (
    <Listbox value={value} onChange={setValue} disabled={disabled}>
      <div className={`relative w-full ${className}`}>
        <Listbox.Button
          className={`relative w-full  rounded-xl py-3 pl-3 pr-10 text-base text-gray-700 text-left shadow-[0_4px_10px_rgba(0,0,0,0.03)] focus:outline-none
          ${
            disabled
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-white cursor-default"
          }
        
        `}
        >
          <span className="block truncate">{selectedOption.caption}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <FaChevronDown
              size="0.80rem"
              className="text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white text-base shadow-[0_4px_10px_rgba(0,0,0,0.03)] focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  `relative cursor-default select-none py-3 pl-10 pr-4 ${
                    active ? "bg-red-100" : ""
                  }`
                }
                value={option.id}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.caption}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-400">
                        <FaCheck size="0.5rem" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

function Button2({ content, onClick, active, disabled }) {
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${active ? "bg-red-500 text-white" : "text-red-500"}
      ${
        !disabled
          ? "bg-white hover:bg-red-500 hover:text-white"
          : "text-red-300 bg-white cursor-not-allowed"
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function PaginationNav1({
  gotoPage,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
}) {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 3;
    let numberOfButtons =
      pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
    const pageIndices = [pageIndex];
    numberOfButtons--;
    [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
      const pageNumberBefore = pageIndices[0] - 1;
      const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
      if (
        pageNumberBefore >= 0 &&
        (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
      ) {
        pageIndices.unshift(pageNumberBefore);
      } else {
        pageIndices.push(pageNumberAfter);
      }
    });
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button2
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ));
  }, [pageCount, pageIndex]);
  return (
    <ul className="flex gap-2">
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronLeft size="0.6rem" />
              <FaChevronLeft size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <Button2
          content={
            <div className="flex ml-1">
              <FaChevronRight size="0.6rem" />
              <FaChevronRight size="0.6rem" className="-translate-x-1/2" />
            </div>
          }
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  );
}

function TableComponent({
  getTableProps,
  headerGroups,
  getTableBodyProps,
  rows,
  prepareRow,
}) {
  return (
    <div className="w-full min-w-[30rem] p-4 bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)]">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, x) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-3 text-start text-xs font-light uppercase cursor-pointer"
                  style={{ width: column.width }}
                  key={x}
                >
                  <div className="flex gap-2 items-center">
                    <div className="text-gray-600">
                      {column.render("Header")}
                    </div>
                    <div className="flex flex-col">
                      <FaSortUp
                        className={`text-sm translate-y-1/2 ${
                          column.isSorted && !column.isSortedDesc
                            ? "text-red-400"
                            : "text-gray-300"
                        }`}
                      />
                      <FaSortDown
                        className={`text-sm -translate-y-1/2 ${
                          column.isSortedDesc ? "text-red-400" : "text-gray-300"
                        }`}
                      />
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, y) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100" key={y}>
                {row.cells.map((cell, z) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="p-3 text-sm font-normal text-gray-700 first:rounded-l-lg last:rounded-r-lg"
                      key={z}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
function Table1() {
  const data = useMemo(() => generateData(100), []);
  const columns = useMemo(getColumns, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page: rows,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <GlobalSearchFilter1
          className="sm:w-64"
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <SelectMenu1
          className="sm:w-44"
          value={pageSize}
          setValue={setPageSize}
          options={[
            { id: 5, caption: "5 items per page" },
            { id: 10, caption: "10 items per page" },
            { id: 20, caption: "20 items per page" },
          ]}
        />
      </div>
      <TableComponent
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      />
      <div className="flex justify-center">
        <PaginationNav1
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
        />
      </div>
    </div>
  );
}

function Table1Presentation() {
  return (
    <div className="flex flex-col overflow-auto py-4 sm:py-0">
      <Table1 />
    </div>
  );
}

export { Table1Presentation };
