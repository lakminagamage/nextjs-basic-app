import Image from 'next/image'
import Link from 'next/link'


const Signup = () => {
    return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'> 
       <div className="w-full h-[600px] bg-black rounded-[50px] flex">
            <div className="flex mx-auto my-auto w-2/5 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                <Image className='mx-auto rounded-lg drop-shadow-lg' src="/images/auth.png" width={400} height={300} alt=''/>
            </div>

            <div className="h-[400px] w-0.5 bg-white flex mx-auto my-auto rounded-md"></div>

            <div className="flex flex-col w-2/5">
                <div className="flex flex-col mx-20 my-5">
                <p className='text-3xl my-10 text-center'>Sign Up</p>
                    <label htmlFor="email" className='text-md'>Email</label>
                    <input type="email" placeholder='user@hypercube.com' name="email" id="email" className='border-2 border-black rounded-md p-2'/>
                    <label htmlFor="password" className='text-md'>Password</label>
                    <input type="password" name="password" placeholder='Password' id="password" className='border-2 border-black rounded-md p-2'/>
                    <label htmlFor="password" className='text-md'>Confirm Password</label>
                    <input type="password" name="password" placeholder='Retype Password' id="password" className='border-2 border-black rounded-md p-2'/>
                    <button className='bg-teal text-white rounded-md p-2 mt-5'>Sign Up</button>
                    <p className="text-center my-5">Already have an account? <Link href='/auth/Signin' className='text-teal'>Sign In.</Link></p>
                    <p className="text-center my-2">Or use SSO with</p>
                    <div className="grid grid-cols-2 gap-2">
                        <div className='flex justify-end mx-5'><Image className='rounded-lg drop-shadow-lg' src="/images/google.png" width={50} height={50} alt=''/></div>
                        <div className='flex justify-start mx-5'><Image className='rounded-lg drop-shadow-lg' src="/images/github-logo.png" width={50} height={50} alt=''/></div>
                    </div>
                </div>
             </div>    
            
       </div>
    </div>
    );
    }

export default Signup;