import { ModalType, useModal } from "components/providers/ModalProvider";
import BasicModal from "./widgets/BasicModal";
import ConfirmModal from "./widgets/ConfirmModal";
import DatePickerModal from "./widgets/DatePickModal";

function RootModal() {
    const { isModalOpen, type } = useModal();

    if(!isModalOpen) return null;

    switch(type) {
        case ModalType.Basic:
            return <BasicModal />;
        case ModalType.Confirm:
            return <ConfirmModal />;
        case ModalType.DatePicker:
            return <DatePickerModal />;
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