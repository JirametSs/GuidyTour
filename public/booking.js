document.addEventListener("DOMContentLoaded", function () {
  const bookings = [
    { id: 1, package_name: "ทัวร์ภูเก็ต 3 วัน 2 คืน", traveler_name: "สมชาย ท่องโลก", booking_date: "2024-06-10", payment_status: "ชำระแล้ว", price: "9,900 บาท" },
    { id: 2, package_name: "ทัวร์ภูเก็ต 4 วัน 3 คืน", traveler_name: "สมหญิง ผจญภัย", booking_date: "2024-07-15", payment_status: "รอการชำระเงิน", price: "12,500 บาท" },
    { id: 3, package_name: "ทัวร์ภูเก็ต + พีพี 5 วัน 4 คืน", traveler_name: "กิตติ พาลุย", booking_date: "2024-08-20", payment_status: "ชำระแล้ว", price: "15,999 บาท" },
    { id: 4, package_name: "แพ็คเกจหรู ภูเก็ต 3 วัน 2 คืน (โรงแรม 5 ดาว)", traveler_name: "นฤมล เที่ยวสนุก", booking_date: "2024-09-05", payment_status: "ยกเลิก", price: "19,500 บาท" },
    { id: 5, package_name: "ทัวร์ภูเก็ต + หมู่เกาะสิมิลัน 4 วัน 3 คืน", traveler_name: "วรัญญา ทัวร์รอบโลก", booking_date: "2024-10-12", payment_status: "ชำระแล้ว", price: "13,900 บาท" },
    { id: 6, package_name: "ทัวร์ภูเก็ต + เกาะไม้ท่อน 3 วัน 2 คืน", traveler_name: "ชัยวัฒน์ เที่ยวฟิน", booking_date: "2024-11-18", payment_status: "รอการชำระเงิน", price: "10,500 บาท" },
  ];

  const tableBody = document.querySelector("#bookings-table tbody");
  tableBody.innerHTML = "";

  bookings.forEach((booking, index) => {
    const row = `<tr>
      <td>${index + 1}</td>
      <td>${booking.package_name}</td>
      <td>${booking.traveler_name}</td>
      <td>${booking.booking_date}</td>
      <td class="${booking.payment_status === "ชำระแล้ว" ? "paid" : booking.payment_status === "รอการชำระเงิน" ? "pending" : "canceled"}">${booking.payment_status}</td>
      <td>${booking.price}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
});
