import axios from 'axios'
import _ from 'lodash'

export const SendSms = async (data) => {
    const smsStatus = {
        BOOK: 'BOOK-ทำการจองแล้ว รอSMSเพื่อยืนยัน ',
        REBOOK: 'REBOOK-แก้ไขการจอง รอSMSเพื่อยืนยัน ',
        CONFIRM: 'CONFIRM-ยืนยันการจองศูนย์บริการคาสตรอล ',
        REJECT: 'REJECT-ยกเลิกการจอง รายละเอียด ',
        COMPLETE: 'COMPLETE-ขอบคุณที่ใช้บริการ ลงทะเบียนรับประกัน ',
    }
// AppDate: "2020-09-13T00:00:00.000Z"
// AppID: 1019
// AppTime: "05:08"
// BranchID: 112
// BranchName: "ศูนย์บริการมาตรฐานคาสตรอล - เบิ้มออโต้เซอร์วิส"
// BranchTelNo: "0866274435"
// BranchUrl: "https://www.google.com/maps/?q=12.578381,99.940562"
// MemEmail: "sdfas@gmail.com"
// MemName: "test"
// MemTelno: "0944650165"
// Note: ""
// Package: "Castrol MAGNATEC SUV 5W-30 (4L)"
// SalesTelNo: "0847512715"
// Status: "BOOK"
    const {MemTelno, AppID, Status, BranchTelNo, SalesTelNo} = data
    // console.log(MemTelno)
    const tel = MemTelno.replace(0, '66')
    // const BranchTel = BranchTelNo.replace(0, '66')
    const SalesTel = SalesTelNo.replace(0, '66')
    const branchList = BranchTelNo.split(',')
    let phones = _.map(branchList, val => {
        return val.replace(0, '66')
    })
    phones = [...phones, SalesTel, tel]

    // -----------------------------------------------------------------------------
    const shortUrl = await axios.get(`http://tinyurl.com/api-create.php?url=${process.env.REACT_APP_BACKEND_WEB_API}Appointment/${AppID}`).then(resp => {
        return resp
    })

    // -----------------------------------------------------------------------------

    if(Status === 'COMPLETE'){
        await axios.get(`https://api.bulksmsonline.com:9090/smsapi?username=ThanTB773&password=TBCAP@2020&type=u&to=${tel}&source=CastrolActivity&message=${smsStatus[Status]} https://cutt.ly/SgeCTRF`)
    }else if(Status === 'CONFIRM'){
        await axios.get(`https://api.bulksmsonline.com:9090/smsapi?username=ThanTB773&password=TBCAP@2020&type=u&to=${phones}&source=CastrolActivity&message=${smsStatus[Status]} ${shortUrl?.data || null}`)
    }else if(Status === 'REJECT') {
         await axios.get(`https://api.bulksmsonline.com:9090/smsapi?username=ThanTB773&password=TBCAP@2020&type=u&to=${phones}&source=CastrolActivity&message=${smsStatus[Status]} ${shortUrl?.data || null}`)
    }else{
        await axios.get(`https://api.bulksmsonline.com:9090/smsapi?username=ThanTB773&password=TBCAP@2020&type=u&to=${tel}&source=CastrolActivity&message=${smsStatus[Status]} ${shortUrl?.data || null}`)
    }

}
// https://api.bulksmsonline.com:9090/smsapi?username=ThanTB773&password=TBCAP@2020&type=u&to=66638699683&source=CastrolActivity&message=[BOOK