import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'My Account | PATHOK POINT',
    description: 'My Account',
}

const MyAccountLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default MyAccountLayout