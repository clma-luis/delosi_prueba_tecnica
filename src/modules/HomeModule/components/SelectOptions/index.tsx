import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { selectOptions } from "./config";

interface SelectComponentProps {
  selectedValue: string;
  handleOnChangeValue: (value: string) => void;
  handleOnChangeOpen: (isOpen: boolean) => void;
}

const SelectOptions = (props: SelectComponentProps) => {
  const { selectedValue, handleOnChangeValue, handleOnChangeOpen } = props;

  return (
    <>
      <Select
        onOpenChange={(isOpen) => handleOnChangeOpen(isOpen)}
        onValueChange={(value) => handleOnChangeValue(value)}
        value={selectedValue}
      >
        <SelectTrigger>
          <SelectValue placeholder="Seleccionar una longitud" />
        </SelectTrigger>

        <SelectContent>
          {selectOptions.map((item) => (
            <SelectItem value={`${item.id}`} key={item.id}>
              {item.nombre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectOptions;
