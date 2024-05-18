const ExcelFormat = (input) => {
  // Split the header row into keys
  const headers = input[0].split("\t");

  // Initialize an object to hold the final result
  const result = {};

  // Iterate over each data row (skip the header row at index 0)
  for (let i = 1; i < input.length; i++) {
    // Split the current row into values
    const values = input[i].split("\t");

    // Create an object to hold the current row's key-value pairs excluding name_DT_CTN
    const dataEntry = {};

    // Assign name_DT_CTN value to result object
    if (i === 1) {
      result["name_DT_CTN"] = values[0] || ""; // Use the first value as name_DT_CTN
    }

    // Iterate over the headers and assign corresponding values to the dataEntry object
    headers.forEach((header, index) => {
      if (header !== "name_DT_CTN(type|name)") {
        dataEntry[header] = values[index] || ""; // Use empty string if the value is missing
      }
    });

    // Add the constructed dataEntry object to the result's data array
    if (!result.data) {
      result.data = [];
    }
    result.data.push(dataEntry);
  }
  return result;
};

export { ExcelFormat };
