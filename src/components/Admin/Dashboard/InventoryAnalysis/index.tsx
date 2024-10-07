import useSWR from 'swr';

import { useToken } from '@/hooks';
import { Error } from '@/micro-components/Admin';
import { fetchWithToken } from '@/utils/axiosConfig';

interface ProductGroup {
  tag: string;
  unique_product: number;
  in_stock: number;
  out_of_stock: number;
  quantity: number;
  cost: number;
  regular_price: number;
  sale_price: number;
}

const InventoryAnalysis = () => {
  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/dashboard/inventory`, token],
    ([url, token]) => fetchWithToken(url, token)
  );

  if (error) return <Error err={error} />;
  return (
    <>
      {isLoading ? (
        <div className="mt-4 skeleton h-96"></div>
      ) : (
        <>
          {data?.length === 0 ? (
            <p className="text-black04 py-10 text-center mt-4">
              No result found
            </p>
          ) : (
            <div className="mt-4 overflow-x-auto min-h-64">
              <table className="table w-full text-xs sm:text-sm table-pin-rows">
                <thead>
                  <tr className='bg-primary text-white'>
                    <th>Tag</th>
                    <th>Products</th>
                    <th>In Stock</th>
                    <th>Out of Stock</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th>Regular Price</th>
                    <th>Sale Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((group: ProductGroup) => (
                    <tr key={group.tag}>
                      <td>{group.tag}</td>
                      <td>{group.unique_product.toLocaleString("en-IN")}</td>
                      <td>{group.in_stock.toLocaleString("en-IN")}</td>
                      <td>{group.out_of_stock.toLocaleString("en-IN")}</td>
                      <td className="border-l">
                        {group.quantity.toLocaleString("en-IN")}
                      </td>
                      <td>{group.cost.toLocaleString("en-IN")}</td>
                      <td>{group.regular_price.toLocaleString("en-IN")}</td>
                      <td>{group.sale_price.toLocaleString("en-IN")}</td>
                    </tr>
                  ))}
                </tbody>
                {/* Sum */}
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td>
                      {data
                        .reduce(
                          (acc: number, curr: ProductGroup) =>
                            acc + curr.unique_product,
                          0
                        )
                        .toLocaleString("en-IN")}
                    </td>
                    <td>
                      {data
                        .reduce(
                          (acc: number, curr: ProductGroup) =>
                            acc + curr.in_stock,
                          0
                        )
                        .toLocaleString("en-IN")}
                    </td>
                    <td>
                      {data
                        .reduce(
                          (acc: number, curr: ProductGroup) =>
                            acc + curr.out_of_stock,
                          0
                        )
                        .toLocaleString("en-IN")}
                    </td>
                    <td>
                      {data
                        .reduce(
                          (acc: number, curr: ProductGroup) =>
                            acc + curr.quantity,
                          0
                        )
                        .toLocaleString("en-IN")}
                    </td>
                    <td>
                      {data
                        .reduce(
                          (acc: number, curr: ProductGroup) => acc + curr.cost,
                          0
                        )
                        .toLocaleString("en-IN")}
                    </td>
                    <td>
                      {data
                        .reduce(
                          (acc: number, curr: ProductGroup) =>
                            acc + curr.regular_price,
                          0
                        )
                        .toLocaleString("en-IN")}
                    </td>
                    <td>
                      {data
                        .reduce(
                          (acc: number, curr: ProductGroup) =>
                            acc + curr.sale_price,
                          0
                        )
                        .toLocaleString("en-IN")}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default InventoryAnalysis;
