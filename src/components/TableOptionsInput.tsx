import { SetStateAction } from "react";
import { InputTypeEnum } from "../types/InputTypeEnum";

type TableOptionsInputProps = {
    labelText: string;
    inputType: InputTypeEnum;
    inputText?: string;
    disabled?: boolean;
    minValue?: number;
    maxValue?: number;
    setStateFn?: React.Dispatch<SetStateAction<number>>;
};

const TableOptionsInput = ({
    labelText,
    inputType,
    inputText,
    disabled,
    minValue,
    maxValue,
    setStateFn,
}: TableOptionsInputProps) => {
    return (
        <div className="flex flex-col">
            <label className="p-1 font-semibold">{labelText}</label>
            <input
                type={inputType}
                className="text-black/50 px-2 py-1"
                value={inputText}
                disabled={disabled}
                min={minValue}
                max={maxValue}
                onChange={(e) => {
                    if (setStateFn && Number(e.target.value) > 0) {
                        setStateFn(Number(e.target.value));
                    }
                }}
            />
        </div>
    );
};

export default TableOptionsInput;
