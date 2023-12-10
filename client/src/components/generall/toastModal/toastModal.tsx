import React, { useEffect } from 'react'
import ToastManager, { Toast } from 'toastify-react-native';
import { type ToastModalProps } from './toastModal.type';
function ToastModal ({ error, errorText, type }: ToastModalProps) {
  useEffect(() => {
    if (error) {
      Toast[type](`${String(errorText).slice(0, 20)}...`);
    }
  }, [error]);

  return <ToastManager />;
}

export default ToastModal
