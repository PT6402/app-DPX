function formatDateForInput(datetimeString) {
  // Chuyển đổi chuỗi ngày giờ thành một đối tượng Date
  var date = new Date(datetimeString);

  // Lấy các thành phần của ngày giờ (năm, tháng, ngày, giờ, phút) từ đối tượng Date
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // Thêm số 0 phía trước nếu cần thiết
  var day = ("0" + date.getDate()).slice(-2);
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);

  // Format chuỗi theo định dạng phù hợp với input type datetime-local: YYYY-MM-DDTHH:MM
  var formattedDateTime =
    year + "-" + month + "-" + day + "T" + hours + ":" + minutes;

  return formattedDateTime;
}
function formatDateTime(datetimeString) {
  if (datetimeString == "0000-00-00T00:0000:00.000Z") {
    return "chưa có";
  }
  // Chuyển đổi chuỗi ngày giờ thành một đối tượng Date
  var date = new Date(datetimeString);

  // Lấy các thành phần của ngày giờ (năm, tháng, ngày, giờ, phút) từ đối tượng Date
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);

  // Format lại các thành phần theo định dạng mong muốn
  var formattedDate = day + "-" + month + "-" + year;
  var formattedTime = hours + ":" + minutes;

  // Kết hợp các phần vào một chuỗi hoàn chỉnh
  var formattedDateTime = formattedDate + " | " + formattedTime;

  return formattedDateTime;
}
export { formatDateForInput, formatDateTime };
