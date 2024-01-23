import { useEffect, useState } from "react";
import Table from "./components/Table";
import { DogBreedType } from "./types/DogBreedType";
import TableOptions from "./components/TableOptions";

const endpointUrl = "https://data.webdevinterviews.com/dogBreeds.json";

function App() {
    const [dogs, setDogs] = useState<DogBreedType[] | null>(null);
    const [itemsPerPage, setItemsPerPage] = useState<number>(5);

    // Make cached version from ts-hooks
    useEffect(() => {
        if (!endpointUrl) return;

        const fetchData = async () => {
            try {
                const res = await fetch(endpointUrl);
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();
                setDogs(data);
            } catch (error) {
                throw new Error(error as string);
            }
        };

        fetchData();
        return () => {};
    }, [setDogs]);

    return (
        <>
            <div className="h-screen flex items-center justify-between mx-10 gap-10">
                <div className="h-full w-full flex items-center justify-center">
                    <Table
                        title="State Manipulation Table"
                        data={dogs}
                        setData={setDogs}
                        itemsPerPage={itemsPerPage}
                    ></Table>
                </div>
                <div className="w-full max-w-lg h-full ">
                    <TableOptions setItemsPerPage={setItemsPerPage} />
                </div>
            </div>
        </>
    );
}

export default App;
