"use client";
import { InputOtp } from "@/components/InputOpt";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { autoFillMatrix, rotateToTheLeft } from "@/shared/utils";
import { useState } from "react";
import SelectOptions from "./components/SelectOptions";
import { initialMatrixState } from "./components/SelectOptions/config";

const HomeModules = () => {
  const [matrix, setMatrix] = useState<string[][]>(initialMatrixState);
  const [selectedValue, setSelectedValue] = useState("3");
  const [disableBtn, setDisableBtn] = useState(false);

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

  return (
    <>
      <div className="max-w-screen-xl flex flex-col mx-auto p-4">
        <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-3 gap-2">
          <SelectOptions selectedValue={selectedValue} handleOnChangeValue={handleOnChangeValue} handleOnChangeOpen={handleOnChangeOpen} />
          <Button disabled={disableBtn} onClick={handleAutoFill}>
            AUTO RELLENAR
          </Button>
          <Button disabled={handleDisableBtn()} onClick={() => handleRotateMatrix()}>
            ROTAR SOLO LOS BORDES
          </Button>
          <Button disabled={handleDisableBtn()} onClick={() => handleRotateMatrix(true)}>
            ROTAR TODO
          </Button>
        </div>

        <Card className="w-full p-4  flex flex-col justify-center items-center">
          <h1>Ingresa los valores en la siguiente matriz</h1>
          <InputOtp matrix={matrix} setMatrix={setMatrix} maxLength={Number(selectedValue) || 3} />
        </Card>

      </div>
    </>
  );
};

export default HomeModules;
