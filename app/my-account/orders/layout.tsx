import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Orders | PATHOK POINT',
    description: 'My Orders in Pathok Point',
}

const MyOrdersLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default MyOrdersLayout