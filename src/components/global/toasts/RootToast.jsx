import { ToastType, useToast } from "components/providers/ToastProvider";
import BasicToast from "./widgets/BasicToast";
import { useEffect } from "react";
function RootToast() {
    const { isToastShow, type } = useToast();

    if (!isToastShow) return null;

    switch (type) {
        case ToastType.Basic:
            console.log("basic");
            return <BasicToast />;
        case ToastType.Confirm:
            console.log("confirm");
            return null;
        // return <ConfirmModal />;
        case ToastType.Success:
            console.log("success");
            return null;
        // return <SuccessModal />;
        case ToastType.Loading:
            console.log("loading");
            return null;
        // return <LoadingModal />;
        case ToastType.Warning:
            console.log("warning");
            return null;
        // return <WarningModal />;
        case ToastType.Error:
            console.log("error");
            return null;
        // return <ErrorModal />;
        default:
            console.log("default");
            return null;
    }
}

export default RootToast;
