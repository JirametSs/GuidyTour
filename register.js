document.getElementById("register-form").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("❌ รหัสผ่านไม่ตรงกัน! กรุณาลองใหม่");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("✅ สมัครสมาชิกสำเร็จ!");
        window.location.href = "login.html"; // Redirect to login page
      } else {
        alert(`❌ สมัครสมาชิกไม่สำเร็จ: ${data.message}`);
      }
    } catch (error) {
      alert("❌ เกิดข้อผิดพลาด: " + error.message);
    }
  });
  