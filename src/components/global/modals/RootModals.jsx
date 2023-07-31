import { ModalType, useModal } from "components/providers/ModalProvider";
import BasicModal from "./widgets/BasicModal";
import ConfirmModal from "./widgets/ConfirmModal";

function RootModal() {
    const { isModalOpen, type } = useModal();

    if(!isModalOpen) return null;

    switch(type) {
        case ModalType.Basic:
            return <BasicModal />;
        case ModalType.Confirm:
            return <ConfirmModal />;
        case ModalType.Success:
            return null;
            // return <SuccessModal />;
        case ModalType.Loading:
            return null;
            // return <LoadingModal />;
        case ModalType.Warning:
            return null;
            // return <WarningModal />;
        case ModalType.Error:
            return null;
            // return <ErrorModal />;
        default:
            return null;
    }
}

export default RootModal;