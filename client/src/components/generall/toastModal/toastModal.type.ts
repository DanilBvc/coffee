export interface ToastModalProps {
  error: boolean;
  errorText: string;
  type: ToastType;
}
export enum ToastType {
  info = 'info',
  success = 'success',
  warn = 'warn',
  error = 'error'
};
