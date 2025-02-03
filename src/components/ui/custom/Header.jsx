import React, { useEffect, useState } from 'react'
import { Button } from '../button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

function Header() {

  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user)
  }, [])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
})

const GetUserProfile = (tokenInfo) => {
  axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'Application/json'
      }
  }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      window.location.reload()
  })
}

  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <a href='/'>
  <Button variant="ghost" className="p-0 hover:bg-transparent">
    <div className="w-[200px] xs:w-[160px] md:w-[180px] h-auto aspect-[1750/398]"> {/* 4.44:1 ratio */}
      <img 
        src='/logo.png' 
        className="w-full h-full object-contain" 
        alt="Logo"
      />
    </div>
  </Button>
</a>
      <div>
        {user ?
          <div className='flex items-center gap-3'>
            <a href='/create-trip'>
            <Button variant="outline"
            className="rounded-full">Create Trip</Button>
            </a>
            <a href='/my-trips'>
            <Button variant="outline"
            className="rounded-full">My Trips</Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className='cursor-pointer' onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Log out</h2>
              </PopoverContent>
            </Popover>
          </div>
          :
          <Button onClick={()=>setOpenDialog(true)}>Sign In</Button>
        }
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>

                <DialogContent>
                    <DialogHeader>

                        <DialogDescription>
                            <img src="/logo.svg" />
                            <h2 className='font-bold text-lg mt-7'>Sign-In With Google</h2>
                            <p>Securely sign-in to the app with Google authentication</p>

                            <Button

                                onClick={login}
                                className='w-full mt-5 flex gap-2 items-center'>

                                <FcGoogle className='h-7 w-7' />
                                Sign-In With Google

                            </Button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
    </div>
  )
}

export default Header