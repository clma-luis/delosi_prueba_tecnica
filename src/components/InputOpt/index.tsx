import React, { useEffect } from "react";
import { Input } from "../ui/input";
import { generateInitialMatrix } from "@/shared/utils";

interface InputOptProps {
  maxLength: number;
  matrix: string[][];
  setMatrix: React.Dispatch<React.SetStateAction<string[][]>>;
}

export function InputOtp(props: InputOptProps) {
  const { maxLength, matrix, setMatrix } = props;

  useEffect(() => {
    maxLength && handleCreateArray(maxLength);
  }, [maxLength]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const [firstIndex, secondIndex] = name.split("-");
    if (value.length > 2) return;

    const spreadMatrix = [...matrix];
    spreadMatrix[Number(firstIndex)][Number(secondIndex)] = value;

    setMatrix(spreadMatrix);
  };

  const handleCreateArray = (maxLength: number) => {
    const value: string[][] = generateInitialMatrix(maxLength);
    console.log("handleCreateArray", value);
    setMatrix(value);
  };

  return (
    <div className={`flex flex-col `}>
      {matrix.map((item, firstIndex) => (
        <div className={`w-full flex `}>
          {item.map((currentValue, secondIndex) => (
            <div key={`${firstIndex}-${secondIndex}`} className="m-[3px]">
              <Input
                value={currentValue}
                name={`${firstIndex}-${secondIndex}`}
                onChange={handleOnchange}
                type="number"
                placeholder=""
                className="w-12 h-12 m-auto text-center "
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
