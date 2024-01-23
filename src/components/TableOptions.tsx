import TableOptionsInput from "./TableOptionsInput";
import { InputTypeEnum } from "../types/InputTypeEnum";
import { SetStateAction } from "react";

type TableOptionsProps = {
    setItemsPerPage: React.Dispatch<SetStateAction<number>>;
};

const TableOptions = ({ setItemsPerPage }: TableOptionsProps) => {
    return (
        <div className=" h-full flex flex-col justify-center border-l border-l-black/50 px-4 gap-2">
            <TableOptionsInput
                labelText="EndpointURL"
                inputType={InputTypeEnum.TEXT}
                inputText="https://data.webdevinterviews.com/dogBreeds.json"
                disabled
            />
            <TableOptionsInput
                labelText="Items per page"
                inputType={InputTypeEnum.NUMBER}
                minValue={1}
                maxValue={7}
                setStateFn={setItemsPerPage}
            />
        </div>
    );
};

export default TableOptions;
