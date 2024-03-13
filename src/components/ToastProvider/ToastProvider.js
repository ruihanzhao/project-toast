import React, { createContext, useCallback, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const onPopToast = useCallback(
    ({ message, variant }) => {
      const newToast = {
        id: Math.random(),
        message,
        variant,
      };

      setToasts([...toasts, newToast]);
    },
    [toasts]
  );

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
  };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
