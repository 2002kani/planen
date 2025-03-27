import { Helmet } from "react-helmet"

type HeadProps = {
    title: string
}

const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <Helmet>
        <p> {title} </p>
    </Helmet>
  )
}

export default Head