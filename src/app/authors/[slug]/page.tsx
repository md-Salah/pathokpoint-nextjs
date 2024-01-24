
interface Params {
  slug: string,
}

const Author = ({params}: {params: Params}) => {
  return (
    <div className="custom-margin">{params.slug}</div>
  )
}

export default Author