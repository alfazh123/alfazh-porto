export default function About() {
    return (
        <div className="overflow-y-scroll scrollbar-hide">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4">About.</h1>
            </div>
            <div className="grid grid-cols-3 relative w-full h-[200vh]">
    
                {/* Kolom Kiri - Sticky */}
                <div className="relative flex justify-center">
                    <div className="sticky top-0 h-screen flex items-center">
                        <p className="limelight-regular text-2xl">Alfazh</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="h-screen flex items-center justify-center px-6 text-center">
                        Hi there! I'm Ahmd Alfazh, a passionate FrontEnd Developer with a knack for creating engaging and user-friendly web experiences💻. I love to combine creativity with technical skills to build websites that not only look great but also function seamlessly. Love read📖, art🎨 and Gym🏋️‍♂️.
                    </div>
                    
                    <div className="h-screen flex items-center justify-center px-6 text-center">
                        I have some experience in FrontEnd Development, using React, NextJs, and Tailwind CSS. I enjoy learning new technologies and continuously improving my skills to stay up-to-date with the latest trends in web development. I also have some experience in Mobile Development from Bangkit Academy which I attended in 2024.
                    </div>

                    <div className="h-screen inline-flex items-center justify-center px-6 text-center">
                        <p>
                            Sometimes i make a projects, you can check it out in the <a href="/projects" className="cursor-pointer underline">project page</a>. And Someof times i make a blog, you can check it out on my <a rel="noopener" href="https://medium.com/@alfazh291" target="_blank" className="cursor-pointer underline">Medium profile</a>{"."}
                        </p>
                    </div>

                    <div className="h-screen inline-flex items-center justify-center px-6 text-center">
                        <p>
                            If you want to get in touch 👋, feel free to reach out to me on <a rel="noopener" href="https://www.linkedin.com/in/ahmd-alfazh/" target="_blank" className="cursor-pointer underline">LinkedIn</a> or send me an <a href="mailto:alfazh.work@gmail.com" className="cursor-pointer underline">✉️email</a>. I'm always open to discussing new projects, collaborations, or just connecting with like-minded individuals in the tech community. Thanks for visiting my about page!
                        </p>
                    </div>
                </div>

                {/* Kolom Kanan - Sticky */}
                <div className="relative flex justify-center">
                    <div className="sticky top-0 h-screen flex items-center">
                        <p className="limelight-regular text-2xl">Alfazh</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}