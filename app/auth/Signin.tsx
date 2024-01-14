import Image from 'next/image'


const Signin = () => {
    return (
       <div className="w-full h-[600px] bg-black rounded-[50px] grid grid-cols-2">
            <div className="flex items-center justify-center">
            <Image src="/images/2.jpg" width={200} height={200} alt=''/>
            </div>
            <div className="flex items-start justify-center my-10">
            <p className='text-3xl'>Sign In</p>
            
            </div>
            
       </div>
    );
    }

export default Signin;