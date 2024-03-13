import React, { createContext, useCallback, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("notice");
  const [toasts, setToasts] = useState([]);

  const onPopToast = useCallback(() => {
    const newToast = {
      id: Math.random(),
      message,
      variant,
    };
    setMessage("");
    setVariant("notice");
    setToasts([...toasts, newToast]);
  }, [message, toasts, variant]);

  const onDismissToast = useCallback(
    (toastId) => {
      const toastsCopy = [...toasts];
      const result = toastsCopy.filter((toast) => toast.id !== toastId);
      setToasts(result);
    },
    [toasts]
  );

  const value = {
    toasts,
    setToasts,
    onPopToast,
    onDismissToast,
    message,
    setMessage,
    variant,
    setVariant,
  };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
