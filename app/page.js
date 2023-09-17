import TurndownService from "turndown"

export default function Home() {
  const turndownService = new TurndownService()
  const markdown = turndownService.turndown('<h1>Hello world!</h1>')
  return markdown
}
