import { ModalProvider } from "./ModalProvider";
import { ToastProvider } from "./ToastProvider";

export default function RootUIProvider({ children }) {
    return (
        <ModalProvider>
            <ToastProvider>{children}</ToastProvider>
        </ModalProvider>
    );
}
