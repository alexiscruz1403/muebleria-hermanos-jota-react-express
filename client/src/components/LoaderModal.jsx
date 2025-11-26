import { Loader } from "lucide-react";

export const LoaderModal = () => {
    return (
        <div className="flex justify-center items-center gap-2 h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
            <Loader className="animate-spin w-8 h-8 text-white"/>
            <p className="text-white mt-2">Por favor espera...</p>
        </div>
    )
}