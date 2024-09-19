import React, { useState } from "react";
import ReactDOM from "react-dom";

// Компонент FloatingForm
type FloatingFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FloatingForm: React.FC<FloatingFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={backdropStyle}>
      <div style={formStyle}>
        <h2>Глобальна форма</h2>
        <form>
          <div style={formGroupStyle}>
            <label htmlFor="name">Ім'я:</label>
            <input type="text" id="name" name="name" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" style={inputStyle} />
          </div>
          <div style={buttonContainerStyle}>
            <button type="submit" style={submitButtonStyle}>
              Надіслати
            </button>
            <button type="button" onClick={onClose} style={cancelButtonStyle}>
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Глобальна спливаюча форма</h1>
      <button onClick={openForm} style={openFormButtonStyle}>
        Відкрити форму
      </button>

      <FloatingForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
};

// Стилі для форми і тла
const backdropStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const formStyle: React.CSSProperties = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
};

const formGroupStyle: React.CSSProperties = {
  marginBottom: "15px",
  textAlign: "left",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const submitButtonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const cancelButtonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#dc3545",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const openFormButtonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default App;
