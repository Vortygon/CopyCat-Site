import { promises as fs } from 'fs';
import path from 'path';

interface SocialLink {
  name: string; url: string; icon: string;
}

export default async function Socials() {
  const file = await fs.readFile(path.join(process.cwd(), '/public/socials.json'), 'utf8')
  // const file = await fs.readFile(path.resolve('app/socials.json'), 'utf8')
  // const data = await fetch("localhost:3000/socials.json")
  // const file = await data.json()
  const socialLinks: SocialLink[] = await JSON.parse(file)

  return (
    <div id="header_socials" className="nf">
      {socialLinks.map((link, _) => (
        <a key={link.name} href={link.url} className="header_button" target="_blank">
          <i className={'nf ' + link.icon}></i>
        </a>
      ))}
    </div>
  )
}