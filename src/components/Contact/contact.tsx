import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>ติดต่อเรา</h2>
        <p>หากคุณมีคำถามหรือต้องการข้อมูลเพิ่มเติม โปรดกรอกแบบฟอร์มหรือติดต่อเราผ่านช่องทางที่ระบุด้านล่าง</p>
        
        <div className="contact-form">
          <form>
            <div className="input-group">
              <label>ชื่อของคุณ</label>
              <input type="text" placeholder="กรอกชื่อของคุณ" required />
            </div>

            <div className="input-group">
              <label>อีเมล</label>
              <input type="email" placeholder="กรอกอีเมลของคุณ" required />
            </div>

            <div className="input-group">
              <label>ข้อความ</label>
              <textarea placeholder="พิมพ์ข้อความของคุณ" rows={5} required></textarea>
            </div>

            <button type="submit" className="btn">ส่งข้อความ</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
