import { UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import Icon from "./icon"


export const Nav = () => {

    const {user} = useUser()
    return (
        <div className="flex justify-between w-full  items-center px-8 py-4 text-gray">
          <div className="flex items-center justify-center">
                <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">                
                <Icon/>
                </div>
                <div className="ml-2 font-bold text-xl">CorpAI</div>
            </div>
          <div className="flex space-x-4">
            {user ? (
            <>
                <Link href="/assistant/chat" className="px-6 py-2 rounded-full text-sm font-medium text-white  bg-blue-500 hover:bg-blue-700">Learning journey</Link>
                <UserButton />
            </>
            ):(
                <>
                    <Link href="/sign-up" className="px-3 py-2 text-sm font-medium text-gray hover:text-gray-500"> Register </Link>
                    <Link href="/sign-in" className="px-6 py-2 rounded-full text-sm font-medium text-white  bg-blue-500 hover:bg-blue-700">Login</Link>
                </>
            )}
            
          </div>
        </div>
    )
}