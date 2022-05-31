import { Toast } from "@components/toast";
import { createPortal } from "react-dom";
import { ToastProps } from "@components/toast/interfaces";
import { ErrorBoundary } from "@components/error-boundary";

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

  public setToast(toast: ToastProps) {
    this.toast = createPortal(
      <ErrorBoundary>
        <Toast {...toast} />
      </ErrorBoundary>,
      document.getElementById(this.toastRootId)!
    );
  }
}
