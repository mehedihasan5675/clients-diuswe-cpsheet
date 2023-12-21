import { useQuery } from "@tanstack/react-query";
const useAllTableHeading = () => {
  const {
    data: alltableHeading = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["alltableHeading"],

    queryFn: async () => {
      const res = await fetch(
        `https://server-diuswe-cpsheet-sepia.vercel.app/tableheading`
      );

      return res.json();
    },
  });
  return { alltableHeading, refetch, isLoading };
};

export default useAllTableHeading;
