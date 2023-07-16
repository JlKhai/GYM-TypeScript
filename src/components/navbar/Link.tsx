import { SeletedPage } from "@/App"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page : string
  seletedPage : SeletedPage
  setSeletedPage : (value : SeletedPage) => void
}

const Link = ({page,seletedPage,setSeletedPage}: Props) => {
const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SeletedPage
  return (
    <AnchorLink
    className={`${seletedPage === lowerCasePage ? "text-primary-500" : ""} 
    hover:text-primary-300 transition duration-500 select-none`}
    href={`#${lowerCasePage}`}
    onClick={()=>setSeletedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link