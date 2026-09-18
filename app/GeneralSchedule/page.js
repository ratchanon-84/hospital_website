import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function AppointmentPage() {
  return (
    <div className={styles.tablekppmch}>
      
      {/* ส่วนที่ 1: ส่วนหัวเว็บ & บริการด่วน */}
      <header className={styles.headerSection}>
        <h1 className={styles.aboutTitle}>ตารางการให้บริการตรวจโรคทั่วไป</h1>
        <p className={styles.aboutText}>ณ โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร (ซอยหลังวัดคูยาง)</p>
    
      </header>

      {/* ส่วนที่ 2: ตารางตรวจรักษาหลัก */}
      <div className={styles.mobileScrollHint}>
        <span>👈 ปัดซ้าย–ขวา เพื่อดูตารางทั้งหมด 👉</span>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>วัน</th>
              <th>08.30 น. - 12.00 น. <br/><span className={styles.subTh}>(รับคิวถึง 11.30 น.)</span></th>
              <th>13.00 น. - 16.30 น.</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.monday}>
              <td>จันทร์</td>
              <td>ตรวจรักษาโรคทั่วไป คลินิกความดันโลหิตสูง-เบาหวาน<br/>นพ.กำชัย รังสิมันต์ไพบูลย์ / พญ.จริดา สันติวงษ์</td>
              <td>ติดตามเยี่ยมบ้านผู้ป่วยในชุมชน<br/>ทีมสหวิชาชีพ</td>
            </tr>
            <tr className={styles.tuesday}>
              <td>อังคาร</td>
              <td>
                ตรวจรักษาโรคทั่วไป คลินิกความดันโลหิตสูง-เบาหวาน<br/>นพ.กำชัย รังสิมันต์ไพบูลย์ / พญ.จริดา สันติวงษ์
                <hr />
                คลินิกวางแผนครอบครัว
              </td>
              <td>
                ติดตามเยี่ยมบ้านผู้ป่วยในชุมชน<br/>ทีมสหวิชาชีพ
                <hr />
                คลินิกผู้สูงอายุ
              </td>
            </tr>
            <tr className={styles.wednesday}>
              <td>พุธ</td>
              <td>ตรวจรักษาโรคทั่วไป และคลินิกความดันโลหิตสูง-เบาหวาน<br/>นพ.กำชัย รังสิมันต์ไพบูลย์ / พญ.จริดา สันติวงษ์</td>
              <td>ติดตามเยี่ยมบ้านผู้ป่วยในชุมชน<br/>ทีมสหวิชาชีพ</td>
            </tr>
            <tr className={styles.thursday}>
              <td>พฤหัสบดี</td>
              <td>ตรวจรักษาโรคทั่วไป และคลินิกความดันโลหิตสูง-เบาหวาน<br/>นพ.กำชัย รังสิมันต์ไพบูลย์ / พญ.จริดา สันติวงษ์</td>
              <td>
                ติดตามเยี่ยมบ้านผู้ป่วยในชุมชน<br/>ทีมสหวิชาชีพ
                <hr />
                คลินิกให้คำปรึกษา
              </td>
            </tr>
            <tr className={styles.friday}>
              <td>ศุกร์</td>
              <td>
                ตรวจรักษาโรคทั่วไป และคลินิกความดันโลหิตสูง-เบาหวาน<br/>นพ.กำชัย รังสิมันต์ไพบูลย์ / พญ.จริดา สันติวงษ์  
              </td>
              <td>
                ติดตามเยี่ยมบ้านผู้ป่วยในชุมชน<br/>ทีมสหวิชาชีพ
                <hr />
                คลินิกมะเร็งปากมดลูก
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ส่วนที่ 3: บริการพิเศษ & หมายเหตุสำคัญ */}
      <div className={styles.tableFooterSection}>
        <div className={styles.noticeBox}>
          ⚠️ <strong>สำคัญมาก:</strong> กรุณานำบัตรประจำตัวประชาชนฉบับจริงมาด้วยทุกครั้งที่เข้ารับบริการตรวจรักษา
        </div>

        <p className={styles.titelqrcode}>โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชรเปิดให้บริการพิเศษ</p>
        <ul role="list" className={styles.listul}>
          <li>ตรวจคลื่นหัวใจ อัลตร้าซาวด์ และจี้หูด ในวันราชการ เวลา 08.30 – 11.30 น.</li>
          <li>บริการฝังและถอดยาคุมกำเนิด ในกลุ่มหญิงวัยเจริญพันธุ์ ในวันราชการ เวลา 08.30 – 11.30 น.</li>
          <li>คลินิกสุขภาพเด็กดี ให้บริการวันพฤหัสบดีสัปดาห์ที่ 2 และ 4 ของเดือน ในวันราชการ เวลา 13.00 – 16.00 น.</li>
          <li>คลินิกวัคซีนผู้ใหญ่ ให้บริการวันพฤหัสบดีสัปดาห์ที่ 3 ของเดือน (ในวันราชการ) เวลา 13.00 – 16.00 น.</li>
          <li>บริการสาธารณสุขระบบการแพทย์ทางไกล (Telemedicine) ในวันราชการ เวลา 10.00 – 11.30 น.</li>
        </ul>

        {/* ส่วนที่ 4: ส่วนปิดท้ายสแกนคิวอาร์โค้ด */}
        <p className={styles.titelqrcode}>
          โดยสแกน QR code นี้ เพื่อลงทะเบียนออนไลน์ผ่านแอปพลิเคชั่น Line OA ของโรงพยาบาล<br />
          ชุมชนเทศบาลเมืองกำแพงเพชร ขอรับบริการระบบการแพทย์ทางไกล (Telemedicine)
        </p>
        
        <div className={styles.qrcodeWrapper}>
          <Image 
            src="/qr/line-oa.png" 
            width={250} 
            height={250} 
            alt="qrcode" 
            className={styles.qrcodeImg} 
          />
        </div>
      </div>

    </div>
  );
}
