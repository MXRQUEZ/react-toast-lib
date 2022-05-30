import { Toast, ToastProps } from "@components/Toast";
import { createPortal } from "react-dom";

export class ToastService {
  private static instance: ToastService | null = null;

  private readonly toastRootId: string;

  private toast: ReturnType<typeof Toast> | null;

  public constructor(toastRootId: string) {
    if (!ToastService.instance) {
      ToastService.instance = this;
      this.toastRootId = toastRootId;
      this.toast = null;
    }

    this.toastRootId = ToastService.instance.toastRootId;
    this.toast = ToastService.instance.toast;

    return ToastService.instance;
  }

  public getInstance() {
    return ToastService.instance;
  }

  public getToast() {
    return this.toast;
  }

  public addToast(toast: ToastProps) {
    this.toast = createPortal(
      <Toast {...toast} />,
      document.getElementById(this.toastRootId)!
    );
  }
}
