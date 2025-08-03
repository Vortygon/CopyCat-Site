import Link from "next/link";
import Socials from "./socials";
import { NoisePattern } from "./graphics";
import { Suspense } from "react";

function HeaderButton() {
  return (
    <Link href="/translations/disgaea1pc" replace={true}>
      <button id="nav_button"><i className="nf nf-md-menu" /></button>
    </Link>
  )
}

function Logo() {
  return (
    <Link href="/">
      <img src="/CopyCat_logo.svg" id="logo" />
    </Link>
  )
}

export function Header() {
  return(
    <div id="header">
      <NoisePattern />
      <HeaderButton />
      <Logo />
      <div id="header_title">CopyCat</div>
      <Socials />
    </div>
  )
}

export function Footer() {
  return(
    // <div id="footer">CopyCat ©️ 2025</div> 
    <footer id="footer">CopyCat ©️ 2025</footer> 
  )
}