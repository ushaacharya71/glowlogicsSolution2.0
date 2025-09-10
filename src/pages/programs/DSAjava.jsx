import { useState } from "react";
import { FaCheckCircle, FaStar, FaUserFriends } from "react-icons/fa";
import RoadmapFlow from "/RoadmapFlow.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
// import { FaQuoteLeft } from "react-icons/fa";

const FullStackCourse = () => {
  const [openSection, setOpenSection] = useState(null);



  const roleLogos = {
  "Software Engineer (DSA + Java) - Starting Salary (India): ₹5 – ₹9 LPA": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9K8eaqkEKLNFWf7fzbQAca3McYHsdkvpKMtXwLKgEB_hDmtMn61N2v0DEgA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKP2CNJ_0aX4DAuhMIOmzxvMXUE8adsc5v8z44BExycJHV6oFEDsB1a1HmNA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXESL8W6aoDD3CHdJhAz5rmb-MbmKKvvuatyvydeY-fxSHcDheXyKvmYG2W0A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD75Ew8D4llFJk_ZTfQVFS8PwxlhVYwES4SOUQqTcmZtHPw5Pz42sC1coMWQ&s",
  ],
  "Problem-Solving & Competitive Programming Roles - Starting Salary (India): ₹6 – ₹10 LPA": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSdO7qhiIhfW64Jzgkz4Cj7q0QULsDwlU1aoDKHgzoOwE7zTdiQXABFQI2Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUnTw99fm9fVevBAnkSKTEI5XV_T9LbhKusHHYOdxLt2w6vvDTX-15ZO6uw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpsGe5iEJob0dcSB5w9P5aWFjriI1hp0gyk5BlsAn303UpqPqoxUUqNhUuZ0&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJWrxnzTPiaRgGMzwh2fyV6kD15A-ihppe3wEcKFGD8pj1znEEBk1RytrrA&s",
  ],
  "Data Engineer (Strong DSA + Java) - Starting Salary (India): ₹5 – ₹8.5 LPA": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_P85o6q5b2clTlqYUhvgVMIdgUu6MqvzfBISHBirSsS0R7uJwK3u1Fd1bB-U&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQ2ed2DEYUtBqM5QFnRlUDyMc6naNQ7ZqTLQ3pdl1WOk8NHom7ffKz3ub-g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ywGfT6BXzPfdxnmFPHu9WagIC7E_Dz9XlHiCyKOO0jjcX-iktawn2T41-4Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSze0EO7gJyuZJ7-LbrCiBH60WrvWTeLenF82OZdK0kaNvhnmmReIiMQFZvRg&s",
  ],
  "SDE Roles (Top Tech Companies) - Starting Salary (India): ₹8 – ₹15 LPA": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mfxOyRFkqOsS2bqbAv6Jme5aZst5647elBXv3sNokwJNbq3Wohed1XLWWg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjl7XELiAxlFFuJltyWm6Th6inOxlVzxc7MMrSSbAJyYiszxgXSb41DDrv8Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPR10Fz15vjWryAGF7LWpwGCBpDyAiBOpgW5o3r--4GHkybcmtt0q5FI7cavs&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9x9euq8D8I7HZ6X9BzBz9QfV2FS07y1UuXwcJLLA0yo3RATcfVrJjFvTqYQ&s",
  ],
};


 const [activeRole, setActiveRole] = useState(Object.keys(roleLogos)[0]);

   const [showPayment, setShowPayment] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const qrRef = useRef(null);
