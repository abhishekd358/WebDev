import Image from "next/image";
import { IoLogoJavascript, IoLogoPython, IoLogoReact } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";


// metadat use for seo purose any file you can use it 
export const metadata = {
  title: "Learning Next.Js",
  description: "Here you going to learn next.js",
};



//  in sever component the fetching process does not require the useEffect wrapper. 



export default function Home() {
  const courses = [
    { id: 1, name: "Javascript", logo: IoLogoJavascript },
    { id: 2, name: "Python", logo: IoLogoPython },
    { id: 3, name: "React", logo: IoLogoReact },
    { id: 4, name: "NextJs", logo: TbBrandNextjs },
  ];
  return (
    <div className="font-sans min-h-screen p-8 pb-20">
      <h1>Learn Following Courses on Our Platform </h1>
      {courses.map((course) => (
        <div key={course.id} className="card ">
          <p>
            <course.logo />
          </p>

          {/* Yaha <course.logo /> actually ek component call hai.React samajhta hai ki course.logo ek variable hai jisme component ka reference store hai.
        Agar aap <course.logo /> likhte ho bina {}, to React use as HTML element <course.logo> maan lega (jo exist hi nahi karta). */}

          {/* Routing */}
          {/* when user click on the course name we redirect user to the specific route of the course */}
          <h1>
            <Link href={`/${course.name}`}>{course.name}</Link>
          </h1>
        </div>
      ))}




      {/* How to display images in the next js */}
          {/* images or fonts or our assets should be kept in the public directory folder. 
        as public folder treat as entry point so that while using content iside '/' only with forw. slash 
        
        <Image> take src and alt.
        if you passing path of public store images use '/' and must have to give width and height.
        if you importing the image in working file then width and height automatically taken.
        
        next does not access remote files for security, so that use next.config and pass below
          const nextConfig = {
          images:{
              remotePatterns:[
                {
                protocol:"",
                hostname: "",
                }
              ]
            }
          };

          this is all about Image
        */}

          

        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMW3_fVylkeaGN0r_6UUBHXXv7WujkdkWkqFnoqj0zqGfXVWvUGYRRLPFLiTJgU_6QZ4&usqp=CAU" width={500} height={500} alt=""/>



            <h1>For data fetching methods click above link</h1>


    </div>
  );
}
