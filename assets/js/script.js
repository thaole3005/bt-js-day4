var btn_show_results = document.querySelectorAll('.show_result_btn');
var show_result_Eles = document.querySelectorAll('.show_result_text');

btn_show_results.forEach((btn_show_result, index) => {
 btn_show_result.onclick = () => {
  switch (index) {
    case 0:
      handleBT1(index);
      break;
    case 1:
      handleBT2(index);
      break;
    case 2:
      handleBT3(index);
      break;
    case 3:
      handleBT4(index);
      break;
  }
 }
})




renderUI = (index, finalTxt) => {   //hàm render ra UI
  show_result_Eles[index].innerHTML = finalTxt;
}







// --------BÀI TẬP 1----------


handleBT1 = (index) => {
  var inputs_BT1_Array = document.querySelectorAll('.input_bt1');
  var diemChuan = parseFloat(inputs_BT1_Array[0].value);
  var diemMon1 = parseFloat(inputs_BT1_Array[1].value);
  var diemMon2 = parseFloat(inputs_BT1_Array[2].value);
  var diemMon3 = parseFloat(inputs_BT1_Array[3].value);
  var thongBao ="";
  var finalTxt ="";
  // console.log(diemChuan, diemMon1, diemMon2, diemMon3);

  var tongDiem = 0;
  var diem3mon =0;
  diem3mon = diemMon1 + diemMon2 +diemMon3;

  var diemKhuVuc =0;
  var diemDoiTuong = 0;

  diemKhuVuc = tinhDiemKhuVuc();
  diemDoiTuong = tinhDiemDoiTuong();
  tongDiem = diem3mon + diemKhuVuc + diemDoiTuong;

  if(tongDiem >= diemChuan) {
    thongBao = "Bạn đã <span style = 'background-color: red; padding: 10px;'>đậu!</span>"
  }else {
    thongBao = "Bạn đã <span style = 'background-color: red; padding: 10px;'>rớt!</span>"
  }
  finalTxt = thongBao +  "<br>" + "<br>" + "Tổng điểm của bạn là: " + tongDiem;
  renderUI(index, finalTxt);
  // show_result_Eles[index].innerHTML = thongBao + "<br>" + "<br>" + "Tổng điểm của bạn là: " + tongDiem;
}


tinhDiemKhuVuc = () => {
  var khuVuc = "";
  var khuVucA = document.getElementById('khuVucA');
  var khuVucB = document.getElementById('khuVucB');
  var khuVucC = document.getElementById('khuVucC');
  var khongUuTien = document.getElementById('khuVucKhongUuTien');
  if(khuVucA.checked) {
    khuVuc = document.getElementById('khuVucA').value;
    return 2;
  } else if(khuVucB.checked) {
    khuVuc = document.getElementById('khuVucB').value;
    return 1;
  }
  else if(khuVucC.checked) {
    khuVuc = document.getElementById('khuVucC').value;
    return 0.5;
  }else if(khongUuTien.checked) {
    khuVuc =  document.getElementById('khuVucKhongUuTien').value;
    return 0;
  } 
  
  else {
    alert("mời bạn chọn khu vực")
  }
}




tinhDiemDoiTuong = () => {
  var doiTuong1 = document.getElementById('doiTuong1');
  var doiTuong2 = document.getElementById('doiTuong2');
  var doiTuong3 = document.getElementById('doiTuong3');
  var doiTuongKhongUuTien = document.getElementById('doiTuongKhongUuTien');
  if(doiTuong1.checked) {
    return 2.5;
  } else if(doiTuong2.checked) {
    return 1.5;
  } else if(doiTuong3.checked) {
    return 1;
  } else if(doiTuongKhongUuTien.checked) {
    return 0;
  }else {
    alert("mời bạn chọn đối tượng")

  }
}


// --------BÀI TẬP 2----------


