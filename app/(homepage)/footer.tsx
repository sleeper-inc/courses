import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-12 w-full border-t-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full border-slate-900">
                <p className="items-center text-slate-600">Sleeper Inc @2024</p>
                {/* <Button size="lg" variant="ghost" className="w-full"> */}
                    {/* <Image src="/logo.svg" alt="Learn" height={32} width={32} className="mr-4 rounded-md"/> */}
                    {/* Sleeper Inc @2024 */}
                {/* </Button> */}
                {/* <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/logo.svg" alt="Learn" height={32} width={32} className="mr-4 rounded-md"/>
                    Learn QE
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/logo.svg" alt="Learn" height={32} width={32} className="mr-4 rounded-md"/>
                    Learn TE
                </Button> */}
            </div>
        </footer>
    )
}