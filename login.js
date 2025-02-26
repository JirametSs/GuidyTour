document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("เข้าสู่ระบบสำเร็จ!");
        localStorage.setItem("token", data.token); // Store JWT token
        window.location.href = "booking.html"; // ✅ Redirect on successful login
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("เกิดข้อผิดพลาด: " + error.message);
    }
  });
  