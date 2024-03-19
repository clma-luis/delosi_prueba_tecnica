"use client";
import { MatrixInputs } from "@/components/MatrixInputs";
import { Card } from "@/components/ui/Card";
import { autoFillMatrix, generateInitialMatrix, rotateToTheLeft } from "@/shared/utils/matrixUtils/matrixtUils";
import { useState } from "react";
import CallToActions from "./components/CallToActions";
import SelectOptions from "./components/SelectOptions";
import { initialMatrixState } from "./components/SelectOptions/config";

export enum BtnTypeText {
  autoFill = "Autorrellenar",
  reset = "Restablecer",
}

const HomeModule = () => {
  const [matrix, setMatrix] = useState<string[][]>(initialMatrixState);
  const [selectedValue, setSelectedValue] = useState("3");
  const [disableBtn, setDisableBtn] = useState(false);
  const [btnText, setBtnText] = useState(BtnTypeText.autoFill);

  const handleRotateMatrix = (rotateAll?: boolean) => {
    const rotatedMatrix = rotateToTheLeft(matrix, rotateAll);
    setMatrix(rotatedMatrix as string[][]);
  };

  const handleAutoFill = () => {
    const value = autoFillMatrix(Number(selectedValue));
    setMatrix(value);
  };

  const handleOnChangeValue = (value: string) => {
    setSelectedValue(value);
    setBtnText(BtnTypeText.autoFill)
  };

  const handleOnChangeOpen = (isOpen: boolean) => {
    if (isOpen) {
      setDisableBtn(true);
    } else {
      setTimeout(() => {
        setDisableBtn(false);
      }, 50);
    }
  };

  const handleDisableBtn = () => {
    const value = matrix.flat().some((el) => !el);

    return value || disableBtn;
  };

  const handleCleanMatrix = () => {
    const value = generateInitialMatrix(matrix.length);
    setBtnText(BtnTypeText.autoFill)
    setMatrix(value);
  };

  return (
    <>
      <div className="max-w-screen-xl flex flex-col mx-auto p-4">
        <h1 className=" text-[18px] font-semibold text-center">PRUEBA TECNICA DELOSI</h1>
        <h3 className="text-[14px] mb-4 text-center">A continuación, ingresa un número de máximo dos dígitos en cada casilla.</h3>
        <Card className="w-full p-4 flex flex-col justify-center items-center mb-8">
          <MatrixInputs matrix={matrix} setMatrix={setMatrix} maxLength={Number(selectedValue) || 3} />

          <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-1 gap-4 max-w-[350px] mt-4">
            <SelectOptions
              selectedValue={selectedValue}
              handleOnChangeValue={handleOnChangeValue}
              handleOnChangeOpen={handleOnChangeOpen}
            />
            <CallToActions
              selectedValue={selectedValue}
              disableBtn={disableBtn}
              btnText={btnText}
              setBtnText={setBtnText}
              handleAutoFill={handleAutoFill}
              handleRotateMatrix={handleRotateMatrix}
              handleDisableBtn={handleDisableBtn}
              handleCleanMatrix={handleCleanMatrix}
            />
          </div>
          <p className="text-[14px] mt-3">Para poder rotar, es necesario que todas las casillas tengan un número.</p>
        </Card>
      </div>
    </>
  );
};

export default HomeModule;