///////////////////////////////////////////////////////////////////////////////////////////////
  // GSAP animation when QR shows
  useEffect(() => {
    if (showQR && qrRef.current) {
      gsap.fromTo(
        qrRef.current,
        { scale: 0.5, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [showQR]);


  ////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {/* DSA in java Section */}
      <div className="bg-white text-black px-6 pt-20 pb-0 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
           DSA in JAVA
          </h1>
         <p className="text-lg text-gray-700 mb-6">
  Master Data Structures & Algorithms in Java | Strengthen problem-solving skills,
  ace coding interviews, and build a strong foundation for your tech career
</p>


          {/* Benefits */}
         <ul className="space-y-3 text-gray-800 mb-6">
  <li className="flex items-start">
    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
    Master Data Structures & Algorithms using Java from basics to advanced
  </li>
  <li className="flex items-start">
    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
    Solve 300+ coding problems to strengthen problem-solving skills
  </li>
  <li className="flex items-start">
    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
    Learn competitive programming techniques & time complexity analysis
  </li>
  <li className="flex items-start">
    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
    Includes resume review, mock coding interviews & LinkedIn optimization
  </li>
  <li className="flex items-start">
    <FaCheckCircle className="text-green-500 mt-1 mr-2" />
    Live mentor-led cohorts starting within the next 90 days
  </li>
</ul>


          {/* CTA Buttons */}
          <div>
            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 mb-4">
              {/* Enroll Button opens payment popup */}
              <button
                onClick={() => setShowPayment(true)}
                className="bg-[#ff6e0c] border-black text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
              >
                Enroll now
              </button>

              {/* Brochure Download */}
              <a href="/ProgramsPDF/ACCOUNTS.pdf" download>
                <button className="border border-black text-black px-6 py-2 rounded-lg hover:bg-white transition">
                  Download brochure
                </button>
              </a>
            </div>

            {/* Payment Popup */}
            {showPayment && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                <div className="bg-orange-100 rounded-2xl shadow-2xl p-8 max-w-5xl w-full mx-4 relative animate-fadeIn">
                  {/* Close payment popup */}
                  <button
                    onClick={() => setShowPayment(false)}
                    className="absolute top-3 right-3 text-xl text-gray-600 hover:text-red-500"
                  >
                    ✕
                  </button>

                  {/* Payment Options Row */}
                  <div className="flex flex-wrap gap-10 justify-center">
                    {/* UPI Box */}
                    <div className="w-80 h-80 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4">
                      <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBUSEhQQEhUVFhcVGBUYFxYXERYZFhgYGBYVFRUYHSgiGBslHBgVITIhJikrLi4uGB8zODMtNygtLisBCgoKDQ0OFw8QFS0lHR0tLSw3MC0rNy8wMCsvLS0rKzcrNy0tKy03NzQ3LzU3Ny4rLSs3LCs3NzQrLS8rNzcvNf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcCBAUBA//EAEEQAAEDAgIFBgwFBAIDAQAAAAEAAgMEERIhBQYTMUEiUXGBkaEHFBYyUlRhcpKx0dIXQoKToiNjweGy8ENiwhX/xAAbAQEBAAMBAQEAAAAAAAAAAAAAAQQFBgMHAv/EACoRAQABBAEBBwMFAAAAAAAAAAABAgMEETFhBRMhUZGh8UHR4RJCcXKB/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAReXRB6i8C9QEREBERAREQEREEY1806+lhYYiBI99gSARhAu7I9Q61CPLyt9Nn7bVs+E2tx1bYxuiYL+8/M92BcTVii21ZDHa4Lw4+6zlH5W60F0aPx7Jm0N34W4jawxWzy4ZrYXgXqAiIgLW0nViGGSU7mMc7sBNlsqJ+EqtwUWAHOV7W9Q5TvkB1oIaNfK704/22qcai6SnqYHyzuDuWWts0NyaBc5b8z3KoSVd2q9FsaOGM5EMBd7zuU7vKEovrtrZPT1Iigc1oawF12h3Kdc2z3ZW7VH/Lyt9OP9tq+2ndW66epll2DiHvJHLj80ZN/N6IC0fI6u9Xd8cf3IrY8vK304/wBtqeXlb6cf7bVr+R1d6u744/uTyOrvV3fHH9yg2PLyt9OP9tqeXlb6cf7bVr+R1d6u744/uTyOrvV3fHH9yDY8vK304/22p5eVvpx/ttWv5HV3q7vjj+5cvSFBJA/ZytwPsDa4OR3eaSgkFPr/AFbXAvMb2je3ABccbEbirXhfiaHDiAe3NUXoaj21RFF6b2g+7e7v4gq7NJVQhhkkO5jHO7BkFUVzrDrnUtqpWQyBsbXlgGBh83Im5HOCuhqPp6rqqotkkDo2MLnDAwXOQaLgc5J6lXrnEkk7ybnpOZVleC2iwwSTHe9+EdDB9SexBLNK1Wyhkk9FpI6eA7bLzRFeJ4WSD8wzHMRkR2ri6+1eGnbGN73Dsbme+yj2runfFo5g48nZukb77W7uv/C1tebFGXFqeJj3bCnD3hVX/rE7/wAjlJ9XNZG1M9TDleGQhv8A7MHJv0hwd2hSEFUDq5pd1LVRz3JsbP53Nd5/16QFfcMgc0OabggEHgQcwVsKZ20OFk99TO+YfRERfpnCIiAiIgLwlerja31uxopng2OHA3pfyR87oKg0zWbaoll9N7iOi9m9wClfgsosU8sx3MYGDpebnub3qEAK2vBxRbOia475XOf1ea3uF+tFSpEREEREBVf4UazFUxxA5Rsufeefo0dqs8qjdYa3bVU0u8Oebe63kt7gEGOgqLbVMUXBzxf3Rm7uBV6BVd4L6LFVPlO6Nlh7zzb5B3apPr3rFJSNiEJbjeXE4hcYWjPK/OR2ISlaKpfL+t54fg/2vfxArOeD4D9yLpbKKpfxArOeD4D9yfiBWc8HwH7kNLaRVL+IFZzwfAfuT8QKzng+A/chpbSo/Wet21ZNJvBeQPdbyR8u9dV2v1YQReHPLJhv/wAlFkEw8GNFjq3SHdEz+T+SO4PUn8JVbgosA3yvazqHKd8gOtfPwY0WCkdId8ryf0s5I78XauB4UK3FUsiG6Nlz7zz9AO1EQslXfqxQ7Gjhj4hgLvedynd5Kp/QFFtqqGLg57b+6OU7uBV5k2HQiyr7XqqxVIZwjaB1uzPdZRt7QQQdxyWzpKp2sz5PScSOi+XdZa64nJuzcvVV9fh22NZiixTbmPp8ovURFji08P8AoKtfwW6Z2tOadx5cOQ5zGfN7DcdirzTVPcB44ZHo4LDVjTBpKqObPCDheOdjvO7Mj1BdPhZEXbcV+v8AL5nl489m59Vv9s8f1nj0X6iwikDgCCCCAQeBB3FZrPbUREQEREBQPwq1to4YR+ZxkPQ0WHe7uU7KqDwg1u1rni+UYbGOkZu7z3II9FGXODW73ENHSTYfNXzQUwiiZG3cxrWj9IAVRai0W1r4r7mXkP6Rl/ItVyoSIiICIiDmay1uxpJpNxDDb3nclveQqOCs3wp1uGCOEb5H4j7rB9xb2Ksw0k2G85DpO5Fhang0osFHtDvle536W8lvyJ61EvCLW7Suc0bomtZ1nlO+YHUrO0fA2npmMOQijAJ90co/NUfW1JllfKd73Of8RJt/hEZUNFJM/BEx0jrE4RvsN5z6Quh5LVvq8v8AH6qT+Cqi5U054YYx18p3/wAqxUXak/Jas9Xl/j9U8lqz1eX+P1V2IhtSfktWery/x+qeS1Z6vL/H6q7EQ2pPyWrfV5f4/VbejdSquV4a6Mwt4vfbIexoNyVcKIm2ro+ibDEyJnmsaGjny4n28VS2sNbtqqaXg55t7reS3uAVv6zV2xpJpNxDCG+87kt7yFR4CLCZeC+ix1L5TuiZYe882+Qcp7rLVbKlkdxLcI6XZD5rjeDSi2dHjO+V5d1N5LfkT1rDwgVXIjiHEl56G5DvJ7Fi5l3u7FdXRk4drvb9FPX2QpCV451hc5e3mXC0jpDHyW5N73f6XK4uLXfq1HHm6LtTtWzgWv1V+NU8R5/h7pHSGPkt83n9L/Skeo+phqiJpwWwDcNxl6OZnt4rPUXUs1BE84IhGbWnfL7TzM+fQrajYAAAAABYAZAAcAurx8ei1TFNMeDgYpvZt2cnJnniOn2Iog1oa0AACwAyAA3ABZoiyWyEREBERB86mYMY57sg0Fx6ALlUJUzmR7pDve4vPS43/wAq8tN0hmppYmnCXsc0HgCRYXVRP1UrQbeLyZc2EjqIOaLDX0HpuWkc58WC7hhJc2+V75Zj/oXZ/EGs/s/AfuXM8lqz1eXsH1TyWrPV5ewfVB0/xBrP7PwH7k/EGs/s/AfuXM8lqz1eXsH1TyWrPV5ewfVB0/xBrP7PwH7k/EGs/sfAfuXM8lqz1eXsH1TyWrPV5ewfVB8dOaalq3tfMW3a3CA0WFr3OV9/0C2NTqLbV0Ld4a7aHoZyvmAsfJes9Xl7B9VNvB9q1JTl804wvc3C1lwXAXuS6269hl7FB1deq3ZUMtsi8CMfryPdiVOKz/CPRVE4hjhifI0Fz3Fu69rNHYXKFxap1jnNaYJWgkAnKwBNid/BUhY+oVFsqGK++S8h/Wbj+OFSJYQRhrQ0ZBoAHQMgs0QREQEREBERBB/ClW4YI4RvkfiPusH1LexVoGkmwzJyA9p3BT7XzQ9XU1QMUL3xsYGtILLEm5cRd3tA6lzdXNU6kVcTpoXMja8OcSWW5OYGR5wEFl6KpBDBHEPyMa3sGZ7VAtbJjLWua0F2G0YAzJO82HST2Kx3mwvvPNzrh6C0GIiZZLOmeS4ng3EblrfqsHOsV34ptRxvcyzsG/RjzVdnxnWojrKvddNHilp4mOIMsri53M1rB5o63C59i2NRtSjOW1FS20W9kZ3ycznDgz59G+XVurXjVft6gXiia1kcfB5HKc53/rc2txtzb5S0ZL3s49FqIppjwhpr1uvKyasi9O/KHjG2FhkObgskRe7LEREBERAREQYYxe1xfm4heNeDxG+3XzKL6pyB02kKtxFnVBiB5o6ZgYb/AKtoVEqWOaeOjZBJsp6mWq0ljtkACRCHji0h7G9F1UWu5wG8gXy/0sDK3PMZG28ZHm6VAhpvx2ro45GGJ9KZ6ipiP/jfCzA3paTJiaeIsuNFC6anoYhE2odVz1GkZIXODWvjuS0OJBy/qR/CgtYTNO5zTw3jfzdKGdt7Ym33WuL9igTaGNlVRQCmhpAwz10sUZDmf0mbKNznAAEnGD1exaWqVA10Yrp6GneHulrPG3PaZQCXSxkMw3FhhAz9qCyhM29sTb81xfsX0Kq1+gKZuhDWTRNbVSRunEw5NRtZnF8bWuGd7ua0AKcaTrn02jXzS5yR05c72vDP8uQddkrTuLT0EFZFwGZsFVWiNG//AJ7Ia2anbStpoHNeQ9rp6yWQANBDcrXuc87n2LrajV4qpK2CWVlRtmRyutfZt2rDHJCzEByW4Wjdne/EoJ86QDMkW5+Ge5equtWml1KJ6x4NNo7asjF7iR1O5zPGJectDcLW89zvtZobWGpjjqIZG3rZZg+GM7mNnjbJd3MyIB1/a228hBYb5AMyQB7TZGyg7iD0EFVdI59VS6Jp9mKtzmPqpY3uDWytjbhvI4gjN8oO7eFt6R0dIJKSlo4oqCYCetLIyHRB7AImCQgDEH4rHLddBY7pAN5AWAqGnc5h6woLDpNuka6jjfGWOp21EtRC7fHK0CFrTzj+o8g8QQV5qjq1Sukq6hkFOzBUujpnBgtFsWBmJnMdpjKCetnaXFoc0uG8XGIdIWT3gWzAvu9vQoDqPQRw1Ip6mmaytgiL/GWnEKhj3YXSl2/ETvDhlwXQ1knDtJUwd5lLDPWv9hDdlH/ykPUipcHLA1DRvc0dY4KuNW9NT0FPHJVlzoKqN1QyQ/8AgmeHSmB/M11+See44ha0+r8TqDRkUsUbqipmYXPLQXhsjnVVQAeAIBB6URZ/jDbXxNt0iybdu/E3PdmLHoVd6Y0LE7SDKanoqeeGmgdI6AlscQkqX5PzBBdaI9q5un6eI1babxOEtZA2mjjxNFNBU1OKU4nWyNmixAzPSgth8oG8gdJAXrHAi4II5+CrOq0Q59XDSmnZpAUNFHG8SvDWGSU+ecQNzhj6sS+et+n44YxR07oqUUrGTPjZezpWuEjaVhaLW3uccvyjibNC0SsI6hjgS1zXAbyCCB02UUr3iurmUrnHxdtM2pewEjbmRxEbXEZljQ0kjcSRda2uOh6elop3UsMcM07W0jdmMOLbPawXAyvne5CKmrJ2nIOaeggr6KL6oaEZAXO8Rp6N2FrA6N7XveOOIhotmB03UoUBERAREQEREEan1JpXOkN6hrJXl8kLZntp3uPnF0YPHiNxXUi0RE2o8YAIeIhA0fkawOxWa3hnbsC6KIOZXaChkdI8tLXywmB72mzyw8L844FeUmgoY5Y5WhwMUAp2C/JbGCDkOc2GfsXURByqvQMUkssrjJilg8XJDrWju4nB6JJcc+haMGqETYXwbWrdHJEYMDpiWtYQBZgtyTYWvzKRogj9DqjBG9j3OqJzFbZiaV0jGECwc1h5IIG42uOC6WmNGMqYTDLiwOLSQDYnC4OAJ5iQLhbyIOfVaKjkmimficYcRY2/9MOcLY8PFwFwDwuUfoqM1IqeUJBEYcjyS0uDsxxIO4+0roIg4rNWoBSspP6myY9r7YuU8tftLPP5gXZkcVuHRUW3dUYBtXxiIv44AXENHNm493Mt5EEYGpMA2WCSrjMUIgYWSlpwA3sSBmb/ACC6tLoaNk/jAMjpNiyC7nYuQwlw/USSSeOS6SINNmjImzuqA0CV7BG543ua0ktB6L71oDVin8TNGQ8xElx5REmIv2mPGLHFjzuu2iDlaH0DFTFz2mR8j7B0sj3SSuDfNbiduaLnIZZlfLSGrcMzqhz9pephbA8h1rRtxHCzLk3xOufau0iDSrNFRS05p5GB0TmYC0+iBYW5iMs/YsJdExumhlOLFAHCMX5AxgNJI4mwt1ldBEHAqdVY31D6gS1cb5MGMRyljTgFmiwG4C/aVlVarU8jahrg8+MyNme7Fyw9gaGGM/lw4G26+dd1EHOotEsifNI0vxzlrnuJubtYGNw5ZAAXtzkrGi0HDFTGmaDgcHhxJu95kvjc53FxJJuumiCPTao07mQAGdjqdgijlZI5kwYABhc8ecMhkUqNUIHQtixVIwy7fHtXGZ0gFg50jrk2G4cLDmUhRBp6KoBAzAHzSZk4pXl78+GI8PYtxEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z"
                        alt="UPI"
                        className="h-28"
                      />
                      <p className="text-black text-lg font-semibold text-center">
                        Pay using <br /> UPI QR Code
                      </p>
                      <button
                        className="px-6 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
                        onClick={() => setShowQR(true)}
                      >
                        Open QR
                      </button>
                    </div>

                    {/* Razorpay Box */}
                    <div className="w-80 h-80 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                        alt="Razorpay"
                        className="h-12"
                      />
                      <p className="text-lg font-semibold text-black text-center">
                        Pay securely with <br /> Razorpay
                      </p>
                      <button
                        className="px-6 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
                        onClick={() =>
                          window.open("https://rzp.io/rzp/GL9k", "_blank")
                        }
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Full-Screen QR Popup */}
            {showQR && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
                onClick={() => setShowQR(false)} // close when clicking outside
              >
                <div
                  className="relative flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                >
                  <img
                    ref={qrRef}
                    src="/barcode.jpg" // <-- Replace with your QR code
                    alt="UPI QR Code"
                    className="max-w-[80%] max-h-[80%] object-contain rounded-xl shadow-2xl border-4 border-white"
                  />

                  {/* Close button */}
                  <button
                    onClick={() => setShowQR(false)}
                    className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
                  >
                    Close ✕
                  </button>
                </div>
              </div>
            )}
          </div>


          {/* Rating & Learners */}
          <div className="flex items-center gap-6 mt-6 text-gray-700">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold">4.7</span>
              <span>(42,500 Ratings)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUserFriends />
              <span>132.8K Learners</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center max-w-2xl">
          <img
            src="https://img.freepik.com/premium-photo/java-programming-code-abstract-technology-background_272306-149.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80"
            alt="Full Stack Web Dev"
            className="rounded-2xl shadow-xl max-w-xl w-full"
          />
        </div>
      </div>

      {/*DSA in JAVA Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-gray-800">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          DSA in JAVA Certification Course{" "}
          <span className="font-bold text-black">Overview</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          The Glowlogics DSA in JAVA<sup>®</sup> training course is designed
          to equip aspiring project managers with the core skills and knowledge
          required to lead modern web development projects successfully. The
          program covers essential topics including emerging industry trends,
          latest technologies, best practices, and key project management
          competencies. With a strong focus on strategic thinking and business
          acumen, the course also emphasizes the evolving role of a project
          manager in driving digital transformation and delivering high-impact
          results.
        </p>

        {/* Key Features */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-semibold">
              DSA in JAVA Course Key Features
            </h3>
            <span className="text-green-700 text-sm bg-green-100 border border-green-400 rounded-full px-4 py-1 flex items-center gap-2">
              ✅ 100% ISO Verified Internship
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-gray-700">
            {[
              "Get Ahead and Stay Ahead With 50+ Hours of Dynamic, Live Virtual Learning",
              "3 Portfolio-Driven Capstone Projects for Real-World Readiness",
              "Flexible Course Access for Working Professionals and Students",
              "Get Certified with a Course Completion Certificate, Internship Certificate, and Placement Training Certificate – All Included!",
              "Live Mentorship by Seasoned Industry Professionals",
              "Assigned Learning Manager for Personalized Support",
              "Unlimited Lifetime Access to Course Materials",
              "Globally Validated Certification – Backed by ISO & MSME",
              "Access All Course Content for an Entire Year",
              "Comprehensive Career Guidance & Assistance",
              "Career Prospects Across Industries and Roles",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 text-xl">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Covered */}
        <div>
  <h3 className="text-2xl font-semibold mb-6">Skills Covered</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-gray-700">
    {[
      "Time & Space Complexity Analysis",
      "Arrays, Strings & Recursion",
      "Sorting & Searching Algorithms",
      "Stacks, Queues & Linked Lists",
      "HashMaps, Heaps & Priority Queues",
      "Trees & Binary Search Trees",
      "Graphs & Graph Traversal (BFS, DFS)",
      "Dynamic Programming & Memoization",
      "Greedy Algorithms & Backtracking",
      "Bit Manipulation & Mathematics",
      "Advanced Problem-Solving Patterns",
      "System Design Basics for Interviews",
      "Competitive Programming Techniques",
      "Mock Coding Interviews & Problem Discussions",
    ].map((skill, index) => (
      <div key={index} className="flex items-start gap-2">
        <span className="text-[#ff6e0c] text-xl">✔</span>
        <p>{skill}</p>
      </div>
    ))}
  </div>
</div>

      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white text-gray-800">
        <h2 className="text-3xl font-semibold mb-2">Benefits</h2>
        <p className="mb-8 text-gray-600 max-w-4xl">
          The DSA in JAVA<sup>®</sup> certification opens up high-demand
          career opportunities across IT, manufacturing, finance, healthcare,
          and many other industries. Certified professionals are recognized for
          their ability to build and manage end-to-end web applications using
          technologies like Core Java, Spring Boot, React, and databases.
          Employers value DSA in JAVA<sup>®</sup> certified talent for their
          versatility, problem-solving skills, and ability to contribute to both
          frontend and backend development—often leading to faster promotions,
          high-impact roles, and substantial salary growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 border rounded-lg shadow-sm overflow-hidden">
          {/* Designation Column */}
          <div className="flex flex-col divide-y border-r">
            {Object.keys(roleLogos).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`text-left px-6 py-4 hover:bg-blue-50 transition-all ${
                  activeRole === role
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-800"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Hiring Companies */}
          <div className="flex flex-col justify-center items-center px-6 py-4 gap-4">
            <div className="grid grid-cols-2 gap-4">
              {(roleLogos[activeRole] || []).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Company Logo"
                  className="h-10 object-contain max-w-[100px]"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Source: Glowlogics Solutions
            </p>
          </div>
        </div>

        <div className="bg-white text-gray-800 p-6 space-y-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold">
            DSA in JAVA Certification Program{" "}
            <span className="font-bold">Curriculum</span>
          </h2>

          {/* Defeniation */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Definition</h3>
            <p>
  Data Structures and Algorithms (DSA) in Java is a comprehensive program
  designed to build strong problem-solving and coding skills essential for
  cracking technical interviews and excelling in software development roles.
  This course equips learners with in-depth knowledge of core concepts such as
  arrays, strings, linked lists, stacks, queues, trees, graphs, recursion,
  dynamic programming, and advanced algorithms — all implemented in Java.
  Through hands-on coding practice, competitive programming challenges, and
  mock interview sessions, learners develop the ability to approach and solve
  complex problems with efficiency. Ideal for aspiring software engineers, this
  program opens doors to career opportunities in top product companies,
  startups, and global tech firms.
</p>

          </div>

          {/* Pre-requisites */}

          {/* Course Content */}
          <div className="mt-8 space-y-3">
            <h3 className="text-xl font-semibold mb-4">Course Content</h3>

            {[
              {
    title: "Module 1: Introduction to Java",
    lessons: [
      { name: "Java basics, syntax, and control structures." },
      { name: "Object-Oriented Programming (OOP) concepts." },
      { name: "Arrays and Strings." },
    ],
  },
             {
    title: "Module 2: Array Manipulation Techniques",
    lessons: [
      { name: "Array operations and problem-solving techniques." },
      { name: "Strings and string operations." },
      { name: "Multi-dimensional arrays." },
    ],
  },
              {
    title: "Module 3: Linked Lists",
    lessons: [
      { name: "Singly, doubly, and circular linked lists." },
      { name: "Implementation and operations (insertion, deletion, traversal)." },
    ],
  },
  {
    title: "Module 4: Stacks and Queues",
    lessons: [
      { name: "Stack operations using arrays and linked lists." },
      { name: "Queue and priority queue implementation." },
      { name: "Circular queues and dequeues." },
    ],
  },
  {
    title: "Module 5: Hashing",
    lessons: [
      { name: "Hash tables and hash functions." },
      { name: "Open addressing and chaining techniques." },
      { name: "Collision resolution." },
    ],
  },
              {
    title: "Module 6: Trees",
    lessons: [
      { name: "Binary trees, binary search trees, and balanced trees." },
      { name: "Tree traversals (preorder, inorder, postorder)." },
      { name: "Advanced trees: AVL, red-black trees, B-trees." },
    ],
  },
  {
    title: "Module 7: Heaps",
    lessons: [
      { name: "Binary heaps and heap operations." },
      { name: "Priority queues using heaps." },
      { name: "Heapify algorithm and its applications." },
    ],
  },
 {
    title: "Module 8: Graphs",
    lessons: [
      { name: "Graph representation (adjacency list, adjacency matrix)." },
      { name: "Graph traversals: BFS (Breadth-First Search), DFS (Depth-First Search)." },
      { name: "Shortest path algorithms (Dijkstra, Bellman-Ford)." },
    ],
  },
  {
    title: "Module 9: Dynamic Programming",
    lessons: [
      { name: "Understanding recursion and memoization." },
      { name: "Common dynamic programming problems (Knapsack, LCS, etc.)." },
    ],
  },
  {
    title: "Module 10: Sorting and Searching Algorithms",
    lessons: [
      { name: "Classic sorting techniques: Quick sort, Merge sort, Heap sort, Bubble sort." },
      { name: "Binary search and other efficient searching methods." },
    ],
  },
  {
    title: "Module 11: Greedy Algorithms",
    lessons: [
      { name: "Greedy approach and optimization problems." },
      { name: "Common greedy algorithms (Huffman coding, Kruskal’s algorithm)." },
    ],
  },
  {
    title: "Module 12: Backtracking",
    lessons: [
      { name: "Solving constraint satisfaction problems using backtracking." },
      { name: "N-Queens problem, maze problems." },
    ],
  },
  {
    title: "Module 13: Divide and Conquer",
    lessons: [
      { name: "Recursion and divide-and-conquer strategy." },
      { name: "Common algorithms like Merge sort, Quick sort." },
    ],
  },
  {
    title: "Module 14: Interview Problem Solving",
    lessons: [
      { name: "Pattern-based problem solving." },
      { name: "Mock coding interviews with real-world problems." },
      { name: "Tips & tricks for cracking FAANG/product company interviews." },
    ],
  },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenSection(openSection === index ? null : index)
                  }
                  className="w-full px-4 py-3 font-medium flex justify-between items-center border-b hover:bg-blue-100 transition"
                >
                  <span>{section.title}</span>
                  <span className="text-xl">
                    {openSection === index ? "−" : "+"}
                  </span>
                </button>
                {openSection === index && (
                  <div className="px-6 py-3">
                    {section.lessons.map((lesson, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center text-sm py-1"
                      >
                        <span>{lesson.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
         <div>
                  <br></br>
                </div>
                <div className="overflow-hidden w-full max-w-5xl mx-auto rounded-lg shadow-md">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
                    Your 5-Step Career Roadmap with Glowlogics
                  </h2>

                  <img
                    src={RoadmapFlow}
                    alt="World map with student locations"
                    className="transition-transform duration-500 ease-in-out transform hover:scale-105 w-full h-auto"
                  />
                </div>
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: FAQ Section */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-semibold mb-6">
              FAQ <span className="text-black">related to </span>
            </h2>
            <div className="bg-white border rounded-lg shadow-md divide-y">
              {[
                {
                  q: "Who can join this DSA in JAVA Certification Program?",
                  a: "Engineering and degree students from any year or background can join. No prior coding experience is required to get started.",
                },
                {
                  q: "Do I need to know programming before enrolling?",
                  a: "No. The course starts from basics like Core Java, then moves step by step into advanced topics like Spring Boot and Full Stack Development.",
                },
                {
                  q: "How long is the DSA in JAVA certification valid for?",
                  a: "The DSA in JAVA Certification from Glowlogics is ISO- and MSME-recognized and valid for a lifetime.",
                },
                {
                  q: "What skills will I learn in this course?",
                  a: "You’ll learn Core Java, JDBC, Servlets, JSP, Spring Boot, HTML, CSS, JavaScript, MySQL, REST APIs, and full stack web application development.",
                },
                {
                  q: "How long is the course, and what is the learning mode?",
                  a: "The course typically runs for 2–3 months with 90+ hours of live interactive classes, doubt-solving sessions, and hands-on project work.",
                },
                {
                  q: "Will I get a certificate after completing the course?",
                  a: "Yes. You’ll receive an ISO- and MSME-recognized DSA in JAVA Certification after successfully completing the training and submitting your projects.",
                },
                {
                  q: "Is there any placement guarantee?",
                  a: "We provide placement assistance with resume building, interview preparation, and referrals. Final offers depend on your skills and interview performance.",
                },
                {
                  q: "How do I register and pay the course fee?",
                  a: "You can register through our official form link or Company QR Code. Payment details will be shared after registration confirmation.",
                },
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <button
                    className="w-full text-left px-6 py-4 font-medium flex justify-between items-center hover:bg-blue-50 transition"
                    onClick={() =>
                      setOpenSection(openSection === idx ? null : idx)
                    }
                  >
                    {item.q}
                    <span className="text-xl">
                      {openSection === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openSection === idx && (
                    <div className="px-6 pb-4 text-sm text-gray-700">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certificates */}
         <div className="w-full lg:w-1/2 mx-auto relative flex flex-col items-center">
  <div className="bg-[#f9fbff] rounded-xl shadow-md p-8 max-w-md mx-auto text-center border border-orange-600 mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                Live Batch Updates 📅
              </h3>

              <ul className="text-gray-800 space-y-3 text-left list-disc list-inside">
                <li>
                  Current Batch:{" "}
                  <span className="text-black font-bold">11 Aug 2025</span>
                </li>
                <li>
                  Upcoming Batch:{" "}
                  <span className="text-black font-bold">Mid Oct 2025</span>
                </li>
                <li>
                  Upcoming Batch:{" "}
                  <span className="text-black font-bold">Dec 2025</span>
                </li>
              </ul>
            </div>

  {/* Certificate Image with Hover Zoom */}
  <div
    id="cert-container"
    className="border rounded-lg shadow-md overflow-hidden w-full"
    onMouseMove={(e) => {
      const img = document.getElementById("cert-img");
      if (img) {
        const rect = img.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
      }
    }}
    onMouseLeave={() => {
      const img = document.getElementById("cert-img");
      if (img) {
        img.style.transformOrigin = "center center";
      }
    }}
  >
    <img
      id="cert-img"
      src="/CourseCompletionGlowlogics.png"
      alt="Certificate 1"
      data-index="0"
      className="w-full h-auto object-contain p-2 transition-transform duration-300 ease-in-out scale-100 hover:scale-[2.5] cursor-zoom-in"
      onClick={() => {
        const modal = document.getElementById("cert-modal");
        modal.style.display = "flex";
      }}
    />
  </div>

  {/* Certificate Navigation Buttons */}
  <div className="flex gap-6 mt-4">
    <button
      onClick={() => {
        const certificates = [
          "/CourseCompletionGlowlogics.png",
          "/InternshipGlowlogics.png",
          "/PlacementGlowlogics.png",
        ];
        let currentIndex =
          parseInt(document.getElementById("cert-img").getAttribute("data-index")) || 0;
        currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
        const img = document.getElementById("cert-img");
        img.src = certificates[currentIndex];
        img.setAttribute("alt", `Certificate ${currentIndex + 1}`);
        img.setAttribute("data-index", currentIndex);
        document.getElementById("modal-img").src = certificates[currentIndex];
      }}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
    >
      ◀
    </button>

    <button
      onClick={() => {
        const certificates = [
          "/CourseCompletionGlowlogics.png",
          "/InternshipGlowlogics.png",
          "/PlacementGlowlogics.png",
        ];
        let currentIndex =
          parseInt(document.getElementById("cert-img").getAttribute("data-index")) || 0;
        currentIndex = (currentIndex + 1) % certificates.length;
        const img = document.getElementById("cert-img");
        img.src = certificates[currentIndex];
        img.setAttribute("alt", `Certificate ${currentIndex + 1}`);
        img.setAttribute("data-index", currentIndex);
        document.getElementById("modal-img").src = certificates[currentIndex];
      }}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
    >
      ▶
    </button>
  </div>

  {/* Fullscreen Popup Modal */}
  <div
    id="cert-modal"
    className="fixed inset-0 bg-black bg-opacity-80 z-50 hidden items-center justify-center p-4"
    style={{ display: "none" }}
  >
    <div className="relative max-w-4xl w-full">
      <button
        onClick={() => {
          document.getElementById("cert-modal").style.display = "none";
        }}
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full px-3 py-1 text-sm font-semibold"
      >
        ✕ Close
      </button>
      <img
        id="modal-img"
        src="/CourseCompletionGlowlogics.png"
        alt="Full Certificate"
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  </div>
</div>

        </div>
        <div className=" py-12 overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-10 leading-snug">
            Admiration expressed by others regarding our presence.
          </h2>

          <div className="relative w-full space-y-8 overflow-x-hidden">
            <div className="flex w-max animate-marquee space-x-6 px-6 items-start">
              {[...Array(2)].flatMap(() =>
                [
                   {
                    name: "Vrinda K",
                    title: "Dayalbagh Educational Institute",
                    text: "I had a great learning experience with Glow Logics while pursuing their cloud computing course. The curriculum was hands-on and project-focused, which helped me apply theoretical concepts to real-world scenarios. The projects I worked on not only deepened my understanding but also significantly strengthened my resume. I’m truly grateful for the practical exposure and support provided throughout the course.",
                    img: "/vrindaK.png",
                  },
                  {
                    name: "Smriti Mathuriya",
                    title: "Dayalbagh Educational Institute",
                    text: "Hello! My name is Smriti Mathuriya. I’m pursuing a B.Sc. from Dayalbagh Educational Institute and recently completed my internship at Glowlogics in the Data Science domain.",
                    img: "/Smrithi.png",
                  },
                  {
                    name: "Aan Narai",
                    title: "Alliance University",
                    text: "I'm Aan Narai, a third-year B.Tech student at Alliance University. I recently completed my UI/UX course from Glowlogics Solutions and received my certification. The training quality was excellent, the instructors were very helpful, and the learning environment was extremely user-friendly. Any issues I faced were resolved immediately. Thank you, Glowlogics!",
                    img: "/Aan.png",
                  },
                  {
                    name: "Kavya R",
                    title: "Bachelor's in Engineering",
                    text: "Hello everyone, I'm Kavya, currently pursuing my Bachelor's in Engineering with a focus on Computer Technology. I'm currently enrolled in the internship program at Glowlogics. My experience so far has been great—the projects are well-structured and easy to understand. Submitting projects and receiving certificates is seamless. Many students are also securing internships and getting placed in reputed companies through this program.",
                    img: "/Kavya.png",
                  },
                  {
                    name: "Kulsum Bano",
                    title: "MMICT&MB, 2nd Year",
                    text: "My name is Kulsum Bano, and I recently completed my UI/UX Training and Internship Program with Glowlogics. The sessions were highly interactive, engaging, relevant, and beginner-friendly. The mentors were very supportive, and I would definitely recommend this program to anyone looking to start their tech journey. Thank you, Glowlogics!",
                    img: "/Kulsum.png",
                  },
                  {
                    name: "Naziya",
                    title: "Dr.Ambedkar Institute of Technology",
                    text: "This is Naziya from Bengaluru, currently studying in the 3rd year of BE in the ECE branch at Dr. AIT, Bengaluru. I recently completed a DSA in JAVA course at Glowlogic Solutions, and it was a great learning experience. It was one of the best learning platforms for me, as it covered all the topics thoroughly and helped me become confident in Java. The schedule was very flexible and cooperative, allowing me to balance both my college work and the Java classes. The trainer was highly supportive and knowledgeable, explaining every concept clearly with practical examples. This course helped me build a strong foundation in Java and enhanced my skills significantly. I am truly thankful to the team for their continuous guidance and support throughout this wonderful journey.",
                    img: "/Naziya.png",
                  },
                  {
                    name: "Bollepally Jashwanth Varma",
                    title: "Sai Spurthi Institute of Technology, 3rd Year",
                    text: "I recently completed the Cybersecurity Ethical Hacking Internship at GlowLogics Solution and had an excellent experience. The course was well-structured, covering essential topics like penetration testing and vulnerability assessment. The instructors were knowledgeable and supportive. The practical projects gave me real-world exposure. I highly recommend it to aspiring ethical hackers!",
                    img: "/CyberUnknown.png",
                  },
                  {
                    name: "Tejaswini.K",
                    title: "Jayaraj Annapackiam College",
                    text: "Hello everyone, I am Tejaswini K. I study Computer Science at Jayaraj Annapackiam College. I recently completed the Artificial Intelligence course from Glowlogics. The course was well-organized and beginner-friendly. The instructors explained everything in a clear manner. I now feel confident working on AI projects, especially using Python. Thank you, Glowlogics!",
                    img: "/TejasvaniK.png",
                  },

                  {
                    name: "Thotakura Puneeth Sai",
                    title: "Anantha Lakshmi Institute of Technology, 3rd Year",
                    text: "Hi, I'm Thotakura Puneeth Sai, a 3rd-year B.Tech student at Anantha Lakshmi Institute of Technology and Sciences. I completed the Cybersecurity & Ethical Hacking course at Glowlogics, and it was an amazing experience. The instructors were supportive, and the hands-on classes were top-notch. I gained real-world skills essential in cybersecurity. Thank you, Glowlogics!",
                    img: "/Thotakura Puneeth Sai.png",
                  },
                  {
                    name: "Preetham",
                    title: "Navkis College of Engineering",
                    text: "Hello, I’m Preetham. I recently completed my Bachelor's in Engineering. In my final semester, I enrolled in a specialized VLSI course at Glowlogics. The course covered Verilog, FPGA, ASIC flow, and low-power techniques. I also did a Verilog design project that strengthened my hardware skills. This training has prepared me well for the semiconductor field.",
                    img: "/pritam.png",
                  },
                  {
                    name: "Khusi M",
                    title:
                      " University of Visvesvaraya College of Engineering ",
                    text: "I'm really grateful to GlowLogics Solutions for such a great learning experience in VLSI Design. The training was super well-organized, and the instructors were not just knowledgeable but also really patient and supportive throughout. The hands-on sessions and real-time project work helped me understand the concepts much better and boosted my confidence a lot. Big thanks for the guidance and opportunity — it’s definitely going to help me in the future!",
                    img: "/khushi.png",
                  },
                  {
                    name: "Dusa Abhiram ",
                    title: "University of Visvesvaraya College of Engineering ",
                    text: "I am greatful and thankful to the Glowlogics Solutions team for my internship programme on VLSI, gaining valuable insights into digital circuit design and simulation. During the training, I worked with Verilog and tools like icarus verilog and  Xilinx Hands-on projects helped me understand the VLSI design flow effectively. The experience boosted my technical and problem-solving skills. Overall, it was a great learning journey that deepened my interest in semiconductor technology.",
                    img: "/Dusa.png",
                  },
                  {
                    name: "Jeshwanth Basutkar ",
                    title: "Kommuri Pratap Reddy Institute of Technology",
                    text: "I am extremely thankful to GlowLogics Solutions for providing an exceptional learning experience in Data Science. The training was well-structured with a perfect balance of theory and practical sessions, allowing me to gain real-time project exposure and industry-relevant skills. The instructors were highly knowledgeable, supportive, and always approachable, which made the learning process smooth and engaging. This training has greatly enhanced my confidence and equipped me with the right tools to take the next step in my data science career.",
                    img: "/Jeshwanth.png",
                  },
                  {
                    name: "Sanjana Anand Patil",
                    title: "M.S. RAMAIAH INSTITUTE OF TECHNOLOGY",
                    text: "I am truly grateful to GlowLogics Solutions for providing me with an excellent learning experience in VLSI design. The training was well-structured, and the instructors were knowledgeable, patient, and supportive throughout. The hands-on approach and real-time project exposure significantly enhanced my understanding and confidence in the field. I sincerely appreciate the opportunity and guidance I received, which will definitely help me in my future endeavors.",
                    img: "/Sanjana.png",
                  },

                  {
                    name: " Vindhya NS",
                    title: "Sanatan Dharma College",
                    text: "My name is Vindhya N.S., and I’m from Puttur. I am currently in the second year of my MBA, specializing in Human Resource and Finance at SDIT College. Recently, I completed certification courses in HR and Finance, which provided me with valuable insights and practical knowledge. The training was engaging and well-structured, with a clear focus on both theoretical concepts and their real-world applications. The instructors made learning easy through their approachable teaching style and relevant examples. These courses have helped me build a strong understanding of HR and Finance functions, and I now feel more confident and prepared to take on future professional challenges. I sincerely appreciate the support and guidance I received during the course.",
                    img: "/Vindhya.png",
                  },

                  {
                    name: "Tharani P",
                    title: "Sri Krishna College of Technology (SKCT)",
                    text: "I had the opportunity to participate in a 3-month online internship with GlowLogicss , Bangalore.,under the VLSI Design course. This program provided me with valuable exposure to the fundamentals and advanced concepts of VLSI design, including practical insights into design methodologies, simulation techniques, and industry tools. The structured training, combined with hands-on tasks, helped me enhance my technical knowledge and problem-solving skills. I am grateful to Glow Logistics for offering this learning platform and for the guidance provided throughout the internship.",
                    img: "/Tharani P.png",
                  },

                  {
                    name: "M.Harsha Vardhan",
                    title: "Sri Krishna College of Technology (SKCT)",
                    text: "I had an excellent experience learning VLSI Design with Glowslogics Solution. The training was well-structured, covering both theoretical foundations and hands-on practical aspects of VLSI. The instructors were knowledgeable, patient, and always ready to clarify doubts. I especially appreciated the real-world examples and industry-relevant projects, which helped me gain confidence in applying concepts. The learning environment was supportive, and the resources provided were up-to-date with current industry standards. I would highly recommend Glowslogics Solution to anyone looking to build a strong career in VLSI design. I am truly grateful to Glowslogics Solution, Bangalore, for offering this learning platform and for the constant guidance provided throughout the internship.",
                    img: "/M.Harsha Vardhan.png",
                  },

                  {
                    name: "Faizan Ul Hassan",
                    title: "Netaji Subhash University",
                    text: "Truly speaking, it is a very good course and the mentors are excellent in terms of cooperation. Whenever I ask something, they immediately respond and clear my doubts with real-life examples and guidance on how to avoid mistakes, which I truly appreciate. The entire team is also very supportive—whenever I had any doubt, they personally called me and gave their time to explain everything clearly. The fees are also genuine, especially considering the quality of training provided. Overall, it has been a very good experience with Glowlogics Solutions. Thank you so much, Team Glowlogics Solutions!✨",
                    img: "/Faizan Ul Hassan.png",
                  },

                  {
                    name: "Tejaswini.K",
                    title: "JSS College Mysore",
                    text: "My name is Tejaswini K. from Karadahalli, and I am currently in the second year of my M.Sc. in Computer Science at JSS College, Mysore. I recently completed a certification course in Artificial Intelligence and had a great learning experience. The course content was well-structured and beginner-friendly, and the instructor explained the concepts clearly with practical examples. Overall, it was a valuable learning opportunity for me.",
                    img: "/Tejswani.png",
                  },

                  {
                    name: "Manasa.C",
                    title: "Cambridge College",
                    text: "My name is Manasa C, and I’m from Bangalore. I am currently in the third year of my B.E., specializing in Information Science and Engineering at Cambridge College. Recently, I completed certification courses in Web Development, which provided me with valuable insights and practical knowledge. The training was engaging and well-organized, with a clear focus on both theoretical concepts and real-world applications. The instructors made learning easy with their approachable teaching style and relevant examples. These courses have helped me build a strong understanding of websites, and I now feel more equipped to take on future professional challenges. I sincerely appreciate the support and guidance I received during the course from Glowlogics Solutions.",
                    img: "/Manasa.png",
                  },

                  {
                    name: "Srijib Dey",
                    title: "Working as a Employee",
                    text: "I have been doing a VLSI course from GlowLogics for the last 6 months. This course provided me with valuable exposure to the fundamentals and advanced concepts of VLSI design, including practical insights into design methodologies, simulation class techniques, and industry tools. The structured training, combined with hands-on tasks, helped me enhance my technical knowledge and problem-solving skills. ",
                    img: "/Sri.png",},
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl shadow p-6 w-[320px] flex-shrink-0 flex flex-col"
                  >
                    <svg
                      className="text-blue-500 text-xl mb-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      width="20"
                      height="20"
                    >
                      <path d="M464 32H320c-26.5 0-48 21.5-48 48v144c0 26.5 21.5 48 48 48h24v32c0 44.2-35.8 80-80 80-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16 88.4 0 160-71.6 160-160v-64c0-26.5-21.5-48-48-48H336V80h128v352h48V80c0-26.5-21.5-48-48-48z" />
                    </svg>
                    <p className="text-gray-700 text-sm mb-4">{item.text}</p>
                    <div className="flex items-center space-x-3 mt-auto">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullStackCourse;
