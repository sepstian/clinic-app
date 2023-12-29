import SideNav from "../../components";

const QueuePage = () => {
    return (
        <>
            <div className="flex flex-row h-screen w-full">
                <SideNav/>
                <div className="flex flex-col w-full mt-2 mr-6">
                    <div className="flex flex-row justify-between ml-4 mr-4 ">
                        <h1 className="text-base text-[#8F8E8E]">Welcome, Cashier1</h1>
                        <h1 className="text-base text-[#8F8E8E]">MM-DD-YYYY</h1>
                        <h1></h1>
                    </div>
                    <div className="flex flex-row mt-8 ml-8 justify-between" >
                        <h1 className="font-bold text-lg text-[#8F8E8E]">QUEUE</h1>
                        <button className="bg-black text-white font-bold w-[60px] rounded-sm">Add +</button>
                    </div>
                    <div className="ml-8 mt-8">
                        <table class="table-fixed text-[#8F8E8E] w-full">
                            <thead className="">
                                <tr>
                                    <th className="underline underline-offset-2">NAME</th>
                                    <th className="underline underline-offset-2">AGE</th>
                                    <th className="underline underline-offset-2">ID NUMBER</th>
                                    <th className="underline underline-offset-2">Diagnose</th>
                                    <th className="underline underline-offset-2">Fee</th>
                                    <th className="underline underline-offset-2">STATUS</th>
                                    <th className="underline underline-offset-2">ACTION</th>
                                </tr>
                            </thead>
                            <tbody className="text-center mt-2">
                                <tr>
                                    <td>NAME</td>
                                    <td>AGE</td>
                                    <td>ID NUMBER</td>
                                    <td>Diagnose</td>
                                    <td>Fee</td>
                                    <td>STATUS</td>
                                    <td>ACTION</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 m-auto">
                        <button className="bg-black text-white font-bold w-[60px] rounded-sm mr-4">Prev</button>
                        <button className="bg-black text-white font-bold w-[60px] rounded-sm">Next</button>
                    </div>
                    <div className="flex flex-row mt-8 ml-8 justify-between">
                        <h1 className="font-bold text-lg text-[#8F8E8E]">CHECK UP</h1>
                    </div>
                    <div className="ml-8 mt-8 mb-8">
                        <table class="table-fixed text-[#8F8E8E] w-full">
                            <thead className="">
                                <tr>
                                    <th className="underline underline-offset-2">NAME</th>
                                    <th className="underline underline-offset-2">AGE</th>
                                    <th className="underline underline-offset-2">ID NUMBER</th>
                                    <th className="underline underline-offset-2">Diagnose</th>
                                    <th className="underline underline-offset-2">Fee</th>
                                    <th className="underline underline-offset-2">STATUS</th>
                                    <th className="underline underline-offset-2">ACTION</th>
                                </tr>
                            </thead>
                            <tbody className="text-center mt-2">
                                <tr>
                                    <td>NAME</td>
                                    <td>AGE</td>
                                    <td>ID NUMBER</td>
                                    <td>Diagnose</td>
                                    <td>Fee</td>
                                    <td>STATUS</td>
                                    <td>ACTION</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QueuePage