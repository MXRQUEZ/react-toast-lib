import { Toast } from "@components/toast";
import { createPortal } from "react-dom";
import ErrorBoundary from "@components/error-boundary";
import { ToastProps } from "../types/toast";

export default class ToastService {
  private static instance: ToastService | null = null;

  private readonly toastRootId: string;

  private toasts: JSX.Element[];

  constructor(toastRootId: string) {
    if (!ToastService.instance) {
      this.toastRootId = toastRootId;
      this.toasts = [];
      ToastService.instance = this;
    }

    this.toastRootId = ToastService.instance.toastRootId;
    this.toasts = ToastService.instance.toasts;

    return ToastService.instance;
  }

  public getToasts() {
    return ToastService.instance?.toasts;
  }

  public addToast(toast: ToastProps) {
    if (ToastService.instance) {
      ToastService.instance.toasts.push(
        createPortal(
          <ErrorBoundary>
            <Toast {...toast} />
          </ErrorBoundary>,
          document.getElementById(this.toastRootId)!
        )
      );
    }
  }
}
