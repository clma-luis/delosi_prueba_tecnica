import { Button } from "@/components/ui/Button";
import { Dispatch, SetStateAction } from "react";
import { BtnTypeText } from "../..";

interface CallToActionsProps {
  disableBtn: boolean;
  selectedValue: string;
  btnText: BtnTypeText;
  setBtnText: Dispatch<SetStateAction<BtnTypeText>>;
  handleAutoFill: () => void;
  handleRotateMatrix: (rotateAll?: boolean) => void;
  handleDisableBtn: () => boolean;
  handleCleanMatrix: () => void;
}

const CallToActions = (props: CallToActionsProps) => {
  const { disableBtn, selectedValue, btnText, setBtnText, handleAutoFill, handleRotateMatrix, handleDisableBtn, handleCleanMatrix } = props;
  const isUpToThree = Number(selectedValue) > 3;

  const handleActionBtn = (rotateAll?: boolean) => {
    handleRotateMatrix(rotateAll);
    setBtnText(BtnTypeText.reset);
  };

  return (
    <div className={`w-full mb-4 grid grid-cols-1 md:grid-cols-1 gap-2`}>
      <Button
        className="mx-1"
        disabled={disableBtn}
        onClick={() => {
          handleAutoFill();
          setBtnText(BtnTypeText.autoFill);
        }}
      >
        {btnText}
      </Button>
      <Button className="mx-1" disabled={handleDisableBtn()} onClick={() => handleActionBtn()}>
        Rotar bordes
      </Button>

      {isUpToThree && (
        <Button className="mx-1" disabled={handleDisableBtn() || +selectedValue <= 3} onClick={() => handleActionBtn(true)}>
          Rotar todo
        </Button>
      )}
      <Button className="mx-1" onClick={() => handleCleanMatrix()}>
        Limpiar todo
      </Button>
    </div>
  );
};

export default CallToActions;
