import { Logo } from "../Logo";
import { SocialMedia } from "../SocialMedia";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center text-center w-full pt-5 px-8 text-white text-2xl bg-[var(--dark-blue-main-bg)] sm:flex-row sm:justify-between sm:pb-5 md:px-24 lg:px-32 xl:px-48">
      <Logo />
      <SocialMedia />            
    </header>
  )
}