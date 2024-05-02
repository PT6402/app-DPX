const FormatPhone = (phone) => {
  if (phone[0] == "_") {
    return phone.replace("_", "");
    // console.log(phone.split());
    //  phone;
  } else {
    return phone;
  }
};

export { FormatPhone };