handleBT2 = (index) => {
  var inputs_BT2_Array = document.querySelectorAll('.input_bt2');
  var name ="";
  var kw = 0;
  var tongTien = 0;
  var finalTxt ="";
  name = inputs_BT2_Array[0].value;
  kw = inputs_BT2_Array[1].value;
  // console.log(name, kw);
  if(0< kw && kw <= 50) {
    // console.log("đoạn 1");
    tongTien = kw * 500;
  } else if( 50 < kw && kw <=100) {
    // console.log("đoạn 2");

    tongTien = 50 * 500 + (kw-50) * 650;

  }else if (100 <kw && kw <= 200) {
    // console.log("đoạn 3");

    tongTien = 50 * 500 + 50 * 650 + (kw-100) * 850;
  } else if (200 <kw && kw <=  350) {
    // console.log("đoạn 4");

    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {       // >350
    // console.log("đoạn 5");

    tongTien =  50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }

  finalTxt = "Cảm ơn" + "<span style='background-color: red' class = 'text-white p-2'>" + name + "</span>" + "đã sử dụng dịch vụ công ty chúng tôi" 
  +  "<br>" + "<br>"  + "Tổng tiền điện của bạn: " + "<span style='background-color:blue;' class = ' p-2 text-white'>" + tongTien +"</span>" + "  VND" ;

  renderUI(index, finalTxt);

  // show_result_Eles[index].innerHTML = "Cảm ơn" + "<span style='background-color: red' class = 'text-white p-2'>" + name + "</span>" + "đã sử dụng dịch vụ công ty chúng tôi" 
  // +  "<br>" + "<br>"  + "Tổng tiền điện của bạn: " + "<span style='background-color:blue;' class = ' p-2 text-white'>" + tongTien +"</span>" + "  VND"         ;
  
}




// --------BÀI TẬP 3----------

handleBT3 = (index) => {
  var inputs_BT3_Array = document.querySelectorAll('.input_bt3');
  var name = inputs_BT3_Array[0].value;
  var tongThuNhap = parseInt(inputs_BT3_Array[1].value);
  var nguoiPhuThuoc = parseInt(inputs_BT3_Array[2].value);
  // console.log(name, tongThuNhap, nguoiPhuThuoc);
  var finalTxt = "";

  var thueThuNhapCaNhan = 0;
  var thuNhapChiuThue = 0;
  var changeDonVi =0;
  thuNhapChiuThue = tongThuNhap - 4000000 - nguoiPhuThuoc*1600000;
  changeDonVi = thuNhapChiuThue/1000000;    //để dễ so sánh
  // console.log(name,tongThuNhap, nguoiPhuThuoc, thuNhapChiuThue, changeDonVi)
  if(0 < changeDonVi && changeDonVi <= 60) {
    // console.log('doan 1')
    thueThuNhapCaNhan = thuNhapChiuThue * 0.05;
  } else if (60< changeDonVi && changeDonVi <=120) {
    thueThuNhapCaNhan = thuNhapChiuThue * 0.1;
    // console.log('doan 2')

  } else if(120< changeDonVi && changeDonVi <=210) {
    thueThuNhapCaNhan = thuNhapChiuThue * 0.15;
    // console.log('doan 3')

  } else if (210<changeDonVi && changeDonVi <= 384){
    thueThuNhapCaNhan = thuNhapChiuThue * 0.2;
    // console.log('doan 4')

  }else if (384 < changeDonVi && changeDonVi <= 624){
    thueThuNhapCaNhan = thuNhapChiuThue * 0.25;
    // console.log('doan 5')

  } else if (624 < changeDonVi && changeDonVi<=960){
    thueThuNhapCaNhan = thuNhapChiuThue * 0.3;
    // console.log('doan 6')

  }else {
    thueThuNhapCaNhan = thuNhapChiuThue * 0.35;
    // console.log('else')

  }

  finalTxt = "thuế thu nhập cá nhân của      "+ name  + " là: " + "<span style='background-color: red' class = 'text-white'>" +   thueThuNhapCaNhan  +"</span>"

  renderUI(index, finalTxt);

}














// --------BÀI TẬP 4----------



var nhaDan_Ele = document.getElementById('nhaDan');
var doanhNghiep_Ele = document.getElementById('doanhNghiep');
var soKetNoi_Ele =  document.getElementById('input_ketNoi');

doanhNghiep_Ele.onchange = function() {
  soKetNoi_Ele.style.visibility = 'visible';
  soKetNoi_Ele.removeAttribute('disabled');
  document.getElementById('input_ketNoi').value = "";
  
}

nhaDan_Ele.onchange = function() {
  soKetNoi_Ele.style.visibility = 'visible';
  soKetNoi_Ele.setAttribute('disabled', true);
  document.getElementById('input_ketNoi').value = "Bạn không thể nhập trường này";


}

var nhaDan = {
  phiHoaDon : 4.5,
  phiCoBan : 20.5,
  phiCaoCap : 7.5

}

var doanhNghiep = {
  phiHoaDon : 15,
  phiCoBan : 75,
  phiCoBan_over10 : 5,
  phiCaoCap : 50,
}


handleBT4 = (index) => {
  // console.log('haha')
 
  var maKH = document.getElementById('ma_KH').value;
  var loaiKH = "";
  var soKetNoi = 0;
  var finalTxt="";
  var tongTien = 0;

  var soKenhCaoCap = parseInt(document.getElementById('kenhCaoCap').value);

  
  if(nhaDan_Ele.checked) {
    loaiKH = "nhaDan";
    tongTien = tinhTongTienCap( loaiKH,nhaDan.phiHoaDon, nhaDan.phiCoBan, soKetNoi , nhaDan.phiCaoCap,soKenhCaoCap);
    
  } else if (doanhNghiep_Ele.checked) {
    loaiKH = "doanhNghiep";
    soKetNoi = parseInt(soKetNoi_Ele.value);
    tongTien = tinhTongTienCap(loaiKH, doanhNghiep.phiHoaDon, doanhNghiep.phiCoBan, soKetNoi, doanhNghiep.phiCaoCap ,soKenhCaoCap);
    
    
  }
  
  // console.log(maKH, loaiKH, soKetNoi, soKenhCaoCap);
  // console.log(tongTien);
  finalTxt = "Tiền cap của khách hàng mã " + maKH +" là:" + "<span style = 'background-color: blue;' class = 'text-white mx-2'>"+ tongTien +"</span>" + "$";
  renderUI(index, finalTxt);


}


tinhTongTienCap = (loaiKH,phiHoaDon, phiCoBan, soKetNoi ,phiCaoCap, soKenhCaoCap) => {
  var tongTienCap = 0;
  // console.log('hàm tính tiền cap');
  // console.log('loại kh', loaiKH)
  switch(loaiKH) {
    case "nhaDan":
      // console.log('nhaDan');
      tongTienCap = phiHoaDon + phiCoBan + phiCaoCap * soKenhCaoCap;
      break;
    case "doanhNghiep":
      tongTienCap = soKetNoi <= 10 ? phiHoaDon + phiCoBan + phiCaoCap*soKenhCaoCap : phiHoaDon + phiCoBan + (soKetNoi-10) * doanhNghiep.phiCoBan_over10 + phiCaoCap*soKenhCaoCap
      break;
    default:
      tongTienCap = 0;
  }
  // console.log('tiền cap -', tongTienCap);
  return tongTienCap;
}