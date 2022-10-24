import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {

  const router = useRouter();

  
  useEffect(() => {
    setTimeout(() => {
        // console.log("dipanggil setelah 5 detik")
        router.push('/');
    }, 5000);
  }, []);

  return (
    <div>
        <h1 className="title-not-found">Ooopss...</h1>
        <h1 className="title-not-found">The page youre lookin for is not found</h1>
    </div>
  )
}
