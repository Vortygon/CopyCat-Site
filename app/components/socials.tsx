import { promises as fs } from 'fs';

interface SocialLink {
  name: string; url: string; icon: string;
}

export default async function Socials() {
  const file = await fs.readFile(process.cwd() + '/app/socials.json', 'utf8')
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