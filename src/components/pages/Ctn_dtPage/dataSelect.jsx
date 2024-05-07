var list = `CTN BẮC GIANG
CTN BẮC NINH
CTN BẾN TRE
CTN BIÊN HÒA - ĐỒNG NAI
CTN BÌNH ĐỊNH
CTN BÌNH DƯƠNG
CTN BÌNH PHƯỚC
CTN BÌNH THUẬN
CTN CAM RANH
CTN CẦN THƠ
CTN ĐÀ LẠT
CTN ĐÀ NẴNG
CTN ĐÀI LOAN
CTN ĐIỆN BIÊN
CTN ĐỒNG THÁP
CTN ĐỨC
CTN HÀ NAM
CTN HÀ TĨNH
CTN HẢI DƯƠNG
CTN HẢI PHÒNG
CTN HÀN QUỐC
CTN HUẾ
CTN HƯNG YÊN
CTN KHU VỰC BẮC HÀ NỘI
CTN KHU VỰC BẮC TP HCM
CTN KHU VỰC ĐÔNG HÀ NỘI
CTN KHU VỰC NAM HÀ NỘI
CTN KHU VỰC NAM TP HCM
CTN KHU VỰC TÂY HÀ NỘI
CTN KHU VỰC TÂY TP HCM
CTN KHU VỰC TRUNG TÂM  TP HCM
CTN KHU VỰC TRUNG TÂM HÀ NỘI
CTN KIÊN GIANG
CTN KONTUM
CTN LÀO CAI
CTN MALAYSIA
CTN NAM ĐỊNH
CTN NGA
CTN NGHỆ AN
CTN NHA TRANG
CTN NHẬT BẢN
CTN NINH BÌNH
CTN NINH THUẬN
CTN PHÚ YÊN
CTN QUẢNG BÌNH
CTN QUẢNG NAM
CTN QUẢNG NGÃI
CTN QUẢNG NINH
CTN SINGAPORE
CTN SÓC TRĂNG
CTN TÂY NINH
CTN THÁI BÌNH
CTN THÁI NGUYÊN
CTN THANH HÓA
CTN TP THỦ ĐỨC (KHU VỰC ĐÔNG)
CTN TRÀ VINH
CTN VĨNH LONG
CTN VĨNH PHÚC
CTN VŨNG TÀU
PHẬT ÂN
PHẬT AN (NGHỆ AN)
PHẬT CHÁNH (HỒ CHÍ MINH)
PHẬT CHI (HỒ CHÍ MINH)
PHẬT ĐÀ (ĐÀ NẴNG)
PHẬT ĐẮC (ĐẮC LẮK)
PHẬT ĐĂNG (LONG AN)
PHẬT ĐÁO (ĐIỆN BIÊN)
PHẬT ĐẠO (NAM ĐỊNH)
PHẬT ĐỊNH (ĐÀ LẠT)
PHẬT ĐỒNG (ĐỒNG THÁP)
PHẬT DƯƠNG 1 (BÌNH DƯƠNG)
PHẬT DƯƠNG 2 (BÌNH DƯƠNG)
PHẬT DUYÊN (BẮC GIANG)
PHẬT GIA (BẮC GIANG)
PHẬT GIÁC (GIA LAI)
PHẬT GIÁNG (NINH THUẬN)
PHẬT HẠNH (HÀ NỘI)
PHẬT HÀO (BIÊN HOÀ - ĐỒNG NAI)
PHẬT HIỂN (GÒ CÔNG -TIỀN GIANG)
PHẬT HÓA (MỸ THO -TIỀN GIANG)
PHẬT HỘI (HÀ NỘI)
PHẬT HUỆ (HUẾ)
PHẬT HƯỚNG (HÀ NỘI)
PHẬT HUY (LONG AN)
PHẬT KHÁNH (NHA TRANG)
PHẬT LINH (QUẢNG TRỊ)
PHẬT LONG (BR-VT)
PHẬT MÃ (SÔNG MÃ - SƠN LA)
PHẬT MINH (HẢI PHÒNG)
PHẬT MÔN (HỒ CHÍ MINH)
PHẬT MỸ (CÀ MAU)
PHẬT NGHĨA (BẮC NINH)
PHẬT NGHIÊM (BR-VT)
PHẬT NGUYÊN (THÁI NGUYÊN)
PHẬT PHỔ (PHÚ YÊN)
PHẬT PHÚC (BÌNH PHƯỚC)
PHẬT SƠN
PHẬT THÁI (THÁI BÌNH)
PHẬT THÀNH (LONG AN)
PHẬT THANH (THANH HÓA)
PHẬT THỊNH (HỒ CHÍ MINH)
PHẬT THÔNG (CẦN THƠ)
PHẬT TIẾN (BÌNH DƯƠNG)
PHẬT TĨNH (HÀ TĨNH)
PHẬT TRÍ (BẾN TRE)
PHẬT TUỆ (BẠC LIÊU)
PHẬT VINH (HỒ CHÍ MINH)
PHỔ HIỀN (LONG KHÁNH -ĐỒNG NAI)`;

const listDT_CTN = list.split("\n");

// const listDT_CTN = ["Phat chi", "opt2", "opt3"];

const handleGenerateOption = ({ listDT_CTN }) => {
  const arr = [];
  listDT_CTN.map((item) => {
    const element = {
      label: item,
      value: item.toLowerCase().replace(/\W/g, ""),
    };
    arr.push(element);
  });
  return arr;
};
const optionDT_CTN = handleGenerateOption({ listDT_CTN });
export { optionDT_CTN };
