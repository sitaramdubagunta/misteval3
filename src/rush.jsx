import React, { useState } from "react";
import logo from "./example.png"; // Change to your actual logo filename if needed

export default function MistForm() {
  const [showRed, setShowRed] = useState(true);
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [birthday, setBirthday] = useState("");

  // Format the birthday for right sheet display
  const formattedBirthday = birthday
    ? new Date(birthday).toLocaleDateString("en-GB")
    : "DD/MM/YYYY";

  return (
    <div style={{ fontFamily: "sans-serif", background: "#000", minHeight: "100vh", color: "#fff" }}>
      <div style={{
        background: "#888",
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        justifyContent: "space-between"
        }}>
        <img src={logo} alt="MLST Logo" style={{ height: 55 }} />
        <div style={{ color: "#000" }}>SITARAM D REDG 240911624 PH NUMBER 9701644726</div>
      </div>
      <div style={{ display: "flex", marginTop: 30 }}>
        {/* Left side: Form */}
        <div style={{ flex: 1, padding: "0 32px" }}>
          <div>
            <label>
              Enter Name<br />
              <span style={{ fontSize: 13 }}>(Should be letters only)</span><br />
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ width: "80%", padding: 10, margin: "8px 0", background: "#888", border: "none", color: "#222" }}
              />
            </label>
          </div>
          <div>
            <label>
              Enter Reg Number<br />
              <span style={{ fontSize: 13 }}>(Should be 9 numbers only)</span><br />
              <input
                type="text"
                value={reg}
                onChange={e => setReg(e.target.value.replace(/[^\d]/g, "").slice(0,9))}
                style={{ width: "80%", padding: 10, margin: "8px 0", background: "#888", border: "none", color: "#222" }}
                maxLength={9}
              />
            </label>
          </div>
          <div>
            <label>
              Enter birthday<br />
              <span style={{ fontSize: 13 }}>(Use react calendar form validation here)</span><br />
              <input
                type="date"
                value={birthday}
                onChange={e => setBirthday(e.target.value)}
                style={{ width: "60%", padding: 10, margin: "8px 0", background: "#888", border: "none", color: "#222" }}
              />
            </label>
          </div>
          <div>
            <div style={{
              margin: "18px 0 5px 0",
              display: "flex", alignItems: "center", gap: 12
            }}>
              <span>Is webdev the best domain? :)</span>
              <button
                style={{
                  background: "#5ee253", color: "#222", fontWeight: 600,
                  border: "none", width: 80, height: 40, fontSize: 18, borderRadius: 8,
                }}
                onClick={() => setShowRed(false)}
              >YES</button>
              {showRed && (
                <button
                  style={{
                    background: "#ff2b2b", color: "#222", fontWeight: 600,
                    border: "none", width: 80, height: 40, fontSize: 18, borderRadius: 8,
                  }}
                  onClick={() => setShowRed(false)}
                >NO</button>
              )}
            </div>
            <div style={{ fontSize: 13 }}>
              On clicking green here, the red on the sheet disappears and only green yes visible
            </div>
          </div>
        </div>
        {/* Right side: Sheet */}
        <div style={{
          flex: 1, background: "#fff", color: "#111",
          borderRadius: 9, boxShadow: "0 3px 12px #2222", margin: "0 32px", padding: 36, minHeight: 500,
        }}>
          <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 22 }}>
            MIST Mancomm Member 69
          </div>
          <div style={{ marginBottom: 13 }}>
            My name is <span style={{ fontWeight: 500 }}>{name || "..."}</span>
          </div>
          <div style={{ marginBottom: 13 }}>
            My registration number is <span style={{ fontWeight: 500 }}>{reg || "..."}</span>
          </div>
          <div style={{ marginBottom: 13 }}>
            My birthday is on {formattedBirthday} (Use data entered by user in calendar)
          </div>
          <div style={{ margin: "40px 0 15px 0" }}>
            Is webdev the best domain? :)
          </div>
          <button
            style={{
              background: "#5ee253", color: "#222", fontWeight: 600,
              border: "none", width: 160, height: 55, marginBottom: 16,
              fontSize: 22, borderRadius: 30, display: "block", marginLeft: "auto", marginRight: "auto",
            }}
          >YES</button>
          {showRed && (
            <button
              style={{
                background: "#ff2b2b", color: "#222", fontWeight: 600,
                border: "none", width: 160, height: 55, fontSize: 22,
                borderRadius: 30, display: "block", marginLeft: "auto", marginRight: "auto",
              }}
              onClick={() => setShowRed(false)}
            >NO</button>
          )}
        </div>
      </div>
    </div>
  );
}
