import { useEffect, useRef } from "react"
import shadCnLogo from "/assets/shadcn.png"
import spin from "/assets/spinners.jfif"
import toaster from "/assets/toaster.png"

const Home = () => {
  const mouseFollowerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (mouseFollowerRef.current) {
        mouseFollowerRef.current.animate(
          [
            {
              top: `${e.clientY}px`,
              left: `${e.clientX}px`,
            },
          ],
          { duration: 1000, fill: "forwards" }
        )
      }
    }

    window.addEventListener("mousemove", onMouseMove)

    return () =>
      window.removeEventListener("mousemove", onMouseMove)
  }, [])

  return (
    <main className="pb-4">
      <div
        className="mouse-follower"
        ref={mouseFollowerRef}
      />
      <div className="container mx-auto grid rows-grid min-h-screen ">
        <h1 className="w-fit mx-auto pt-8 text-2xl font-title">
          The best starter template ever made 😎🥟
        </h1>

        <div className="grid grid-cols-3 gap-5 px-32">
          <div className="flow grid font-base isolate relative p-4 overflow-hidden rounded-xl glassy">
            <img
              src={shadCnLogo}
              alt=""
              className="rounded-3xl h-[200px] w-full object-cover"
            />
            <h2 className="text-2xl">Shadcn/ui</h2>
            <p className="max-w-[29ch] text-slate-400">
              Your favorite component library. click the
              link below to follow instructions to add it to
              vite.
            </p>
            <a
              href="https://ui.shadcn.com/docs/installation/vite"
              className="text-[1.125rem] font-semibold underline underline-offset-4 transition-colors hover:text-opacity-65 block"
            >
              Visit site
            </a>
          </div>
          <div className="flow grid font-base isolate relative p-4 overflow-hidden rounded-xl glassy">
            <img
              src={spin}
              alt=""
              className="rounded-3xl h-[200px] w-full object-cover"
            />
            <h2 className="text-2xl">React spinners</h2>
            <p className="max-w-[29ch] text-slate-400">
              A collection of loaders of different shapes
              just for you 😉.
            </p>
            <a
              href="https://www.davidhu.io/react-spinners/"
              className="text-[1.125rem] font-semibold underline underline-offset-4 transition-colors hover:text-opacity-65 block"
            >
              Visit site
            </a>
          </div>
          <div className="flow grid font-base isolate relative p-4 overflow-hidden rounded-xl glassy">
            <img
              src={toaster}
              alt=""
              className="rounded-3xl h-[200px] w-full object-cover mix-blend-screen"
            />
            <h2 className="text-2xl">React toastify</h2>
            <p className="max-w-[29ch] text-slate-400">
              Notification toasters customized .
            </p>
            <a
              href="https://fkhadra.github.io/react-toastify/introduction/"
              className="text-[1.125rem] font-semibold underline underline-offset-4 transition-colors hover:text-opacity-65 block"
            >
              Visit site
            </a>
          </div>
        </div>
        <footer className="flex justify-center items-center gap-8">
          <img src="/vite.svg" alt="" />
          <img src="/react.svg" alt="" />
        </footer>
      </div>
    </main>
  )
}

export default Home
