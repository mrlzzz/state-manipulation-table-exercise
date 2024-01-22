import { useEffect, useState } from "react";
import Table from "./components/Table";
import DogBreedType from "./types/DogBreedType";

const endpointUrl = "https://data.webdevinterviews.com/dogBreeds.json";

function App() {
    const [dogs, setDogs] = useState<DogBreedType[] | null>(null);

    // Make cached version from ts-hooks
    useEffect(() => {
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
        void fetchData();
        return () => {};
    }, [setDogs]);

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <Table
                    title="State Manipulation Table"
                    data={dogs}
                    setData={setDogs}
                ></Table>
            </div>
        </>
    );
}

export default App;
